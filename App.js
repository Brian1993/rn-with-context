import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  IndexScreen,
  ShowScreen,
  CreateScreen,
  EditScreen
} from './src/screen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: {
      screen: ShowScreen,
      navigationOptions: {
        title: 'Blog Detail'
      }
    },
    Create: CreateScreen,
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: 'Edit Blog'
      }
    }
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return <Provider><App /></Provider>
}