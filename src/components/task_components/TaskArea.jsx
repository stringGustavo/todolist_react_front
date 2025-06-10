import { useEffect, useState } from 'react'
import Task from './Task';
import TaskState from './TaskState';
import axios from 'axios';
import useButtonContext from '../../hook/useButtonContext';


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

    if (isEmpty) return <TaskState message={"Nenhuma Tarefa Encontrada."}/>

    if (isLoading) return <TaskState message={"Carregando Tarefas..."} />

    return (
        <Task payload={tasks}/>
    )
}

export default TaskArea