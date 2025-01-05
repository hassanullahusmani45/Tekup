import { Link } from "react-router-dom";
import { AtSymbolIcon, ChatBubbleOvalLeftIcon, CommandLineIcon, DevicePhoneMobileIcon, LinkIcon, PaperClipIcon, PhoneIcon, RocketLaunchIcon, UsersIcon } from "@heroicons/react/24/outline";


import Logo from "../assets/images/logo-white.svg";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-5">

      <div className="grid grid-cols-4 gap-8 bg-slate-800 rounded-xl shadow-2xl p-5">
        {/* بخش لوگو و توضیحات */}
        <div className="col-span-2 text-left">
          <Link to={"/"}>
            <img src={Logo} className="w-24 h-24 rounded-full" alt="logo" />
          </Link>
          <div className="text-justify">
            The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
            This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels.
          </div>
        </div>

        {/* بخش لینک‌ها */}
        <div className="col-span-1 text-left">
          <div className="flex items-center gap-1 my-5"><PaperClipIcon className="size-6" />Pages</div>
          <div className="text-sm leading-[2rem]">
            <Link to={"/users"} className="flex items-center gap-x-1 text-white/80"><UsersIcon className="size-5 text-white" />Users</Link>
            <Link to={"/posts"} className="flex items-center gap-x-1 text-white/80"><CommandLineIcon className="size-5 text-white" />Posts</Link>
            <Link to={"/abute"} className="flex items-center gap-x-1 text-white/80"><ChatBubbleOvalLeftIcon className="size-5 text-white" />Abute As</Link>
            <Link to={"/contact-as"} className="flex items-center gap-x-1 text-white/80"><LinkIcon className="size-5 text-white" />Contact As</Link>
          </div>
        </div>

        {/* بخش پشتیبانی */}
        <div className="col-span-1 text-left">
          <div className="flex gap-1 my-5"><RocketLaunchIcon className="size-6" />Support</div>
          <div className="text-sm leading-[2rem]">
            <div className="flex items-center gap-1"><AtSymbolIcon className="size-5" /> hassanullahusmani45@gmail.com</div>
            <div className="flex items-center gap-1"><DevicePhoneMobileIcon className="size-5" /> +93 772 181 609</div>
            <div className="flex items-center gap-1"><PhoneIcon className="size-5" /> 076 723 3172</div>
          </div>
        </div>
      </div>


    </footer>
  );
}
