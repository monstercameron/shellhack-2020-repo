import React from "react";
import { injectContext } from './context/store';
import Router from './router'

function App() {
  return <Router />;
}

export default injectContext(App);
