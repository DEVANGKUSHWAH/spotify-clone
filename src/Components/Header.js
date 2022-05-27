import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-18"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-500 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-green-600 hover:text-green-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
