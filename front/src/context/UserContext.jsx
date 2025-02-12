import { createContext, useState, useContext } from "react";

export const UserContext = createContext({
    user: {},
    userAppointments: [], 
    setUser: () => {},
    setUserAppointments: () => {}
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [userAppointments, setUserAppointments] = useState([])

    console.log(user, "usuario logueado");
    
    return (
        <UserContext.Provider value={{
            user, setUser, userAppointments, setUserAppointments
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);