import { FETCH_POSTS, FETCH_FEATURES } from './types';

export const fetchPosts = async() => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      type: FETCH_POSTS,
      payload: data
    }
  } catch (err) {
    console.error('Error in fetchPosts function, actions/index.js: ', err);
  }
}

export const fetchFeatures = (features) => {
  return {
    type: FETCH_FEATURES,
    payload: features
  }
}

