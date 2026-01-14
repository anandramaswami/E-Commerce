import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

type UserType = {
    username : string,
    password : string
}

type UserContextType = {
    user : UserType | null,
    login : (username : string, password : string) => void,
    logout : () => void,
    isAuthenticated: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<UserType | null>(null)
    
    const login = (username:string, password:string) => {
        setUser({username, password})
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, login, logout, isAuthenticated : !!user}}>
            {children}
        </UserContext.Provider>

    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};


