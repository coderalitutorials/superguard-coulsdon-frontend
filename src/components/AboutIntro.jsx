

// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneDisplay: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const points = [
//     {
//       number: "01",
//       title: "Trace The Activity",
//       text: "We look for droppings, nesting signs, access gaps, harbourage areas and the conditions helping the pest problem continue.",
//     },
//     {
//       number: "02",
//       title: "Build The Right Treatment",
//       text: "Every visit is planned around the pest type, property layout and level of activity found during inspection.",
//     },
//     {
//       number: "03",
//       title: "Reduce The Return Risk",
//       text: "We explain practical prevention steps so your home, flat or business has better protection after treatment.",
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#F8F6FF] py-24 lg:py-32 font-sans"
//     >
//       {/* ANGLED PURPLE BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute left-0 top-0 h-[62%] w-full bg-[#5F52B5] lg:h-full lg:w-[58%]"
//           style={{
//             clipPath:
//               "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%)",
//           }}
//         />
//         <div className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-white/12 blur-3xl" />
//         <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-[#5F52B5]/15 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* TOP AREA */}
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6">
//             <span className="inline-block border border-white/35 bg-white/12 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">
//               About {LOCAL.businessName}
//             </span>

//             <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Smart Pest Control Solutions For Walworth Properties.
//             </h2>

//             <div className="mt-7 h-1.5 w-24 bg-white/70" />

//             <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/85">
//               SuperGuard Walworth provides professional pest control for homes,
//               flats, landlords, shops and commercial buildings. We focus on
//               finding the cause, applying the right treatment and helping reduce
//               the risk of pests coming back.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-2xl shadow-black/20 transition-all hover:-translate-y-1"
//               >
//                 Call {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/services"
//                 className="border border-white/30 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wider text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-[#5F52B5]"
//               >
//                 View Our Services
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT IMAGE + INFO CARD */}
//           <div className="lg:col-span-6">
//             <div className="relative">
//               <div className="relative overflow-hidden bg-white p-3 shadow-2xl shadow-[#17122F]/20">
//                 <img
//                   src="/images/about-superguard.webp"
//                   alt={`${LOCAL.businessName} pest inspection in ${LOCAL.area}`}
//                   className="h-[430px] w-full object-cover md:h-[610px]"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-3 bg-gradient-to-t from-[#17122F]/85 via-[#17122F]/15 to-transparent" />
//               </div>

//               <div className="absolute -bottom-8 left-6 right-6 bg-[#17122F] p-6 text-white shadow-2xl lg:left-auto lg:right-[-10px] lg:max-w-md">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#AFA6FF]">
//                   Our Local Base
//                 </span>

//                 <h3 className="mt-2 text-3xl font-black">
//                   {LOCAL.area}, {LOCAL.postcode}
//                 </h3>

//                 <p className="mt-3 text-sm font-semibold leading-relaxed text-white/75">
//                   {LOCAL.address}
//                 </p>

//                 <div className="mt-5 border-t border-white/15 pt-5">
//                   <span className="block text-xs font-semibold text-white/60">
//                     Speak to our Walworth team
//                   </span>
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-1 block text-2xl font-black text-white hover:text-[#AFA6FF]"
//                   >
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* PROCESS CARDS */}
//         <div className="mt-20 grid gap-6 lg:grid-cols-3">
//           {points.map((item) => (
//             <div
//               key={item.number}
//               className="group relative overflow-hidden bg-white p-7 shadow-xl shadow-[#17122F]/6 transition-all hover:-translate-y-1"
//             >
//               <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#5F52B5]/10 text-3xl font-black text-[#5F52B5]">
//                 {item.number}
//               </div>

//               <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-lg font-black text-white">
//                 {item.number}
//               </span>

//               <h4 className="mt-8 max-w-xs text-2xl font-black text-[#17122F]">
//                 {item.title}
//               </h4>

//               <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                 {item.text}
//               </p>

//               <div className="mt-7 h-1 w-14 bg-[#5F52B5] transition-all group-hover:w-24" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Building2,
//   Check,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const benefits = [
//     "Residential pest control",
//     "Commercial pest support",
//     "Targeted property inspections",
//     "Practical prevention guidance",
//   ];

//   const process = [
//     {
//       number: "01",
//       title: "Understand",
//       text: "We inspect the property, identify pest activity and locate the conditions allowing the problem to continue.",
//     },
//     {
//       number: "02",
//       title: "Treat",
//       text: "We select a targeted treatment according to the pest, property type and level of activity found.",
//     },
//     {
//       number: "03",
//       title: "Protect",
//       text: "We provide practical prevention guidance to help reduce the chance of future pest activity.",
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#F8F7FC] font-sans"
//     >
//       {/* SCHEMA DETAILS */}
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta
//           itemProp="addressCountry"
//           content="GB"
//         />
//       </div>

//       {/* ===================================================== */}
//       {/* IMAGE ABOUT AREA */}
//       {/* ===================================================== */}

//       <div className="relative min-h-[790px] overflow-hidden sm:min-h-[820px] lg:min-h-[760px]">
//         {/* BACKGROUND IMAGE */}
//         <img
//           src="/images/about-superguard.webp"
//           alt={`${LOCAL.company} professional pest control service in ${LOCAL.area}`}
//           className="absolute inset-0 h-full w-full object-cover object-center"
//           loading="lazy"
//         />

//         {/* PURPLE TINT TO MATCH HERO */}
//         <div className="absolute inset-0 bg-[#151126]/55" />

//         <div className="absolute inset-0 bg-[#6055A6]/25 mix-blend-multiply" />

//         {/* SOFT CENTER FOCUS */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,85,166,0.04)_0%,rgba(19,15,38,0.18)_55%,rgba(19,15,38,0.48)_100%)]" />

//         {/* TOP AND BOTTOM DEPTH */}
//         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,13,34,0.38)_0%,rgba(17,13,34,0.04)_32%,rgba(17,13,34,0.08)_68%,rgba(17,13,34,0.62)_100%)]" />

//         {/* SUBTLE PURPLE GLOW */}
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6055A6]/20 blur-[150px]" />

//         {/* BACKGROUND GRID */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
//             backgroundSize: "76px 76px",
//           }}
//         />

//         {/* MAIN CONTAINER */}
//         <div className="relative z-10 mx-auto flex min-h-[790px] max-w-[1450px] flex-col px-5 py-8 sm:min-h-[820px] sm:px-8 md:px-10 lg:min-h-[760px] lg:px-14">
//           {/* TOP INFORMATION LINE */}
//           <div className="flex flex-col items-center gap-4 border-b border-white/20 pb-5 text-center sm:flex-row sm:justify-between">
//             <div className="flex items-center gap-3">
//               <ShieldCheck
//                 size={17}
//                 strokeWidth={2.4}
//                 className="text-[#AFA6FF]"
//               />

//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white sm:text-[10px]">
//                 About SuperGuard Holborn
//               </span>
//             </div>

//             <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-white/85 sm:text-[10px] sm:tracking-[0.17em]">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.4}
//                 className="shrink-0 text-white"
//               />

//               <span>{LOCAL.fullAddress}</span>
//             </div>
//           </div>

//           {/* CENTER CONTENT */}
//           <div className="flex flex-1 items-center justify-center py-12 text-center sm:py-16 lg:py-10">
//             <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center">
//               {/* SMALL INTRO LINE */}
//               <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
//                 <span className="h-px w-8 bg-white/65 sm:w-20" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#C9C3FF] sm:text-[10px] sm:tracking-[0.3em]">
//                   Local knowledge. Professional approach.
//                 </span>

//                 <span className="h-px w-8 bg-white/65 sm:w-20" />
//               </div>

//               {/* MAIN HEADING */}
//               <h2 className="mt-6 max-w-[1000px] text-[43px] font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-[60px] md:text-[72px] lg:text-[82px]">
//                 Professional Pest Control
//                 <span className="block">
//                   For{" "}
//                   <span className="text-[#AFA6FF]">
//                     Holborn
//                   </span>
//                 </span>
//                 Properties.
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="mt-7 max-w-[720px] text-sm font-medium leading-7 text-white/90 sm:text-base sm:leading-8">
//                 SuperGuard Holborn provides professional pest control for homes,
//                 flats, landlords, offices and commercial properties throughout
//                 Holborn and Central London.
//               </p>

//               <p className="mt-3 max-w-[720px] text-sm font-medium leading-7 text-white/75 sm:text-base sm:leading-8">
//                 We begin by understanding where the activity is coming from,
//                 apply a treatment suited to the property and explain practical
//                 steps that may help reduce the risk of the problem returning.
//               </p>

//               {/* BENEFITS ROW */}
//               <div className="mt-8 grid w-full max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
//                 {benefits.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left"
//                   >
//                     <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#766AC8] text-white shadow-[0_10px_35px_rgba(96,85,166,0.35)]">
//                       <Check
//                         size={18}
//                         strokeWidth={3}
//                       />
//                     </span>

//                     <span className="max-w-[145px] text-[12px] font-black leading-4 text-white sm:text-[13px]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* BUTTONS */}
//               <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
//                 <Link
//                   to="/about-us"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#6055A6] px-8 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(20,16,40,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7468C3] sm:w-auto"
//                 >
//                   Discover Our Approach

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.7}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 border border-white/70 bg-white/[0.03] px-8 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6] sm:w-auto"
//                 >
//                   Explore Services

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.7}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===================================================== */}
//       {/* PROCESS AREA */}
//       {/* ===================================================== */}

//       <div className="relative overflow-hidden bg-[#F8F7FC] py-16 sm:py-20 lg:py-24">
//         {/* SOFT PURPLE BACKGROUND GLOW */}
//         <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[850px] -translate-x-1/2 rounded-full bg-[#6055A6]/10 blur-[120px]" />

//         {/* BACKGROUND WORD */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap text-[90px] font-black uppercase leading-none tracking-[-0.08em] text-[#6055A6]/[0.035] sm:text-[145px] lg:text-[205px]"
//         >
//           Process
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 md:px-10">
//           {/* PROCESS HEADING */}
//           <div className="mx-auto max-w-[920px] text-center">
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//               Our Working Process
//             </span>

//             <h3 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#171327] sm:text-4xl lg:text-5xl">
//               A clear approach from inspection to prevention.
//             </h3>

//             <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-500">
//               Every service is planned around the property, the pest and the
//               level of activity found during inspection.
//             </p>
//           </div>

//           {/* PROCESS TIMELINE */}
//           <div className="relative mt-12 lg:mt-14">
//             {/* DESKTOP CONNECTING LINE */}
//             <div className="absolute left-[8%] right-[8%] top-[30px] hidden h-px bg-[#6055A6]/45 lg:block" />

//             <span className="absolute left-[8%] top-[27px] hidden h-[7px] w-[7px] rounded-full bg-[#6055A6] lg:block" />

//             <span className="absolute right-[8%] top-[27px] hidden h-[7px] w-[7px] rounded-full bg-[#6055A6] lg:block" />

//             <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
//               {process.map((item) => (
//                 <div
//                   key={item.number}
//                   className="group relative flex flex-col items-center text-center"
//                 >
//                   {/* NUMBER */}
//                   <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full border-[7px] border-[#F8F7FC] bg-[#6055A6] text-xl font-black text-white shadow-[0_12px_35px_rgba(96,85,166,0.24)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#171327]">
//                     {item.number}
//                   </div>

//                   {/* TITLE */}
//                   <h4 className="mt-5 text-2xl font-black tracking-[-0.03em] text-[#171327]">
//                     {item.title}
//                   </h4>

//                   {/* TEXT */}
//                   <p className="mt-3 max-w-[320px] text-sm font-medium leading-7 text-slate-600">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* BOTTOM INFORMATION */}
//           <div className="mt-16 grid gap-7 border-t border-[#6055A6]/15 pt-8 md:grid-cols-3">
//             {/* ADDRESS */}
//             <div className="flex items-start justify-center gap-4 text-center md:justify-start md:text-left">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                 <MapPin
//                   size={21}
//                   strokeWidth={2.4}
//                 />
//               </span>

//               <div>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
//                   Based At
//                 </span>

//                 <span className="mt-1 block text-sm font-black leading-6 text-[#171327]">
//                   {LOCAL.fullAddress}
//                 </span>
//               </div>
//             </div>

//             {/* COVERAGE */}
//             <div className="flex items-start justify-center gap-4 border-[#6055A6]/15 text-center md:border-x md:px-7 md:text-left">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                 <ShieldCheck
//                   size={21}
//                   strokeWidth={2.4}
//                 />
//               </span>

//               <div>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
//                   Serving
//                 </span>

//                 <span className="mt-1 block text-sm font-black leading-6 text-[#171327]">
//                   Holborn & Central London
//                 </span>
//               </div>
//             </div>

//             {/* PROPERTY TYPES */}
//             <div className="flex items-start justify-center gap-4 text-center md:justify-start md:pl-4 md:text-left">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                 <Building2
//                   size={21}
//                   strokeWidth={2.4}
//                 />
//               </span>

//               <div>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
//                   Supporting
//                 </span>

//                 <span className="mt-1 block text-sm font-black leading-6 text-[#171327]">
//                   Homes • Flats • Businesses
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   Check,
//   ClipboardCheck,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Target,
// } from "lucide-react";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     streetAddress: "14 Regency St",
//     fullAddress: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const fileEntries = [
//     {
//       code: "R01",
//       title: "Residential properties",
//       text: "Support for houses, flats, rented homes and managed properties.",
//     },
//     {
//       code: "C02",
//       title: "Commercial premises",
//       text: "Pest control support for offices, shops and business environments.",
//     },
//     {
//       code: "I03",
//       title: "Inspection-led planning",
//       text: "The service is planned around the pest activity and property conditions found.",
//     },
//     {
//       code: "P04",
//       title: "Prevention guidance",
//       text: "Clear recommendations to help reduce pest access and repeated activity.",
//     },
//   ];

//   const process = [
//     {
//       number: "01",
//       icon: Search,
//       title: "Read the signs",
//       text: "We inspect the affected areas, identify visible evidence and assess how pests may be entering or remaining within the property.",
//     },
//     {
//       number: "02",
//       icon: Target,
//       title: "Define the response",
//       text: "The treatment plan is selected according to the pest involved, the property type and the level of activity discovered.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       title: "Strengthen protection",
//       text: "We explain practical measures that may help reduce pest access, shelter and the likelihood of repeated activity.",
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#EEEAF7] py-20 sm:py-24 lg:py-28"
//     >
//       {/* SCHEMA */}
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* BACKGROUND BLUEPRINT GRID */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.045]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//           backgroundSize: "42px 42px",
//         }}
//       />

//       <div className="pointer-events-none absolute -left-52 top-20 h-[520px] w-[520px] rounded-full border-[90px] border-[#6254B4]/[0.045]" />

//       <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-[#6254B4]/8 blur-[130px]" />

//       <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
//         {/* FILE HEADER */}
//         <div className="flex flex-col gap-6 border-y border-[#CFC8DD] py-5 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6254B4] text-white">
//               <ClipboardCheck size={20} strokeWidth={2.7} />
//             </span>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                 Westminster Property Defence File
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#181425]">
//                 SuperGuard Services Westminster
//               </span>
//             </div>
//           </div>

//           {/* <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
//             <span>File: SGW-01</span>
//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />
//             <span>Area: Westminster</span>
//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />
//             <span>Status: Active</span>
//           </div> */}
//         </div>

//         {/* MAIN FILE CONTENT */}
//         <div className="mt-10 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
//           {/* INSPECTION LENS */}
//           <div className="relative mx-auto w-full max-w-[610px]">
//             <div className="relative aspect-square">
//               {/* OUTER TECHNICAL RINGS */}
//               <div className="absolute inset-0 rounded-full border border-[#6254B4]/25" />

//               <div className="absolute inset-[20px] rounded-full border border-dashed border-[#6254B4]/30" />

//               <div className="absolute inset-[44px] rounded-full border border-[#6254B4]/15" />

//               {/* CROSSHAIR */}
//               <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#6254B4]/12" />

//               <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#6254B4]/12" />

//               {/* IMAGE LENS */}
//               <div className="absolute inset-[62px] overflow-hidden rounded-full bg-[#181425] shadow-[0_35px_90px_rgba(35,27,64,0.24)] sm:inset-[76px]">
//                 <img
//                   src="/images/about-superguard.webp"
//                   alt={`${LOCAL.company} pest control service in Westminster`}
//                   className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.05]"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#181425]/75 via-transparent to-[#6254B4]/15" />

//                 {/* SCAN LINES */}
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-[0.08]"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
//                     backgroundSize: "100% 9px",
//                   }}
//                 />

//                 <div className="absolute bottom-0 left-0 right-0 p-7 text-center text-white">
//                   <span className="text-[8px] font-black uppercase tracking-[0.23em] text-white/55">
//                     Inspection View
//                   </span>

//                   <p className="mb-0 mt-2 text-lg font-black leading-tight sm:text-2xl">
//                     Property conditions guide the service plan.
//                   </p>
//                 </div>
//               </div>

//               {/* NUMBERED MARKERS */}
//               <div className="absolute left-[4%] top-[23%] flex items-center gap-2">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6254B4] text-[10px] font-black text-white shadow-lg">
//                   01
//                 </span>

//                 <span className="hidden text-[8px] font-black uppercase tracking-[0.17em] text-[#6254B4] sm:block">
//                   Activity
//                 </span>
//               </div>

//               <div className="absolute right-[1%] top-[48%] flex items-center gap-2">
//                 <span className="hidden text-[8px] font-black uppercase tracking-[0.17em] text-[#6254B4] sm:block">
//                   Access
//                 </span>

//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#181425] text-[10px] font-black text-white shadow-lg">
//                   02
//                 </span>
//               </div>

//               <div className="absolute bottom-[5%] left-[26%] flex items-center gap-2">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6254B4] shadow-lg">
//                   03
//                 </span>

//                 <span className="hidden text-[8px] font-black uppercase tracking-[0.17em] text-[#6254B4] sm:block">
//                   Conditions
//                 </span>
//               </div>

//               {/* LOCATION STAMP */}
//               <div className="absolute right-[10%] top-[8%] rotate-[8deg] rounded-[18px] border-2 border-[#6254B4]/35 bg-[#EEEAF7]/90 px-4 py-3 text-center backdrop-blur-sm">
//                 <MapPin
//                   size={16}
//                   strokeWidth={2.7}
//                   className="mx-auto text-[#6254B4]"
//                 />

//                 <span className="mt-2 block text-[7px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                   Westminster
//                 </span>

//                 <span className="mt-1 block text-[9px] font-black text-[#181425]">
//                   SW1P 4BD
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* REPORT CONTENT */}
//           <div>
//             <div className="flex items-start gap-5">
//               <span className="hidden text-[72px] font-black leading-none tracking-[-0.08em] text-[#6254B4]/15 sm:block lg:text-[92px]">
//                 01
//               </span>

//               <div>
//                 <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                   Local Service Profile
//                 </span>

//                 <h2 className="mt-5 max-w-[760px] text-[42px] font-black leading-[0.95] tracking-[-0.055em] text-[#181425] sm:text-[58px] lg:text-[68px]">
//                   We look beyond the pest
//                   <span className="block text-[#6254B4]">
//                     to understand the property.
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             <div className="mt-8 grid gap-6 border-l-2 border-[#6254B4] pl-6 sm:pl-8">
//               <p className="m-0 max-w-2xl text-[15px] font-medium leading-8 text-slate-600 sm:text-base">
//                 SuperGuard Services Westminster provides pest control for
//                 homes, flats, landlords, offices and commercial properties
//                 throughout Westminster and nearby parts of Central London.
//               </p>

//               <p className="m-0 max-w-2xl text-[15px] font-medium leading-8 text-slate-600 sm:text-base">
//                 Rather than treating every property in the same way, we first
//                 assess the pest activity, possible access points and the
//                 conditions that may be allowing the issue to continue.
//               </p>
//             </div>

//             {/* FILE ENTRIES */}
//             <div className="mt-9 border-t border-[#CFC8DD]">
//               {fileEntries.map((item) => (
//                 <div
//                   key={item.code}
//                   className="group grid gap-3 border-b border-[#CFC8DD] py-5 transition-all duration-300 sm:grid-cols-[64px_0.72fr_1fr] sm:items-center hover:bg-white/60 hover:px-4"
//                 >
//                   <span className="text-[10px] font-black tracking-[0.18em] text-[#6254B4]">
//                     {item.code}
//                   </span>

//                   <h3 className="m-0 text-base font-black text-[#181425]">
//                     {item.title}
//                   </h3>

//                   <p className="m-0 text-xs font-medium leading-6 text-slate-500">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* ACTION ROW */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/about-us"
//                 className="group inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#181425] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6254B4]"
//               >
//                 Open Company Profile

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.8}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>

//               <Link
//                 to="/services"
//                 className="group inline-flex min-h-14 items-center justify-between gap-5 rounded-full border border-[#BEB6CF] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-[#181425] transition-all duration-300 hover:-translate-y-1 hover:border-[#6254B4] hover:bg-white hover:text-[#6254B4]"
//               >
//                 Review Pest Services

//                 <ArrowRight
//                   size={17}
//                   strokeWidth={2.8}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* DEFENCE ROUTE */}
//         <div className="mt-24 lg:mt-32">
//           <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                 Property Defence Route
//               </span>

//               <div className="mt-5 flex items-start gap-3">
//                 <MapPin
//                   size={19}
//                   strokeWidth={2.7}
//                   className="mt-1 shrink-0 text-[#6254B4]"
//                 />

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                     Starting Point
//                   </span>

//                   <address className="mt-1 not-italic text-sm font-black leading-6 text-[#181425]">
//                     {LOCAL.fullAddress}
//                   </address>
//                 </div>
//               </div>
//             </div>

//             <h3 className="max-w-[850px] text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#181425] sm:text-5xl lg:text-6xl">
//               From first evidence
//               <span className="block text-[#6254B4]">
//                 to a clearer response.
//               </span>
//             </h3>
//           </div>

//           {/* DESKTOP ROUTE MAP */}
//           <div className="relative mt-14 hidden min-h-[480px] lg:block">
//             {/* ROUTE LINE */}
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 1200 420"
//               preserveAspectRatio="none"
//               className="pointer-events-none absolute inset-0 h-full w-full"
//             >
//               <path
//                 d="M70 280 C230 90, 385 80, 520 220 S820 380, 1130 110"
//                 fill="none"
//                 stroke="#6254B4"
//                 strokeWidth="3"
//                 strokeDasharray="10 12"
//                 strokeLinecap="round"
//                 opacity="0.42"
//               />
//             </svg>

//             {process.map((item, index) => {
//               const Icon = item.icon;

//               const positions = [
//                 "left-[2%] top-[46%]",
//                 "left-1/2 top-[18%] -translate-x-1/2",
//                 "right-[2%] top-[4%]",
//               ];

//               return (
//                 <div
//                   key={item.number}
//                   className={`absolute w-[31%] ${positions[index]}`}
//                 >
//                   <div className="group relative bg-[#EEEAF7]">
//                     <div className="mb-5 flex items-center gap-4">
//                       <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-white shadow-[0_15px_35px_rgba(98,84,180,0.28)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#181425]">
//                         <Icon size={24} strokeWidth={2.7} />
//                       </span>

//                       <div>
//                         <span className="block text-[9px] font-black uppercase tracking-[0.21em] text-[#6254B4]">
//                           Route Point {item.number}
//                         </span>

//                         <h4 className="mt-1 text-2xl font-black text-[#181425]">
//                           {item.title}
//                         </h4>
//                       </div>
//                     </div>

//                     <p className="m-0 max-w-sm border-l border-[#6254B4]/40 pl-5 text-sm font-medium leading-7 text-slate-600">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* MOBILE ROUTE */}
//           <div className="relative mt-12 lg:hidden">
//             <div className="absolute bottom-8 left-[27px] top-8 w-px border-l-2 border-dashed border-[#6254B4]/30" />

//             <div className="space-y-9">
//               {process.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.number}
//                     className="relative grid grid-cols-[56px_1fr] gap-5"
//                   >
//                     <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#6254B4] text-white shadow-lg">
//                       <Icon size={21} strokeWidth={2.7} />
//                     </span>

//                     <div className="border-b border-[#CFC8DD] pb-8">
//                       <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#6254B4]">
//                         Route Point {item.number}
//                       </span>

//                       <h4 className="mt-2 text-2xl font-black text-[#181425]">
//                         {item.title}
//                       </h4>

//                       <p className="mb-0 mt-3 text-sm font-medium leading-7 text-slate-600">
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* OFFICIAL FILE FOOTER */}
//         <div className="mt-20 grid overflow-hidden border-y border-[#BEB6CF] sm:grid-cols-3">
//           <div className="flex items-center gap-4 border-b border-[#BEB6CF] px-1 py-6 sm:border-b-0 sm:border-r sm:px-6">
//             <MapPin
//               size={18}
//               strokeWidth={2.7}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Registered Location
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 {LOCAL.fullAddress}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 border-b border-[#BEB6CF] px-1 py-6 sm:border-b-0 sm:border-r sm:px-6">
//             <ShieldCheck
//               size={18}
//               strokeWidth={2.7}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Service Territory
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 Westminster & Central London
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 px-1 py-6 sm:px-6">
//             <Building2
//               size={18}
//               strokeWidth={2.7}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Property Categories
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 Residential & Commercial
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   CheckCircle2,
//   PhoneCall,
//   ShieldAlert,
//   SlidersHorizontal,
//   Wrench,
//   FileText,
//   Layers,
//   Sparkles
// } from "lucide-react";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const featureCards = [
//     {
//       step: "01",
//       title: "Residential Coverage",
//       description: "Dedicated protection for houses, apartments, and multi-tenant blocks across Marylebone.",
//       icon: Layers,
//     },
//     {
//       step: "02",
//       title: "Commercial Units",
//       description: "Discreet sanitation and defense compliance for retail, offices, and hospitality venues.",
//       icon: SlidersHorizontal,
//     },
//     {
//       step: "03",
//       title: "Targeted Eradication",
//       description: "Precision diagnostics ensure treatments match exact infestation vectors and strains.",
//       icon: Wrench,
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative bg-white py-24 sm:py-32 overflow-hidden text-slate-900"
//     >
//       {/* SCHEMA METADATA */}
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
      
//       <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* BACKGROUND DECORATIVE ELEMENTS */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#6254B4]/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6254B4]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* SECTION HEADER TAG */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-100 pb-12">
//           <div className="space-y-4 max-w-2xl">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6254B4]/10 text-[#6254B4] text-xs font-black uppercase tracking-widest">
//               <Sparkles size={14} />
//               <span>Pest Defence Architecture</span>
//             </div>
            
//             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
//               Precision Control for <br />
//               <span className="text-[#6254B4]">Marylebone Properties</span>
//             </h2>
//           </div>

//           <div className="max-w-md space-y-4">
//             <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
//               Operating directly from {LOCAL.streetAddress}, our specialists deliver rapid diagnostic assessments and permanent elimination strategies tailored for structural environments in {LOCAL.area}.
//             </p>
//             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#6254B4]">
//               <span>Base Station: {LOCAL.postcode}</span>
//               <span className="w-1.5 h-1.5 rounded-full bg-[#6254B4]" />
//               <span>Active Response Team</span>
//             </div>
//           </div>
//         </div>

//         {/* ASYMMETRIC BENTO GRID SHOWCASE */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* LEFT LARGE FEATURE CARD */}
//           <div className="lg:col-span-7 bg-[#6254B4] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-between">
//             {/* Subtle background overlay graphics */}
//             <div className="absolute -right-12 -bottom-12 w-64 h-64 border-[30px] border-white/10 rounded-full pointer-events-none" />
            
//             <div className="relative z-10 space-y-6">
//               <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
//                 <ShieldAlert size={28} />
//               </div>

//               <div className="space-y-3">
//                 <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-md inline-block">
//                   Advanced Assessment Protocol
//                 </span>
//                 <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase leading-tight">
//                   Uncompromised Protection Against All Infestations
//                 </h3>
//                 <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
//                   We look past surface-level symptoms, tracing nesting patterns back to structural entry points to ensure complete eradication on the first visit.
//                 </p>
//               </div>
//             </div>

//             <div className="relative z-10 pt-10 mt-10 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-white text-[#6254B4] flex items-center justify-center font-black text-xs">
//                   HQ
//                 </div>
//                 <div>
//                   <p className="text-xs font-black uppercase tracking-wider">{LOCAL.company}</p>
//                   <p className="text-[11px] text-white/70">{LOCAL.fullAddress}</p>
//                 </div>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="px-6 py-3.5 rounded-xl bg-white text-[#6254B4] hover:bg-slate-100 transition-colors text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg"
//               >
//                 <PhoneCall size={15} />
//                 <span>{LOCAL.phoneDisplay}</span>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT COLUMN STACKED CARDS */}
//           <div className="lg:col-span-5 grid grid-cols-1 gap-6 flex flex-col justify-between">
//             {featureCards.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex items-start gap-5 hover:border-[#6254B4] transition-all group shadow-sm hover:shadow-md"
//                 >
//                   <div className="w-12 h-12 rounded-2xl bg-[#6254B4]/10 text-[#6254B4] flex items-center justify-center shrink-0 group-hover:bg-[#6254B4] group-hover:text-white transition-all">
//                     <Icon size={22} />
//                   </div>

//                   <div className="space-y-1.5">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[10px] font-black uppercase tracking-widest text-[#6254B4]">
//                         Module {item.step}
//                       </span>
//                     </div>
//                     <h4 className="text-lg font-black text-slate-900 group-hover:text-[#6254B4] transition-colors">
//                       {item.title}
//                     </h4>
//                     <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>

//         {/* BOTTOM ACTION BAR */}
//         <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
//           <div className="space-y-2 text-center md:text-left">
//             <span className="text-[10px] font-black uppercase tracking-widest text-[#6254B4] bg-[#6254B4]/20 px-3 py-1 rounded-md inline-block">
//               Immediate Assistance Available
//             </span>
//             <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
//               Need Expert Pest Control in {LOCAL.area}?
//             </h4>
//             <p className="text-slate-400 text-xs sm:text-sm font-medium">
//               Speak directly with our local technical team for booking and emergency callouts.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 shrink-0">
//             <Link
//               to="/services"
//               className="px-7 py-4 rounded-2xl bg-[#6254B4] hover:bg-[#53469c] text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-lg shadow-[#6254B4]/30"
//             >
//               <span>Explore Services</span>
//               <ArrowRight size={16} />
//             </Link>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2.5 backdrop-blur-md"
//             >
//               <PhoneCall size={16} className="text-[#6254B4]" />
//               <span>{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }













import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Building2,
  Crosshair,
  Home,
  MapPin,
  PhoneCall,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function AboutIntroSection() {
  const LOCAL = {
    company: "SuperGuard Services Coulsdon",
    shortName: "SuperGuard Coulsdon",
    area: "Coulsdon",
    city: "London",
    postcode: "CR5 2SS",
    streetAddress: "15 Ashcroft Rise",
    fullAddress: "15 Ashcroft Rise, Coulsdon CR5 2SS",
    phoneDisplay: "07448 701144",
    phoneTel: "+447448701144",
    email: "info@superguardcoulsdon.uk",
  };

  const process = [
    {
      number: "01",
      title: "Find the source",
      text: "We identify signs of activity, entry points and areas where pests may be sheltering.",
      icon: Search,
    },
    {
      number: "02",
      title: "Target the problem",
      text: "We choose an appropriate treatment based on the pest, property and level of activity.",
      icon: Crosshair,
    },
    {
      number: "03",
      title: "Protect the property",
      text: "We explain practical measures that can help reduce the risk of recurring activity.",
      icon: ShieldCheck,
    },
  ];

  const services = [
    "Residential Pest Control",
    "Commercial Pest Control",
    "Rodent Control",
    "Insect Treatments",
    "Preventative Pest Management",
    "Property Protection",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sg-coulsdon-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) =>
        el.classList.add("sg-coulsdon-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sg-coulsdon-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControl"
      className="relative overflow-hidden bg-[#6055A6] text-white"
      aria-labelledby="sg-coulsdon-about-title"
    >
      {/* =========================================================
          SEO
      ========================================================= */}

      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, ${LOCAL.city}`}
      />

      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <meta
          itemProp="streetAddress"
          content={LOCAL.streetAddress}
        />
        <meta
          itemProp="addressLocality"
          content={LOCAL.area}
        />
        <meta
          itemProp="postalCode"
          content={LOCAL.postcode}
        />
        <meta itemProp="addressCountry" content="GB" />
      </div>

      {/* =========================================================
          CUSTOM CSS
      ========================================================= */}

      <style>{`
        .sg-coulsdon-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-coulsdon-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-coulsdon-delay-1 {
          transition-delay: 100ms;
        }

        .sg-coulsdon-delay-2 {
          transition-delay: 180ms;
        }

        .sg-coulsdon-delay-3 {
          transition-delay: 260ms;
        }

        .sg-coulsdon-image {
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-coulsdon-image-wrap:hover .sg-coulsdon-image {
          transform: scale(1.045);
        }

        .sg-coulsdon-service {
          transition:
            transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 300ms ease,
            border-color 300ms ease;
        }

        .sg-coulsdon-service:hover {
          transform: translateX(7px);
          background-color: rgba(0, 0, 0, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .sg-coulsdon-process {
          transition:
            transform 300ms ease,
            border-color 300ms ease;
        }

        .sg-coulsdon-process:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 255, 255, 0.55);
        }

        .sg-coulsdon-process-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease;
        }

        .sg-coulsdon-process:hover .sg-coulsdon-process-icon {
          background-color: white;
          color: #6055A6;
          transform: rotate(-5deg);
        }

        .sg-coulsdon-arrow {
          transition: transform 250ms ease;
        }

        .sg-coulsdon-link:hover .sg-coulsdon-arrow {
          transform: translate(4px, -4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-coulsdon-reveal,
          .sg-coulsdon-image,
          .sg-coulsdon-service,
          .sg-coulsdon-process,
          .sg-coulsdon-process-icon,
          .sg-coulsdon-arrow {
            transition: none;
          }

          .sg-coulsdon-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* large decorative circles */}
        <div className="absolute -right-[260px] top-[250px] h-[650px] w-[650px] rounded-full border border-white/20" />

        <div className="absolute -right-[180px] top-[330px] h-[490px] w-[490px] rounded-full border border-white/15" />

        <div className="absolute left-[-250px] top-[5%] h-[500px] w-[500px] rounded-full bg-white/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[450px] w-[450px] rounded-full bg-black/10 blur-[120px]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =======================================================
            TOP INTRO
        ======================================================== */}

        <div className="sg-coulsdon-reveal flex flex-col gap-6 border-b border-white/15 py-7 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6]">
              <Bug size={18} />
            </div>

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/50">
                SuperGuard Services
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.05em]">
                Coulsdon · London
              </p>
            </div>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="sg-coulsdon-link group flex items-center gap-3 self-start sm:self-auto"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">
              Speak to our team
            </span>

            <span className="flex h-10 items-center gap-2 bg-white px-4 text-[10px] font-black text-[#6055A6] transition-colors group-hover:bg-black group-hover:text-white">
              <PhoneCall size={13} />
              {LOCAL.phoneDisplay}
            </span>

            <ArrowUpRight
              size={15}
              className="sg-coulsdon-arrow"
            />
          </a>
        </div>

        {/* =======================================================
            MAIN STORY
        ======================================================== */}

        <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT CONTENT */}

          <div className="sg-coulsdon-reveal flex flex-col justify-center py-16 pr-0 lg:min-h-[720px] lg:border-r lg:border-white/15 lg:pr-16 xl:pr-24">

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-white" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">
                About SuperGuard
              </span>
            </div>

            <h2
              id="sg-coulsdon-about-title"
              className="mt-8 max-w-[650px] text-[54px] font-black uppercase leading-[0.9] tracking-[-0.065em] sm:text-[70px] lg:text-[78px] xl:text-[92px]"
            >
              We don't just

              <span className="block text-white/35">
                treat pests.
              </span>

              <span className="block text-white">
                We find why.
              </span>
            </h2>

            <p className="mt-9 max-w-[560px] text-sm leading-7 text-white/75 sm:text-base">
              {LOCAL.company} provides practical pest control
              for homes, landlords and businesses across{" "}
              <strong className="text-white">
                {LOCAL.area}
              </strong>
              .
            </p>

            <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/60">
              Our approach focuses on understanding the source
              of pest activity before deciding how the property
              should be treated and protected.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/services"
                className="sg-coulsdon-link group flex h-12 items-center gap-4 bg-white px-5 text-[9px] font-black uppercase tracking-[0.18em] text-[#6055A6]"
              >
                Explore Services

                <ArrowRight
                  size={15}
                  className="sg-coulsdon-arrow"
                />
              </Link>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="sg-coulsdon-link group flex h-12 items-center gap-4 border border-white/30 px-5 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#6055A6]"
              >
                <PhoneCall size={14} />

                Call {LOCAL.phoneDisplay}

                <ArrowUpRight
                  size={14}
                  className="sg-coulsdon-arrow"
                />
              </a>

            </div>

            {/* MINI STATS */}

            <div className="mt-14 grid grid-cols-3 border-t border-white/15">

              <div className="border-r border-white/15 py-5 pr-4">
                <span className="block text-2xl font-black text-white">
                  01
                </span>

                <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Local Team
                </span>
              </div>

              <div className="border-r border-white/15 px-4 py-5">
                <span className="block text-2xl font-black text-white">
                  02
                </span>

                <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Homes & Business
                </span>
              </div>

              <div className="py-5 pl-4">
                <span className="block text-2xl font-black text-white">
                  03
                </span>

                <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Practical Care
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="sg-coulsdon-reveal sg-coulsdon-delay-1 flex items-center py-10 lg:py-16 lg:pl-14 xl:pl-20">

            <div className="sg-coulsdon-image-wrap relative w-full">

              {/* SG BACKGROUND */}

              <div className="pointer-events-none absolute -right-3 -top-14 z-0 select-none text-[180px] font-black leading-none tracking-[-0.12em] text-white/[0.08] sm:text-[240px] lg:text-[300px]">
                SG
              </div>

              <div className="relative z-10 overflow-hidden border border-white/20 bg-black/10">

                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src="/images/about-superguard.webp"
                    alt={`${LOCAL.company} professional pest control in Coulsdon`}
                    className="sg-coulsdon-image h-full w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  {/* TOP BADGE */}

                  <div className="absolute left-5 top-5">
                    <div className="flex items-center gap-2 bg-white px-4 py-2.5 text-[#6055A6]">
                      <span className="h-2 w-2 rounded-full bg-[#6055A6]" />

                      <span className="text-[7px] font-black uppercase tracking-[0.22em]">
                        Local Pest Specialists
                      </span>
                    </div>
                  </div>

                  {/* IMAGE BOTTOM */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <div className="flex items-center gap-2">
                      <MapPin
                        size={13}
                        className="text-white"
                      />

                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">
                        {LOCAL.area} · {LOCAL.postcode}
                      </span>
                    </div>

                    <h3 className="mt-3 max-w-[650px] text-2xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
                      Professional protection for local properties.
                    </h3>

                  </div>
                </div>

                {/* IMAGE FOOTER */}

                <div className="grid grid-cols-2">

                  <div className="bg-black px-5 py-5 sm:px-7">

                    <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/45">
                      Service Area
                    </span>

                    <span className="mt-1 block text-sm font-black">
                      Coulsdon & Surrounding Areas
                    </span>

                  </div>

                  <div className="border-l border-white/15 bg-white/10 px-5 py-5 sm:px-7">

                    <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/45">
                      Property
                    </span>

                    <span className="mt-1 block text-sm font-black text-white">
                      Residential & Commercial
                    </span>

                  </div>

                </div>

              </div>

              {/* FLOATING LOCATION CARD */}

              <div className="absolute -bottom-6 -left-5 hidden w-[210px] border border-white/20 bg-black p-4 shadow-2xl sm:block">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[#6055A6]">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <span className="block text-[7px] font-black uppercase tracking-[0.18em] text-white/45">
                      Local Office
                    </span>

                    <span className="mt-1 block text-[9px] font-bold leading-4 text-white/90">
                      {LOCAL.fullAddress}
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =======================================================
            SERVICES
        ======================================================== */}

        <div className="border-t border-white/15 py-20 sm:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div className="sg-coulsdon-reveal">

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-white" />

                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/70">
                  What We Handle
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                Pest control built around the property.
              </h3>

              <p className="mt-6 max-w-[450px] text-sm leading-7 text-white/65">
                From individual homes to commercial properties,
                our service is designed around the type of pest,
                the environment and the level of activity.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <Home size={17} className="text-white" />

                <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/60">
                  Homes
                </span>

                <span className="h-1 w-1 rounded-full bg-white/40" />

                <Building2
                  size={17}
                  className="text-white"
                />

                <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/60">
                  Businesses
                </span>
              </div>

            </div>

            <div className="sg-coulsdon-reveal sg-coulsdon-delay-1 grid gap-2 sm:grid-cols-2">

              {services.map((service, index) => (
                <div
                  key={service}
                  className="sg-coulsdon-service flex min-h-[76px] items-center justify-between border border-white/20 bg-black/10 px-5"
                >
                  <div className="flex items-center gap-4">

                    <span className="text-[8px] font-black text-white">
                      0{index + 1}
                    </span>

                    <span className="text-[9px] font-black uppercase tracking-[0.08em] text-white/85">
                      {service}
                    </span>

                  </div>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-white/45"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* =======================================================
            PROCESS
        ======================================================== */}

        <div className="border-t border-white/15 py-20 sm:py-24">

          <div className="sg-coulsdon-reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-white" />

                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/70">
                  How We Work
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Simple. Focused. Practical.
              </h3>

            </div>

            <p className="max-w-[440px] text-sm leading-6 text-white/60">
              A straightforward process that starts with
              understanding the problem and ends with practical
              protection for your property.
            </p>

          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`sg-coulsdon-reveal sg-coulsdon-process border border-white/20 bg-black/10 p-7 ${
                    index === 0
                      ? "sg-coulsdon-delay-1"
                      : index === 1
                      ? "sg-coulsdon-delay-2"
                      : "sg-coulsdon-delay-3"
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <span className="text-5xl font-black leading-none tracking-[-0.08em] text-white/[0.12]">
                      {item.number}
                    </span>

                    <span className="sg-coulsdon-process-icon flex h-12 w-12 items-center justify-center bg-white/10 text-white">
                      <Icon size={19} />
                    </span>

                  </div>

                  <h4 className="mt-12 text-2xl font-black tracking-[-0.035em]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-white" />

                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/45">
                      SuperGuard Coulsdon
                    </span>
                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            PHILOSOPHY
        ======================================================== */}

        <div className="sg-coulsdon-reveal sg-coulsdon-delay-2 relative overflow-hidden border-y border-white/20 bg-black">

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 h-[430px] w-[430px] rounded-full border border-white/15"
          />

          <div
            aria-hidden="true"
            className="absolute -right-8 -top-16 h-[300px] w-[300px] rounded-full border border-white/10"
          />

          <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr]">

            <div className="p-8 sm:p-12 lg:p-16">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6055A6]">
                  <Target size={17} />
                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/50">
                  Our Philosophy
                </span>

              </div>

              <h3 className="mt-7 max-w-[700px] text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Treat the cause,
                <span className="text-white/40">
                  {" "}not just the symptom.
                </span>
              </h3>

              <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/55">
                Seeing one pest does not always tell the whole
                story. We look at the wider property and the
                conditions that may be allowing activity to
                continue.
              </p>

            </div>

            <div className="border-t border-white/15 bg-white/[0.03] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
                Our Thinking
              </span>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#6055A6]">
                    01
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Understand
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Identify signs and likely sources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#6055A6]">
                    02
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Respond
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Select an appropriate treatment approach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#6055A6]">
                    03
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Protect
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Reduce the opportunity for activity to return.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            CONTACT
        ======================================================== */}

        <div className="sg-coulsdon-reveal sg-coulsdon-delay-3 border-b border-white/15">

          <div className="grid md:grid-cols-3">

            {/* ADDRESS */}

            <div className="flex items-start gap-4 border-b border-white/15 py-8 md:border-b-0 md:border-r md:pr-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-white">
                <MapPin size={17} />
              </div>

              <div>
                <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/40">
                  Local Office
                </span>

                <span className="mt-2 block text-xs font-bold leading-5 text-white/80">
                  {LOCAL.fullAddress}
                </span>
              </div>

            </div>

            {/* PHONE */}

            <div className="flex items-start gap-4 border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-white">
                <PhoneCall size={17} />
              </div>

              <div>
                <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/40">
                  Call SuperGuard
                </span>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-2 block text-base font-black text-white transition-colors hover:text-white/70"
                >
                  {LOCAL.phoneDisplay}
                </a>
              </div>

            </div>

            {/* EMAIL */}

            <div className="flex items-start gap-4 py-8 md:pl-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-white">
                <ShieldCheck size={17} />
              </div>

              <div>
                <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/40">
                  Email
                </span>

                <a
                  href={`mailto:${LOCAL.email}`}
                  className="mt-2 block break-all text-xs font-bold text-white/75 transition-colors hover:text-white"
                >
                  {LOCAL.email}
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* =======================================================
            FINAL CTA
        ======================================================== */}

        <div className="sg-coulsdon-reveal sg-coulsdon-delay-3 py-14 sm:py-20">

          <div className="relative overflow-hidden border border-white/20 bg-black">

            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/[0.04]" />

            <div className="relative z-10 flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">

              <div>

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-white" />

                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/60">
                    Need Pest Control?
                  </span>
                </div>

                <h3 className="mt-4 max-w-[700px] text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  Let's get the problem
                  <span className="text-white/60">
                    {" "}under control.
                  </span>
                </h3>

                <p className="mt-4 max-w-[570px] text-sm leading-6 text-white/45">
                  Speak with SuperGuard Services Coulsdon about
                  your property and pest control requirements.
                </p>

              </div>

              <div className="flex shrink-0 flex-wrap gap-3">

                <Link
                  to="/services"
                  className="sg-coulsdon-link group flex h-12 items-center gap-4 bg-white px-5 text-[8px] font-black uppercase tracking-[0.16em] text-[#6055A6]"
                >
                  View Services

                  <ArrowRight
                    size={14}
                    className="sg-coulsdon-arrow"
                  />
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="sg-coulsdon-link group flex h-12 items-center gap-3 border border-white/20 bg-[#6055A6] px-5 text-[8px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#6055A6]"
                >
                  <PhoneCall size={14} />

                  Call Now

                  <ArrowUpRight
                    size={14}
                    className="sg-coulsdon-arrow"
                  />
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* =======================================================
            FOOTER LINE
        ======================================================== */}

        <div className="sg-coulsdon-reveal flex flex-col gap-3 border-t border-white/15 py-6 text-[7px] font-black uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <span>
            {LOCAL.company}
          </span>

          <span className="flex items-center gap-2 text-white">
            <Bug size={11} />
            Professional Pest Control
          </span>

          <span>
            {LOCAL.area} · {LOCAL.postcode}
          </span>

        </div>

      </div>
    </section>
  );
}