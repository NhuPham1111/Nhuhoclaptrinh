import React from "react";
function Home({ children }) {
  return (
    <div className="site-section" id="home">
      <div className="introduction">
        <img
          id="banner"
          src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/27/main/hxz0RhMzDeHogUZK0JNA82JabI3IstKUUbYB3dD8.png"
        />
        <h1>My Chinese Vocab Notes</h1>
        <p>Web học từ vựng tiếng Trung và Ghi chú - Ứng dụng React</p>
      </div>
      <div className="dash-board">{children}</div>
    </div>
  );
}
export default Home;
