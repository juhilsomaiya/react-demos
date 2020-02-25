import React, { Component } from 'react';
import BlogItem from './BlogItem';

import { Pagination } from 'semantic-ui-react'

class PaginationOfBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: props.blogPosts,
      activePage: 1,
      blogsPerPage: 30
    };
  }

  render() {

    const onChange = (event, pageInfo) => {
      this.setState({
        activePage: pageInfo.activePage
      });
    };

    const { blogs, activePage, blogsPerPage } = this.state;
    const indexOfLastBlog = activePage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const pageNumbers = Math.ceil(blogs.length / blogsPerPage);

    return (
      <div>
        <center>
          <h4 className="ui large dividing header"> Blogs </h4>
        </center>
        <BlogItem blogPosts={currentBlogs} />
        <Pagination activePage={activePage} totalPages={pageNumbers} onPageChange={onChange} ellipsisItem={null} />
      </div>
    );
  }
}

export default PaginationOfBlog;