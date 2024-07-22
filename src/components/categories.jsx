export default function Catagories({ data }) {
    const { itemsList } = data
    return (
        <div className="all-catg">
            <div className="cat-name">{data.categoryName}</div>
            <div className="content">
                {itemsList.all.map((item, index) => {
                    let { type } = item


                    // let subHeader = multiSelect ? default_type.join(",") : default_type[0]
                    return (<div className="item">
                        <div className="header">
                            {item.name} <div className="coun">{item.qty}</div>
                        </div>
                        <div className="sub-header">
                            {type?.default_type?.[0]}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}