import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className="max-container  flex max-sm:flex-col justify-evenly items-center gap-5">
      <h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input className="input" placeholder="subscribe@nike.com"></input>
        <div className="flex  items-center max-sm:justify-end  max-sm:w-full" >
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
