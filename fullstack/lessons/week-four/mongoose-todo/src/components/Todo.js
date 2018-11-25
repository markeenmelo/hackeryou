import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => {
    const {
        description,
        index,
        removeTodo,
        completeTodo,
        completed
    } = props
    return (
        <li key={description}>
            {completed ? <del>{description}</del> : <>{description}</>}
            <button onClick={() => removeTodo(index)}>Remove Todo</button>
            <button onClick={() => completeTodo(index)}>Complete Todo</button>
        </li>
    )
}

Todo.propTypes = {
    description: PropTypes.string.isRequired
}

export default Todo
