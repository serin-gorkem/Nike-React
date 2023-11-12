const Button = ({ label, iconURL }) => {
  return (
    <button className=" flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none bg-coral-red  text-white">
      {label}

      {iconURL &&<img
        src={iconURL}
        alt="arrow icon"
        className="ml-2 rounded-full h-5 aspect-square"
      />
      }
    </button>
  );
};

export default Button;
