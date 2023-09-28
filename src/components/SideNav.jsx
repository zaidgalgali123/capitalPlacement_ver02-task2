import { AiOutlineHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { IoDocumentSharp } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
const SideNav = () => {
  return (
    <div className=" col-start-1 col-end-2 row-start-1 row-end-3 ">
      <div className="mx-auto h-14 w-14 mt-4 rounded-full bg-gray-200"></div>
      <AiOutlineHome className="text-3xl mx-auto my-6 cursor-pointer bg-[#E9EFFF] text-sky-400 p-3 rounded-md h-max w-max" />
      <MdPeopleAlt className="text-2xl my-6 cursor-pointer h-max w-max mx-auto rounded-md " />
      <BsFillCalendarMinusFill className="text-2xl mx-auto my-6 cursor-pointer" />
      <BsFillShareFill className="text-2xl mx-auto my-6 cursor-pointer" />
      <IoDocumentSharp className="text-2xl mx-auto my-6 cursor-pointer" />
      <IoDocumentTextSharp className="text-2xl mx-auto my-6 cursor-pointer" />
      <AiTwotoneHeart className="text-2xl mx-auto my-6 cursor-pointer" />
      <AiOutlineLeft className="text-2xl mx-auto my-6 cursor-pointer" />
    </div>
  );
};

export default SideNav;
