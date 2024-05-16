const BigSlide = ({ imageSrc, title, desc }) => {
  return (
    <div className="w-full select-none h-[310px] bg-white flex rounded-md">
      <div className="h-full w-1/3">
        <img className="w-full h-full rounded-md" alt="" src={imageSrc} />
      </div>

      <div className="flex w-2/3 px-6 break-words">
        <div className="flex justify-center flex-col">
          <div className="mb-4">
            <span
              className="font-[400] text-[28px] leading-9"
              style={{ fontFamily: "Old Standard TT" }}
            >
              {title}
            </span>
          </div>
          <div className="mb-4 text-gray-600 font-[Roboto] leading-6">
            {desc}
          </div>
          <div>
            <button className="px-5 py-3 rounded-lg bg-[#e84565] hover:bg-[#b8324d] transition text-[#fff]">
              Читать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSlide;
