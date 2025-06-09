import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPen, FaTimes } from 'react-icons/fa'

const UpdateTaskDescription = ({ taskDescription, taskId }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [actualTaskDescription, setActualTaskDescription] = useState(taskDescription);
    const [updatedTaskDescription, setUpdatedTaskDescription] = useState(taskDescription);

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!updatedTaskDescription.trim()) return;

            if (containerRef.current && containerRef.current.contains(event.target)) return;

            setIsEditable(false);

            if (actualTaskDescription !== updatedTaskDescription) {

                axios.put(`http://localhost:3000/task/update/${taskId}`, {
                    description: updatedTaskDescription,
                })
                    .then(res => console.log('Nome atualizado com sucesso:', res.data.description))
                    .then(setActualTaskDescription(updatedTaskDescription))
                    .catch(err => console.error('Erro ao atualizar nome:', err));
            }

        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isEditable, updatedTaskDescription]);

    useEffect(() => {
        if (isEditable) {
            inputRef.current?.focus();
        }
    }, [isEditable]);

    return (
        <div ref={containerRef} className='flex items-center gap-2'>
            <p onClick={() => setIsEditable(!isEditable)}
                className={`${isEditable ? 'hidden' : ''} border-b-1 w-150 p-1 text-gray-400 hover:text-white cursor-pointer whitespace-pre-line`}>{updatedTaskDescription}</p>
            <textarea ref={inputRef} onChange={(e) => setUpdatedTaskDescription(e.target.value)}
                className={`${!isEditable ? 'hidden' : 'bg-gray-900'} h-20 min-h-20 max-h-40 text-white rounded-md p-1 border-1 border-gray-400 w-150`} type="text" value={updatedTaskDescription} />
            <button onClick={() => setIsEditable(!isEditable)} type='button'>
                <AnimatePresence mode="wait">
                    {isEditable ? (
                        <motion.div
                            key="times"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaTimes onClick={() => setUpdatedTaskDescription(actualTaskDescription)} className='text-md text-red-500 cursor-pointer' />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="pen"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPen className='text-sm text-gray-400' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    )
}

export default UpdateTaskDescription