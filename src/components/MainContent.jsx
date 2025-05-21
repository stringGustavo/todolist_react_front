import React from 'react'
import TaskArea from './TaskArea'
import AddTask from './AddTask'
import ButtonProvider from '../context/ButtonProvider'

const MainContent = () => {
    return (
        <div className='flex outline-1 outline-gray-500 w-300 h-150 rounded-b-md bg-gray-900'>
            <ButtonProvider>
                <TaskArea />
                <AddTask />
            </ButtonProvider>
        </div>
    )
}

export default MainContent