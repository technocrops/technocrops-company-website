function Footer() {
  return (
    <footer className="
      bg-[#08142B]
      text-white
      pt-20
      pb-10
    ">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Column 1 — Company */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              TechnoCrops
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              We build digital products, automation systems,
              and scalable platforms that help businesses
              grow faster and operate smarter.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-gray-400">

              <i className="ri-linkedin-fill hover:text-cyan-400 cursor-pointer"></i>
              <i className="ri-twitter-fill hover:text-cyan-400 cursor-pointer"></i>
              <i className="ri-facebook-fill hover:text-cyan-400 cursor-pointer"></i>
              <i className="ri-instagram-fill hover:text-cyan-400 cursor-pointer"></i>

            </div>

          </div>

          {/* Column 2 — Services */}
          <div>

            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="hover:text-white cursor-pointer">
                Web App Development
              </li>

              <li className="hover:text-white cursor-pointer">
                Blockchain Solutions
              </li>

              <li className="hover:text-white cursor-pointer">
                Software Testing
              </li>

              <li className="hover:text-white cursor-pointer">
                Staff Augmentation
              </li>

              <li className="hover:text-white cursor-pointer">
                AI Integrations
              </li>

            </ul>

          </div>

          {/* Column 3 — Quick Links */}
          <div>

            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="hover:text-white cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer">
                Services
              </li>

              <li className="hover:text-white cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Column 4 — Contact */}
          <div>

            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li>
                📍 M5, First Floor, Shagun Tower,
                Vijay Nagar, Indore
              </li>

              <li>
                ✉️ info@technocorps.com
              </li>

              <li>
                ☎️ +91 99999 99999
              </li>

            </ul>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          mb-8
        "></div>

        {/* BOTTOM BAR */}
        <div className="
          flex flex-col md:flex-row
          justify-between
          items-center
          text-gray-500
          text-sm
          gap-4
        ">

          <p>
            © {new Date().getFullYear()} TechnoCrops.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
