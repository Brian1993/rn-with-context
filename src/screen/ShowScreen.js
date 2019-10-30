import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity 
        style={{ marginRight: 10 }} 
        onPress={() => navigation.navigate(
          'Edit',
          { id: navigation.getParam('id') })
        }
      >
        <FontAwesome name='pencil' size={25} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

})

export default ShowScreen