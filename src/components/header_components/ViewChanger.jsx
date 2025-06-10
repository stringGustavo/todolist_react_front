import useViewChangerContext from '../../hook/useViewChangerContext';

const ViewChanger = () => {
    const { triggerViewChange } = useViewChangerContext();
    
    return (
        <>
            <button onClick={() => triggerViewChange()} className='text-gray-400 border-1 border-gray-500 rounded mx-10 p-1 bg-gray-900 hover:bg-gray-700 transition-all cursor-pointer'>Tarefas Arquivadas</button>
        </>
    )
}

export default ViewChanger
