import { useContext } from "react";
import Profile from "../assets/images/profile.jpg";
import Logo from "../assets/images/logo-white.svg";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon, ChatBubbleOvalLeftIcon, ChevronDownIcon, ClipboardDocumentListIcon, CubeIcon, HomeIcon, LinkIcon, SquaresPlusIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Header() {

  const authContext = useContext(AuthContext);


  return (
    <header className=" fixed inset-0 h-20 rounded-full shadow-md shadow-slate-950 m-5 bg-slate-800/95 text-white z-50">
      <div className="flex justify-between items-center w-full h-20 px-8 py-4">
        <Link to={"/"}>
          <img src={Logo} className="w-24 h-24 rounded-full" alt="logo" />
        </Link>

        <div className="flex justify-center items-center gap-x-8 text-lg">
          <Link to={"/"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><HomeIcon className="size-6 text-white" />home</Link>
          <Link to={"/posts"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><ClipboardDocumentListIcon className="size-6 text-white" />articles</Link>
          <Link to={"/abute"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><ChatBubbleOvalLeftIcon className="size-6 text-white" />abute</Link>
          <Link to={"/contact-as"} className="flex justify-around items-center gap-x-1 hover:text-orange-300 hover:border-b hover:border-orange-400"><LinkIcon className="size-6 text-white" />contact as</Link>
        </div>
        <div className="flex justify-center items-center gap-2">

          {
            authContext.isLoggedIn === true ? (
              <>
                <div className="relative group">
                  <ChevronDownIcon className="size-5 cursor-pointer hover:text-orange-300 transition-all" />
                  <div className="absolute invisible group-hover:visible transition-all right-0 bg-gray-900 border-x rounded-lg px-6 py-4 space-y-3">
                    <Link to={"/profile"} className="flex justify-start items-center gap-x-2 hover:text-orange-300 text-sm">
                      <UserIcon className="size-5 text-white" />Profile
                    </Link>
                    <div onClick={authContext.logout} className="flex justify-start items-center gap-x-2 hover:text-orange-300 text-sm hover:cursor-pointer">
                      <ArrowLeftStartOnRectangleIcon className="size-5 text-white" />Logout
                    </div>
                    {
                      authContext.userInformation.role === "ADMIN" && <Link to={"/admin"} className="flex justify-start items-center gap-x-2 hover:text-orange-300 text-sm hover:cursor-pointer text-nowrap">
                        <CubeIcon className="size-5 text-white" />Admin Dashbord
                      </Link>
                    }
                  </div>
                </div>

                <Link to={"/profile"}>
                  <img
                    src={authContext.userProfile || Profile}
                    className="w-12 h-12 border rounded-full"
                    alt="user-profile"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to={"/user/register"} className="flex justify-around items-center gap-x-1 hover:text-orange-300">
                  <SquaresPlusIcon className="size-5 text-white" />Register
                </Link>
                <Link to={"/user/login"} className="flex justify-around items-center gap-x-1 hover:text-orange-300">
                  <ArrowLeftEndOnRectangleIcon className="size-5 text-white" />Login
                </Link>
              </>
            )
          }
        </div>
      </div>
    </header>
  );
}
