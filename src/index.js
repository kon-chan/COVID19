import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import FullWidthTabs from './components/FullWidthTabs';

import './index.scss';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <FullWidthTabs />
  </React.Fragment>,
  document.getElementById('root')
);
