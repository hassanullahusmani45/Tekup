import { Link } from "react-router-dom";
import { ChatBubbleOvalLeftIcon, CommandLineIcon, DevicePhoneMobileIcon, EnvelopeIcon, LinkIcon, PaperClipIcon, PhoneIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";


import Logo from "../assets/images/logo-white.svg";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white px-6 py-5">

      <div className="grid grid-cols-4 gap-8 bg-slate-800 rounded-xl shadow-2xl p-5">
        {/* بخش لوگو و توضیحات */}
        <div className="col-span-2 text-left">
          <Link to={"/"}>
            <img src={Logo} className="w-24 h-24 rounded-full" alt="logo" />
          </Link>
          <div className="">
            Tekup is the best place for learning articles, offering insightful and high-quality content to help you stay ahead in technology and beyond. Whether you are a beginner or an expert, our articles are designed to inspire and educate, empowering you to expand your knowledge and skills.
          </div>
        </div>

        {/* بخش لینک‌ها */}
        <div className="col-span-1 text-left">
          <div className="flex items-center gap-1 my-5"><PaperClipIcon className="size-6" />Pages</div>
          <div className="text-sm leading-[2rem]">
            <Link to={"/posts"} className="flex items-center gap-x-1 text-white/80"><CommandLineIcon className="size-5 text-white" />Posts</Link>
            <Link to={"/abute"} className="flex items-center gap-x-1 text-white/80"><ChatBubbleOvalLeftIcon className="size-5 text-white" />Abute As</Link>
            <Link to={"/contact-as"} className="flex items-center gap-x-1 text-white/80"><LinkIcon className="size-5 text-white" />Contact As</Link>
          </div>
        </div>

        {/* بخش پشتیبانی */}
        <div className="col-span-1 text-left">
          <div className="flex gap-1 my-5"><RocketLaunchIcon className="size-6" />Support</div>
          <div className="text-sm leading-[2rem]">
            <div className="flex items-center gap-1"><EnvelopeIcon className="size-5" /> hassanullahusmani45@gmail.com</div>
            <div className="flex items-center gap-1"><DevicePhoneMobileIcon className="size-5" /> +93 772 181 609</div>
            <div className="flex items-center gap-1"><PhoneIcon className="size-5" /> 076 723 3172</div>
          </div>
        </div>

        <div className=" col-span-4 text-center border-t border-slate-600 py-4 mt-6">
          Copyright &copy; {currentYear} Tekup Posts
        </div>
      </div>


    </footer>
  );
}
