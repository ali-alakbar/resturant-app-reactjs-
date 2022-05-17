import React from "react";
import "../Blog/style/style.css";
import "./style/style.css";
import PageTitle from "../../helper/PageTitle/PageTitle";
import PostCardSingle from "./PostCardSingle/PostCardSingle";
import CategorieLeft from "../../components/CategoriesSide/CategorieLeft";

function BlogSingle() {

  return (
    <section className="section blog-section blog-single-section">
      <PageTitle title={"Blog"} />
      <div className="blog-posts">
        <CategorieLeft
          value=""
          isThereDeals={true}
          isThereFilter={true}
          isThereRecent={false}
        />
        <div className="right-side-container">
          <PostCardSingle />
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;
