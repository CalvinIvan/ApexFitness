const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="w-[89%] m-auto max-w-[1400px] ">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-1 md:text-2xl text-xl font-semibold">
            Get In Touch!
          </h3>

          <p className="text-gray-400 max-w-md mx-auto">
            We would love to hear from you! Please give us 24 - 48 hours to
            respond to any inquiries
          </p>
        </div>
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-4/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.698440835359!2d-79.38327432416894!3d43.65444205235105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb510746bd%3A0x8b89147b8cbbc837!2sCF%20Toronto%20Eaton%20Centre!5e0!3m2!1sen!2sca!4v1702603442662!5m2!1sen!2sca"
              width="100%"
              height="350"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col items-center">
          {/* FORM */}
          <div className="lg:col-span-6 w-4/5 my-5">
            <form>
              <div className="grid lg:grid-cols-12 lg:gap-5">
                <div className="lg:col-span-6 mb-10">
                  <input
                    name="name"
                    type="text"
                    className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="lg:col-span-6 mb-10">
                  <input
                    name="email"
                    type="email"
                    className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="mb-10">
                  <input
                    name="subject"
                    type="text"
                    className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    style={{ resize: "none" }}
                    name="message"
                    className="w-full py-2 px-3 border rounded h-28 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className=" bg-rose-500/95 text-white rounded-md py-3 px-5 hover:bg-rose-400 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
