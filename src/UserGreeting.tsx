
function UserGreeting({username = "Guest", isLoggedIn}: UserProps) {

    const welcomeMessage =  <h2 className="welcome-message">
                            Welcome {username}
                            </h2>;

    const loginPrompt =     <h2 className="login-prompt">
                            Please log in to continue
                            </h2>;

    return (isLoggedIn ?  welcomeMessage :
                                loginPrompt)

}

type UserProps = {
    isLoggedIn: boolean;
    username?: string;
}

export default UserGreeting