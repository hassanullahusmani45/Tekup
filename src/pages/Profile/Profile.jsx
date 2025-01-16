import { useContext, useState } from 'react'
import Layout from '../../Layout/Layout'
import profileImg from "../../assets/images/profile.jpg";
import Input from '../../components/form/Input';
import AuthContext from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/form/Button';
import { required, min, max, email } from '../../validators/Rules';
import axios from '../../api/axios';
import { CloudIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/outline';


export default function Profile() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const authContext = useContext(AuthContext);

    const [formState, onInputHandler] = useForm({
        name: {
            value: userInfo.name,
            isValid: true
        },
        email: {
            value: userInfo.email,
            isValid: true
        }
    }, true)



    const changeUserInfo = () => {
        console.log("changeUserInfo function");

        event.preventDefault();

        const formInputs = {
            name: formState.inputs.fullname.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
        };
        axios.post(
            '/register',
            formInputs,
        ).then(response => {
            authContext.login(response.data.user_api_token, response.data.user);
        }).catch(error => {
            console.log(error.response);
        });
    }
    return (
        <Layout>
            <div className='grid grid-cols-5 gap-10 mx-20 py-16'>

                <div className='col-span-2 bg-slate-800/80 p-8 rounded-2xl shadow-xl'>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-32 h-32 p-2 rounded-full border-4 border-dotted border-teal-200" src={profileImg} />
                        <div className='w-1/2 my-6 border-t-2 border-dotted border-emerald-300 '></div>
                        <div className=' flex flex-col gap-4'>
                            <div className='text-lg font-medium font-serif text-teal-500 gap-x-4'>Name : <span className='text-base font-mono text-emerald-300'>{userInfo.name}</span></div>
                            <div className='text-lg font-medium font-serif text-teal-500 gap-x-4'>Email : <span className='text-base font-mono text-emerald-300'>{userInfo.email}</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 bg-slate-800/80 py-8 px-16 rounded-2xl shadow-xl">
                    <div className="text-xl font-bold text-center mb-4">Change the Profile Information</div>
                    <form className="pt-6">
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            value={userInfo.name}
                            className="font-base mb-6 rounded-full shadow-md block w-full py-3 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal"
                            validationes={[
                                required(),
                                min(3),
                                max(50),
                            ]}
                            onInputHandler={onInputHandler}
                            isValid={true}
                        />
                        <Input
                            element="input"
                            id="email"
                            type="email"
                            value={userInfo.email}
                            className="font-base mb-3 rounded-full shadow-md block w-full py-3 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal"
                            validationes={[
                                required(),
                                email(),
                                min(9),
                                max(100),
                            ]}
                            onInputHandler={onInputHandler}
                            isValid={true}
                        />
                        <div className='text-center'>
                            <Button
                                type="submit"
                                onClick={changeUserInfo}
                                className={`w-fit mt-4 px-6 py-2 rounded-full text-base font-medium ${formState.isFormValid ? 'bg-green-600 hover:scale-105' : 'bg-red-500/90'}`}
                                disabled={!formState.isFormValid}
                            >
                                Seve Changes
                            </Button>
                        </div>
                    </form>
                </div>


                <div className='appear col-span-5 mt-7'>
                    <div className="bg-slate-800/80 p-8 rounded-2xl shadow-xl">
                        <div className="flex gap-2 text-lg font-bold text-left mb-2"><LockClosedIcon className='size-6' />Change Password Form</div>
                        <div className='w-1/4 mb-8 border-t-2 border-dotted border-slate-300 '></div>

                        <form className='grid grid-cols-8 gap-6'>
                            <input type="text" placeholder="Old password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} className=" col-span-3 font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-900 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />
                            <input type="email" placeholder="New password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className=" col-span-3 font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-900 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />

                            <div className='col-span-2 text-center'>
                                <button type="submit" className="w-fit bg-teal-500 hover:bg-teal-600 px-6 p-2 rounded-lg text-base font-medium">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='appear col-span-5 mt-7'>
                    <div className="bg-slate-800/80 p-8 rounded-2xl shadow-xl">
                        <div className="flex gap-2 text-lg font-bold text-left mb-2 text-sky-500"><UserCircleIcon className='size-8' /> Uplode Profile Image</div>
                        <div className='w-1/4 mb-8 border-t-2 border-dotted border-sky-300 '></div>

                        <form className='grid grid-cols-8'>

                            <div className='col-span-6'>
                                <label htmlFor="profile" className="block mb-1 ms-2 text-sm font-medium text-slate-100">Profile</label>
                                <label htmlFor="profile"
                                    className="flex flex-col items-center justify-center bg-slate-900 w-full h-32 border-2 border-slate-300 border-dashed hover:border-dotted rounded-xl cursor-pointer  hover:bg-slate-800/95">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <CloudIcon className='size-12' />
                                        <p className="mb-2 text-sm text-slate-500"><span className="font-semibold">Click and uplode the profile</span> or drag and drop </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">SVG , JPG , IMG</p>
                                    </div>
                                    <input id="profile" type="file" className="hidden" />
                                </label>
                            </div>
                            <div className='col-span-2 flex justify-center items-end'>
                                <button type="submit" className="w-fit bg-sky-500 hover:bg-sky-600 px-6 p-2 rounded-lg text-base font-medium">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </Layout>
    )
}
