const Genre = ({ image, name }) => {
    return (
      <div className="relative w-full flex justify-center cursor-pointer transition hover:text-[#e84565] border-2 hover:border-[#e84565] rounded-lg">
        <img className="rounded-md" src={image} alt={name} />
        <div className="absolute bottom-0 w-full h-20 bg-white flex items-center justify-center rounded-md">
          <span className="text-2xl">{name}</span>
        </div>
      </div>
    );
  };

export default Genre