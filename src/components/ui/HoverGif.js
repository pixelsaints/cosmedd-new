"use client";

export default function HoverGif({
  pngSrc,
  gifSrc,
  alt = "",
  className = "",
}) {
  return (
    <div className={`hover-image ${className}`}>
      {/* Static PNG */}
      <img
        src={pngSrc}
        alt={alt}
        className=""
      />

      {/* Animated GIF */}
      <img
        src={gifSrc}
        alt={alt}
      />
    </div>
  );
}