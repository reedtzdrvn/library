const SmallSlide = ({ image, author, title }) => {
  return (
    <div className="!w-[200px] cursor-pointer">
      <div className="mb-2">
        <img className="!w-[200px] !h-[300px] rounded-md" src={image} />
      </div>
      <span className="text-gray-500 font-[Roboto] hover:underline">{author}</span>
      <br />
      <span className="font-[Roboto] font-medium block mt-1">{title}</span>
    </div>
  );
};

export default SmallSlide;
