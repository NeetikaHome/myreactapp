import React, { Component } from 'react';
import styles from './App.css';
import WIPContainer from 'js/components/container/WIPContainer'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
       <WIPContainer/>
      </div>
    );
  }
}

export default App;
