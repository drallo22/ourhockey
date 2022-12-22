import {useEffect, useState} from 'react';
import Player from './Player';
import axios from 'axios';


function CanadiensPlayers() {
    
    const [players, setPlayers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    
    const loadPlayersFromAPI = ()=>{
  
       axios.get('http://localhost:8082/api/teams/1/players')
       .then((response)=>{
        if(response.status===200){
        setPlayers(response.data);
        }
      }).catch((error)=>{
           
        setErrorMessage("Error getting")
        console.log(error);
        
    })
        
    }

    useEffect(()=>{
        loadPlayersFromAPI();

    })

    const addPlayer = (player)=>{
        player.preventDefault();
        const firstName = player.target.elements.firstName.value;
        const lastName=player.target.elements.lastName.value;
        const age=player.target.elements.age.value;
        
   
        axios.post('http://localhost:8082/api/teams/1/players', {
            'firstName' : firstName,
            'lastName' :lastName,
            'age' : age
        })
       .then((response)=>{
        if(response.status === 200)
        {
            setErrorMessage("");
            loadPlayersFromAPI()
            player.target.elements.firstName.value="";
            player.target.elements.lastName.value="";
            
        }
       })

        .catch((error)=>{
           
            setErrorMessage("Error posting")
            console.log(error);
        })
   
    }

    const deletePlayer = (id)=>{
        
            axios.delete('http://localhost:8082/api/players/'+id)
            .then((response)=>{
                if(response.status === 200)
                {
                    loadPlayersFromAPI()
                }
               })
   
    }
  

    return (
       
        <div>
            
                {errorMessage}
     
        <form onSubmit={addPlayer}>
            <input name="firstName"></input>
            <input name="lastName"></input>
            <input name="age"></input>
            <button type="submit"> Add </button>
            
        </form>

        {players.map((player) => {

            return <Player  player={player} deletePlayer = {deletePlayer} >
            </Player>
            })}
     

    </div> )
}

export default CanadiensPlayers;
