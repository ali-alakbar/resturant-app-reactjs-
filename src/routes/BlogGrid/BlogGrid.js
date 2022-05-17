import React, { useEffect, useState } from "react";
import PaginationComp from "../../components/pagination/Pagination";
import Data from "../../Data/Data.json";
import PageTitle from "../../helper/PageTitle/PageTitle";
import PostCard from "../Blog/Box/PostCard/PostCard";
import "../Blog/style/style.css";
import "./style/style.css";
import "aos/dist/aos.css";
import Aos from "aos";
function BlogGrid() {
  const { posts } = Data.blog;

  // The curent page [ which page are we in right now? ]
  const [currentPage, setCurrentPage] = useState(1);
  // How many Post per page. Default as [6]
  const [postsPerPage] = useState(3);
  const indexOfLestPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLestPost - postsPerPage;

  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  return (
    <section className="section blog-section blog-grid-section">
      <PageTitle title={"Blog"} />
      <div className="blog-posts">
        <div className="right-side-container">
          {posts.slice(indexOfFirstPost, indexOfLestPost).map((item) => {
            return (
              <PostCard
                img={require(`../Blog${item.img}`)}
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
    </section>
  );
}

export default BlogGrid;
