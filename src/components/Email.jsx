import React, { useState } from "react";
import { ContactMeImg } from "../assets";

const Email = () => {
    // const [data,setData] = useState({
    //     name:"",
    //     email:"",
    //     text:""
    // })
   
  // const textHandler = (e) => {
  //   const { name, value } = e.target;
  //   setData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
// const handleSubmit = (e) => {
//   e.preventDefault();
  
//   const formData = new FormData();
//   formData.append("form-name", "contact");
//   formData.append("name", data.name);
//   formData.append("email", data.email);
//   formData.append("text", data.text);
// console.log("form data ==>",formData)
//   fetch("/", {
//     method: "POST",
//     body: formData,
//   })
//     .then(() => alert("Success!"))
//     .catch((error) => alert(error));
// };

  return (
    <section className="w-full flex flex-col items-center gap-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold border border-black dark:border-white 
                     px-6 py-2 text-black dark:text-white">
        Let’s Connect
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full px-4">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ContactMeImg}
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
        <form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  className="flex flex-col gap-4 bg-white dark:bg-[#04133e] 
             p-6 rounded-xl shadow-lg"
>
  <input type="hidden" name="form-name" value="contact" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="p-3 rounded-md border border-gray-300 dark:border-gray-600
               bg-transparent text-black dark:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="p-3 rounded-md border border-gray-300 dark:border-gray-600
               bg-transparent text-black dark:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <textarea
    name="text"
    placeholder="Your Message"
    rows="4"
    className="p-3 rounded-md border border-gray-300 dark:border-gray-600
               bg-transparent text-black dark:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    required
  ></textarea>

  <button
    type="submit"
    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white
               py-3 rounded-md font-semibold transition duration-300"
  >
    Send Message
  </button>
</form>

        </div>

      </div>
    </section>
  );
};

export default Email;
