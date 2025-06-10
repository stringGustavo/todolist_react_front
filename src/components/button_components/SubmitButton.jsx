import useButtonContext from "../../hook/useButtonContext"

const SubmitButton = ({ onClick, disabled }) => {
    const { triggerClick } = useButtonContext();

    return (
        <div className='flex justify-center items-center mt-7'>
            <button
                onClick={() => {
                    triggerClick();
                    onClick()
                }}
                disabled={disabled}
                className='cursor-pointer rounded-md outline-1 outline-gray-400 p-2 bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-black hover:outline-black transition-all'>Adicionar Tarefa</button>
        </div>
    )
}

export default SubmitButton