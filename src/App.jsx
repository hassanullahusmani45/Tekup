import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useState } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const router = useRoutes(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInformation, setUserInformation] = useState(null);

  const login = (token,userInfo) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserInformation(userInfo);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUserInformation(null);
    localStorage.removeItem("token");
  };

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
