import TaskArea from './TaskArea'
import AddTask from './AddTask'
import Archive from './Archive'
import ButtonProvider from '../../context/ButtonProvider'
import useViewChangerContext from '../../hook/useViewChangerContext'
import { motion, AnimatePresence } from 'framer-motion'

const MainContent = () => {
    const { viewTrigger } = useViewChangerContext();

    return (
        <div className='flex outline-1 outline-gray-500 w-300 h-150 rounded-bl-md rounded-br-md bg-gray-900'>
            <AnimatePresence mode="wait">
                {!viewTrigger ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className='flex'
                    >
                        <ButtonProvider>
                            <TaskArea />
                            <AddTask />
                        </ButtonProvider>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ButtonProvider>
                            <Archive />
                        </ButtonProvider>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MainContent
