import React from "react";
import ReactQuill from "react-quill";

var App = React.createClass({
  getInitialState() {
    return {value: ''};
  },

  render() {
    return <ReactQuill value={this.state.value} />;
  },
})

React.render(<App />, document.getElementById("content"));
