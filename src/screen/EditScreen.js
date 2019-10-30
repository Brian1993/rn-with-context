import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from './BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find(blogPost => blogPost.id === id)
  const { title, content } = blogPost

  const onSubmit = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop())
  }

  return (
    <BlogPostForm 
      initialValues={{ title, content }}
      onSubmit={onSubmit}
    />
  )
}

const styles = StyleSheet.create({

})

export default EditScreen