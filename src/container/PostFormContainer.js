import { connect } from "react-redux";
import { create_post } from "../actions/postActions";
import PostForm from "../components/PostForm";
const mapDispatchToProps = (dispatch) => {
  return {
    create_post: (post) => dispatch(create_post(post)),
  };
};
export default connect(null, mapDispatchToProps)(PostForm);
