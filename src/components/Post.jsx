import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Post(props) {

  return (
    <div className={`flex flex-col justify-between rounded-xl ${ !props.className && "bg-slate-800"} ${props.className}`}>
      <Link to={props.link}><img className="w-full h-40 rounded-t-xl overflow-hidden" src={props.src} /></Link>
      <div className="px-4 py-8 flex flex-col justify-between h-[295px]">
        <Link to={props.link} className="font-medium line-clamp-2">{props.title}</Link>
        <div className="text-slate-400 text-sm line-clamp-3">{props.desc}</div>

        <div className="flex justify-between items-center text-slate-300 pb-4 border-b border-b-slate-500">
          <div className="line-clamp-1">{props.author}</div>
          <div className="text-nowrap">{props.date}</div>
        </div>
        <Link to={props.link} className="flex justify-center items-center gap-1 text-sm">
          Study the article
          <ArrowRightCircleIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

Post.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
}


