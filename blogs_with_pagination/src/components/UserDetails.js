import React from 'react';
import Axios from 'axios';

class UserDetails extends React.Component {

  state = {
    user: null,
    userPosts: []
  }

  async fetchUserPosts() {
    const user = this.props.location.search;
    const userPosts = await Axios.get('http://localhost:9900/posts' + user);
    this.setState({
      userPosts: userPosts.data,
      user: userPosts.data[0].author
    })
  }

  componentDidMount() {
    this.fetchUserPosts();
  }

  render() {

    const renderList = this.state.userPosts.map((post) => {
      return (
        <article key={post.id}>
          <div className="ui segment">
            <div className="ui medium dividing header">
              {post.title}
            </div>
            <p>{post.description}</p>
          </div>
        </article>
      )
    })
    return (
      <div>
        <center>
          <h4 className="ui large dividing header"> Posts written by {this.state.user} </h4>
        </center>
        {renderList}
      </div>
    )
  }
}

export default UserDetails;