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

  showUserInfo(event) {
    const userName = event.currentTarget.attributes.name.value;
    window.location.href = '/post?author=' + userName;
  }

  render() {
    let renderList = this.state.comments.map((comment) => {
      return (
        <div className="ui segment" key={comment.id}>
          <div className="ui medium dividing header">
            {comment.body}
          </div>
          <div onClick={this.showUserInfo} name={comment.author} className="user-item">
            <div>
              <i className="ui image user icon"></i>
            </div>
            <div>
              <p>User : {comment.author}</p>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div>
        <center>
          <h4 className="ui large dividing header"> Comments on blog </h4>
        </center>
        {renderList}</div>
    );
  }
}

export default BlogCommentList;