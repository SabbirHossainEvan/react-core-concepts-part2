import { useState } from "react"

export default function Batmans(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixs = sixes + 1;
        setSixes(updatedSixs);
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player: Evan</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>singles</button>
            <button>Four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}