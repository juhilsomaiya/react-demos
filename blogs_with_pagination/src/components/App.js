import React from 'react';
import axios from 'axios';
import PaginationOfBlog from './Pagination';


class App extends React.Component {

  state = {
    blogPosts: [],
    currentPage: 1,
    blogsPerPage: 20
  }

  async fetchBlogPosts() {
    const blogs = await axios.get('http://localhost:9900/posts');
    this.setState({
      blogPosts: blogs.data
    });
  };

  componentDidMount() {
    this.fetchBlogPosts();
  }

  render() {
    return (
      this.state.blogPosts.length > 0 &&
      <div>
        <center> <h3 className="ui large dividing header"> Blogs </h3> </center>
        <PaginationOfBlog blogPosts={this.state.blogPosts} />
      </div>
    );
  }
}

export default App;
