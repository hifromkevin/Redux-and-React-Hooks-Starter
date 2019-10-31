import React from 'react';

import CompoentWithState from './CompoentWithState.jsx';

const App = () => {
  return (
    <div className="main">
      <h1  className="main__text">Welcome to the Redux and React Hook Starter! <FontAwesome name="star" /></h1>
      <CompoentWithState />
    </>
  )

};

export default App;