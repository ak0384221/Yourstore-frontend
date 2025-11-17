export default function Checkout() {
  return (
    <>
      <div className="min-h-screen  text-black py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {/* --- Order Summary --- */}
          <section className="bg-[#dae4e6] border border-gray-800 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Product Name</span>
                <span>$120</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-2">
                <span>Total</span>
                <span>$130</span>
              </div>
            </div>
          </section>

          {/* --- User Details Form --- */}
          <section className="bg-[#dae4e6] text-black border border-gray-800 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>

            <form className="flex flex-col gap-5">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm  mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm  mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="johndoe@email.com"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm  mb-1">Street Address</label>
                <input
                  type="text"
                  placeholder="1234 Main St"
                  className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm  mb-1">City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">State</label>
                  <input
                    type="text"
                    placeholder="NY"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm  mb-1">Zip Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm  mb-1">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="w-full bg-transparent placeholder:text-neutral-600 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full md:w-max text-white px-10 py-3 bg-blue-600 hover:bg-blue-500  rounded-md font-medium transition-all cursor-pointer"
              >
                Place Order
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
