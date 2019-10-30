import createDataContext from './createDataContext'


const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_BLOG_POST':
      const { title, content } = payload
      return [
        ...state, 
        { 
          id: Math.floor(Math.random() * 9999), 
          title,
          content 
        },
      ]
    case 'DELETE_BLOG_POST':
      return state.filter(item => item.id !== payload)
    case 'EDIT_BLOG_POST':
      return state.map(blogPost => blogPost.id === payload.id ? payload : blogPost)
    default:
      return state
  }
}

const addBlogPost = dispatch => (title, content, callBack) => {
  dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } })

  if (callback) callBack()
}

const deleteBlogPost = dispatch => (id) => dispatch({ type: 'DELETE_BLOG_POST', payload: id })

const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ 
    type: 'EDIT_BLOG_POST',
    payload: { id, title, content }
  })

  if (callback) callback()
}

const mockData = {
  title: 'Test Post',
  content: 'Test Content',
  id: 1
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [mockData]
)
