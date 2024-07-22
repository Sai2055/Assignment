
import MovesContent from "./MovesContent";

export default function MainContent({ moves }) {
    return (
        <><div className="main-content" >
            <div className="title">My Moves</div>
            {moves.map((move, index) => {
                return (
                    <MovesContent moveData={move} key={index} />
                )
            })}
        </div>
        </>

    )
}