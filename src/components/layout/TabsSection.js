"use client";

import { useState } from "react";

export default function TabsSection({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="section-wrap">
      {/* Tabs */}
      <div className="h-scroll-container mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`tabs-btns ${activeTab.id === tab.id
              ? "active"
              : ""
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products */}
      <div
        className={`grid gap-8 ${activeTab.products.length === 1
          ? "grid-cols-1"
          : activeTab.products.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-3"
          }`}
      >
        {activeTab.products.map((product, i) => (
          <div key={i} className={`rounded-xl overflow-hidden shadow-sm ${activeTab.products.length === 1 ? "flex flex-col lg:flex-row justify-between gap-8" : ""}`}>
            <div className={activeTab.products.length === 1 ? "w-[50%]" : ""} >
              <img
                src={product.image}
                alt={product.title}
                className={`h-[20em] w-full object-cover`}
              />
            </div>

            <div className={`lg:p-4 ${activeTab.products.length === 1 ? "w-[50%]" : ""}`}>
              <h5 className="mb-4 text-black font-semibold">{product.title}</h5>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}