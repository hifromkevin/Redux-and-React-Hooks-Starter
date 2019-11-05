import React from 'react';
import FontAwesome from 'react-fontawesome';

import AppFeatures from './AppFeatures.jsx';
import ShowArticles from './ShowArticles.jsx';

const App = () => {
  return (
    <div className="main">
      <h1  className="main__text">Welcome to the Redux and React Hook Starter! <FontAwesome name="star" /></h1>
      <AppFeatures />
      <ShowArticles />
    </div>
  )

};

export default App;