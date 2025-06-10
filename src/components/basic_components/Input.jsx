import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import useButtonContext from '../../hook/useButtonContext';

const Input = ({ sub, name, type, handleInput, value }) => {
    const [isDateValid, setIsDateValid] = useState(false)
    const [shouldRender, setShouldRender] = useState(false);

    const { buttonTrigger } = useButtonContext();

    useEffect(() => {
        (isDateValid) ? setShouldRender(true) : setTimeout(() => setShouldRender(false), 500);
    }, [isDateValid]);
    
    useEffect(() => {
        setShouldRender(false);
    }, [buttonTrigger]);


    const handleMinimumDate = (inputDate) => {
        const today = new Date();
        const formattedDate = new Date(inputDate)

        formattedDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        setIsDateValid(today > formattedDate);
    }

    return (
        <div className='flex flex-col justify-center items-center mt-2'>
            <label className='text-gray-400'>{sub}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={(e) => {
                    handleInput(e);
                    type === "date" ? handleMinimumDate(e.target.value) : undefined;
                }}
                className='bg-gray-800 rounded-md w-70 h-10 p-1 text-gray-400 border-1 border-gray-500'
            />
            <div className='w-70 text-end'>
                {
                    (type === "date") && shouldRender ?
                        <div className={`flex items-center text-orange-600 ${isDateValid ? 'animate-fade-in' : 'animate-fade-out'}`}>
                            <FaExclamationCircle /> &nbsp;
                            <small>A data será marcada como atrasada.</small>
                        </div>
                        :
                        <div>
                            <small></small>
                        </div>
                }
            </div>
        </div>
    )
}

export default Input