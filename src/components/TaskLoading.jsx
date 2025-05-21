import React from 'react'

const TaskLoading = () => {
    return (
        <div className="flex justify-center items-center border-r-0 border-gray-500 bg-gray-900 w-200 py-4">
            <p className="text-gray-200 text-lg font-semibold animate-fade-in">
                Carregando Tarefas
                <span className="animate-pulse">...</span>
            </p>
        </div>
    )
}

export default TaskLoading