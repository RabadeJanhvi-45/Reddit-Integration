import React, { useState, useEffect } from "react";
import "./PopularSection.css";
import axios from "axios";
import postimg from "../../assets/alt.jpg"; // Import your custom fallback image

const PopularSection = () => {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("hot");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ after: null, before: null });

  const limit = 4; // Number of posts to fetch
  const subreddit = "popular"; // Default subreddit

  useEffect(() => {
    fetchPosts();
  }, [sort]);

  const fetchPosts = async (direction) => {
    setLoading(true);
    setError(null);

    let url = `https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=${limit}`;
    if (direction === "next" && pagination.after) url += `&after=${pagination.after}`;
    if (direction === "prev" && pagination.before) url += `&before=${pagination.before}`;

    try {
      const response = await axios.get(url);
      const postsData = response.data.data.children.map((child) => child.data);
      setPosts(postsData);
      setPagination({
        after: response.data.data.after,
        before: response.data.data.before,
      });
    } catch (err) {
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPagination({ after: null, before: null }); // Reset pagination on sort change
  };

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h1 className="popular-title">Popular</h1>
        <div className="sort-options">
          {["hot", "new", "controversial", "rising", "top"].map((option) => (
            <button
              key={option}
              className={`sort-button ${sort === option ? "active" : ""}`}
              onClick={() => handleSortChange(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="posts-section">
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && posts.length > 0 && (
          <>
            <ul className="posts-list">
              {posts.map((post) => (
                <li key={post.id} className="post-item">
                  <div className="post-content">
                    <img
                      className="post-image"
                      src={post.thumbnail ? post.thumbnail : postimg} // Fallback to alt image if no thumbnail
                      alt={post.title}
                      onError={(e) => e.target.src = postimg} // Set fallback image if error occurs
                    />
                    <div className="post-details">
                      <a
                        href={`https://www.reddit.com${post.permalink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="text-bold">{post.title}</h3>
                        <br />
                        <p className="post-meta">
                          Posted by {post.author} - {new Date(post.created_utc * 1000).toLocaleString()}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="post-actions text-bold">
                    <div className="action-item">
                      💬 {post.num_comments} Comments
                    </div>
                    <div className="action-item">
                      🔗 Share
                    </div>
                    <div className="action-item ">
                    •••More 
                    </div>
                    </div>
                </li>
              ))}
            </ul>
            <div className="pagination-controls">
              <button
                className="pagination-button"
                disabled={!pagination.before}
                onClick={() => fetchPosts("prev")}
              >
                Previous
              </button>
              <button
                className="pagination-button"
                disabled={!pagination.after}
                onClick={() => fetchPosts("next")}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PopularSection;
