import { useEffect, useState } from 'react'
import axios from 'axios';
import Task from '../task_components/Task';
import TaskState from '../task_components/TaskState';
import useButtonContext from '../../hook/useButtonContext';
import useSearchContext from '../../hook/useSearchContext';
import { API_URLS } from '../../config/urlConfig'
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

        const searchForArchivedTasks = async () => {

            const apiUrl = isSearchEmpty() ? API_URLS.LOAD_ARCHIVED_TASKS : API_URLS.SEARCH_ARCHIVED_TASKS(searchValue);

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
            searchForArchivedTasks();
        }, 1000)

        return () => source.cancel("Componente Desmontado");

    }, [buttonTrigger, debouncedValue])

    if (isEmpty) return <TaskState message={"Nenhuma Tarefa Arquivada."} />

    if (isLoading) return <TaskState message={"Carregando Tarefas Arquivadas..."} />

    return (
        <Task payload={tasks} isArchived={true} />
    )
}

export default TaskArea