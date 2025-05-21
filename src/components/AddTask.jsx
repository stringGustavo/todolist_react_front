import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input'
import TextArea from './TextArea'
import RangeSlider from './RangeSlider'
import Button from './Button'

const AddTask = () => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        due: '',
        date: '',
        priority: '2',
    });

    const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value, });

    const handleSubmit = () => {
        axios.post('http://localhost:3000/task/createTask',
            {
                name: task.name,
                description: task.description,
                due: new Date(task.due),
                date: new Date(),
                priority: parseInt(task.priority)
            })
            .then(() => {
                setTask({
                    name: '',
                    description: '',
                    due: '',
                    priority: '2',
                });
            })
            .catch((err) => {
                console.error('Erro ao enviar:', err);
            });
    };

    const isFormValid = task.name && task.description && task.due && task.priority;

    return (
        <div className='border-l-1  border-gray-500 bg-gray-900 w-100'>
            <div className='flex justify-center'>
                <h2 className='font-bold text-gray-100 text-2xl font-roboto'>Crie uma Tarefa</h2>
            </div>
            <Input handleInput={handleChange} value={task.name} sub={"Nome da Tarefa"} name="name" type={"text"} />
            <TextArea handleText={handleChange} value={task.description} sub={"Descrição da Tarefa"} name="description"/>
            <Input handleInput={handleChange} value={task.due} sub={"Prazo da Tarefa"} name="due" type={"date"} />

            <RangeSlider rangePriority={handleChange} value={task.priority} name="priority" />

            <Button onClick={handleSubmit} disabled={!isFormValid}/>
        </div>
    )
}

export default AddTask