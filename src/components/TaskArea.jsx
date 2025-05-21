import React, { useEffect, useState } from 'react'
import Task from './Task';
import TaskLoading from './TaskLoading';
import TaskEmpty from './TaskEmpty';
import axios from 'axios';
import useButtonContext from '../hook/useButtonContext';


const TaskArea = () => {
    const [tasks, setTasks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const { buttonTrigger } = useButtonContext();

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchDataFromAPI = async () => {
            axios.get('http://localhost:3000/task/loadTasks')
                .then((response) => {
                    setIsEmpty(response.data && Object.keys(response.data).length === 0)

                    setTasks(response.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    axios.isCancel(err) ? console.log("Requisição Cancelada") : undefined;
                    setIsLoading(false)
                });
        }

        setTimeout(() => {
            fetchDataFromAPI();
        }, 1000)

        return () => source.cancel("Componente Desmontado");

    }, [buttonTrigger])

    if (isEmpty) return <TaskEmpty />

    if (isLoading) return <TaskLoading />

    return (
        <Task payload={tasks}/>
    )
}

export default TaskArea