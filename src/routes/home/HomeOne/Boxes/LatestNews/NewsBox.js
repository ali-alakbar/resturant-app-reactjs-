import React, { useState, useEffect } from "react";
import PostCard from '../../../../Blog/Box/PostCard/PostCard';
import Data from "../../../../../Data/Data.json";
import PaginationComp from "../../../../../components/pagination/Pagination";
import "./style/style.css";
import "aos/dist/aos.css";
import Aos from "aos";

const NewsBox = () => {
      // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

    const { posts } = Data.blog;

    // The curent page [ which page are we in right now? ]
    const [currentPage, setCurrentPage] = useState(1);
    // How many Post per page. Default as [6]
    const [postsPerPage] = useState(3);
    const indexOfLestPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLestPost - postsPerPage;

  return (
    <div className="news-section">
      <h1>Latest News</h1>
      <div className="blog-section blog-grid-section">
        <div className="blog-posts">
          <div className="right-side-container">
            {posts.slice(indexOfFirstPost, indexOfLestPost).map((item) => {
              return (
                <PostCard
                  img={require(`.${item.img}`)}
                  postBy={item.postBy}
                  date={item.date}
                  title={item.title}
                  details={item.details.slice(0, 150)}
                  isThreeHide={item.isThreeHide} // If true, duration will be 300
                />
              );
            })}
            <PaginationComp
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBox