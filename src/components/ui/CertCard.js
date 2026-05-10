import React from 'react'

export default function CertCard() {
  return (

    <div className="flex h-28 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <span className="text-lg font-semibold tracking-wide text-slate-800">
        {title}
      </span>
    </div>
  )
}