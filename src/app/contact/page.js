"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!recaptchaSiteKey) return;

    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    let cancelled = false;
    const waitForRecaptcha = async () => {
      await new Promise((resolve) => {
        const timeout = window.setTimeout(resolve, 10000);
        const check = () => {
          if (cancelled) {
            window.clearTimeout(timeout);
            resolve();
            return;
          }
          if (window.grecaptcha?.ready) {
            window.clearTimeout(timeout);
            resolve();
            return;
          }
          window.setTimeout(check, 250);
        };
        check();
      });

      if (cancelled) return;
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(() => setCaptchaReady(true));
      }
    };

    waitForRecaptcha();

    return () => {
      cancelled = true;
    };
  }, [recaptchaSiteKey]);

  const getRecaptchaToken = async () => {
    if (!recaptchaSiteKey || !window.grecaptcha?.execute) {
      return "";
    }
    return window.grecaptcha.execute(recaptchaSiteKey, {
      action: "contact_form",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const recaptchaToken = await getRecaptchaToken();

    if (!recaptchaToken) {
      throw new Error(
        "Captcha validation failed. Please refresh the page and try again."
      );
    }

    const payload = {
      source: "Contact Page",
      name: formData.get("name"),
      company: formData.get("company"),
      country: formData.get("country"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      productInterest: formData.get("productInterest"),
      message: formData.get("message"),
      recaptchaToken,
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
        throw new Error(result.error || "Unable to submit your enquiry.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <>
      <PageHeader
        title="Start a Healthcare Partnership"
        description="Share your sourcing, export, or product requirements with our team and we will get back to you with the right next steps."
        bgImage="/images/sourcing-solutions.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="sub-title mb-6">Contact Us</div>
            <h2 className="text-black mb-5">Tell us what you need</h2>
            <p className="text-black/70 mb-8">
              Whether you are exploring product sourcing, documentation support,
              or long-term healthcare supply partnerships, send the details and
              the Cosmedd team will respond directly.
            </p>

            <div className="grid gap-4">
              <div className="rounded-lg border border-slate-200 p-5">
                <div className="font-semibold text-black mb-1">Phone</div>
                <a href="tel:+918049529579" className="text-pri-600 font-semibold">
                  +91 80 4952 9579
                </a>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <div className="font-semibold text-black mb-1">Location</div>
                <p className="text-black/70">
                  No. 84, 3rd Floor, <br />
                  Vishwa Parva Mansion 21st Main,  <br />
                  Banashankari II Stage Bangalore - 560070 INDIA
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 lg:p-8 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                placeholder="Full Name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Business Email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="company"
                placeholder="Company Name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
              />
              <input
                name="country"
                placeholder="Country"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
              />
              <select
                name="productInterest"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
                defaultValue=""
              >
                <option value="" disabled>Product Interest</option>
                <option>Pharma Generics</option>
                <option>APIs & Excipients</option>
                <option>Nutraceuticals</option>
                <option>Medical Devices</option>
                <option>Veterinary Solutions</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Requirement Details"
              rows="6"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-pri-500 focus:ring-4 focus:ring-pri-100"
              required
            />

            {message && (
              <p className={`text-sm leading-6 ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>
                {message}
              </p>
            )}

            {!recaptchaSiteKey && (
              <p className="text-sm text-red-600">
                Captcha is not configured. Please contact the site administrator.
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary mt-2 justify-center"
              disabled={status === "submitting" || !captchaReady || !recaptchaSiteKey}
            >
              <span data-title={status === "submitting" ? "Sending..." : "Send Enquiry"}>
                {status === "submitting" ? "Sending..." : "Send Enquiry"}
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
