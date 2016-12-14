import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Relay from 'react-relay';

class App extends Component {
  render() {
    const { viewer } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This came from Relay {viewer.id}</p>
        <ul>
          {viewer.posts.edges.map(({node}) => {
            return (
              <li key={node.id}>
                <h1>{node.title}</h1>
                <p>{node.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
          id,
          posts(first: 10) {
           edges {
             node {
               id
               title
               text
             }
           }
         }
      }
    `,
  },
});
