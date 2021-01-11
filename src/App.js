import React from 'react';

import { ToastContainer } from 'react-toastify'

import TimerGroup from './components/timer/TimerGroup'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <TimerGroup />
    </div>
  );
}

export default App;
