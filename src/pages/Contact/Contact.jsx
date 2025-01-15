import { ChatBubbleOvalLeftIcon, CommandLineIcon, DevicePhoneMobileIcon, EnvelopeIcon, GlobeAltIcon, LinkIcon, MapPinIcon, PaperClipIcon, PhoneIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import bgImage from "../../assets/images/bgImage.svg";
import logo from "../../assets/images/logo-white.svg";
import hassanProfile from "../../assets/images/hassan.JPG";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function Contact() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <Header />
            <div
                className="fixed inset-0 -z-10 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="px-6 pt-28 pb-6 text-white ">

                <div className=" grid grid-cols-2 gap-20 mt-10">
                    <div className="col-span-1 text-left bg-slate-800/80 p-8 mx-20 rounded-2xl shadow-xl">
                        <div className="text-xl font-bold text-center mb-4">Contact As</div>
                        <form className="pt-6">
                            <div className="flex flex-col gap-4 items-center">
                                <input type="text" placeholder="Full Name" className="font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />
                                <input type="email" placeholder="Email" className="font-base rounded-full shadow-md block w-full p-2.5 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" />
                                <textarea placeholder="Message" className="font-base rounded-xl shadow-md block w-full p-2.5 px-6 bg-slate-950/70 placeholder:text-gray-200 placeholder:text-sm placeholder:font-normal" rows={11} />
                                <button type="submit" className="w-fit mt-6 bg-blue-500 hover:bg-blue-600 px-10 py-2.5 rounded-full ">Send</button>
                            </div>
                        </form>
                    </div>

                    <div className=" relative col-span-1 text-left bg-slate-800/80 p-8 mr-20 rounded-2xl shadow-xl">

                        <div className="flex bg-inherit dark:bg-slate-600 justify-center items-center w-32 h-32 rounded-full absolute mx-auto right-0 left-0 -inset-y-10 transform duration-300">
                            <img className=" min-w-32 min-h-32 p-2 rounded-full border-4 border-y border-dotted animate-pulse"
                                src={hassanProfile} />
                        </div>
                        <div className="text-base font-bold text-left mt-8">Abute Me</div>
                        <p className="text-white/80 text-justify pt-4 leading-7">
                            My name is Hasssanullah usmani I’m a Full-Stack Developer with over three years of experience in web development.
                            <br />
                            I have worked as a back-end developer at Entire Thinkers Technology and am currently working as a Full-Stack Developer at the Ministry of Transport and Aviation in Afghanistan contry.
                        </p>

                        <div className="text-base font-semibold text-left mt-8">My Skiles</div>
                        <p className="text-white/80 text-justify pt-4 leading-7">
                            Laravel, PHP, JavaScript, React , Vue, Tailwind CSS, Bootstrap, HTML, CSS, Flex-box, CssGrid, MySQL, MongoDB, Git, GitHub, and more.
                        </p>
                        <div className="text-base font-semibold text-left mt-8">Contect Me</div>
                        <p className="text-white/80 text-justify pt-4 leading-7">
                            <div className="flex items-center gap-2"><MapPinIcon className="size-5" />Kabul Tarafick square 3 street Afghanistan</div>
                            <div className="flex items-center gap-2"><EnvelopeIcon className="size-5" /> hassanullahusmani45@gmail.com</div>
                            <div className="flex items-center gap-2"><DevicePhoneMobileIcon className="size-5" /> +93 767 233 172</div>
                            <div className="flex items-center gap-2"><GlobeAltIcon className="size-5" /> https://www.entirethinkers.com</div>
                        </p>
                    </div>
                </div>
            </div>

            {/* footer part */}
            <div className="grid grid-cols-4 gap-8 bg-slate-800 text-white rounded-2xl shadow-2xl p-5 m-6">

                <div className="col-span-2 text-left">
                    <Link to={"/"}>
                        <img src={logo} className="w-24 h-24 rounded-full" alt="logo" />
                    </Link>
                    <div className="">
                        Tekup is the best place for learning articles, offering insightful and high-quality content to help you stay ahead in technology and beyond. Whether you are a beginner or an expert, our articles are designed to inspire and educate, empowering you to expand your knowledge and skills.
                    </div>
                </div>

                <div className="col-span-1 text-left">
                    <div className="flex items-center gap-1 my-5"><PaperClipIcon className="size-6" />Pages</div>
                    <div className="text-sm leading-[2rem]">
                        <Link to={"/posts"} className="flex items-center gap-x-1 text-white/80"><CommandLineIcon className="size-5 text-white" />Posts</Link>
                        <Link to={"/abute"} className="flex items-center gap-x-1 text-white/80"><ChatBubbleOvalLeftIcon className="size-5 text-white" />Abute As</Link>
                        <Link to={"/contact-as"} className="flex items-center gap-x-1 text-white/80"><LinkIcon className="size-5 text-white" />Contact As</Link>
                    </div>
                </div>

                <div className="col-span-1 text-left">
                    <div className="flex gap-1 my-5"><RocketLaunchIcon className="size-6" />Support</div>
                    <div className="text-sm leading-7">
                        <div className="flex items-center gap-1"><EnvelopeIcon className="size-5" /> hassanullahusmani45@gmail.com</div>
                        <div className="flex items-center gap-1"><DevicePhoneMobileIcon className="size-5" /> +93 772 181 609</div>
                        <div className="flex items-center gap-1"><PhoneIcon className="size-5" /> 076 723 3172</div>
                    </div>
                </div>

                <div className=" col-span-4 text-center border-t border-slate-600 py-4 mt-6">
                    Copyright &copy; {currentYear} Tekup Posts
                </div>
            </div>
        </>
    );
}
