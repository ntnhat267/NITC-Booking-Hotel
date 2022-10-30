import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from './components/Layout/Layout';
import Services from './components/Services/Services'
import ExclusiveOffer from 'components/ExclusiveOffer/ExclusiveOffer';

function App() {
  return (
    <div className="App">
      <Layout/>
      <ExclusiveOffer/>
    </div>
  );
}

export default App;
