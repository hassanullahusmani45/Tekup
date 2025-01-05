import {createContext} from 'react'

const AuthContext = createContext(
    {
        isLoggedIn: false,
        token: null,
        userInformation: null,
        login: () => {},
        logout: () => {}
    }
)

export default AuthContext
