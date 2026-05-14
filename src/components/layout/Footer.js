import TransitionLink from "@/components/transitions/TransitionLink";
import { nav } from "@/data/menu";

export default function Footer() {
  return (
    <>
      <footer className="footer">

        {/* 1. Brand Statement */}
        <div className="footer__top w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="logo">
            <TransitionLink href="/">
              <img src="/images/logo-white.svg" alt="Cosmedd" />
            </TransitionLink>
          </div>
          <div className="desc ml-auto lg:w-[50%] mt-8 lg:mt-0">
            <div className="text-[16px] leading-7 text-white/70">Cosmedd Healthcare delivers pharmaceutical formulations, nutraceuticals, APIs, medical devices, and wellness export solutions worldwide.</div>
          </div>
        </div>

        {/* 2. Core Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-12 lg:gap-24">
          <div className="footer__col">
            <h4>Products</h4>
            <ul className="flex flex-col divide-y divide-white/10 gap-3">
              {nav
                .find((item) => item.name === "Products")?.submenu?.map((sub) => (
                  <li key={sub.name}>
                    <TransitionLink href={sub.href} className="menu-link">
                      <span data-title={sub.name}>
                        {sub.name}
                      </span>
                    </TransitionLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul className="flex flex-col divide-y divide-white/10 gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <TransitionLink href={item.href}>
                    {item.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <div className="flex flex-col divide-y divide-white/10 gap-3">
              <a href="mailto:info@cosmedd.com" className="text-white/70 hover:text-white transition pb-2">info@cosmedd.com</a>
              <a href="tel:+918049529579" className="text-white/70 hover:text-white transition pb-2">+91 80 495 29579</a>
              <p className="text-white/70">No. 84, 3rd Floor, Vishwa Parva Mansion
                21st Main, Banashankari II Stage
                Bangalore - 560070 INDIA</p>
            </div>
          </div>

        </div>

        {/* 3. Info Strip */}
        <div className="flex flex-col lg:flex-row justify-center py-4 text-white/50 gap-4 lg:gap-8 border-t border-b border-white/10 my-8">
          <span>ISO Certified Processes</span>
          <span>Data Protected Care Systems</span>
          <span>HIPAA-style Compliance Standards</span>
        </div>

        {/* 4. Bottom Bar */}
        <div className="footer__bottom flex flex-col lg:flex-row justify-between pb-6 text-white/60">
          <p>© 2026 Cosmedd. All rights reserved.</p>
          <p>Healthcare clarity through structured systems.</p>
        </div>

      </footer>
    </>
  )
}
