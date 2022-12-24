
import {useEffect, useState} from 'react';
import Player from './Player';
import axios from 'axios';
import Team from './Team';


function Toronto() {
    
    const [team, setTeam] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const [showButton, setShowButton] = useState(true);
    const [lastSeason, setLastSeason] = useState(false);
    
    const loadTeamFromAPI = ()=>{
  
       axios.get('http://localhost:8082/api/teams?city=Toronto')
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
            city: 'Toronto',
            name: 'Maple Leafs',
            abbreviation: 'TOR',
            statistic: {
              goals: 107,
              wins: 20,
              losses: 13,
              points: 46,
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

      const updateTeam =()=> {
        axios
          .put('http://localhost:8082/api/teams/2', {
            city: 'Toronto',
            name: 'Maple Leafs',
            abbreviation: 'TOR',
            statistic: {
              goals: 354,
              wins: 62,
              losses: 20,
              points: 112,
              gamesPlayed: 82,
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
        setLastSeason(true);
      }
  

    return (
       
        <div>
            
                {errorMessage}
     
         {showButton && (
        <button onClick={() => handleClick()} >Show Team Info</button>
      )}
       {lastSeason && <button onClick={() => updateTeam()} >Last season</button>}
        {team.map((team) => {

            return <Team  team={team} >
            </Team>
            })}
     

    </div> )
}

export default Toronto;

