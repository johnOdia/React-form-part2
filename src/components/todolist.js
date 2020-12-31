import React from 'react'
import { Todo } from './todo'
import { NewTodoForm } from './NewTodoForm'


class Todolist extends React.Component {
    constructor(props){
        super(props)
        this.state = {todos: [{ title: 'prepare a dish', description: 'buy ingredients and cook a meal' }, { title: 'clean the house', description: 'buy detergent and clean the house' }, { title: 'watch a movie', description: 'stream a movie online and watch' }]}

        this.addTodo = this.addTodo.bind(this)
    }
    markOrRemove(e) {
        const el = e.target.parentNode.children[1]
        e.target.innerText === 'mark' ? el.style.textDecoration = 'line-through' : el.parentNode.remove()
    }

    addTodo(e){
        e.preventDefault()
        const el = e.target.parentNode
        const todo = {title:el.children[0].value,description:el.children[1].value}

        const storedTodos = this.state.todos
        storedTodos.push(todo)
        this.setState({todo:storedTodos})

    }

    render() {        
    let id = 0   
    
    const allTodos = this.state.todos.map(todo => {
        return (
            <Todo key={id++} title={todo.title} description={todo.description} onClick={this.markOrRemove} />
        )
    })
        return (
            <div>
                <ol>{allTodos}</ol>
                <h3>Enter a new Todo:</h3>
                <NewTodoForm onClick={this.addTodo} />
            </div>
        )
    }
}

export default Todolist