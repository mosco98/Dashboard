import React, { Component } from 'react'
import { ChevronDown, ChevronUp, Trash2 } from 'react-feather'
import { uuid } from 'uuidv4'

export default class TodosTray extends Component {
  constructor() {
    super()
    this.state = {
      showTray: false,
      showInput: false,
      todoInput: '',
      todos: []
    }

    this.wrapperRef = React.createRef()
  }

  componentDidMount() {
    this.GetTodos()
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ showTray: false })
    }
  }

  // Get Todos from Local Storage
  GetTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
      this.setState({ todos })
    } else {
      this.setState({ todos: [] })
    }
  }

  // Add Todos to state and Local storage
  SetTodos = (e) => {
    e.preventDefault()
    const { todoInput, todos } = this.state

    if (todoInput === '') return
    const newTodo = {
      id: uuid(),
      text: todoInput,
      completed: false
    }

    let array

    array = todos

    array.push(...array, newTodo)

    const newTodos = [...new Set(array)]

    this.setState({ todos: newTodos, todoInput: '' })

    // TODO: Change to chrome storage API
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  // Open and Close Todos Tray on UI
  TrayHandler = () => {
    this.setState((prevState) => ({
      showTray: !prevState.showTray
    }))
  }

  // For Todo Input
  InputHandler = (e) => {
    this.setState({ todoInput: e.target.value })
  }

  // To show the Todo input when hidden
  ShowInputHandler = () => {
    this.setState({ showInput: true })
  }

  // For checking and Unchecking a Todo Item
  MarkSelectedTodoHandler = (selectedTodoId) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === selectedTodoId) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({ todos: newTodos })

    // TODO: Change to chrome storage API
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  // For deleting a Complete Todo

  DeleteTodoHandler = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos: newTodos
    })

    if (this.state.todos.length === 1) {
      this.setState({ showInput: false })
    }

    // TODO: Change to chrome storage API
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  // To delete all Todos
  DeleteAllTodosHandler = () => {
    this.setState({ todos: [], showInput: false })
    localStorage.removeItem('todos')
  }

  render() {
    const { showInput, showTray, todos, todoInput } = this.state
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className={showTray ? 'todos-tray shadow-lg show' : 'todos-tray'} ref={this.wrapperRef}>
        <span className="todos-tray-header" onClick={this.TrayHandler}>
          <span className="todos-badge p-1">{todos.filter((todo) => todo.completed === false).length}</span>
          <h6 className="text-white m-0">Todos</h6>
          <span className="chevron-ctn">
            {showTray ? <ChevronDown color={'white'} /> : <ChevronUp color={'white'} />}
          </span>
        </span>
        {todos.length ? (
          <div>
            <ul className="w-100 todo-list p-2" id="todo-list">
              <small className="clear-todos" onClick={this.DeleteAllTodosHandler}>
                Clear todos
              </small>
              {todos.map((todo, i) => (
                <li className="todo-item animate__animated animate__fadeIn animate__faster" key={i}>
                  <input
                    className="ml-1"
                    type="checkbox"
                    onChange={() => this.MarkSelectedTodoHandler(todo.id)}
                    style={{ cursor: 'pointer' }}
                    checked={todo.completed}
                  />
                  <span
                    className={
                      todo.completed
                        ? 'ml-2 text-white mt-1 w-75 text-left text-break line-through'
                        : 'ml-2 text-white mt-1 w-75 text-left text-break'
                    }>
                    {todo.text}
                  </span>

                  {todo.completed && (
                    <span className="delete-icon mr-3" onClick={() => this.DeleteTodoHandler(todo.id)}>
                      <Trash2 color={'red'} size={'17'} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <form onSubmit={this.SetTodos}>
              <input
                className="todo-input show p-3"
                type="text"
                placeholder="New Todo"
                autoFocus={true}
                onChange={this.InputHandler}
                value={todoInput}
              />
            </form>
          </div>
        ) : (
          <div className="no-todos text-center">
            {showInput ? (
              <span className="w-75 text-break">Add new Todo, {user.name}</span>
            ) : (
              <React.Fragment>
                <span>Hi {user.name}</span>
                <span>You have no todo yet</span>
                <small className="add-new-todo p-1" onClick={this.ShowInputHandler}>
                  Add New Todo
                </small>
              </React.Fragment>
            )}
          </div>
        )}
        {showInput && (
          <form onSubmit={this.SetTodos}>
            <input
              className="todo-input show p-3"
              type="text"
              placeholder="New Todo"
              autoFocus={true}
              onChange={this.InputHandler}
              value={todoInput}
            />
          </form>
        )}
      </div>
    )
  }
}
