import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import PostContainer from "./container/PostContainer";
import PostFormContainer from "./container/PostFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div  className="container">
        
        <PostFormContainer />
        <hr />
        <PostContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
