import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const AppContext = createContext()

const API = 'https://jsonplaceholder.typicode.com/todos'

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const addTodo = (text) => {
    if (isEditing) {
      setTodos(
        todos.map((item) => {
          if (item.id === editID) {
            return { ...item, title: text }
          }
          return item
        })
      )
      setTodo('')
      setEditID(null)
      setIsEditing(false)
    } else {
      const newItem = { id: new Date().getTime().toString(), title: text }

      setTodos([...todos, newItem])
      setTodo('')
      setIsEditing(false)
    }
  }

  const removeTodo = (id) => {
    console.log(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    const specificTodo = todos.find((todo) => todo.id === id)
    setIsEditing(true)
    setEditID(id)
    setTodo(specificTodo.title)
  }

  const fetchData = async (url) => {
    const res = await fetch(url)
    let data = await res.json()
    data = data.slice(0, 5)
    setTodos(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData(API)
  }, [])

  return (
    <AppContext.Provider
      value={{ todos, addTodo, removeTodo, editTodo, todo, setTodo }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
