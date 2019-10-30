import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from './BlogPostForm'


const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'))
  }

  return (
    <BlogPostForm 
      onSubmit={onSubmit}
   />
  )
}

const styles = StyleSheet.create({
 
})

export default CreateScreen 