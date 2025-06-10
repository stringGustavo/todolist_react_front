import { motion, AnimatePresence } from 'framer-motion';
import { FaPen, FaTimes } from 'react-icons/fa'

const TaskDue = ({ setIsEditable, isEditable, setUpdatedTaskDue, updatedTaskDue, inputRef, containerRef }) => {

    const handleDifferenceInDays = (taskDueDate) => {
        const todayDate = new Date();
        const dueDate = new Date(taskDueDate);

        const differenceInTime = dueDate - todayDate;
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        return differenceInDays;
    };

    const handleDifferenceInDaysMessage = (taskDueDate) => {
        const differenceInDays = handleDifferenceInDays(taskDueDate);

        if (differenceInDays < 0)
            return differenceInDays * (-1) + ((differenceInDays * (-1) == 1) ? ` Dia Atrasado` : ` Dias Atrasados`);

        return differenceInDays + ((differenceInDays == 1) ? ` Dia Restante` : ` Dias Restantes`);
    }

    return (
        <div ref={containerRef} className='flex items-center gap-2'>
            <small onClick={() => setIsEditable(!isEditable)} className={`${isEditable ? 'hidden' : ''} hover:text-white cursor-default`}>
                <span className={`${handleDifferenceInDays(updatedTaskDue) < 0 ? "text-red-500" : "text-green-500"}`}>{handleDifferenceInDaysMessage(updatedTaskDue)}</span>
            </small>
            <input
                ref={inputRef}
                onChange={(e) => setUpdatedTaskDue(new Date(e.target.value).toISOString())}
                className={`${!isEditable ? 'hidden' : 'bg-gray-900 mt-1'} text-white text-xs rounded-md p-1 border-1 border-gray-400`}
                type="date"
                value={new Date(updatedTaskDue).toISOString().slice(0,10)}
            />
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
                            <FaTimes onClick={() => setUpdatedTaskDue(actualTaskDescription)} className='text-md text-red-500 cursor-pointer' />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="pen"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPen className='text-xs text-gray-400' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    )
}

export default TaskDue