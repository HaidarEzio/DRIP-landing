const NavBar = () => {
  return (
    <header className="relative text-gray-400 bg-black ">
      <div className="flex flex-col flex-wrap items-center p-5 mx-20 md:flex-row">
        <nav className="flex flex-wrap items-center italic cursor-pointer lg:w-2/5 md:ml-auto">
          <a className="mr-5 hover:text-yellow-400">HOME</a>
          <a className="mr-5 hover:text-yellow-400">ABOUT US</a>
          <a className="mr-5 hover:text-yellow-400">MARKETPLACE</a>
        </nav>
        <a
          href="/"
          className="flex items-center order-first mb-4 font-medium text-white lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
        >
          <img src="/static/logo2.png" alt="logo" />
        </a>
        <div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
          <button className="inline-flex items-center mt-4 md:mt-0">Socials here</button>
          <div className="absolute right-0 w-[28rem] -top-5 ">
            <img className="object-contain" src="/static/vector-top.png" alt="vector" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
