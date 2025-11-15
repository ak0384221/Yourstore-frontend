// export default function StoreSm({ products }) {
//   return (
//     <>
//       {/* Mobile version */}
//       <div className="md:hidden grid gap-2">
//         {/* Product Card */}
//         {products?.map((product) => {
//           return (
//             <div className="border rounded-md p-2 shadow-sm flex flex-col gap-2 text-white">
//               {/* Top row: Image + Name + Status */}
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
//                   <div className="flex flex-col">
//                     <p className="font-medium text-sm">Nike Air Max 90</p>
//                     <p className="text-xs ">ID: P-101 • Shoes • Nike</p>
//                   </div>
//                 </div>
//                 <span className=" text-green-600 px-2 py-0.5 rounded text-xs">
//                   Active
//                 </span>
//               </div>

//               {/* Middle row: Variants + Stock */}
//               <div className="flex justify-between text-xs">
//                 <div>
//                   <p className="font-medium">Variants:</p>
//                   <p>SM: Black, White, Pink</p>
//                   <p>MD: Black • XL: Pink, Red</p>
//                 </div>
//                 <div>
//                   <p className="font-medium">Stock:</p>
//                   <p>Sold: 320 / Avail: 180</p>
//                 </div>
//               </div>

//               {/* Bottom row: Pricing + Rating */}
//               <div className="flex justify-between items-center text-xs">
//                 <div>
//                   <p className="font-medium">Price:</p>
//                   <p>
//                     $120 | Disc 10% | Sale 5% |{" "}
//                     <span className="text-green-600 font-semibold">
//                       Final $102.6
//                     </span>
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <p className="text-yellow-500 font-medium">⭐ 4.7</p>
//                   <p className=" text-[10px]">Added 10/01 • Updated 10/25</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Repeat for other products */}
//       </div>
//     </>
//   );
// }
