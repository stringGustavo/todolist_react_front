import React from 'react'

const UpdateTaskDue = ({ taskDue }) => {
    
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
        <small className='hover:text-white cursor-default'>
            <span className={`${handleDifferenceInDays(taskDue) < 0 ? "text-red-500" : "text-green-500"}`}>{handleDifferenceInDaysMessage(taskDue)}</span>
        </small>
    )
}

export default UpdateTaskDue