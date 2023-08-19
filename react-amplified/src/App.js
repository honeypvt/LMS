/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
// import { createTodo } from './graphql/mutations'
// import { listTodos } from './graphql/queries';

import { createMytablekusha } from './graphql/mutations';
import { listMytablekushas } from './graphql/queries';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// const initialState = { name: '', description: '' };
const secondState = { mobilenumber: '', email: '', gender: '', userame: '', password: '' };

const App = () => {
  // const [formState, setFormState] = useState(initialState)
  // const [todos, setTodos] = useState([])
  const [state, setState] = useState(secondState);
  const [kushatodos, setKushaTodos] = useState([]);

  useEffect(() => {
    // fetchTodos()
    fetchKushaTodos()
  }, [])

  function setInput(key, value) {
    // setFormState({ ...formState, [key]: value })
    setState({ ...state, [key]: value })
  }

  // async function fetchTodos() {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listTodos))
  //     const todos = todoData.data.listTodos.items
  //     setTodos(todos)
  //   } catch (err) { console.log('error fetching todos') }
  // }

  async function fetchKushaTodos() {
    try {
      const kushatodoData = await API.graphql(graphqlOperation(listMytablekushas))
      const kushatodos = kushatodoData.data.listMytablekushas.items
      setKushaTodos(kushatodos)
    } catch (err) { console.log('error fetching todos') }
  }

  console.log("kushatodos ",kushatodos)
  // async function addTodo() {
  //   try {
  //     if (!formState.name || !formState.description) return
  //     const todo = { ...formState }
  //     setTodos([...todos, todo])
  //     setFormState(initialState)
  //     await API.graphql(graphqlOperation(createTodo, {input: todo}))
  //   } catch (err) {
  //     console.log('error creating todo:', err)
  //   }
  // }

  async function kushaaddTodo() {
    try {
      if (!state.mobilenumber || !state.email || state.gender || state.userame || state.password) return
      const kushatodo = { ...state }
      setKushaTodos([...kushatodos, kushatodo])
      setState(secondState)
      await API.graphql(graphqlOperation(createMytablekusha, { input: kushatodo }))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }



  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      {/* <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      /> */}
      {/* <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      /> */}
      <input
        onChange={event => setInput('mobilenumber', event.target.value)}
        style={styles.input}
        value={state.mobilenumber}
        placeholder="mobilenumber"
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={state.email}
        placeholder="email"
      />
      <input
        onChange={event => setInput('gender', event.target.value)}
        style={styles.input}
        value={state.gender}
        placeholder="gender"
      />
      <input
        onChange={event => setInput('username', event.target.value)}
        style={styles.input}
        value={state.username}
        placeholder="username"
      />
      <input
        onChange={event => setInput('password', event.target.value)}
        style={styles.input}
        value={state.password}
        placeholder="password"
      />
      <button style={styles.button} onClick={kushaaddTodo}>Create Todo</button>
      {
        kushatodos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            {/* <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p> */}
            <p style={styles.todoMoileNumber}>{todo.mobilenumber}</p>
            <p style={styles.todoEmail}>{todo.email}</p>
            <p style={styles.todoGender}>{todo.gender}</p>
            <p style={styles.todoUsername}>{todo.username}</p>
            <p style={styles.todoPassword}>{todo.password}</p>

          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: { marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  // todoName: { fontSize: 20, fontWeight: 'bold' },
  // todoDescription: { marginBottom: 0 },
  todoMoileNumber: { fontSize: 20, fontWeight: 'bold' },
  todoEmail: { fontSize: 20, fontWeight: 'bold' },
  todoGender: { fontSize: 20, fontWeight: 'bold' },
  todoUsername: { fontSize: 20, fontWeight: 'bold' },
  todoPassword: { fontSize: 20, fontWeight: 'bold' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;