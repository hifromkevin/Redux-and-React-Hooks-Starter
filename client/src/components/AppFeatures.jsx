import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeatures } from '../actions';

const AppFeatures = () => {
  const features = useSelector(state => state.features);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatures());
  }, []);

  if (!features) {
    return 'Waiting for features'
  }

  return (
    <div className="appFeatures">
      <p>Welcome! This is a React Hooks / Redux boilerplate with the following features:</p>
      <ul>
      {
        features.map(feature => {
          return <li key={feature}>{feature}</li>
        })
      }
      </ul>
      <hr />
    </div>
  );
};

export default AppFeatures;