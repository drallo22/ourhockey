import logo from './logo.svg';
import './App.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import CanadiensPlayers from './components/CanadiensPlayers';
import TorontoPlayers from './components/TorontoPlayers';
import { useState } from 'react';
import Canadiens from './components/Canadiens';
import Toronto from './components/Toronto';
import Senators from './components/Senators';
import SenatorsPlayers from './components/SenatorsPlayers';
import Oilers from './components/Oilers';
import OilersPlayers from './components/OilersPlayers';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap'; 

function App() {
  const [rating, setRating] = useState(0); // Initial value
  const [rating2, setRating2] = useState(0); // Initial value
  const [rating3, setRating3] = useState(0); // Initial value
  const [rating4, setRating4] = useState(0); // Initial value
  const [displayCanadiens, setDisplayCanadiens] = useState(false);
  const [displayCPlayers, setDisplayCPlayers] = useState(false);
  const [displayToronto, setDisplayToronto] = useState(false);
  const [displayTPlayers, setDisplayTPlayers] = useState(false);
  const [displayOttawa, setDisplayOttawa] = useState(false);
  const [displaySPlayers, setDisplaySPlayers] = useState(false);
  const [displayEdmonton, setDisplayEdmonton] = useState(false);
  const [displayOPlayers, setDisplayOPlayers] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      {}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Our Hockey</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
         
         
          <HeartSwitch
            size="lg"
            inactiveTrackFillColor="#cffafe"
            inactiveTrackStrokeColor="#22d3ee"
            activeTrackFillColor="#06b6d4"
            activeTrackStrokeColor="#0891b2"
            inactiveThumbColor="#ecfeff"
            activeThumbColor="#ecfeff"
            checked={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <h3>Teams</h3>
           
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
          <img src="https://thehockeynews.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTg1MDUwOTU0MzYzMjQ5OTQ1/nhl-logo-rankings-no-13-montreal-canadiens.jpg" alt="Montreal Canadiens logo" style={{ width: '110px', height: '80px' }} />
      <br />
            {}
            <Button
              onClick={() => setDisplayCanadiens(!displayCanadiens)}
              variant="secondary"
            >
              Canadiens
            </Button>
            {displayCanadiens && <Canadiens />}
            
            {displayCanadiens && (
              <Button
                onClick={() => setDisplayCPlayers(!displayCPlayers)}
                variant="secondary"
              >
                Player List
              </Button>
            )}
            <br/>
            {displayCPlayers && <CanadiensPlayers />}
          </Col>
          <Col >
          <Rating style={{ maxWidth: 200 }} value={rating2} onChange={setRating2}/>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png" alt="Toronto Maple Leafs logo" style={{ width: '80px', height: '80px' }} />
            <br />
            <Button variant="secondary" onClick={() => setDisplayToronto(!displayToronto)}>
              Maple Leafs
            </Button>
              {displayToronto && <Toronto />}
              {displayToronto && (
              <Button variant="secondary" onClick={() => setDisplayTPlayers(!displayTPlayers)}>
                Player List
             </Button>
               )}
             {displayTPlayers && <TorontoPlayers />}
           </Col>
          </Row>
          <Row>
            <br/>
            <Col >
            <br/>
            <Rating style={{ maxWidth: 200 }} value={rating3} onChange={setRating3}/>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ottawa_Senators_2020-2021_logo.svg/1200px-Ottawa_Senators_2020-2021_logo.svg.png" alt="Toronto Maple Leafs logo" style={{ width: '100px', height: '80px' }} />
            <br />
            <Button variant="secondary" onClick={() => setDisplayOttawa(!displayOttawa)}>
              Senators
            </Button>
              {displayOttawa && <Senators />}
              {displayOttawa && (
              <Button variant="secondary" onClick={() => setDisplaySPlayers(!displaySPlayers)}>
                Player List
             </Button>
               )}
             {displaySPlayers && <SenatorsPlayers />}
            </Col>
            <Col >
            <br/>
            <Rating style={{ maxWidth: 200 }} value={rating4} onChange={setRating4}/>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/640px-Logo_Edmonton_Oilers.svg.png" 
            alt="Toronto Maple Leafs logo" style={{ width: '80px', height: '80px' }} />
            <br />
            <Button variant="secondary" onClick={() => setDisplayEdmonton(!displayEdmonton)}>
              Oilers
            </Button>
              {displayEdmonton && <Oilers />}
              {displayEdmonton && (
              <Button variant="secondary" onClick={() => setDisplayOPlayers(!displayOPlayers)}>
                Player List
             </Button>
               )}
             {displayOPlayers && <OilersPlayers />}
            </Col>
          </Row>
          </Container>
</div>
);
}

export default App;
