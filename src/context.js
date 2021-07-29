import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const API = 'https://jsonplaceholder.typicode.com/todos';

const getLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  return todos;
};

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(getLocalStorage() || []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);

  const [search, setSearch] = useState('');

  const [error, setError] = useState({ sh: false, msg: '' });

  const showAlert = (msg) => {
    setError({ sh: true, msg });
  };
  const removeAlert = () => {
    setError({ sh: false });
  };

  const addTodo = (text) => {
    if (todos.find((todo) => todo.title.trim() === text.trim())) {
      return showAlert('duplicate todo');
    }
    if (text.trim().length === 0) {
      return showAlert('cannot be empty');
    }
    const newItem = {
      id: new Date().getTime().toString(),
      title: text,
      st: 0,
    };
    setTodos([...todos, newItem]);
    setTodo('');
  };

  const editTodo = (id, text) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, title: text };
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
    if (!getLocalStorage()) fetchData(API);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
        showAlert,
        removeAlert,
        error,
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
