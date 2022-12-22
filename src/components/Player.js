import { useState } from "react";

function Player({player,deletePlayer})
{
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
      }
   
    return(
        
        <div>

                <div >
                <p onClick={handleClick}> First Name: {player.firstName} Last Name: {player.lastName} Age: {player.age}</p>

                    </div>
                    {clicked && <button onClick={() =>{deletePlayer(player.id)}}>Delete</button>} 

                </div>
    )
}

export default Player;