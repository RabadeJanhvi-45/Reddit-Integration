# Popular Posts Viewer (Reddit Integration)

This is a React-based application that fetches and displays popular posts from Reddit. It includes features such as sorting, pagination, displaying user avatars, and showing a fallback image when posts don't have thumbnails.

## Features:
- **Sort Posts**: View posts by different categories like "Hot", "New", "Rising", "Top", etc.
- **Pagination**: Navigate between pages of posts.
- **Post Details**: Displays post title, the number of comments, and share options.
- **User Avatars**: Shows user profile pictures (as small circular images) before usernames.
- **Fallback Images**: For posts that don't have thumbnails, an alternative image is displayed using the first word of the post title.
- **Reddit Links**: Provides clickable links to the original Reddit posts.

## Technologies Used:
- **React**: Frontend framework to build the user interface.
- **Axios**: HTTP client for fetching data from Reddit’s API.
- **CSS**: For styling and making the UI responsive.

## Screenshots:
<img width="959" alt="reditimage" src="https://github.com/user-attachments/assets/562d6671-fec3-4d5e-bf5d-657f9e7347ad" />


## How It Works:
1. Fetches posts from the "popular" subreddit on Reddit using Reddit's JSON API.
2. Sorts posts by categories such as Hot, New, Rising, or Top.
3. Displays each post with the following details:
   - Title
   - Author's avatar
   - Number of comments
   - Number of shares
4. Allows navigation between different pages of posts with pagination.

