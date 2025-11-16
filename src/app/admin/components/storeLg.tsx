// export default function StoreLg({ products }) {
//   return (
//     <table className="w-full border-collapse text-sm hidden md:inline-table  text-white ">
//       <thead className="text-left bg-[#494949] text-white">
//         <tr>
//           <th className="p-3">Product</th>
//           <th className="p-3">Variants</th>
//           <th className="p-3">Pricing</th>
//           <th className="p-3">Stock</th>
//           <th className="p-3">Dates</th>
//           <th className="p-3">Status</th>
//           <th className="p-3">Rating</th>
//         </tr>
//       </thead>

//       <tbody>
//         {products.map((product) => (
//           <tr className="border-b border-neutral-800  ">
//             {/* Product */}
//             <td className="p-3">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 relative rounded-md">
//                   <Image
//                     alt={product.name}
//                     src={product.images[0].url}
//                     width={20}
//                     height={20}
//                     className="absolute w-full h-full object-cover bg-white"
//                   ></Image>
//                 </div>
//                 <div>
//                   <p className="font-medium">{product?.name}</p>
//                   <p className="text-xs">ID: {product?.productId}</p>
//                   <p className="text-xs ">{product?.category}</p>
//                 </div>
//               </div>
//             </td>

//             {/* Variants */}
//             <td className="p-3 text-xs ">
//               <p>SM — Black, White, Pink</p>
//               <p>MD — Black</p>
//               <p>XL — Pink, Red</p>
//             </td>

//             {/* Pricing */}
//             <td className="p-3">
//               <p className="text-sm font-medium">${product?.basePrice}</p>
//               <p className="text-xs">Discount: {product?.discountPercent}%</p>
//               <p className="text-xs">Sale: {product?.salePercent}%</p>
//               <p className="text-xs text-green-600 font-semibold">
//                 Final: $processing
//               </p>
//             </td>

//             {/* Stock */}
//             <td className="p-3 text-xs ">
//               <p>In : {product?.totalStock}</p>
//               <p>Sold: {product?.sold}</p>
//               <p>Available: {product?.availableQuantity}</p>
//             </td>

//             {/* Dates */}
//             <td className="p-3 text-xs">
//               <p>Added: {product?.addedDate}</p>
//               <p>Updated: {product?.updatedDate}</p>
//             </td>

//             {/* Status */}
//             <td className="p-3">
//               <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
//                 {product?.status}
//               </span>
//             </td>

//             {/* Rating */}
//             <td className="p-3 text-yellow-500 text-sm">⭐ 4.7</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
