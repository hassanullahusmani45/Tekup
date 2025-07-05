import {createContext} from 'react'

const AuthContext = createContext(
    {
        isLoggedIn: false,
        token: null,
        userInformation: null,
        userProfile: null,
        login: () => {},
        logout: () => {}
    }
)

export default AuthContext
