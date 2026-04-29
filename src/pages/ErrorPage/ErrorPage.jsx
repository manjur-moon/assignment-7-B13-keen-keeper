import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="keen-container flex min-h-[650px] items-center justify-center py-20">
      <div className="keen-card max-w-md px-6 py-10 text-center">
        <p className="text-6xl font-bold text-[#244d3f]">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-[#1f2937]">Page Not Found</h1>
        <p className="mt-2 text-sm leading-6 text-[#64748b]">
          The page you are looking for does not exist. Head back home and keep your
          friendships on track.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center rounded-lg bg-[#244d3f] px-5 text-sm font-semibold text-white transition hover:bg-[#1d3f34]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
