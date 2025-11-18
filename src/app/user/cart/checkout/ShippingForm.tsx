"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendOrders } from "@/utils/product/mutations/sendOrders";

// --------------------
// Zod Schema
// --------------------
const OrderSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  phone: z
    .string()
    .min(8, "Phone number must contain numbers")
    .regex(/^[0-9]+$/, "Phone must contain only digits"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(5, "Address must be at least 5 characters"),
});

type OrderFormType = z.infer<typeof OrderSchema>;

export default function CheckoutForm({
  orderedItems,
  total,
}: {
  orderedItems: any[];
  total: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormType>({
    resolver: zodResolver(OrderSchema),
  });

  // --------------------
  // Submit Handler
  // --------------------
  const onSubmit = (data: OrderFormType) => {
    console.log("hello");
    const orderObj = {
      items: orderedItems,
      buyerInfo: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: data.location,
      },
      deliveryCharge: 100,
      totalAmount: total + 100,
      paymentMethod: "cash on delivery",
    };

    try {
      const res = sendOrders(orderObj);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    console.log("FINAL ORDER OBJ →", orderObj);
  };

  return (
    <section className="w-5/6 md:w-1/2 mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Shipping Details
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Ayaan"
            {...register("name")}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-xs text-red-600 min-h-4">{errors.name?.message}</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="01986230723"
            {...register("phone")}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-xs text-red-600 min-h-4">
            {errors.phone?.message}
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Mail Address</label>
          <input
            type="email"
            placeholder="hello@gmail.com"
            {...register("email")}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-xs text-red-600 min-h-4">
            {errors.email?.message}
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Location / Address</label>
          <textarea
            rows={2}
            placeholder="Dhaka, Bangladesh"
            {...register("location")}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <p className="text-xs text-red-600 min-h-4">
            {errors.location?.message}
          </p>
        </div>

        {/* Payment */}
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-sm text-gray-700 font-medium">Payment Method</p>

          <label className="flex items-center gap-2 bg-gray-100 border border-gray-300 px-3 py-2 rounded-lg cursor-pointer">
            <input type="radio" checked readOnly />
            <span className="text-sm font-medium">Cash on Delivery</span>
          </label>

          <label className="flex items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 rounded-lg opacity-40 cursor-not-allowed">
            <input type="radio" disabled />
            <span className="text-sm">Online Payment (Disabled)</span>
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}
