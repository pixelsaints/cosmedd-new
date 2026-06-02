"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useDrawer } from "@/context/DrawerContext";

export default function CatalogDrawer() {
  const { isOpen, closeDrawer } = useDrawer();

  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      source: "Catalog Drawer",
      name: formData.get("name"),
      company: formData.get("company"),
      country: formData.get("country"),
      email: formData.get("email"),
      productInterest: formData.get("productInterest"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  };

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input name="name" placeholder="Full Name" className="input" required />
            <input name="company" placeholder="Company Name" className="input" />
            <input name="country" placeholder="Country" className="input" />
            <input name="email" type="email" placeholder="Business Email" className="input" required />

            <select name="productInterest" className="input" defaultValue="">
              <option value="" disabled>Product Interest</option>
              <option>Pharma Generics</option>
              <option>APIs & Excipients</option>
              <option>Nutraceuticals</option>
              <option>Medical Devices</option>
              <option>Veterinary Solutions</option>
              <option>Other</option>
            </select>

            <textarea name="message" placeholder="Requirement Details" rows="5" className="input" required />

            {message && (
              <p className={`text-sm leading-6 ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>
                {message}
              </p>
            )}

            <button type="submit" className="btn btn-primary mt-4" disabled={status === "submitting"}>
              <span data-title={status === "submitting" ? "Sending..." : "Submit Request"}>
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
