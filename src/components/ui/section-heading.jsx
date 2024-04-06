// const headingData = [
//   {
//     title: "Projects built with grants",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.",
//     link: "View all funded projects",
//     url: "/",
//   },
//   {
//     title: "What’s",
//     svgHandler: "new?",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.",
//     link: "Read more on our blog",
//     url: "/",
//     svg: {asd}
//   },
//   {
//     title: "Frequently asked",
//     svgHandler: "questions",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.",
//     svg: {asd}
//   },
// ]

// const SectionHeading = () => {
//   return (
//     headingData.map((data) => {
//       return (
//         <div className="flex justify-center relative overflow-hidden">
//             <div className="max-w-[600px] py-[80px] max-lg:py-[40px] z-50">
//               <div className="px-4 flex flex-col items-center space-y-6">
//                 <div className="flex flex-col space-y-4 text-center">
//                   <h2 className={`heading-lg text-white-100 ${data.svg &&"relative"}`}>{data.title}
//                   {data.svgHandler &&
//                     <span className="relative block">{data.svgHandler}
//                     </span>
//                   }
//                   </h2>
//                   <p className="paragraph-lg text-white-500">{data.description}</p>
//                 </div>
//                 {data.link &&
//                   <a href="/" className="paragraph-lg text-brand flex items-center space-x-2 hover:underline">
//                     <span>View all funded projects</span>
//                     <svg className="w-6 h-6">
//                       <use xlinkHref={Sprite + '#fi_arrow-right'}/>
//                     </svg>
//                   </a> 
//                 }
//               </div>
//             </div>
//             <div className="absolute top-0 min-w-[920px] h-full">
//               <img className="grid object-cover object-center z-10 h-full" width={920} height={320} src={Grid} alt="grid" />
//             </div>
//           </div>
//       )
//     })
//   )
// }

// export default SectionHeading