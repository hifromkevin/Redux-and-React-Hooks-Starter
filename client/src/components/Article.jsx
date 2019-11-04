import React from 'react';

const Article = ({post}) => (
  <div className="article">
    <h1 className="article__title">{post.title}</h1>
    <p className="article__body">{post.body}</p>
    <hr />
  </div>
);

export default Article;