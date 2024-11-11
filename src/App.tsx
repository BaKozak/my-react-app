import Header from "./Header/Header";
import Food from "./Food/Food";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Student from "./Student/Student";
import UserGreeting from "./UserGreeting/UserGreeting";
import List from "./List/List";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Footer from "./Footer/Footer";
import MyComponent from "./MyComponent/MyComponent";
import MyComponent2 from "./MyComponent/MyComponent2";
import MyComponent3 from "./MyComponent/MyComponent3";
import MyComponent4 from "./MyComponent/MyComponent4";
import MyComponent5 from "./MyComponent/MyComponent5";
import DigitalClock from "./DigitalClock/DigitalClock";
import Counter from "./Counter/Counter";
import ColorPicker from "./ColorPicker/ColorPicker";
import ToDoList from "./ToDoList/ToDoList";
import ComponentA from "./ComponentsABCD/ComponentA";
import StopWatch from "./StopWatch/StopWatch";

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

      <StopWatch />


      <Footer />

      {/* <ToDoList /> */}

      {/* <DigitalClock /> */}

      {/* <ComponentA /> */}

      {/* <UserGreeting isLoggedIn={true} username="Reactor" />
      {<Student name="Ractor" age={26} isStudent={false} />}
      {<Food />}
      <Card />
      <ProfilePicture />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <MyComponent />
      <Counter />
      <MyComponent2 />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent5 />
      <ColorPicker /> */}
    </>
  );
}

export default App
