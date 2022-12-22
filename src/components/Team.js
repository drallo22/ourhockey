import { useState } from "react";

function Team({team})
{
    
   
    return(
        
        <div>

                <div >
                <p >   {team.city} {team.name} ({team.abbreviation}) 
                <br></br> Goals: {team.statistic.goals}
                <br></br> Wins: {team.statistic.wins}
                <br></br> Losses: {team.statistic.losses}
                <br></br> Points: {team.statistic.points}
                <br></br> Games Played: {team.statistic.gamesPlayed}
                </p>

                    </div>
                    

                </div>
    )
}

export default Team;