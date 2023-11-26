import insta from "./insta.svg";

const Header = () => {
  return (
    <div className="bg-[#5D2EE3] w-full">
      <div className="flex items-stretch">
        <a href="/">
          <img src={insta} className="m-2 ml-5" alt="logo" />
        </a>
        <a href="/about">
          <div className="p-2 text-white right-0 absolute font-mc text-2xl text-center mr-3 mt-2">
            About us
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
