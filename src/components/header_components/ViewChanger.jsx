import useViewChangerContext from '../../hook/useViewChangerContext';

const ViewChanger = () => {
    const { viewTrigger, setViewTrigger } = useViewChangerContext();

    return (
        <>
            <button
                onClick={() => setViewTrigger(false)}
                className={`${!viewTrigger ? 'bg-gray-800' : 'bg-gray-900 cursor-pointer hover:bg-gray-700 transition-all'} border-1 border-gray-500 text-gray-400 rounded ml-10 p-1`}>
                Tarefas Ativas
            </button>
            <button
                onClick={() => setViewTrigger(true)}
                className={`${viewTrigger ? 'bg-gray-800' : 'bg-gray-900 cursor-pointer hover:bg-gray-700 transition-all'} border-1 border-gray-500 text-gray-400 rounded ml-10 p-1`}>
                Tarefas Arquivadas
            </button>
        </>
    )
}

export default ViewChanger
