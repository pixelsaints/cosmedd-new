import TransitionLink from "@/components/transitions/TransitionLink";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <div className="footer-top flex flex-col lg:flex-row lg:justify-between border-b border-white/20 pb-8">
          <div className="logo">
            <TransitionLink href="/">
              <img
                src="/images/logo.svg"
                alt="COSMEDD - Healthcare LLP"
              />
            </TransitionLink>
            <p className="mt-6 text-white/70">Advanced skincare solutions</p>
          </div>
          <div className="social-links">

          </div>
        </div> */}

        <div className="copy-right text-center p-4">
          <div className="text-white/60 text-[14px]">© 2026 Cosmedd Healthcare. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}
