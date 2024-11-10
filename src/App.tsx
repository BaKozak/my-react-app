import Header from "./Header";
//import Food from "./Food";
import Card from "./Card/Card";
//import Button from "./Button/Button";
//import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List/List";
import ProfilePicture from "./ProfilePicture";
import Footer from "./Footer";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import Counter from "./Counter";

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
      <UserGreeting isLoggedIn={true} username="Reactor" />
      {/*<Student name="Ractor" age={26} isStudent={false} />*/}
      {/*<Food />*/}
      <Card />
      <ProfilePicture />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <MyComponent />
      <Counter />
      <MyComponent2 />
      <Footer />
    </>
  );
}

export default App
