import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../actions';

import Article from './Article.jsx';

const ComponentWithState = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  if (!posts) {
    return 'Waiting for data'
  }

  return (
    <div className="infoSection">
      <ul>
      {
        posts.map(post => {
          return <li key={post.id}><Article post={post} /></li>
        })
      }
      </ul>
    </div>
  );
};

export default ComponentWithState;