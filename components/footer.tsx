import React from "react";

export default function Footer() {
  return (
    <footer className="mb-[3rem] flex flex-col items-center justify-center">
      <div className="mt-16 w-[75%] border-t border-gray-300 pt-8"></div>
      <small className="flex h-full w-[75%] items-center justify-center">
        <p className="text-gray-700">
          <span className="flex flex-col items-center justify-center font-bold">
            &copy; {new Date().getFullYear()} Apex Fitness <br />
          </span>
          <span className="font-semibold">Website created with:</span> React &
          Next.js, Typescript & Tailwind CSS.
        </p>
      </small>
    </footer>
  );
}
