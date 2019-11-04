import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../actions';

import InnerComponent from './InnerComponent.jsx';

const ComponentWithState = () => {
  const stateData = useSelector(state => state.stateData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  return (
    <div className="infoSection">
      <h1>Component With State</h1>
      <ul>
      {stateData.map(datas => {
        return <li><InnerComponent datas={datas} key={datas.id} /></li>
      })}
      </ul>
    </div>
  );
};

export default ComponentWithState;