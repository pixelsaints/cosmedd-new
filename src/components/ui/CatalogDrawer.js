"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useDrawer } from "@/context/DrawerContext";

export default function CatalogDrawer() {
  const { isOpen, closeDrawer } = useDrawer();

  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    gsap.set(drawerRef.current, {
      x: "100%",
      opacity: 1,
    });

    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current
      .to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      })
      .to(
        drawerRef.current,
        {
          x: 0,
          duration: 0.65,
          ease: "power3.inOut",
        },
        0
      );

    tl.current.eventCallback("onReverseComplete", () => {
      gsap.set(overlayRef.current, {
        pointerEvents: "none",
      });
    });

    return () => {
      tl.current?.kill();
      document.body.classList.remove("menu-open");
    };
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      document.body.classList.add("menu-open");
      tl.current.play();
    } else {
      document.body.classList.remove("menu-open");
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <div ref={overlayRef} onClick={closeDrawer} className="drawer-overlay" />

      <div ref={drawerRef} className="drawer">
        <div className="drawer-top flex flex-row justify-between">
          <h3>Send Quick Enquiry</h3>
          <button className=" cursor-pointer " onClick={closeDrawer}>
            <X />
          </button>
        </div>
        <div className="drawer-content">
          <form className="flex flex-col gap-4">
            <input placeholder="Full Name" className="input" />
            <input placeholder="Company Name" className="input" />
            <input placeholder="Country" className="input" />
            <input placeholder="Business Email" className="input" />

            <select className="input">
              <option>Product Interest</option>
              <option>Pharma Generics</option>
              <option>APIs & Excipients</option>
              <option>Nutraceuticals</option>
              <option>Medical Devices</option>
              <option>Veterinary Solutions</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Requirement Details" rows="5" className="input" />

            <button type="submit" className="btn btn-primary mt-4">
              <span data-title="Submit Request">
                Submit Request
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}