import { assetPaths } from "../../../utils/assets";

const Footer = () => {
  return (
    <footer className="keen-footer-green mt-auto h-auto min-h-[413px] px-6 py-20 text-white">
      <div className="keen-container text-center">
        <div>
          <img
            src={assetPaths.footerLogo}
            alt="KeenKeeper"
            className="mx-auto h-auto w-[260px] max-w-full object-contain sm:w-[412px]"
          />
          <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-white/70">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-base font-semibold text-white/90">Social Links</p>
          <div className="mt-4 flex justify-center gap-3">
            {assetPaths.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white transition hover:scale-105"
              >
                <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-7">
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
