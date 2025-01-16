import Abute from "./pages/abute/Abute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Index from "./pages/home/Index";
import Posts from "./pages/posts/Posts";
import Contact from "./pages/Contact/Contact"
import Profile from "./pages/Profile/Profile"
import TeamMemmber from "./pages/user/TeamMemmber";
const routes = [
    { path: "/", element: <Index /> },
    { path: "/profile", element: <Profile /> },
    { path: "/team-memmber-profile/:name", element: <TeamMemmber /> },
    { path: "/abute", element: <Abute /> },
    { path: "/posts", element: <Posts /> },
    { path: "/contact-as", element: <Contact /> },
    { path: "/user/login", element: <Login /> },
    { path: "/user/register", element: <Register /> },
];

export default routes;