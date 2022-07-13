import React, {useContext, createContext, useState} from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    console.log(user);

    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }

    return <AuthContext.Provider
        value = {{
            user,
            login,
            logout,
        }}
    >{ children }</AuthContext.Provider>
}

// custom Hook
export const useGlobalAuthContext = () => {
    return useContext(AuthContext)
}