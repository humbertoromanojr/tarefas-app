import React from 'react'

import Header from '../template/header'
import Form from './form'
import TodoList from './todoList'


export default props => (
    <div>
        <Header name='Tarefas' small='Cadastro'></Header>
        <Form />
        <TodoList />
    </div>
)
