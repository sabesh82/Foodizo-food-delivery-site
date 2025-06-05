import { useState } from "react";
import { FaHamburger, FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#foods", label: "Foods" },
    { href: "#offers", label: "Offers" },
    { href: "#services", label: "Services" },
    { href: "#feedback", label: "Feedback" },
  ];
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-amber-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-19">
        {/*logo*/}
        <div className="flex gap-1 items-center text-2xl font-bold text-green-500 cursor-pointer">
          <FaHamburger />
          Foodizo
        </div>

        {/*mobile button*/}
        <button
          className=" absolute p-2 md:hidden top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuopen)}
        >
          {isMenuopen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*navlinks*/}
        <div className="hidden md:flex space-x-4 items-center">
          {navlinks.map((link, key) => (
            <a
              key={key}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text:lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                          hover:after:w-full after:bg-green-600 after:transition-all ${
                            activeLink === link.href
                              ? "text-green-600 after:w-full"
                              : "text-black dark:text-white"
                          }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/*desktop button*/}
        <div className="flex items-center space-x-5">
          <ThemeToggle />
          <button className="hidden md:flex text-green-500 dark:text-green-200 cursor-pointer">
            <FaShoppingCart size={20} />
          </button>
          <button className="hidden md:flex bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer">
            Register now
          </button>
        </div>
      </div>

      {/*mobile menu*/}
      <div>
        {isMenuopen && (
          <div className="md:hidden border border-b bg-amber-100 dark:bg-black">
            <div className="max-w-6xl mx-auto px-4 space-y-3">
              {navlinks.map((link, key) => (
                <a
                  key={key}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false), setActiveLink(link.href);
                  }}
                  className={`block text-md font-medium py-1 ${
                    activeLink === link.href
                      ? "text-green-600"
                      : "text-black  dark:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
