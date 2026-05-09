"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { useDrawer } from "@/context/DrawerContext";
import TransitionLink from "@/components/transitions/TransitionLink";

export default function Header() {

  const { openDrawer } = useDrawer();

  const pathname = usePathname();

  const menuRef = useRef(null);
  const menuTL = useRef(null);

  const [menuActive, setMenuActive] = useState(false);

  const nav = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality & Compliance", href: "/quality-compliance" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Global Presence", href: "/global-presence" },
  ];

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      x: "-100%",
    });

    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      .to(menuRef.current, {
        x: 0,
        duration: 0.55,
        ease: "power3.inOut",
        pointerEvents: "auto"
      })

      .from(".mobile-menu li", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
      }, "+=0.1")

      .from(".mobile-menu-footer > span", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.35,
        ease: "power3.out",
      }, "-=0.1");

    return () => {
      menuTL.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!menuTL.current) return;

    if (menuActive) {
      document.body.style.overflow = "hidden";
      menuTL.current.play();
    } else {
      menuTL.current.reverse();
      document.body.style.overflow = "";
    }
  }, [menuActive]);

  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  return (
    <>
      <header id="site-header">
        <div className="container-fluid mx-auto flex justify-between items-center header">

          <div className="logo">
            <TransitionLink href="/">
              <img
                src="/images/logo.svg"
                alt="COSMEDD - Healthcare LLP"
              />
            </TransitionLink>
          </div>

          {/* Menu */}
          <nav className="menu-wrapper flex items-center">
            <ul className="menu flex flex-row">
              {nav.map((item) => (
                <li key={item.href}>
                  <TransitionLink
                    href={item.href}
                    className="menu-link"
                    onClick={() => {
                      setMenuActive(false);
                      gsap.set(menuRef.current, { x: "100%" });
                    }}
                  >
                    <span
                      data-title={item.name}
                      className={`${pathname === item.href
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                        }`}
                    >
                      {item.name}
                    </span>
                  </TransitionLink>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="cta-btn">
              <TransitionLink href="/contact" className="btn btn-small">
                <span data-title="Contact Us">Contact Us</span>
              </TransitionLink>
            </div>
          </nav>

          <button className={`hamburger ${menuActive ? "is-active" : ""}`} onClick={() => setMenuActive(!menuActive)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </header>

      {/* LEFT FIXED */}
      <div className="fixed left">
        <div className="fixed-inner">
          <p className="title">Connect With Us</p>
          <ul className="social">
            <li>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" /></svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT FIXED */}
      <div className="fixed right">
        <div className="fixed-inner">
          <div className="contact-info">
            <span>Let's Talk</span>
            <span className="divider"></span>
            <span>
              <a href="tel:+918049529579">+91 80 4952 9579</a>
            </span>
          </div>

          <div className="back_to_top">
            <a href="#top">
              Back to top
              <span className="line"></span>
            </a>
          </div>
        </div>
      </div>

      <div ref={menuRef} className="mobile-menu-wrapper">
        <div className="mobile-menu-content">
          <ul className="mobile-menu flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <TransitionLink href={item.href} className="menu-link">
                  <span
                    data-title={item.name}
                    className={`${pathname === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu-footer">
          <span>
            <TransitionLink href="/contact" className="btn btn-primary btn-small">
              <span data-title="Become A Partner">Become A Partner</span>
            </TransitionLink>
          </span>
          <span>
            <button
              onClick={openDrawer}
              className="btn btn-small btn-outline"
            >
              <span data-title="Request Catalog">
                Request Catalog
              </span>
            </button>
          </span>
        </div>
      </div>

      <div id="top"></div>
    </>
  );
}