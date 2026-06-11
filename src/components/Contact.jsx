const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Feel free to reach out for internships, projects or collaboration.
        </p>

        <div className="space-y-4 mb-10 text-center text-gray-700 dark:text-gray-300">
          <p>
            <a
              href="mailto:deyaschaudhary14@gmail.com"
              className="hover:text-indigo-500 transition"
            >
              📧 deyaschaudhary14@gmail.com
            </a>
          </p>

          <p>
            <a
              href="tel:+9779827373834"
              className="hover:text-indigo-500 transition"
            >
              📱 +977 9827373834
            </a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/deyas-chaudhary-1a5981239"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              💼 LinkedIn: Deyas Chaudhary
            </a>
          </p>

          <p>
            <a
              href="https://github.com/deyas1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              💻 GitHub: deyas1
            </a>
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;