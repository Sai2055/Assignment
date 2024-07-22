import AddressContent from "./AddressContent";
import Disclaimer from "./Disclaimer";
import MoveDetails from "./MoveDetails";

export default function MovesContent({ moveData }) {
    return (
        <div className="moves-content">
            <AddressContent
                from={moveData.moving_from}
                to={moveData.moving_to}
                requestId={moveData.estimate_id}
            />
            <MoveDetails
                movedata={moveData}
            />
            <Disclaimer />
        </div>

    )
}