import React, { useState } from 'react'
import TaskArea from './TaskArea'
import AddTask from './AddTask'
import Archive from './Archive'
import ButtonProvider from '../context/ButtonProvider'

const MainContent = () => {
    const [changeTrigger, setChangeTrigger] = useState(true);

    return (
        <div className='flex outline-1 outline-gray-500 w-300 h-150 rounded-b-md bg-gray-900'>
            <ButtonProvider>
                {
                    changeTrigger ?
                        <>
                            <TaskArea />
                            <AddTask />
                        </>
                        :
                        <>
                            <Archive />
                        </>
                }
            </ButtonProvider>
        </div>
    )
}

export default MainContent