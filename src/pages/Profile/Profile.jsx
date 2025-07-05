import { useContext, useState } from 'react'
import Layout from '../../Layout/Layout'
import profileImg from "../../assets/images/profile.jpg";
import Input from '../../components/form/Input';
import AuthContext from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/form/Button';
import { required, min, max, email } from '../../validators/Rules';
import axios from '../../api/axios';
import { CloudIcon, EyeSlashIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import swal from "sweetalert";
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';


export default function Profile() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const authContext = useContext(AuthContext);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [image, setImage] = useState(null);
    const [passwordError, setPasswordError] = useState("");
    const [inputType, setInputType] = useState("password")

    const profileHandler = (event) => {
        event.preventDefault();
        const userId = userInfo.id;
        const formData = new FormData();

        formData.append("image", image);
        formData.append("id", userId);
        console.log(userId);


        axios.post('/user-profile', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            if (response.statusText == "OK") {
                localStorage.setItem("profile", response.data.file_path);
                authContext.updateProfile(response.data.file_path);
                swal({
                    title: "Oploud your profile successfuly",
                    icon: "success",
                    button: "Ok"
                })
            }
        });
    }

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



    const changeUserNameOrEmail = (event) => {
        event.preventDefault();
        const formInputs = {
            id: userInfo.id,
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
        };

        axios.put("/user-profile/update-info", formInputs).then(() => {
            authContext.updateNameOrEmail(formState.inputs.name.value, formState.inputs.email.value);
            swal({
                title: "Save changes in DataBase.",
                icon: "success",
                button: "Ok"
            })
        }).catch(error => {
            console.log(error.response);
        });
    }

    const changePasswordHandaler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("id", userInfo.id)
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", newPassword);

        axios.put("/change-password", formData)
            .then((response) => {
                if(!response.data.passwordError){
                    swal({
                        title:"Your password is change corectly.",
                        button:"OK",
                        icon:"success"
                    });
                    setOldPassword("");
                    setNewPassword("");
                }
                setPasswordError(response.data.passwordError);
            });
    }
    return (
        <Layout>
            <div className='grid grid-cols-5 gap-10 mx-20 py-16'>

                <div className='col-span-2 bg-slate-800/80 p-8 rounded-2xl shadow-xl'>
                    <div className="flex flex-col justify-center items-center">
                        <img className=" w-40 h-40 p-2 rounded-full border-4 border-dotted border-teal-200" src={authContext.userProfile || profileImg} />
                        <div className='w-1/2 my-6 border-t-2 border-dotted border-emerald-300 '></div>
                        <div className=' flex flex-col gap-4'>
                            <div className='text-lg font-medium font-serif text-teal-500 gap-x-4'>Name : <span className='text-base font-mono text-emerald-300'>{userInfo.name}</span></div>
                            <div className='text-lg font-medium font-serif text-teal-500 gap-x-4'>Email : <span className='text-base font-mono text-emerald-300'>{userInfo.email}</span></div>
                            <div className='text-lg font-medium font-serif text-teal-500 gap-x-4'>Role : <span className='text-base font-mono text-emerald-300'>{userInfo.role}</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 bg-slate-800/80 py-8 px-16 rounded-2xl shadow-xl">
                    <div className="text-xl font-bold text-center mb-4">Change the Profile Information</div>
                    <form className="pt-6" onSubmit={changeUserNameOrEmail}>
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            value={userInfo.name}
                            className="font-base rounded-full shadow-md block w-full py-3 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal"
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
                            className="font-base mb-3 mt-8 rounded-full shadow-md block w-full py-3 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal"
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
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className="flex gap-2 text-lg font-bold text-left mb-2"><LockClosedIcon className='size-6' />Change Password Form</div>
                                <div className='w-1/4 mb-8 border-t-2 border-dotted border-slate-300 '></div>
                            </div>
                            <div>
                                {passwordError && <p className=" flex gap-2 items-center text-red-400"><ExclamationTriangleIcon className='size-5 text-red-500' /> {passwordError}</p>}
                            </div>
                        </div>

                        <form className='grid grid-cols-9 gap-6' onSubmit={changePasswordHandaler}>
                            <input type={inputType} placeholder="Old password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} className=" col-span-3 font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-900 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />
                            <input type={inputType} placeholder="New password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className=" col-span-3 font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-900 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />
                            <div className='col-span-1 py-2'>
                                <EyeSlashIcon className='size-7 cursor-pointer' onMouseEnter={()=>{setInputType("text")}} onMouseLeave={()=>{setInputType("password")}} />
                            </div>
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

                        <form className='grid grid-cols-8' onSubmit={profileHandler}  >

                            <div className='col-span-6'>
                                <label htmlFor="profile" className="block mb-1 ms-2 text-sm font-medium text-slate-100">Profile</label>
                                <label htmlFor="profile"
                                    className="flex flex-col items-center justify-center bg-slate-900 w-full h-32 border-2 border-slate-300 border-dashed hover:border-dotted rounded-xl cursor-pointer  hover:bg-slate-800/95">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <CloudIcon className='size-12' />
                                        <p className="mb-2 text-sm text-slate-500"><span className="font-semibold">Click and uplode the profile</span> or drag and drop </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">SVG , JPG , IMG</p>
                                    </div>
                                    <input id="profile" type="file" className="hidden" onChange={(event) => {
                                        setImage(event.target.files[0]);
                                    }} />
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
