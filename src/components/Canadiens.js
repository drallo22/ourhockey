import { useEffect, useState } from 'react';
import Player from './Player';
import axios from 'axios';
import Team from './Team';

function Canadiens() {
  const [team, setTeam] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [added, setAdded] = useState(false); // new flag variable
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

  useEffect(() => {
    loadTeamFromAPI();
  });

  // const deletePlayer = (id) => {
  //   axios
  //     .delete('http://localhost:8082/api/players/' + id)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         loadPlayersFromAPI();
  //       }
  //     });
  // };
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
        return <Team team={team} />;
      })}
    </div>
  );
}

export default Canadiens;
