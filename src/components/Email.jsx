import React, { useState } from "react";
import { ContactMeImg } from "../assets";

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Email = () => {
  const [data, setData] = useState({ name: "", email: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", msg: string }

  const textHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      setData({ name: "", email: "", text: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please email me at sabhimanu707@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="w-full flex flex-col items-center gap-10 py-16">
      <h2 className="text-3xl font-bold border border-black dark:border-white px-6 py-2 text-black dark:text-white">
        Let’s Connect
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ContactMeImg}
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <form
            name="contact"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white dark:bg-[#04133e] p-6 rounded-xl shadow-lg"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot: hidden from people, filled in by spam bots */}
            <input
              type="text"
              name="bot-field"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={data.name}
              onChange={textHandler}
              required
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={data.email}
              onChange={textHandler}
              required
              className={inputClass}
            />

            <textarea
              name="text"
              placeholder="Your Message"
              value={data.text}
              onChange={textHandler}
              rows="4"
              required
              className={`${inputClass} resize-none`}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                role="status"
                className={`text-sm ${
                  status.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;