import { motion, AnimatePresence } from 'framer-motion';
import UpdatePartial from '../update_components/UpdatePartial';
import UpdateTaskPriority from '../update_components/UpdateTaskPriority';
import ArchivedTaskPriority from '../archive_components/ArchivedTaskPriority'
import TaskDue from '../update_components/TaskDue';
import DeleteButton from '../button_components/DeleteButton';
import ArchiveButton from '../button_components/ArchiveButton';
import CompletedButton from '../button_components/CompletedButton';
import TaskName from '../update_components/TaskName';
import TaskDescription from '../update_components/TaskDescription';

const Task = ({ payload, isArchived }) => {

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

                    {
                      !isArchived ?
                        <UpdateTaskPriority taskPriority={task.priority} taskId={task.id} /> : <ArchivedTaskPriority taskPriority={task.priority} />
                    }
                    <div className='text-xl ml-2 text-gray-400'>
                      {
                        !isArchived ?
                          <UpdatePartial taskType="name" taskInfo={task.name} taskId={task.id} /> : <TaskName isArchived={true} updatedTaskName={task.name}/>
                      }
                      <TaskDue taskDue={task.due} isFinished={task.isFinished} />
                    </div>
                  </div>
                  {
                    !isArchived ?
                    <UpdatePartial taskType="description" taskInfo={task.description} taskId={task.id} /> : <TaskDescription isArchived={true} updatedTaskDescription={task.description}/>
                  }
                </div>
                <div className='flex flex-col'>
                  <DeleteButton taskId={task.id} />
                  <ArchiveButton mode={!isArchived} taskId={task.id} />
                  <CompletedButton taskId={task.id} isFinished={task.isFinished} isArchived={isArchived} />
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