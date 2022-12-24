import { useEffect, useState } from 'react';
import Player from './Player';
import axios from 'axios';
import Team from './Team';

function Senators() {
  const [team, setTeam] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSeason, setLastSeason] = useState(false);
  const [showButton, setShowButton] = useState(true); 

  const loadTeamFromAPI = () => {
    axios
      .get('http://localhost:8082/api/teams?city=Ottawa')
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
        city: 'Ottawa',
        name: 'Senators',
        abbreviation: 'OTT',
        statistic: {
          goals: 98,
          wins: 14,
          losses: 19,
          points: 30,
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
      .put('http://localhost:8082/api/teams/3', {
        city: 'Ottawa',
        name: 'Senators',
        abbreviation: 'OTT',
        statistic: {
          goals: 298,
          wins: 42,
          losses: 40,
          points: 85,
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
      {errorMessage}
      
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

export default Senators;
