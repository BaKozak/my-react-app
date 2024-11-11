import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext("");

function ComponentA() {

    const [user, _] = useState("Reactor");


    return (
        <div className="box-component">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>)
}

export default ComponentA