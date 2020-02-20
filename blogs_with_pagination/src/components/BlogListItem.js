import React from 'react';

const BlogListItem = ({ blog }) => {
  return (
    <article>
      <div className="ui segment" onClick={(blog) => {}}>
        <div className="ui medium dividing header">
          {blog.title}
        </div>
        <p>{blog.description}</p>
      </div>
    </article>

  );
}

export default BlogListItem;
