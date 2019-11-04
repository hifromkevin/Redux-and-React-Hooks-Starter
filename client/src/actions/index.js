import FETCH_POSTS from './types';

export const fetchInfo = async() => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      type: FETCH_POSTS,
      payload: data
    }
  } catch (err) {
    console.error('Error in fetchInfo function, actions/index.js: ', err);
  }
}
