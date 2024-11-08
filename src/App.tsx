import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="BaKozak" />
      <Student name="BK" age={26} isStudent={false} />
      <Student />
      <Card />
      <Button />
      <Food />
      <Footer />
    </>
  );
}

export default App
