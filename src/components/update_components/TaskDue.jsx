import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa'

const TaskDue = ({ taskDue, isFinished }) => {

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

    if (isFinished)
        return (
            <small className='flex items-center mt-1 bg-green-600 text-gray-900 rounded-md outline-1 outline-gray-900 text-sm px-2 cursor-default w-fit'>
                <span className='italic mr-2'>Tarefa Finalizada</span>
                <FaCheck />
            </small>
        )

    return (
        <small className='cursor-default'>
            <p className={`${handleDifferenceInDays(taskDue) < 0 ? "text-red-500" : "text-green-500"} flex items-center`}>
                {handleDifferenceInDaysMessage(taskDue)} 
                <span className='text-xs text-gray-500 ml-3 opacity-0 hover:opacity-100 transition-all'>
                     {new Date(taskDue).toLocaleDateString()}
                </span>
            </p>
        </small>
    )
}

export default TaskDue