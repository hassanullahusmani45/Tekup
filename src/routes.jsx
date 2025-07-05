import Abute from "./pages/abute/Abute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Index from "./pages/home/Index";
import Posts from "./pages/posts/Posts";
import Contact from "./pages/Contact/Contact"
import Profile from "./pages/Profile/Profile"
import TeamMemmber from "./pages/user/TeamMemmber";
import ShowPost from "./pages/posts/ShowPost";
import PrivateAdminRoute from "./PrivateAdminRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import Users from "./pages/admin/Users";
import Articles from "./pages/admin/Articles";
import UserContact from "./pages/admin/UserContact";

const routes = [
    { path: "/", element: <Index /> },
    { path: "/profile", element: <Profile /> },
    { path: "/team-memmber-profile/:name", element: <TeamMemmber /> },
    { path: "/abute", element: <Abute /> },
    { path: "/posts", element: <Posts /> },
    { path: "/show-article/:name", element: <ShowPost /> },
    { path: "/contact-as", element: <Contact /> },
    { path: "/user/login", element: <Login /> },
    { path: "/user/register", element: <Register /> },
    {
        path: '/admin/*', element: (<PrivateAdminRoute><AdminLayout /></PrivateAdminRoute>), children: [
            { path: 'users', element:<Users/>},
            { path: 'articles', element:<Articles/>},
            { path: 'user-contacts', element:<UserContact/>},
        ]
    }
];

export default routes;