import ViewDetails from "./ViewDetails";
import { useState } from "react";
export default function MoveDetails(props) {
    const { movedata } = props;
    const [status, setStatus] = useState(false);
    function handleView() {
        setStatus(status => !status)
    }

    return (
        <div className="main-move-details">
            <div className="move-details">
                <div className="size">{movedata.property_size}</div>
                <div className="Total-items">{movedata.total_items}</div>
                <div className="Distance">{movedata.distance}</div>
                <div className="time">{movedata.date_created}</div>
                <div>
                    <input type="checkbox" /> <label>is flexible</label>
                </div>
                <div className="btn-style">
                    <button className="btn-1" onClick={handleView}>View Move Details</button>
                    <button className="btn-2">Quotes Awaiting</button>
                </div>


            </div>{status ? <ViewDetails movedata={movedata} /> : ""}
        </div>
    )
}