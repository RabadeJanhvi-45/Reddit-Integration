import React from 'react';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="filter-section">
        <select id="filter-dropdown" className="filter-dropdown" aria-label="Filter by">
          <option value="" disabled selected>Filter by</option> {/* Placeholder */}
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
          <option value="trending">Trending</option>
        </select>
      </div>

      <div className="favorites-section">
        <h3 className="section-heading">Favorites</h3>
        <ul className="favorites-list">
          <li className="favorite-item">Posts <span className="item-count">10</span></li>
          <li className="favorite-item">Comments <span className="item-count">23</span></li>
          <li className="favorite-item">Saved <span className="item-count">8</span></li>
          <li className="favorite-item">Upvoted <span className="item-count">15</span></li>
        </ul>
      </div>

      <div className="reddit-feeds-section">
        <h3 className="section-heading">Reddit Feeds</h3>
        <p className="section-description">Your personalized feed of Reddit content.</p>
      </div>

      <div className="community-section">
        <h3 className="section-heading">Community</h3>
        <p className="section-description">Explore and join new communities to participate in discussions.</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
