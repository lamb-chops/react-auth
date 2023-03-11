import React, { useState , useEffect} from "react";

//context used for behind the scene state storage
 const AuthContext = React.createContext({
  isLoggedIn: false,
  //added to help ide autocompletion
  onLogout: () => {},
  onLogin: () => {},
});

//named export cuz exporting both
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    /* localStorage is global and for the browser, not tied to react. app tab in dev tools under localstorage cookies
      In this case 1 = loggedin and 0 = not
    */
    const checkLogin = localStorage.getItem("isLoggedIn");

    if (checkLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext


