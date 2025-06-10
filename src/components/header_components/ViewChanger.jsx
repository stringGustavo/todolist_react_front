import useViewChangerContext from '../../hook/useViewChangerContext';

const ViewChanger = () => {
    const { setViewTrigger } = useViewChangerContext();
    
    return (
        <>
            <button onClick={() => setViewTrigger(prev => !prev)} className='text-gray-400 border-1 border-gray-500 rounded mx-10 p-1 bg-gray-900 hover:bg-gray-700 transition-all cursor-pointer'>Tarefas Arquivadas</button>
        </>
    )
}

export default ViewChanger
