import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function LandingCounter({ count }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter + 1 >= count) {
          clearInterval(interval); // پاک کردن تایمر وقتی مقدار به حد مورد نظر برسد
          return count;
        }
        return prevCounter + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex justify-center items-center gap-1">
      <div className="text-xl font-medium text-center text-slate-400">{counter.toLocaleString()}</div> 
      <PlusIcon className='size-6 text-slate-200' />
    </div>
  );
}

LandingCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
