import UserGreeting from "../UserGreeting/UserGreeting";

function Home() {
    return (
        <div>
            <UserGreeting isLoggedIn={true} username="Michael Scott" />
            <h1>
                This is the home page, nothing to see here, go into other sub-pages XD
            </h1>
        </div>
    );
}

export default Home;