import React from 'react';
import BlogListItem from './BlogListItem';

const BlogItem = ({ blogPosts }) => {

  const renderedList = blogPosts.map((blog) => {
    return <BlogListItem key={blog.id} blog={blog} />
  });
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default BlogItem;