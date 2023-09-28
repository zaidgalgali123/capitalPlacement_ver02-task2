const PersonCard = () => {
  return (
    <div className="w-[851px] h-[143px] justify-start items-center gap-2 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <div className="w-4 h-4 relative bg-white">
          <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border border-slate-400" />
        </div>
      </div>
      <div className="grow shrink basis-0 h-[143px] p-4 bg-white rounded-2xl justify-start items-center gap-[135px] flex">
        <div className="h-[111px] justify-start items-center gap-6 flex">
          <div className="pl-3.5 pr-[15px] pt-[12.50px] pb-[13.50px] bg-indigo-50 rounded-[100px] justify-center items-center flex">
            <div className="text-blue-100 text-xl font-semibold font-['Poppins']">
              AS
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-black text-sm font-semibold font-['Poppins']">
              Aaliyah Sanderson
            </div>
            <div className="text-black text-[10px] font-medium font-['Poppins']">
              Riyadh, Saudi Arabia
            </div>
            <div className="self-stretch text-black text-[10px] font-light font-['Poppins']">
              Bachelor - Cambridge University (2023 - 2023)
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="text-blue-700 text-[8px] font-normal font-['Poppins']">
                #top_candidate
              </div>
              <div className="text-blue-700 text-[8px] font-normal font-['Poppins']">
                #top_candidate
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="px-2.5 py-0.5 bg-slate-50 rounded-2xl justify-center items-center gap-2.5 flex">
                <div className="text-cyan-700 text-[8px] font-medium font-['Poppins']">
                  New York
                </div>
              </div>
              <div className="px-2.5 py-0.5 bg-slate-50 rounded-2xl justify-center items-center gap-2.5 flex">
                <div className="text-cyan-700 text-[8px] font-medium font-['Poppins']">
                  Marketing
                </div>
              </div>
              <div className="px-2.5 py-0.5 bg-slate-50 rounded-2xl justify-center items-center gap-2.5 flex">
                <div className="text-cyan-700 text-[8px] font-medium font-['Poppins']">
                  London
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
