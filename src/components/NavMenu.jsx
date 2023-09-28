import { AiOutlineDown } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
const NavMenu = () => {
  return (
    <div className="bg-[#F9FAFF] justify-between flex items-center col-start-2 col-end-4 row-start-1 row-end-2">
      <div className="ml-3">
        <h2 className="text-blue-700 text-xl font-semibold">
          London Internship Program
        </h2>
        <p className="text-neutral-950 text-xs font-light">London</p>
      </div>
      <div className="w-[321px] h-10 ml-20 px-4 py-2 bg-white rounded-2xl shadow justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="text-blue-700 text-base font-medium  leading-snug">
            Opportunity Browsing
          </div>
        </div>
        <AiOutlineDown className="" />
      </div>
      <div className="flex gap-4">
        <BsFillPersonCheckFill className="text-blue-700 text-2xl font-medium p-2 rounded-md bg-blue-200 h-max w-max" />
        <BsFillPersonCheckFill className="text-blue-700 text-2xl font-medium p-2 rounded-md bg-blue-200 h-max w-max" />
        <BsFillPersonCheckFill className="text-blue-700 text-2xl font-medium p-2 rounded-md bg-blue-200 h-max w-max" />
        <BsFillPersonCheckFill className="text-blue-700 text-2xl font-medium p-2 rounded-md bg-blue-200 h-max w-max" />
        <BsFillPersonCheckFill className="text-blue-700 text-2xl font-medium p-2 rounded-md bg-blue-200 h-max w-max" />
      </div>
      <div className="w-[230px] h-10 rounded-lg justify-start items-center inline-flex mr-4">
        <div className="w-[195px] self-stretch px-4 py-2 bg-blue-700 rounded-tl-lg rounded-bl-lg justify-start items-center gap-2.5 flex">
          <div className="text-white text-[13px] font-normal leading-snug">
            Move To Video Interview I
          </div>
        </div>
        <div className="w-px h-10 relative bg-white" />
        <div className="w-[34px] self-stretch px-2.5 py-3 bg-blue-700 rounded-tr-lg rounded-br-lg justify-start items-center gap-2.5 flex">
          <AiOutlineDown className="text-white font-bold" />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
