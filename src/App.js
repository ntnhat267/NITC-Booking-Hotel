import React from 'react';
import Layout from './components/Layout/Layout';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  return (
    <>
      <div className="App">
        <Layout/>
      </div>
      <ToastContainer
        limit={3}
        autoClose={3000}
        style={{fontSize:" 18px"}}
      
      />
    </>
  );
}

export default App;
