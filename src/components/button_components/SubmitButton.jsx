import useButtonContext from "../../hook/useButtonContext"
import useViewChangerContext from "../../hook/useViewChangerContext";

const SubmitButton = ({ onClick, disabled }) => {
    const { triggerClick } = useButtonContext();
    const { setViewTrigger } = useViewChangerContext();

    return (
        <div className='flex justify-center items-center mt-7'>
            <button
                onClick={() => {
                    triggerClick();
                    setViewTrigger(false);
                    onClick()
                }}
                disabled={disabled}
                className='cursor-pointer rounded-md outline-1 outline-gray-400 p-2 bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-black hover:outline-black transition-all'>Adicionar Tarefa</button>
        </div>
    )
}

export default SubmitButton