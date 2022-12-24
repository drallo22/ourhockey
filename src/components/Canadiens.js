import { useEffect, useState } from 'react';
import Player from './Player';
import axios from 'axios';
import Team from './Team';

function Canadiens() {
  const [team, setTeam] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSeason, setLastSeason] = useState(false);
  const [showButton, setShowButton] = useState(true); // new flag variable to track whether button should be displayed

  const loadTeamFromAPI = () => {
    axios
      .get('http://localhost:8082/api/teams?city=Montreal')
      .then((response) => {
        if (response.status === 200) {
          setTeam(response.data);
        }
      })
      .catch((error) => {
        setErrorMessage('Error getting');
        console.log(error);
      });
  };

  const addTeam = (team) => {
    axios
      .post('http://localhost:8082/api/teams/', {
        city: 'Montreal',
        name: 'Canadiens',
        abbreviation: 'MTL',
        statistic: {
          goals: 89,
          wins: 15,
          losses: 18,
          points: 33,
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
      .put('http://localhost:8082/api/teams/1', {
        city: 'Montreal',
        name: 'Canadiens',
        abbreviation: 'MTL',
        statistic: {
          goals: 203,
          wins: 30,
          losses: 52,
          points: 80,
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

  useEffect(() => {
    loadTeamFromAPI();
  });


  const handleClick = () => {
    addTeam();
    setShowButton(false);
    setLastSeason(true);
  }

  return (
    <div>
      
      
      {showButton && (
        <button onClick={() => handleClick()} >Show Team Info</button>
        
      )}

      {lastSeason && <button onClick={() => updateTeam()} >Last season</button>}
      {team.map((team) => {
        return <Team team={team} />;
      })}
    </div>
  );
}

export default Canadiens;
