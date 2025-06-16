import { AnimatePresence, motion } from 'framer-motion';
import { FaPen, FaTimes } from 'react-icons/fa'

const TaskName = ({ isArchived = false, setIsEditable, isEditable, setUpdatedTaskName, updatedTaskName, actualTaskName, inputRef, containerRef }) => {

    if (isArchived)
        return (
            <div className='flex items-center gap-2'>
                <p className='border-b-1 w-150 p-1 text-gray-400 hover:text-white'>{updatedTaskName}</p>
            </div>
        )

    return (
        <div ref={containerRef} className='flex items-center gap-2'>
            <p
                onClick={() => {
                    setIsEditable(!isEditable);
                }}
                className={`${isEditable ? 'hidden' : ''} border-b-1 w-150 p-1 text-gray-400 hover:text-white cursor-pointer`}>{updatedTaskName}</p>
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

export default TaskName