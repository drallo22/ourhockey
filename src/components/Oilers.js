
import {useEffect, useState} from 'react';
import Player from './Player';
import axios from 'axios';
import Team from './Team';


function Oilers() {
    
    const [team, setTeam] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const [showButton, setShowButton] = useState(true);
    
    const loadTeamFromAPI = ()=>{
  
       axios.get('http://localhost:8082/api/teams?city=Edmonton')
       .then((response)=>{
        if(response.status===200){
        setTeam(response.data);
        }
      }).catch((error)=>{
           
        setErrorMessage("Error getting")
        console.log(error);
        
    })
        
    }

    const addTeam = (team) => {
        axios
          .post('http://localhost:8082/api/teams/', {
            city: 'Edmonton',
            name: 'Oilers',
            abbreviation: 'EDM',
            statistic: {
              goals: 124,
              wins: 18,
              losses: 15,
              points: 38,
              gamesPlayed: 33,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              setErrorMessage('');
              loadTeamFromAPI();
            }
          })
          .catch((error) => {
            setErrorMessage('Error posting');
            console.log(error);
          });
      };

    useEffect(()=>{
        loadTeamFromAPI();

    })

    // const addPlayer = (player)=>{
    //     player.preventDefault();
    //     const firstName = player.target.elements.firstName.value;
    //     const lastName=player.target.elements.lastName.value;
    //     const age=player.target.elements.age.value;
        
   
    //     axios.post('http://localhost:8082/api/teams/1/players', {
    //         'firstName' : firstName,
    //         'lastName' :lastName,
    //         'age' : age
    //     })
    //    .then((response)=>{
    //     if(response.status === 200)
    //     {
    //         setErrorMessage("");
    //         loadPlayersFromAPI()
    //         player.target.elements.firstName.value="";
    //         player.target.elements.lastName.value="";
            
    //     }
    //    })

    //     .catch((error)=>{
           
    //         setErrorMessage("Error posting")
    //         console.log(error);
    //     })
   
    // }

    // const deletePlayer = (id)=>{
        
    //         axios.delete('http://localhost:8082/api/players/'+id)
    //         .then((response)=>{
    //             if(response.status === 200)
    //             {
    //                 loadPlayersFromAPI()
    //             }
    //            })
   
    // }

    const handleClick = () => {
        addTeam();
        setShowButton(false);
      }
  

    return (
       
        <div>
            
                {errorMessage}
     
        {/* <form onSubmit={addPlayer}>
            <input name="firstName"></input>
            <input name="lastName"></input>
            <input name="age"></input>
            <button type="submit"> Add </button>
            
        </form> */}
         {showButton && (
        <button onClick={() => handleClick()} >Show Team Info</button>
      )}

        {team.map((team) => {

            return <Team  team={team} >
            </Team>
            })}
     

    </div> )
}

export default Oilers;

