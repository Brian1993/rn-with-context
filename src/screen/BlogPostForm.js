import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'

const Input = ({ value, onChangeText }) => {
  return <TextInput 
    value={value} 
    onChangeText={(text) => onChangeText(text)}
    style={styles.input}
  />
}

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <Input value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <Input value={content} onChangeText={setContent} />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
})

export default BlogPostForm