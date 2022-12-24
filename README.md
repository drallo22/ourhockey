<h1>OurHockey</h1>

OurHockey is a website intended for hockey fans! It allows users to see information about 4 Canadian hockey teams while also being able to add players to a team's roster. Users are also able to rate each time out of 5 stars! Users are also able to see statistics from last season for every team!
The front-end of OurHockey was built using ReactJs/Javascript, CSS and HTML as languages, all coded in Visual Studio Code.

<h2>Getting Started</h2>
To get started with this project, follow these steps:

Clone or download the repository to your local machine
Install the necessary dependencies by running npm install (or yarn install)
Start the development server by running npm start (or yarn start)
Open your browser and navigate to http://localhost:3000 to view the project

<h2>Challenges</h2>

A challenge I faced was to style the website in a clean and simple way but also effective for the user. I did not have many ideas to be able to display all the information without it looking messy. I overcame this challenge by using conditional rendering to allow for a cleaner look while also being able to display all information with a click of a button.

<h2>Design</h2>

Each team has their own component to display information about themselves, as well as a component for the player list of that team. The team name components (Canadiens, Senators, Toronto, Oilers) have a get and post method to display the information. The player list component for each team has a get, post and delete method which leads to the information being input by the user to be displayed and deleted if wanted. The team component is what displays the information in a list format. The player component displays the player information from the user input and allows for deletion of any player. 
The app.js is where everything is put together and styled using bootstrap. Conditional rendering is used to allow users to see certain information only when a certain button is pressed. 
<br/>

<h3>Each team has the same buttons and styling.</h3>

![image](https://user-images.githubusercontent.com/43860617/209410572-a544ebee-bb22-4739-8f31-03edf2f7f4e6.png)


<h3>The HeartSwitch library allows users to switch the background color of the website between white and grey (light and dark mode)</h3>

![image](https://user-images.githubusercontent.com/43860617/209410352-45e9b83b-721d-442c-9b23-18066135d59e.png)


<h3>The Rating library lets users rate each team out of 5 stars.</h3>

![image](https://user-images.githubusercontent.com/43860617/209410147-2b93d7ea-c528-416e-af75-8642cbee2b54.png)

<h2>Future</h2>

In the future we hope to expand to all 32 nhl teams while also giving users enhanced features for an even better experience. 

<h4>Link to backend repository</h4>

https://github.com/drallo22/OurHockeyBackend
