import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./Header/Header";
import Home from './Home/Home';
import Profile from './Profile/Profile';
import DigitalClock from "./DigitalClock/DigitalClock";
import Counter from "./Counter/Counter";
import StopWatch from "./StopWatch/StopWatch";

import Food from "./Food/Food";
import List from "./List/List";
import Footer from "./Footer/Footer";


import Button from "./Button/Button";
import UserGreeting from "./UserGreeting/UserGreeting";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ColorPicker from "./ColorPicker/ColorPicker";
import ToDoList from "./ToDoList/ToDoList";
import ComponentA from "./ComponentsABCD/ComponentA";

function App() {


  const fruits: any = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 3, name: "Orange", calories: 45 },
    { id: 2, name: "Banana", calories: 105 },
  ];

  const vegetables: any = [
    { id: 6, name: "Carrot", calories: 25 },
    { id: 7, name: "Cabbage", calories: 45 },
    { id: 8, name: "Potato", calories: 50 },
  ];

  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo-list" element={<ToDoList />} />  
        {// For some reason breaks my header css
        }
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stop-watch" element={<StopWatch />} />
        <Route path="/other" element={<StopWatch />} />
        



      </Routes>

      {/* {<Food />}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />} */}

      {/* <ToDoList />

      <DigitalClock />

      <ComponentA />

      <UserGreeting isLoggedIn={true} username="Reactor" />
      
      <ProfilePicture />
      <Counter />
      <ColorPicker /> */}

      <Footer />
    </>
  );
}

export default App
