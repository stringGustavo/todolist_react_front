import useViewChangerContext from '../../hook/useViewChangerContext';

const ViewChanger = () => {
<<<<<<< HEAD
    const { setViewTrigger } = useViewChangerContext();
    
    return (
        <>
            <button onClick={() => setViewTrigger(prev => !prev)} className='text-gray-400 border-1 border-gray-500 rounded mx-10 p-1 bg-gray-900 hover:bg-gray-700 transition-all cursor-pointer'>Tarefas Arquivadas</button>
=======
    const { triggerViewChange } = useViewChangerContext();
    
    return (
        <>
            <button onClick={() => triggerViewChange()} className='text-gray-400 border-1 border-gray-500 rounded mx-10 p-1 bg-gray-900 hover:bg-gray-700 transition-all cursor-pointer'>Tarefas Arquivadas</button>
>>>>>>> 31054727b0979d43ca540301ca91e6afbf84ad84
        </>
    )
}

export default ViewChanger
