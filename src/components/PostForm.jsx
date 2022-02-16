import React, { Component } from "react";


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.create_post(post);
    this.setState({
        title:"", body:""
    })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Submit details</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="body"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your description"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default PostForm;
