import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
    };
  }
  componentDidMount() {
    this.props.fetch_post();
  }

  render() {
    const { posts } = this.props;

    const fetchpost = posts.map((post) => {
      return (
        <div class="col">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxJ2WS2BvjlNgjyeQMRe3PZwy3XjRrP0Tq3yIX4mVnAvvTaOysXrRs_VxQ4m_P4WMQKg&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body" key={post.id} value={post.id}>
              <h5 className="card-title" value={post.title}>
                {post.title}
              </h5>
              <p className="card-text" value={post.body}>
                {post.body}
              </p>
            </div>
          </div>
        </div>
      );
    });
    console.warn("post", fetchpost);
    return (
      <div>
        <h1>All the posts</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">{fetchpost}</div>
      </div>
    );
  }
}

export default Post;
