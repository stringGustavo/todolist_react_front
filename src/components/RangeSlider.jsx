import React from 'react'
import { FaSmile, FaMeh, FaFlushed } from "react-icons/fa";


const RangeSlider = ({ name, rangePriority, value }) => {

    return (
        <div className="w-64 mx-auto mt-10">
            <label className="block mb-2 text-gray-400 text-center">Nível de Prioridade</label>

            <div className='flex justify-center items-center'>
                <input value={value} onChange={(e) => rangePriority(e)} name={name} type="range" min="1" max="3" step="1" className="w-58 accent-blue-900" />
            </div>

            <div className="flex justify-between text-white text-sm mt-2 px-1">
                <span className="flex flex-col items-center gap-1 text-green-600">
                    <FaSmile className="text-xl" />
                    Baixa
                </span>

                <span className="flex flex-col items-center gap-1 text-yellow-600">
                    <FaMeh className="text-xl" />
                    Média
                </span>

                <span className="flex flex-col items-center gap-1 text-red-500">
                    <FaFlushed className="text-xl" />
                    Alta&nbsp;
                </span>
            </div>
        </div>
    )
}

export default RangeSlider