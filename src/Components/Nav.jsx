import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const ShowMobileNav = () => {
    let mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.classList.contains("-top-96")) {
      mobileNav.classList.toggle("top-10");
    }
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hamburger hidden max-lg:block cursor-pointer"
          onClick={ShowMobileNav}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
        </div>

        <ul className="mobile-nav flex-1  flex justify-center items-center gap-10 absolute -right-5 -top-96  transition-all mt-6 ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
