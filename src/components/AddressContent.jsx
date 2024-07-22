export default function AddressContent(props) {
    const { from, to, requestId } = props
    return (
        <div className="address">
            <div className="from">
                <div className="from-styl">From</div>
                <span>{from}</span>
            </div>
            <div className="icon">
                <span>--</span>
            </div>
            <div className="to">
                <div className="from-styl">To</div>
                <span>{to}</span>
            </div>

            <div className="request-id">
                <div className="request-styl">Request#</div>
                <div className="requestid-styl">{requestId}</div>
            </div>
        </div>
    )
}