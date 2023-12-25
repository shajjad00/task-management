const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-[#e69f9a]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-[#e69f9a]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-[#e69f9a]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#e69f9a] hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e69f9a] focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6  text-lg text-gray-700">
          Need help? Reach us at{" "}
          <a
            href="mailto:contact@yourcompany.com"
            className="text-[#e69f9a]"
          >
            contact@taskSynchub.com
          </a>{" "}
          or call <span className="text-[#e69f9a]">+880-123-456-7890</span>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
