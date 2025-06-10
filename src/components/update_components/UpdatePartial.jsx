import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import TaskName from './TaskName';
import TaskDescription from './TaskDescription';

const UpdatePartial = ({ taskType, taskInfo, taskId }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [actualTaskInfo, setActualTaskInfo] = useState(taskInfo);
    const [updatedTaskInfo, setUpdatedTaskInfo] = useState(taskInfo);

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!updatedTaskInfo.trim()) return;

            if (containerRef.current && containerRef.current.contains(event.target)) return;

            setIsEditable(false);

            if (actualTaskInfo !== updatedTaskInfo) {

                axios.put(`http://localhost:3000/task/update/${taskId}`, {
                    [taskType]: updatedTaskInfo,
                })
                    .then(res => console.log(`${taskType} updated:`))
                    .then(() => setActualTaskInfo(updatedTaskInfo))
                    .catch(err => console.error('Erro ao atualizar nome:', err));
            }

        };

        if (isEditable)
            document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isEditable, updatedTaskInfo, actualTaskInfo, taskId, taskType]);

    useEffect(() => {
        if (isEditable) {
            inputRef.current?.focus();
        }
    }, [isEditable]);

    if (taskType === "name")
        return (
            <TaskName
                setIsEditable={setIsEditable}
                isEditable={isEditable}
                setUpdatedTaskName={setUpdatedTaskInfo}
                updatedTaskName={updatedTaskInfo}
                actualTaskName={actualTaskInfo}
                inputRef={inputRef}
                containerRef={containerRef}
            />
        )

    return (
        <TaskDescription
            setIsEditable={setIsEditable}
            isEditable={isEditable}
            setUpdatedTaskDescription={setUpdatedTaskInfo}
            updatedTaskDescription={updatedTaskInfo}
            actualTaskDescription={actualTaskInfo}
            inputRef={inputRef}
            containerRef={containerRef}
        />
    )
}

export default UpdatePartial