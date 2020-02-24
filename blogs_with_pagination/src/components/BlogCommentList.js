import React from 'react';
import axios from 'axios';

class BlogCommentList extends React.Component {
  state = {
    comments: []
  }

  async fetchBlogComments() {
    const urlComment = 'http://localhost:9900/posts/' + this.props.match.params.id + '/comments';
    const comment = await axios.get(urlComment);
    this.setState({
      comments: comment.data
    });
  };

  componentDidMount() {
    this.fetchBlogComments();
  }

  showUserInfo(user) {
    window.location.href = '/post?author=' + user;
  }

  render() {
    let renderList = this.state.comments.map((comment) => {
      return (
        <div className="ui segment" key={comment.id} onClick={this.showUserInfo(comment.author)}>
          <div className="ui medium dividing header">
            {comment.body}
          </div>
          <p>User : {comment.author}</p>
        </div>
      );
    })
    return (
      <div> {renderList}</div>
    );
  }
}

export default BlogCommentList;