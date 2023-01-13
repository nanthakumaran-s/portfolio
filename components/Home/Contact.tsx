import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkwlwgo');

  if (state.succeeded) {
    return (
      <div
        id="contact"
        className="flex flex-col w-full items-center justify-center py-11 px-8 lg:px-48"
      >
        <div className="flex flex-col w-full lg:ml-20">
          <h2 className="font-patron font-black text-center text-2xl lg:text-4xl text-skin-base">
            Contact Me
          </h2>
          <div className="w-full bg-skin-fill-secondary rounded-lg flex flex-col items-center justify-center p-10 mt-8 bg-opacity-60 lg:py-16">
            <AiOutlineCheckCircle className="h-14 w-14 fill-green-500 lg:h-24 lg:w-24" />
            <h3 className="font-patron font-bold text-lg text-center mt-2 text-skin-base lg:text-2xl">
              Thanks for your message!
            </h3>
            <p className="font-patron font-normal text-md text-center mt-2 text-gray-600 lg:text-xl">
              I will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="flex flex-col w-full items-center justify-center py-11 px-8 lg:px-48"
    >
      <div className="flex flex-col w-full lg:ml-20">
        <h2 className="font-patron font-black text-center text-2xl lg:text-4xl text-skin-base">
          Contact Me
        </h2>
        <form className="flex flex-col justify-center mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xl lg:text-2xl font-medium font-patron text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                className="font-patron mt-1 px-2 py-2 block w-full rounded-md border border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 text-lg placeholder-slate-400 text-skin-base lg:text-xl"
                placeholder="your name"
              />
            </div>
            <div>
              <label className="block text-xl lg:text-2xl font-medium font-patron text-gray-700">
                Mail
              </label>
              <input
                type="email"
                required
                name="mail"
                id="mail"
                className="font-patron mt-1 px-3 py-2 block w-full rounded-md border border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 text-lg placeholder-slate-400 text-skin-base lg:text-xl"
                placeholder="your mail"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xl lg:text-2xl font-medium font-patron text-gray-700">
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="font-patron mt-1 px-3 py-2 block w-full rounded-md border border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 text-lg placeholder-slate-400 resize-none h-32 text-skin-base lg:text-xl"
              placeholder="your message"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <input
              type="submit"
              value="Submit"
              className="px-5 py-3 bg-skin-button-muted rounded-md font-bold text-skin-footer text-md hover:opacity-90 lg:text-xl font-patron transition ease-in-out delay-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
