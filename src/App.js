import React, { Component } from 'react';
import Countdown from './Countdown.js';
import Pricing from './Pricing'
class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
        <Countdown date={`2019-05-01T00:00:00`} />
        <Pricing/>
      </div>
    );
  }
}

export default App;