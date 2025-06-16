import { AnimatePresence, motion } from 'framer-motion';
import { FaPen, FaTimes } from 'react-icons/fa'

const TaskDescription = ({ isArchived = false, setIsEditable, isEditable, setUpdatedTaskDescription, updatedTaskDescription, actualTaskDescription, inputRef, containerRef }) => {

    if (isArchived)
        return (
            <div className='flex items-center gap-2'>
                <p className='border-b-1 w-150 p-1 text-gray-400 hover:text-white whitespace-pre-line'>{updatedTaskDescription}</p>
            </div>
        )

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

export default TaskDescription