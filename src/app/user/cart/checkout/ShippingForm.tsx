"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendOrders } from "@/utils/product/mutations/sendOrders";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TPostOrderItem } from "@/types/order";
// --------------------
// Zod Schema
// --------------------
const OrderSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  phone: z
    .string()
    .min(11, "Phone number must contain numbers")
    .regex(/^[0-9]+$/, "Phone must contain only digits"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(5, "Address must be at least 5 characters"),
});

type OrderFormType = z.infer<typeof OrderSchema>;

export default function CheckoutForm({
  orderedItems,
  total,
}: {
  orderedItems: TPostOrderItem[];
  total: number;
}) {
  const [orderText, setOrderText] = useState("Place Order");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormType>({
    resolver: zodResolver(OrderSchema),
  });
  const router = useRouter();

  // --------------------
  // Submit Handler
  // --------------------
  const onSubmit = async (data: OrderFormType) => {
    const orderObj = {
      items: orderedItems,
      buyerInfo: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: data.location,
      },
      deliveryCharge: 5,
      totalAmount: total + 5,
      paymentMethod: "cash on delivery",
    };

    try {
      const res = await sendOrders(orderObj, setOrderText);
      console.log("order res in order button", res);
      if (res.ok) {
        setOrderText("succeed");
        router.push("/user/orders");
      }
    } catch (err) {
      setOrderText("Failed");
    }
  };

  return (
    <section className="w-5/6 md:w-1/2 mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Shipping Details
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Who will receive ?</label>
          <input
            type="text"
            placeholder="John Doe"
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
            placeholder="019........"
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
          className="mt-3 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500  focus:scale-95 transition-all"
        >
          {orderText}
        </button>
      </form>
    </section>
  );
}
