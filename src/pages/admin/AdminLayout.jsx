import { Outlet, useLocation } from "react-router-dom";
import AdminSidbar from "../../components/AdminSidbar";
import "../../App.css"
import MyChart from './MyChart'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


export default function AdminLayout() {
    const location = useLocation()
    const { users, allArticles } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white">
            <div className=" flex-1 p-4">
                <div className="grid grid-cols-11 gap-x-3 h-full">
                    <section className="col-span-2"><AdminSidbar /></section>
                    <section className="col-span-9">
                        <div className="p-4 rounded-2xl bg-slate-800 min-h-[95svh]">
                            <Outlet />
                            {
                                location.pathname === "/admin" && (
                                    <>
                                        <div className=" text-base font-semibold text-teal-500">Users :</div>
                                        <MyChart
                                                datas={users}
                                                dataKey= "Users"
                                                height={250}
                                                chartLineColor="#d97706"
                                                bgColor="#10b981"
                                                YAxisTextColor="#10b981"
                                                XAxisTextColor="#d97706"
                                        />
                                        <div className=" text-base font-semibold text-sky-500 mt-4">Published Articles :</div>
                                        <MyChart
                                                datas={allArticles}
                                                dataKey= "Users"
                                                height={250}
                                                chartLineColor="#ef4444"
                                                bgColor="#0ea5e9"
                                                YAxisTextColor="#0ea5e9"
                                                XAxisTextColor="#ef4444"
                                        />


                                    </>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
