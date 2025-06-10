import { motion, AnimatePresence } from 'framer-motion';
import ArchivedTaskPriority from './ArchivedTaskPriority';
import TaskDue from '../update_components/TaskDue';
import ArchiveButton from '../button_components/ArchiveButton';
import ArchivedTaskName from './ArchivedTaskName';
import ArchivedTaskDescription from './ArchivedTaskDescription';

const Task = ({ payload }) => {

  return (
    <>
      <div className='flex flex-col justify-start border-r-0 border-gray-500 bg-gray-900 w-200 h-full overflow-y-auto overflow-x-hidden scrollbar-custom'>
        <AnimatePresence>
          {Object.values(payload).map((task, index) => (
            <motion.div key={task.id} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='my-5'>
              <small className='border-1 border-b-0 border-gray-400 bg-gray-800 hover:bg-gray-950 text-orange-500 rounded-md rounded-b-none ml-date p-1'>Adicionado em: {new Date(task.date).toLocaleString()}</small>
              <div className='flex'>
                <div className='outline-1 outline-gray-400 bg-gray-800 hover:bg-gray-950 shadow-2xl transition-all ease-in w-175 ml-5 mr-3 rounded-md rounded-tl-none p-2'>
                  <div className='flex items-center'>
                    <ArchivedTaskPriority taskPriority={task.priority} />
                    <div className='text-xl ml-2 text-gray-400'>
                      <ArchivedTaskName taskName={task.name} />
                      <TaskDue taskDue={task.due} isFinished={task.isFinished} />
                    </div>
                  </div>
                  <ArchivedTaskDescription taskDescription={task.description} />
                </div>
                <div className='flex flex-col'>
                  <ArchiveButton mode={false} taskId={task.id}/>
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