import Inventory from "./InvenoryDetails";

export default function ViewDetails({ movedata }) {

    return (
        <div className="view-button">
            <div className="inventory-detail">
                <div className="inventory-label">Inventory Details</div>
                <button className="inventory-btn">Edit Invenory</button>
            </div>
            <Inventory movedata={movedata} />
            <div className="house-detail">
                <div className="inventory-detail">
                    <div className="inventory-label">House Details</div>
                    <button className="inventory-btn">Edit House Invenory</button>
                </div>
            </div>
        </div>
    )
}