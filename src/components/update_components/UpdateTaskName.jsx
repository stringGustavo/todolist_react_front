import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPen, FaTimes } from 'react-icons/fa'

const UpdateTaskName = ({ taskName, taskId }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [actualTaskName, setActualTaskName] = useState(taskName);
    const [updatedTaskName, setUpdatedTaskName] = useState(taskName);

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (actualTaskName === updatedTaskName || !updatedTaskName.trim()) return;

            if (containerRef.current && containerRef.current.contains(event.target)) return;

            setIsEditable(false);

            if (!isEditable) return;

            axios.put(`http://localhost:3000/task/update/${taskId}`, {
                name: updatedTaskName,
            })
                .then(res => console.log('Nome atualizado com sucesso:', res.data.name))
                .then(setActualTaskName(updatedTaskName))
                .catch(err => console.error('Erro ao atualizar nome:', err));

        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isEditable, updatedTaskName]);

return (
    <div ref={containerRef} className='flex items-center gap-2'>
        <p onClick={() => setIsEditable(!isEditable)} className={`${isEditable ? 'hidden' : ''} border-b-1 w-150 p-1 hover:text-white cursor-pointer`}>{updatedTaskName}</p>
        <input ref={inputRef} onChange={(e) => setUpdatedTaskName(e.target.value)} className={`${!isEditable ? 'hidden' : 'bg-gray-900'} rounded-md p-1 border-1 border-gray-400 w-150`} type="text" value={updatedTaskName} />
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
                        <FaTimes onClick={() => setUpdatedTaskName(actualTaskName)} className='text-md text-red-500 cursor-pointer' />
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

export default UpdateTaskName