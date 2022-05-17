import React from "react";
import PopularTags from "../../../components/PapularTags/PopularTags";
import Post from "../Box/Post";

function PostCardSingle(props) {

  return (
    <div className="right-side">
      <Post
        img={require(`${"../media/blog-7-1000x565.jpg"}`)}
        postBy={"namdam"}
        date={"March 27, 2022"}
        title={"My Favorite Easy Black Pizza Toast Recipe"}
        details={
          "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo"
        }
      />
      <PopularTags disableImg={true} />


    </div>
  );
}

export default PostCardSingle;
