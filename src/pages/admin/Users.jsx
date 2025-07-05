import { Cog6ToothIcon, ListBulletIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { UserIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import axios from "../../api/axios";
import Profile from "../../assets/images/profile.jpg";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Users() {
    const { users, updateUserRole } = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState(users);

    const roleChangeHeandler = (id) => {
        const userToken = JSON.parse(localStorage.getItem("token"));

        const formData = new FormData();
        formData.append('id', id)
        axios.put(
            "/update-user-role", formData,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        ).then(response => {
            const updatedUser = response.data.user_info;
            setAllUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === updatedUser.id ? { ...user, role: updatedUser.role } : user
                )
            );
            updateUserRole(updatedUser.id, updatedUser.role);
        })
    }
    return (
        <div className="">
            <div className="flex items-center gap-2">
                <ListBulletIcon className="size-6" />
                <div className="font-bold">
                    Users List
                </div>

            </div>
            <i className="flex justify-between items-center text-slate-300 mt-4 mb-8 border-b border-b-slate-500" />

            <table className="w-full table-fixed text-sm text-left rtl:text-right text-slate-100 rounded-xl overflow-hidden">
                <thead className=" text-sm bg-slate-900">
                    <tr className="border-b border-slate-700">
                        <th scope="col" className="px-8 py-6">#</th>
                        <th scope="col" className="px-8 py-6">Profile</th>
                        <th scope="col" className="px-8 py-6">Name</th>
                        <th scope="col" className="px-8 py-6">Email</th>
                        <th scope="col" className="px-8 py-6">Role</th>
                        <th scope="col" className="px-8 py-6 flex items-center gap-1">
                            Setting
                            <Cog6ToothIcon className="size-5" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => (
                        <tr key={index} className="border-b text-slate-300 border-slate-800 hover:bg-slate-900/30  bg-slate-900/70">
                            <th className="px-8 py-4">{index + 1}</th>
                            <td className="px-8 py-1">
                                <img src={user.profile !== null ? user.profile : Profile} className="min-w-14 min-h-14 max-w-14 max-h-14 rounded-full animate-pulse"
                                    alt={user.name} />
                            </td>
                            <td className="px-8 py-4">{user.name}</td>
                            <td className="px-8 py-4">{user.email}</td>
                            <td className="px-8 py-4">{user.role == "ADMIN" ? <UserIcon className="size-6 text-sky-500" /> : <AcademicCapIcon className="size-6 text-green-500" />}</td>
                            <td className="px-8 py-4">
                                <button onClick={() => roleChangeHeandler(user.id)} type="button" className={`flex items-center gap-2 text-base font-semibold text-white ${user.role == "ADMIN" ? "bg-sky-500 hover:bg-sky-600" : "bg-green-500 hover:bg-green-600"} rounded-lg px-3 py-1`}>
                                    <WrenchScrewdriverIcon className="size-5" />
                                    Role
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>










            
        














        </div>

    )
}
