import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    blogImage={entry.getIn(['data', 'blogImage'])}
    subheadline={entry.getIn(['data', 'subheadline'])}
    previewImage={entry.getIn(['data', 'previewImage'])}
  />
);

export default BlogPostPreview
