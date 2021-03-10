import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Calc from './calc';

const App = () => {
  return (
    <Fragment>
      <Calc />
    </Fragment>
  );
};
ReactDom.render(<App />, document.getElementById('app'));
