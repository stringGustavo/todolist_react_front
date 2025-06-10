import { FaSmile, FaMeh, FaFlushed } from "react-icons/fa"

const priorityIcon = {
    1: <FaSmile className='text-green-600 text-xl' />,
    2: <FaMeh className='text-yellow-600 text-xl' />,
    3: <FaFlushed className='text-red-500 text-xl' />,
}

const PriorityButtons = ({ selectedPriority, setSelectedPriority, priorityName, priority, color }) => {
    return (
        <>
            <button
                onClick={() => {
                    setSelectedPriority(priority)
                }}
                className={`${selectedPriority === priority ? 'bg-gray-800 outline-white' : ''} outline-1 outline-gray-500 rounded w-40 py-3 m-3 flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-800 transition-all`}
            >
                <span>{priorityIcon[priority]}</span>
                <p className={`${color}`}>{priorityName}</p>
            </button>
        </>
    )
}

export default PriorityButtons