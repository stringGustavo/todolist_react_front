import { useEffect, useState } from 'react'
import ArchivedTask from './ArchivedTask';
import TaskState from '../task_components/TaskState';
import axios from 'axios';
import useButtonContext from '../../hook/useButtonContext';

const TaskArea = () => {
    const [tasks, setTasks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const { buttonTrigger } = useButtonContext();

    useEffect(() => {
        const source = axios.CancelToken.source();

        const searchForArchivedTasks = async () => {
            axios.get('http://localhost:3000/task/loadArchivedTasks')
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
            searchForArchivedTasks();
        }, 1000)

        return () => source.cancel("Componente Desmontado");

    }, [buttonTrigger])

    if (isEmpty) return <TaskState message={"Nenhuma Tarefa Encontrada."} />

    if (isLoading) return <TaskState message={"Carregando Tarefas..."} />

    return (
        <ArchivedTask payload={tasks} />
    )
}

export default TaskArea