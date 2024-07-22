import InnerInventry from "./InnerInventory";
export default function Inventory(props) {
    const { movedata } = props


    return (
        <div className="Inventory-details">
            <div className="Inventory-view" >
                {movedata.items.rooms.map((val, index) => {
                    return (
                        <InnerInventry data={val} key={index} />
                    )
                })}
            </div>

        </div>
    )
}
