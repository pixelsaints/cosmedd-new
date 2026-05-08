"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

export default function CatalogDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power4.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });

      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.inOut",
      });
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
          <button onClick={onClose}><X /></button>
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