import React from "react";
import Article from "./Article.js"

function ArticleList({posts})  {
    const articleArr = 
    posts.map((post) => (
  <Article

        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
/>

));
return <main>{articleArr}</main>;
}

export default ArticleList

