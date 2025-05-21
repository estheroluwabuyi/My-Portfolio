import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4">
      <h1 className="text-[8rem] font-bold text-secondary">404</h1>
      <p className="text-[2rem] text-gray-700 mb-6">Page Not Found</p>
      <p className="text-gray-500 max-w-md mb-8">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-secondary text-white text-lg hover:bg-[#1a1a1a] transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
