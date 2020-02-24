import React from 'react';
import axios from 'axios';
import PaginationOfBlog from './Pagination';
import {
  Switch, Route, BrowserRouter,
} from "react-router-dom";
import BlogCommentList from './BlogCommentList';
import UserDetails from './UserDetails';

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
        <BrowserRouter>
          <Switch>
            <Route path="/blogs" component={() => <PaginationOfBlog blogPosts={this.state.blogPosts} />} exact />
            <Route path="/comments/blog/:id" component={BlogCommentList} exact />
            <Route path="post?author=" component={UserDetails} />
          </Switch>
        </BrowserRouter>

        {/* <PaginationOfBlog blogPosts={this.state.blogPosts} /> */}
      </div>
    );
  }
}

export default App;
