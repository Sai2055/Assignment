import LivingRoom from "./LivingRoom"
import { useState } from "react";
export default function InnerInventry({ data }) {
    const [livingState, setLivingState] = useState(false);
    function handleToggle() {
        setLivingState(livingState => !livingState)
    }
    console.log("InnerInventry data", data)
    return (
        <div>
            <div onClick={handleToggle} className="room-type">
                {data.roomName}
            </div>
            {livingState ? <LivingRoom categories={data.categories} /> : ""}
        </div>
    )
}