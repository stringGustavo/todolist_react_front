import TaskArea from './TaskArea'
import AddTask from './AddTask'
import Archive from '../archive_components/Archive'
import ButtonProvider from '../../context/ButtonProvider'
import useViewChangerContext from '../../hook/useViewChangerContext'
import { motion, AnimatePresence } from 'framer-motion'

const MainContent = () => {
    const { viewTrigger } = useViewChangerContext();

    return (
        <ButtonProvider>
            <div className='flex outline-1 outline-gray-500 w-300 h-150 rounded-bl-md rounded-br-md bg-gray-900'>
                <AnimatePresence mode="wait">
                    {!viewTrigger ? (
                        <motion.div
                            key="tasks"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className='flex'
                        >
                            <TaskArea />
                        </motion.div>
                    ) : (
                        <motion.div
                            tasks="archive"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Archive />
                        </motion.div>
                    )}

                </AnimatePresence>
                <AddTask />
            </div>
        </ButtonProvider>
    );
}

export default MainContent
