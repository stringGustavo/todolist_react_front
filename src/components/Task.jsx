import { motion, AnimatePresence } from 'framer-motion';
import DeleteButton from './DeleteButton';
import UpdateTaskName from './update_components/UpdateTaskName';
import UpdateTaskDue from './update_components/UpdateTaskDue';
import UpdateTaskPriority from './update_components/UpdateTaskPriority';
import UpdateTaskDescription from './update_components/UpdateTaskDescription';

const Task = ({ payload }) => {

  return (
    <>
      <div className=' animate-fade-in flex flex-col justify-start border-r-0 border-gray-500 bg-gray-900 w-200 h-full overflow-y-auto overflow-x-hidden scrollbar-custom'>
        <AnimatePresence>
          {Object.values(payload).map((task, index) => (
            <motion.div key={task.id} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='my-5'>
              <small className='border-1 border-b-0 border-gray-400 bg-gray-800 hover:bg-gray-950 text-orange-500 rounded-md rounded-b-none ml-date p-1'>Adicionado em: {new Date(task.date).toLocaleString()}</small>
              <div className='flex'>
                <div className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 shadow-2xl transition-all ease-in w-175 ml-5 mr-3 rounded-md rounded-tl-none p-2'>
                  <div className='flex items-center'>
                    <UpdateTaskPriority taskPriority={task.priority} taskId={task.id} />
                    <div className='text-xl ml-2 text-gray-400'>
                      <UpdateTaskName taskName={task.name} taskId={task.id} />
                      <UpdateTaskDue taskDue={task.due} />
                    </div>
                  </div>
                  <UpdateTaskDescription taskDescription={task.description} taskId={task.id} />
                </div>
                <div>
                  <DeleteButton deleteTaskId={task.id} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Task

{/* <>
<div className=' animate-fade-in flex flex-col justify-start border-r-0 border-gray-500 bg-gray-900 w-200 h-full overflow-y-auto overflow-x-hidden scrollbar-custom'>
  {Object.values(payload).map((task, index) => ( 
    
    <div key={index} className={`my-3 transition-opacity duration-300 ${animateId === task.id ? 'animate-fade-out' : ''}`}>
      <small className='border-1 border-b-0 border-gray-400 bg-gray-800 hover:bg-gray-950 text-orange-500 rounded-md rounded-b-none ml-date p-1'>Adicionado em: {new Date(task.date).toLocaleString()}</small>
      <div className='flex'>
        <div className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 shadow-2xl transition-all ease-in w-175 ml-5 mr-3 rounded-md rounded-tl-none p-2'>
          <div className='flex items-center'>
            <div className='outline-1 outline-gray-400 bg-gray-950 h-7 rounded-4xl p-1 text-white text-center'>
              <span>{priorityIcon[parseInt(task.priority)]}</span>
            </div>
            <div className='text-xl ml-2 text-gray-400'>
              <p className='hover:text-white cursor-default'>{task.name}</p>
              <small className='hover:text-white cursor-default'>
                <span className={`${handleDifferenceInDays(task.due) < 0 ? "text-red-500" : "text-green-500"}`}>{handleDifferenceInDaysMessage(task.due)}</span>
              </small>
            </div>
          </div>
          <div className='mt-2 text-white whitespace-pre-wrap'>
            {
              task.description
            }
          </div>
        </div>
        <div>
          <DeleteButton deleteTaskId={task.id} onDelete={() => handleAnimate(task.id)}/>
        </div>
      </div>
    </div>
  ))}
</div>
</> */}