
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

    

    const handleClick = () => {
        addTeam();
        setShowButton(false);
      }
  

    return (
       
        <div>
            
                {errorMessage}
     
      
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

