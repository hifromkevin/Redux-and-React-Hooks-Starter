import React from 'react';
import FontAwesome from 'react-fontawesome';

import ComponentWithState from './ComponentWithState.jsx';

const App = () => {
  return (
    <div className="main">
      <h1  className="main__text">Welcome to the Redux and React Hook Starter! <FontAwesome name="star" /></h1>
      <ComponentWithState />
    </div>
  )

};

export default App;