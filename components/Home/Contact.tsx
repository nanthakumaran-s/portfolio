import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col w-full items-center justify-center mt-20 py-16 px-8 lg:px-48"
    >
      <div className="flex flex-col lg:ml-20">
        <h2 className="font-patron font-black text-center text-2xl lg:text-4xl">Things I know</h2>
      </div>

      {/* <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
