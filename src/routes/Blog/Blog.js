import React, {useState} from "react";
import PageTitle from "../../helper/PageTitle/PageTitle";
import PostCard from "./Box/PostCard/PostCard";
import "./style/style.css";
import Data from "../../Data/Data.json";
import CategorieLeft from "../../components/CategoriesSide/CategorieLeft";
import PaginationComp from "../../components/pagination/Pagination";

const Blog = () => {


  // The curent page [ which page are we in right now? ]
  const [currentPage, setCurrentPage] = useState(1);
  // How many Post per page. Default as [6]
  const [postsPerPage] = useState(2);
  const indexOfLestPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLestPost - postsPerPage;

  const { posts } = Data.blog;
  return (
    <section className="section blog-section">
      <PageTitle title={"Blog"} />
      <div className="blog-posts">
        <CategorieLeft
          value={""}
          isThereDeals={true}
          isThereFilter={true}
          isThereRecent={false}
        />
        <div className="right-side-container">
          {posts.slice(indexOfFirstPost, indexOfLestPost).map((item) => {
            return (
              <PostCard
                // Putting dot before the path of the image to find it
                img={require(`.${item.img}`)}
                postBy={item.postBy}
                date={item.date}
                title={item.title}
                details={item.details}
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
};

export default Blog;
