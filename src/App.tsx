import { BrowserRouter as _, Route, Routes } from 'react-router-dom';

import Header from "./Header/Header";
import Home from './Home/Home';
import Profile from './Profile/Profile';
import ToDoList from "./ToDoList/ToDoList";
import DigitalClock from "./DigitalClock/DigitalClock";
import Counter from "./Counter/Counter";
import StopWatch from "./StopWatch/StopWatch";
import Other from './Other/Other';
import Footer from "./Footer/Footer";


function App() {

  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo-list" element={<ToDoList />} />
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stop-watch" element={<StopWatch />} />
        <Route path="/other" element={<Other />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App
