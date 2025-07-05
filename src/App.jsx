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
  const [userProfile, setUserProfile] = useState(null);
  const [users, setUsers] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [allContacts, setAllContacts] = useState([]);


  const updateProfile = useCallback((newProfilePath) => {
    setUserProfile(newProfilePath);
    const updatedUserInformation = { ...userInformation, profile: newProfilePath };
    setUserInformation(updatedUserInformation);
    localStorage.setItem("userInfo", JSON.stringify(updatedUserInformation));
  }, [userInformation]);

  const updateNameOrEmail = useCallback((name, email) => {
    const updateUserNameOrEmail = { ...userInformation, name: name, email: email };
    setUserInformation(updateUserNameOrEmail);
    localStorage.setItem("userInfo", JSON.stringify(updateUserNameOrEmail));
  }, [userInformation]);

  const login = useCallback(
    (token, userInfo) => {
      setIsLoggedIn(true);
      setToken(token);
      setUserInformation(userInfo);
      setUserProfile(userInfo.profile)

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
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
          setUserProfile(null);
          localStorage.removeItem("token");
          localStorage.removeItem("userInfo");
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
    });
  }, []);


  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    axios.get(
      "/all-user",
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then(response => {
      setUsers(response.data.users)
    });

    axios.get("/all-dashbord-articles",
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then(response => {
      setAllArticles(response.data.allDashbordArticles)
    });

    axios.get("/all-dashbord-contact",
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then(response => {

      setAllContacts(response.data.contacts)
    });

    
  }, []);


  const updateUserRole = useCallback((userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  }, []);

  const updateArticleStatus = useCallback((articleId, newStatus) => {
    setAllArticles((prevArticle) =>
      prevArticle.map(article =>
        article.id === articleId ? { ...article, status: newStatus } : article
      )
    );
  }, []);

  const afterDeleteArticle = useCallback((articleId) => {
    setAllArticles((prevArticle) =>
      prevArticle.filter(article => article.id !== articleId)
    );
  }, [setAllArticles]);

  const updateContactStatus = useCallback((contactID, newStatus) => {
    setAllArticles((prevContact) =>
      prevContact.map(contact =>
        contact.id === contactID ? { ...contact, status: newStatus } : contact
      )
    );
  }, []);

  const afterDeleteContact = useCallback((contactID) => {
    setAllArticles((prevContact) =>
      prevContact.filter(contact => contact.id !== contactID)
    );
  }, [setAllArticles]);



  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInformation,
        userProfile,
        users,
        updateUserRole,
        allArticles,
        updateArticleStatus,
        afterDeleteArticle,
        allContacts,
        updateContactStatus,
        afterDeleteContact,
        updateNameOrEmail,
        updateProfile,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App
