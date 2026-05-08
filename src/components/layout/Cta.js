"use client"

import { useState } from "react";
import TransitionLink from "@/components/transitions/TransitionLink"
import CatalogDrawer from "./drawer"

export default function Cta() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>

      <div className="cta flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[40%] mx-auto text-center">
          <h2 className="text-white mb-6">Build Your Healthcare Supply Network</h2>
          <p className="lead text-white/70">Partner with Cosmedd for trusted sourcing, quality healthcare products, and scalable global supply solutions.</p>

          <div className="buttons mt-8 flex items-center justify-center gap-3 lg:gap-4 w-full mx-auto">
            <TransitionLink href="/products" className="btn btn-primary">
              <span data-title="Become A Partner">
                Become A Partner
              </span>
            </TransitionLink>

            <button
              onClick={openDrawer}
              className="btn btn-outline"
            >
              <span data-title="Request Catalog">
                Request Catalog
              </span>
            </button>
          </div>
        </div>
      </div>
      <CatalogDrawer
        isOpen={isOpen}
        onClose={closeDrawer}
      />
    </>
  )
}
