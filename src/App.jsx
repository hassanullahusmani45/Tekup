import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useCallback, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import axios from "./api/axios";

function App() {
  const router = useRoutes(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInformation, setUserInformation] = useState(null);

  const login = useCallback(
    (token,userInfo) => {
      setIsLoggedIn(true);
      setToken(token);
      setUserInformation(userInfo);
      localStorage.setItem("token", JSON.stringify(token));
    },[]);

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUserInformation(null);
    localStorage.removeItem("token");
  };

  useEffect(() => { 
    const token = JSON.parse(localStorage.getItem("token"));
    axios.post("/verify-token",{
      token
    }).then(response => {
      const status = response.data.status;
      if (status === "success") {
        login(token, response.data.user);
      }
      if (status === "error") {
        logout();
      }      
    }).catch(error => {
      console.log(error.response);
    })
  }, []);

  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInformation,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App
