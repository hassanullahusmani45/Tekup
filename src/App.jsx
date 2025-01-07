import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import { useCallback, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import axios from "./api/axios";
import swal from "sweetalert";
import './App.css';

function App() {
  const router = useRoutes(routes);
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInformation, setUserInformation] = useState(null);

  const login = useCallback(
    (token, userInfo) => {
      setIsLoggedIn(true);
      setToken(token);
      setUserInformation(userInfo);
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }, []);

  const logout = useCallback(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios.post("/logout", { token })
      .then((response) => {
        if (response.data.status === "success") {
          setIsLoggedIn(false);
          setToken(null);
          setUserInformation(null);
          localStorage.removeItem("token");
          navigate("/");
          console.log("Logged out successfully");

        } else {
          setError(response.data.error);
          console.log("error", error);
          swal({
            title: response.data.error,
            icon: "error",
            button: "Ok"
          })
        }

      })
      .catch((error) => {
        console.log(error.response || "Error during logout");
      });
  }, [navigate]);


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return;
    }
    axios.post("/verify-token", {
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
