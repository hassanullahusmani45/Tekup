import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateAdminRoute({ children }) {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    useEffect(() => {
        if (!userInfo || userInfo.role !== "ADMIN") {
            navigate("/");
        }
    }, [userInfo, navigate]);

    if (!userInfo || userInfo.role !== "ADMIN") return null;
    return <>{children}</>;
}

PrivateAdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
