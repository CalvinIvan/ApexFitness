import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-[5rem] flex h-full w-[95vw] scroll-mt-[0.5rem] flex-col items-center justify-center sm:mb-[10rem] sm:mt-[5rem] sm:max-w-4xl sm:scroll-mt-[4rem]"
    >
      <h1 className="mb-[2.5rem] text-center text-3xl font-medium text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Get in touch with us!
      </h1>
      <form className="flex w-[85%] flex-col">
        <div className="flex flex-row">
          <input
            placeholder="Name"
            required
            maxLength={150}
            type="name"
            id="name"
            name="name"
            className="mb-5 h-14 w-full rounded-md border-2 border-gray-50 pl-3 shadow-lg shadow-gray-200"
          />
        </div>
        <div>
          <input
            placeholder="Email"
            required
            minLength={5}
            maxLength={150}
            type="email"
            id="email"
            name="email"
            className="mb-5 h-14 w-full rounded-md border-2 border-gray-50 pl-3 shadow-lg shadow-gray-200"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={6}
          required
          minLength={10}
          maxLength={500}
          name="message"
          className="w-full rounded-md border border-gray-200 bg-gray-50 p-4 shadow-lg shadow-gray-200"
        />
        <button
          type="submit"
          className="mt-4 flex w-28 items-center justify-center rounded-full bg-gradient-to-tr from-rose-400 to-red-500 py-2 text-lg font-medium text-white transition hover:scale-105"
        >
          Send
        </button>
      </form>
    </section>
  );
}
