import { useEffect, useState } from "react";
import PriorityButtons from "../button_components/PriorityButtons";

const PrioritySelector = ({ addPriority, value, sub }) => {
    const [selectedPriority, setSelectedPriority] = useState(parseInt(value) || 1);

    useEffect(() => {
        addPriority({ target: {name: "priority", value: selectedPriority} });
    }, [selectedPriority]);

    return (
        <div className="w-64 mx-auto mt-10">
            <label className="block mb-2 text-gray-400 text-center">{sub}</label>

            <div className="flex justify-between text-white text-sm mt-2 px-1">
                <PriorityButtons
                    priorityName='Baixa'
                    priority={1}
                    color='text-green-600'
                    setSelectedPriority={setSelectedPriority}
                    selectedPriority={selectedPriority}
                />
                <PriorityButtons
                    priorityName='Média'
                    priority={2}
                    color='text-yellow-600'
                    setSelectedPriority={setSelectedPriority}
                    selectedPriority={selectedPriority}
                />
                <PriorityButtons
                    priorityName='Alta'
                    priority={3}
                    color='text-red-500'
                    setSelectedPriority={setSelectedPriority}
                    selectedPriority={selectedPriority}
                />
            </div>
        </div>
    )
}

export default PrioritySelector