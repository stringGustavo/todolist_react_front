import { useEffect, useState } from 'react'
import Task from './Task';
import TaskState from './TaskState';
import axios from 'axios';
import useButtonContext from '../../hook/useButtonContext';
import { API_URLS } from '../../config/urlConfig'
import useSearchContext from '../../hook/useSearchContext';
import { useDebounce } from '../../hook/useDebounce';

const TaskArea = () => {
    const [tasks, setTasks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const { buttonTrigger } = useButtonContext();
    const { searchValue, isSearchEmpty } = useSearchContext();

    const debouncedValue = useDebounce(searchValue);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const showAllTasks = async () => {

            const apiUrl = isSearchEmpty() ? API_URLS.LOAD_TASKS : API_URLS.SEARCH_TASKS(searchValue);

            console.log(apiUrl)

            axios.get(apiUrl)
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
            showAllTasks();
        }, 1000)

        return () => source.cancel("Componente Desmontado");

    }, [buttonTrigger, debouncedValue])

    if (isEmpty)
        return <TaskState message={"Nenhuma Tarefa Encontrada."} />

    if (isLoading)
        return <TaskState message={"Carregando Tarefas..."} />

    return (
        <Task payload={tasks} />
    )
}

export default TaskArea