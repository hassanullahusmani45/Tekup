import { Link } from "react-router-dom";
import logo from "./../assets/images/logo-white.svg"
import { BellAlertIcon, CodeBracketSquareIcon, CubeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function AdminSidbar() {
    const [sidbarStatus, setSidbarStatus] = useState("dashbord")
    return (
        <div className="w-full text-start p-4 bg-slate-800 rounded-2xl h-[95svh] space-y-4">
            <Link to={"/"} className="">
                <img className="h-8 mb-10" src={logo} />
            </Link>
            <div onClick={() => setSidbarStatus("dashbord")} className={`flex items-center gap-2 text-base font-semibold ${sidbarStatus == "dashbord" ? "text-teal-400" : ""}`}>
                <CubeIcon className="size-6" />
                <Link to={"/admin"} className={sidbarStatus == "dashbord" ? "text-teal-500" : "text-slate-300"}>
                    Dashbord
                </Link>
            </div>
            <div onClick={() => setSidbarStatus("users")} className={`flex items-center gap-2 text-base font-semibold ${sidbarStatus == "users" ? "text-teal-400" : ""}`}>
                <UsersIcon className="size-6" />
                <Link to={"/admin/users"} className={sidbarStatus == "users" ? "text-teal-500" : "text-slate-300"}>
                    Users
                </Link>
            </div>
            <div onClick={() => setSidbarStatus("articles")} className={`flex items-center gap-2 text-base font-semibold ${sidbarStatus == "articles" ? "text-teal-400" : ""}`}>
                <CodeBracketSquareIcon className="size-6" />
                <Link to={"/admin/articles"} className={sidbarStatus == "articles" ? "text-teal-500" : "text-slate-300"}>
                    Articles
                </Link>
            </div>
            <div onClick={() => setSidbarStatus("contect")} className={`flex items-center gap-2 text-base font-semibold ${sidbarStatus == "contect" ? "text-teal-400" : ""}`}>
                <BellAlertIcon className="size-6" />
                <Link to={"/admin/user-contacts"} className={sidbarStatus == "contect" ? "text-teal-500" : "text-slate-300"}>
                    User-Contacts
                </Link>
            </div>

        </div>
    )
}
