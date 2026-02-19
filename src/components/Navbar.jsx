import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="
      fixed w-full top-0 z-50
      bg-[#08142B]/80
      backdrop-blur-md
      border-b border-white/10
    ">

      <div className="
        max-w-7xl mx-auto
        flex justify-between items-center
        px-6 py-4
      ">

        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="
            text-2xl font-bold
            bg-gradient-to-r
            from-cyan-400 to-blue-500
            bg-clip-text text-transparent
            cursor-pointer
          "
        >
          Technocorps
        </h1>

        {/* Desktop Menu */}
        <div className="
          hidden md:flex
          space-x-10
          text-gray-300
          font-medium
        ">

          <button onClick={() => scrollToSection("home")} className="hover:text-cyan-400">
            Home
          </button>

          <button onClick={() => scrollToSection("services")} className="hover:text-cyan-400">
            Services
          </button>

          <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400">
            About
          </button>

          <button onClick={() => scrollToSection("team")} className="hover:text-cyan-400">
            Team
          </button>

          <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400">
            Contact
          </button>

        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="
            hidden md:block
            bg-gradient-to-r
            from-blue-600 to-cyan-500
            px-5 py-2 rounded-lg
            shadow-lg
            hover:shadow-cyan-500/40
            transition
          "
        >
          Get Quote
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="
          md:hidden
          bg-[#08142B]
          border-t border-white/10
        ">

          <div className="
            flex flex-col
            text-center
            space-y-6
            py-10
            text-gray-300
            font-medium
          ">

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("services")}>
              Services
            </button>

            <button onClick={() => scrollToSection("team")}>
              Team
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                bg-gradient-to-r
                from-blue-600 to-cyan-500
                px-6 py-3
                rounded-lg
                mx-auto
                w-fit
              "
            >
              Get Quote
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
