"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

export default function CatalogDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    gsap.set(drawerRef.current, { x: "100%" });
    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    tl.current = gsap.timeline({ paused: true });

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
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
        },
        0
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        className="drawer-overlay"
      />

      <div
        ref={drawerRef}
        className="drawer"
      >
        <div className="drawer-top flex flex-row justify-between">
          <h3>Request Product Catalog</h3>
          <button className=" cursor-pointer " onClick={onClose}><X /></button>
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

            <textarea
              placeholder="Requirement Details"
              rows="5"
              className="input"
            />

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