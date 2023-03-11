import React from "react"

//context used for behind the scene state storage
const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext