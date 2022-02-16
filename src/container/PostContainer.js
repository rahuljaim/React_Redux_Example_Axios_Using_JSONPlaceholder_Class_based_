import { fetch_post } from "../actions/postActions";
import { connect } from "react-redux";
import Post from "../components/Post";

const mapStateToProps = (state) => ({
    posts: state.posts.items,
  });
  const mapDispatchToProps = () => (dispatch) => {
    return {
      fetch_post: () => dispatch(fetch_post()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Post);  