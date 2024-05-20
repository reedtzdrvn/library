const AuthorCard = ({ name, image }) => {
    return (
      <div className="flex justify-center transition cursor-pointer group hover:text-[#e84565]">
        <div>
          <img className="w-[300px] h-[400px] rounded-md border-2 transition group-hover:border-[#e84565]" src={image} />
          <span className="2xl:text-2xl lg:text-lg">{name}</span>
        </div>
      </div>
    );
  };
  
  export default AuthorCard;
  