# craftbnb

craftbnb is a clone of Airbnb and built using React.js, PSQL, and Express. You can create, edit and delete spots as well as create edit and delete reservations on those spots. You can also view related reservations and reviews on a specific spot. You can view the live site [here](https://solo-express-project.herokuapp.com/).

## Index

**Database Schema**

I used Sequelize to create the database models, migrations, and seeders to store the data for this project. Here is the [database schema](https://github.com/keimjm/solo-project/wiki/Database-Schema).

**Frontend Routes**

Here is the [link](https://github.com/keimjm/solo-project/wiki/Frontend-Routes) to frontend routes I used for this project

**API Routes**

Here is the [link](https://github.com/keimjm/solo-project/wiki/API-Routes) to the API routes I used for this project

## Screenshots

**Home View:**

![alttext](https://github.com/keimjm/solo-project/tree/main/client/public/images/HomePage.png)

**Profile Page:**

![https://github.com/keimjm/solo-project/tree/main/client/public/images/ProfilePage.png]

**Map Page:**

![https://github.com/keimjm/solo-project/tree/main/client/public/images/Map.png]

## Features

- Add / delete / edit rooms or spots
- Add / delete / edit reservations on a room
- See reviews associated with a room
- Search for a room
- View your room, reservations, and reviews on profile page
- View and select rooms based on geographic location via Google Maps

## Technologies Used

- React.js
- Redux
- PostgreSQL
- Heroku
- CSS
- Google Maps Javascript API
- Express.js

## Future Features

- Add / delete /edit reviews
- Favorite / Unfavorite a room
- Have your favorites show up on the profile page
- Add AWS web storage
- More sophisticated reservation logic

## How to build / run

1.  Clone this repo
2.  Inside the server and client folders respectively, run npm install
3.  Inside the server folder, create a .env file and then create a psql database user
4.  Run npx dotenv sequelize db:create to create the database
5.  Run npx dotenv sequelize db:migrate and npx dotenv sequelize db:seed:all to create the tables and seed the database
6.  To view the site, run npm start in both the server and the client folders

## Technical implementation

During this project I think I struggled the most with planning on how to layout the front end components most effectively and how they should be connected. One of the more technical struggles I had was being able to click on a reservation from a list on your profile page and having that take you the room where you made that reservation given the id of that reservation. I used a nested find to return the room where in the associated reservation array that reservation id was equal to the one clicked on.

    const  viewBooking  = (id) => {const  room  =  stateRooms?.find(room  =>  room.reservation.find(reservation  =>  reservation.id  ===  id))
    history.push(`/rooms/${room.id}`)

I also struggled with displaying all of the rooms on the home page in a good way and I eventually used a map function and a separate component for each room "card".

    {(!filter &&  (  <div  className='room-section'>
      {rooms.map((room)  =>  { return (
      <div  className='room-card-link'>
        <NavLink  to={`/rooms/${room.id}`}  room={room}  className="room-nav-link">
          <CardBlock  key={room.id}  room={room}  />
        </NavLink>
      </div>
      );
    })}
    </div>
    ))}

## React Components

Here is a list of the components that were used in the frontend react.

- CardBlock
- CreateRoom
- FilterBar
- LoginForm
- Map
- Navigation
- NotFound
- ProfilePage
- Reservations
- Reviews
- RoomDetail
- SearchPage
- SignupFormPage

## Redux Store Document

The image below is the redux store state for getting the rooms and reservations associated with a user. I used Redux to update information and get information from the database.

![https://github.com/keimjm/solo-project/tree/main/client/public/images/ReduxStore.png]
