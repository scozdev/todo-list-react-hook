import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const API = 'https://jsonplaceholder.typicode.com/todos';

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);

  const [search, setSearch] = useState('');

  const addTodo = (text) => {
    if (isEditing) {
      setTodos(
        todos.map((item) => {
          if (item.id === editID) {
            return { ...item, title: text };
          }
          return item;
        })
      );
      setTodo('');
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: text,
        st: 0,
      };

      setTodos([...todos, newItem]);
      setTodo('');
      setIsEditing(false);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const specificTodo = todos.find((todo) => todo.id === id);
    setIsEditing(true);
    setEditID(id);
    setTodo(specificTodo.title);
  };

  // Modal
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = (id) => {
    setIsOpenModal(true);
    setSelectItemId(id);
  };

  const handleCheckTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          let newst = item.st + 1;
          newst = newst > 2 ? 0 : newst;

          return { ...item, st: newst };
        }
        return item;
      })
    );
  };

  const fetchData = async (url) => {
    const res = await fetch(url);
    let data = await res.json();
    data = data.slice(0, 5).map((obj) => ({ ...obj, st: 0 }));
    setTodos(data);
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        editTodo,
        todo,
        setTodo,
        closeModal,
        openModal,
        isOpenModal,
        selectItemId,
        setSelectItemId,
        search,
        setSearch,
        handleCheckTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
