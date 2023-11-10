const Header = () => {
  return (
    <div className="bg-[#5D2EE3] w-full">
      <div className="flex items-stretch">
        <div className="p-2 text-white">Logo</div>
        <a href="/contact">
          <div className="p-2 text-white right-0 absolute">About us</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
