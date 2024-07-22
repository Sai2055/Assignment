import Catagories from "./categories"

export default function LivingRoom({ categories }) {
    return (
        <div className="living">
            <div className="furnture"> {categories && categories.map((val, index) => {
                return (
                    <Catagories data={val} key={index} />
                )

            })}</div>

        </div>
    )
}