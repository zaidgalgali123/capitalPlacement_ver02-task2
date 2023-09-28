import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="bg-[#F9FAFF] col-start-2 col-end-3 row-start-2 row-end-3">
      <div className="w-[90%] mx-4 h-12 p-4 bg-white rounded-lg border border-zinc-100 justify-between items-center inline-flex">
        <div className="justify-start w-full items-center gap-2.5 flex">
          <AiOutlineSearch className="w-5 h-5 relative" />
          <input
            type="text"
            placeholder="Serach by name, edu, exp or #tag"
            className="text-gray-400 text-sm font-normal  leading-snug focus:outline-none focus:border-none w-full"
          />
        </div>
        <FaExclamationCircle className="w-5 h-5 mx-2 relative" />
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p className="font-semibold">Filters</p>
        <p>0 Selected</p>
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p>Personal information</p>
        <AiOutlineDown />
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p>Education</p>
        <AiOutlineDown />
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p>Work Experience</p>
        <AiOutlineDown />
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p>Activity Filter</p>
        <AiOutlineDown />
      </div>
      <div className="flex px-2 py-3 bg-white mx-1 my-1 justify-between items-center">
        <p>Advance Filter</p>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Sidebar;
