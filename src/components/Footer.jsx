// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   Building2,
//   CheckCircle2,
//   Clock,
//   Home,
//   MapPin,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     city: "London",
//     streetAddress: "50 Essex Street",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   const footerHighlights = [
//     "Inspection-Led Service",
//     "Residential Pest Control",
//     "Commercial Pest Support",
//   ];

//   return (
//     <footer
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#171327] font-sans text-white"
//     >
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

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-44 -top-48 h-[560px] w-[560px] rounded-full bg-[#6157A7]/30 blur-[150px]" />

//         <div className="absolute -bottom-64 right-[-140px] h-[620px] w-[620px] rounded-full bg-[#6157A7]/25 blur-[160px]" />

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//             backgroundSize: "78px 78px",
//           }}
//         />

//         <div className="absolute right-0 top-0 h-full w-[34%] bg-[#6157A7]/[0.045]" />

//         <div
//           aria-hidden="true"
//           className="absolute bottom-[-40px] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018] lg:block"
//         >
//           Holborn
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 pt-16 sm:px-8 sm:pt-20 md:px-10 lg:px-14 lg:pt-24">
//         {/* ===================================================== */}
//         {/* TOP CTA */}
//         {/* ===================================================== */}

//         <div className="relative overflow-hidden rounded-[34px] bg-[#6157A7] px-6 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:px-9 sm:py-11 lg:px-12 lg:py-14">
//           <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.06]" />

//           <div className="pointer-events-none absolute bottom-[-160px] left-[30%] h-80 w-80 rounded-full bg-white/10 blur-[100px]" />

//           <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div className="max-w-[900px]">
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-10 bg-white/55 sm:w-16" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.27em] text-white/70 sm:text-[10px]">
//                   Need Pest Control Support?
//                 </span>
//               </div>

//               <h2 className="mt-6 text-[40px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[54px] md:text-[65px] lg:text-[72px]">
//                 Tell Us What You Have
//                 <span className="block text-[#DDD9FF]">
//                   Noticed At Your Property.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-white/75 sm:text-base sm:leading-8">
//                 Whether you have seen rodents, insects, nests, droppings or
//                 unusual pest activity, our Holborn team can help you arrange
//                 the appropriate next step.
//               </p>
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6157A7] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//             >
//               Request Pest Support

//               <ArrowRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* MAIN FOOTER */}
//         {/* ===================================================== */}

//         <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
//           {/* BRAND */}
//           <div className="lg:col-span-4">
//             <Link
//               to="/"
//               aria-label={`${LOCAL.company} home`}
//               className="inline-block"
//             >
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} pest control`}
//                 className="h-16 w-auto object-contain brightness-0 invert sm:h-[72px]"
//                 loading="lazy"
//               />
//             </Link>

//             <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/65">
//               {LOCAL.company} provides pest control support for homes, flats,
//               landlords, offices and commercial properties across{" "}
//               {LOCAL.area} and Central London.
//             </p>

//             <p className="mt-4 max-w-md text-sm font-medium leading-7 text-white/45">
//               Our service focuses on careful inspection, considered treatment
//               planning and clear practical advice.
//             </p>

//             <div className="mt-7 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
//               <span className="relative flex h-2.5 w-2.5 shrink-0">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-60" />

//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#BDB6FF]" />
//               </span>

//               <div>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-[#BDB6FF]">
//                   Local Property Support
//                 </span>

//                 <span className="mt-1 block text-xs font-bold text-white">
//                   Serving {LOCAL.area} and Central London
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="lg:col-span-2 lg:pl-4">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//               Quick Links
//             </h3>

//             <nav
//               aria-label="Footer quick links"
//               className="mt-7 flex flex-col gap-4"
//             >
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-white/60 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-4 bg-white/20 transition-all duration-300 group-hover:w-7 group-hover:bg-[#BDB6FF]" />

//                   <span>{link.name}</span>
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* SERVICES */}
//           <div className="lg:col-span-3">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//               Pest Services
//             </h3>

//             <div className="mt-7 flex flex-col gap-3">
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="group flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.035] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.08]"
//                   >
//                     <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#6157A7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#6157A7]">
//                       <Icon
//                         size={17}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <span className="text-sm font-bold leading-snug text-white/65 transition-colors group-hover:text-white">
//                       {service.name}
//                     </span>

//                     <ArrowRight
//                       size={14}
//                       strokeWidth={2.5}
//                       className="ml-auto shrink-0 -translate-x-1 text-[#BDB6FF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* LOCAL DETAILS */}
//           <div className="lg:col-span-3">
//             <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-7">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//                 Local Details
//               </h3>

//               <div className="mt-7 space-y-6">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#6157A7] text-white">
//                     <MapPin
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Holborn Base
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-semibold leading-6 text-white/75">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>

//                 <div className="h-px bg-white/[0.07]" />

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-white">
//                     <Clock
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Availability
//                     </span>

//                     <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
//                       Local pest control enquiries and property support
//                     </p>
//                   </div>
//                 </div>

//                 <div className="h-px bg-white/[0.07]" />

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-white">
//                     <Building2
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Properties
//                     </span>

//                     <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
//                       Homes, flats, landlords, offices and businesses
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#6157A7] transition-all duration-300 hover:bg-[#6157A7] hover:text-white"
//               >
//                 Contact Our Team

//                 <ArrowRight
//                   size={16}
//                   strokeWidth={2.6}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* TRUST STRIP */}
//         {/* ===================================================== */}

//         <div className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-3">
//           {footerHighlights.map((item, index) => (
//             <div
//               key={item}
//               className={`flex items-center gap-4 ${
//                 index !== footerHighlights.length - 1
//                   ? "sm:border-r sm:border-white/10"
//                   : ""
//               }`}
//             >
//               <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6157A7] text-white">
//                 <CheckCircle2
//                   size={18}
//                   strokeWidth={2.7}
//                 />
//               </span>

//               <span className="text-sm font-black text-white/75">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ===================================================== */}
//         {/* BOTTOM BAR */}
//         {/* ===================================================== */}

//         <div className="py-7">
//           <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
//             <p className="text-sm font-medium leading-relaxed text-white/45">
//               © {new Date().getFullYear()}{" "}
//               <span className="font-black text-white/75">
//                 {LOCAL.company}
//               </span>
//               . All Rights Reserved.
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-xs font-bold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.17em] text-[#BDB6FF] transition-colors hover:text-white"
//             >
//               Send An Enquiry

//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#6157A7]">
//                 <ArrowRight
//                   size={15}
//                   strokeWidth={2.6}
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Check,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     city: "London",
//     streetAddress: "14 Regency St",
//     address: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const quickLinks = [
//     {
//       number: "01",
//       name: "Home",
//       path: "/",
//     },
//     {
//       number: "02",
//       name: "Services",
//       path: "/services",
//     },
//     {
//       number: "03",
//       name: "About Us",
//       path: "/about-us",
//     },
//     {
//       number: "04",
//       name: "Contact Us",
//       path: "/contact-us",
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   const serviceStandards = [
//     "Local Westminster support",
//     "Inspection-led service",
//     "Residential pest control",
//     "Commercial property support",
//   ];

//   return (
//     <footer
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#16121E] font-sans text-white"
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

//       <style>{`
//         .sgw-footer-grid {
//           background-image:
//             linear-gradient(
//               rgba(255, 255, 255, 0.035) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.035) 1px,
//               transparent 1px
//             );
//           background-size: 70px 70px;
//         }

//         .sgw-footer-dot-grid {
//           background-image: radial-gradient(
//             circle,
//             rgba(194, 185, 255, 0.5) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         .sgw-footer-service-line::before {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 0;
//           height: 1px;
//           background: #bdb6ff;
//           transition: width 350ms ease;
//         }

//         .sgw-footer-service-line:hover::before {
//           width: 100%;
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="sgw-footer-grid absolute inset-0 opacity-60" />

//         <div className="absolute -left-60 -top-72 h-[660px] w-[660px] rounded-full bg-[#6254B4]/30 blur-[180px]" />

//         <div className="absolute -bottom-80 right-[-220px] h-[720px] w-[720px] rounded-full bg-[#6254B4]/20 blur-[190px]" />

//         <div className="sgw-footer-dot-grid absolute right-8 top-28 h-48 w-48 opacity-20" />

//         <div className="absolute right-0 top-0 h-full w-[31%] border-l border-white/[0.035] bg-white/[0.018]" />
//       </div>

//       {/* LARGE BACKGROUND TEXT */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[-25px] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[180px] font-black uppercase leading-none tracking-[-0.085em] text-white/[0.018] xl:block 2xl:text-[220px]"
//       >
//         Westminster
//       </div>

//       <div className="relative z-10">
//         {/* ===================================================== */}
//         {/* TOP CONTROL STRIP */}
//         {/* ===================================================== */}

//         <div className="border-y border-white/10 bg-white/[0.025]">
//           <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_auto]">
//             <div className="flex flex-col gap-6 px-5 py-7 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-10">
//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.26em] text-[#BDB6FF]">
//                   Westminster Pest Control Desk
//                 </span>

//                 <h2 className="mt-2 max-w-3xl text-[25px] font-black leading-tight tracking-[-0.035em] text-white sm:text-[30px]">
//                   Noticed pest activity at your property?
//                 </h2>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[52px] items-center justify-center gap-4 bg-[#6254B4] px-6 text-[9px] font-black uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:bg-white hover:text-[#18141F]"
//                 >
//                   Request Pest Support

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.4}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/15 px-6 text-[10px] font-black text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#18141F]"
//                 >
//                   <Phone
//                     size={17}
//                     strokeWidth={2.3}
//                     className="text-[#BDB6FF] transition-transform duration-300 group-hover:rotate-6 group-hover:text-[#6254B4]"
//                   />

//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//             <div className="hidden min-w-[230px] items-center justify-center border-l border-white/10 px-8 lg:flex">
//               <div className="flex items-center gap-4">
//                 <span className="relative flex h-3 w-3">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-45" />

//                   <span className="relative inline-flex h-3 w-3 rounded-full bg-[#BDB6FF]" />
//                 </span>

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-white/35">
//                     Service area
//                   </span>

//                   <span className="mt-1 block text-xs font-black text-white">
//                     Westminster · SW1P
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* MAIN FOOTER DIRECTORY */}
//         {/* ===================================================== */}

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           <div className="grid border-b border-white/10 lg:grid-cols-[1.1fr_0.72fr_1fr]">
//             {/* BRAND STATEMENT */}
//             <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
//               <Link
//                 to="/"
//                 aria-label={`${LOCAL.company} home`}
//                 className="inline-flex items-center gap-4"
//               >
//                 <div className="flex h-[72px] w-[88px] items-center justify-center bg-white">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="h-[58px] w-[74px] object-contain"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[17px] font-black uppercase tracking-[-0.025em] text-white">
//                     SuperGuard
//                   </span>

//                   <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.21em] text-[#BDB6FF]">
//                     Services Westminster
//                   </span>
//                 </div>
//               </Link>

//               <h3 className="mt-9 max-w-[520px] text-[35px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[42px]">
//                 Local pest control,
//                 <span className="block text-[#8F80E4]">
//                   clearly organised.
//                 </span>
//               </h3>

//               <p className="mb-0 mt-6 max-w-[520px] text-sm font-medium leading-7 text-white/55">
//                 Pest control support for homes, flats, landlords,
//                 offices and commercial properties across Westminster
//                 and Central London.
//               </p>

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                 {serviceStandards.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-t border-white/10 pt-3"
//                   >
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-white">
//                       <Check size={13} strokeWidth={3} />
//                     </span>

//                     <span className="text-[9px] font-black uppercase leading-5 tracking-[0.12em] text-white/60">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* NAVIGATION INDEX */}
//             <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-16">
//               <div className="flex items-center justify-between gap-5">
//                 <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                   Site Directory
//                 </h3>

//                 <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25">
//                   Index / 04
//                 </span>
//               </div>

//               <nav
//                 aria-label="Footer navigation"
//                 className="mt-8"
//               >
//                 {quickLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="group flex items-center gap-5 border-t border-white/10 py-5 last:border-b"
//                   >
//                     <span className="text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                       {link.number}
//                     </span>

//                     <span className="text-[17px] font-black tracking-[-0.025em] text-white/65 transition-colors duration-300 group-hover:text-white">
//                       {link.name}
//                     </span>

//                     <ArrowRight
//                       size={17}
//                       strokeWidth={2.2}
//                       className="ml-auto -translate-x-2 text-[#BDB6FF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
//                     />
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* CONTACT TERMINAL */}
//             <div className="py-12 lg:py-16 lg:pl-10">
//               <div className="flex items-center justify-between gap-5">
//                 <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                   Local Contact Terminal
//                 </h3>

//                 <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/30">
//                   <span className="h-2 w-2 rounded-full bg-[#6254B4]" />
//                   Active
//                 </span>
//               </div>

//               <div className="mt-8 border border-white/10 bg-white/[0.035]">
//                 {/* ADDRESS */}
//                 <div className="grid grid-cols-[58px_1fr] border-b border-white/10">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <MapPin size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Westminster base
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-bold leading-6 text-white/70">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group grid grid-cols-[58px_1fr] border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.05]"
//                 >
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Phone
//                       size={20}
//                       strokeWidth={2.2}
//                       className="transition-transform duration-300 group-hover:rotate-6"
//                     />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Call our team
//                     </span>

//                     <span className="mt-2 block text-lg font-black text-white">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </div>
//                 </a>

//                 {/* AVAILABILITY */}
//                 <div className="grid grid-cols-[58px_1fr] border-b border-white/10">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Clock3 size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Enquiries
//                     </span>

//                     <span className="mt-2 block text-sm font-bold leading-6 text-white/70">
//                       Local property and pest control support
//                     </span>
//                   </div>
//                 </div>

//                 {/* PROPERTY TYPES */}
//                 <div className="grid grid-cols-[58px_1fr]">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Building2 size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Property coverage
//                     </span>

//                     <span className="mt-2 block text-sm font-bold leading-6 text-white/70">
//                       Residential and commercial properties
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="group mt-4 flex min-h-[54px] w-full items-center justify-between bg-white px-5 text-[9px] font-black uppercase tracking-[0.17em] text-[#18141F] transition-colors duration-300 hover:bg-[#6254B4] hover:text-white"
//               >
//                 Send An Enquiry

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.4}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* ===================================================== */}
//           {/* SERVICE ROUTE DIRECTORY */}
//           {/* Scroll state intentionally preserved */}
//           {/* ===================================================== */}

//           <div className="border-b border-white/10 py-10">
//             <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#BDB6FF]">
//                   Pest Service Directory
//                 </span>

//                 <h3 className="mt-2 text-[25px] font-black tracking-[-0.035em] text-white">
//                   Select a service route
//                 </h3>
//               </div>

//               <div className="grid flex-1 gap-x-8 sm:grid-cols-2 xl:max-w-[950px] xl:grid-cols-4">
//                 {services.map((service) => {
//                   const Icon = service.icon;

//                   return (
//                     <Link
//                       key={service.name}
//                       to="/services"
//                       state={service.state}
//                       className="sgw-footer-service-line group relative flex items-center gap-4 border-t border-white/10 py-5"
//                     >
//                       <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/[0.06] text-[#BDB6FF] transition-colors duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                         <Icon size={18} strokeWidth={2.3} />
//                       </span>

//                       <div>
//                         <span className="block text-[8px] font-black tracking-[0.17em] text-white/25">
//                           {service.number}
//                         </span>

//                         <span className="mt-1 block text-[12px] font-black leading-5 text-white/65 transition-colors duration-300 group-hover:text-white">
//                           {service.name}
//                         </span>
//                       </div>

//                       <ArrowRight
//                         size={15}
//                         strokeWidth={2.3}
//                         className="ml-auto text-[#BDB6FF] transition-transform duration-300 group-hover:translate-x-1"
//                       />
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ===================================================== */}
//           {/* BOTTOM BAR */}
//           {/* ===================================================== */}

//           <div className="flex flex-col items-center justify-between gap-6 py-7 text-center lg:flex-row lg:text-left">
//             <p className="text-xs font-medium leading-6 text-white/35">
//               © {new Date().getFullYear()}{" "}
//               <span className="font-black text-white/65">
//                 {LOCAL.company}
//               </span>
//               . All rights reserved.
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-[10px] font-bold text-white/35 transition-colors duration-300 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#BDB6FF] transition-colors duration-300 hover:text-white"
//             >
//               Contact Westminster Team

//               <span className="flex h-9 w-9 items-center justify-center border border-white/10 text-white transition-colors duration-300 group-hover:border-[#6254B4] group-hover:bg-[#6254B4]">
//                 <ArrowRight size={15} strokeWidth={2.4} />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Home,
//   Mail,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     postcode: "BR4 0QL",
//     city: "London",
//     streetAddress: "16 Ash Grove",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const quickLinks = [
//     { number: "01", name: "Home", path: "/" },
//     { number: "02", name: "Services", path: "/services" },
//     { number: "03", name: "About Us", path: "/about-us" },
//     { number: "04", name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/LocalBusiness"
//     >
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="email" content={LOCAL.email} />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sgw-footer-link {
//           transition: transform 300ms ease;
//         }

//         .sgw-footer-link:hover {
//           transform: translateX(4px);
//         }

//         .sgw-footer-service {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sgw-footer-service:hover {
//           transform: translateY(-3px);
//           background-color: rgba(255,255,255,0.10);
//           border-color: rgba(255,255,255,0.30);
//         }

//         .sgw-footer-service-icon {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             color 300ms ease;
//         }

//         .sgw-footer-service:hover .sgw-footer-service-icon {
//           transform: scale(1.06) rotate(-4deg);
//           background-color: white;
//           color: #6055A6;
//         }

//         .sgw-footer-contact {
//           transition:
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sgw-footer-contact:hover {
//           background-color: rgba(255,255,255,0.08);
//           border-color: rgba(255,255,255,0.28);
//         }

//         .sgw-footer-grid {
//           background-image:
//             linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px);
//           background-size: 70px 70px;
//         }
//       `}</style>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="sgw-footer-grid absolute inset-0 opacity-30" />
//         <div className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-white/[0.09] blur-[120px]" />
//         <div className="absolute -bottom-56 -right-40 h-[520px] w-[520px] rounded-full bg-black/[0.15] blur-[130px]" />
//         <div className="absolute -right-32 top-12 h-[350px] w-[350px] rounded-full border border-white/[0.10]" />
//         <div className="absolute -right-20 top-24 h-[260px] w-[260px] rounded-full border border-white/[0.07]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">

//         {/* MAIN DIRECTORY */}
//         <div className="grid border-b border-white/15 py-10 lg:grid-cols-[1.15fr_0.65fr_1.2fr] lg:py-12">

//           {/* BRAND */}
//           <div className="border-b border-white/15 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">

//             <Link to="/" className="inline-flex items-center gap-3">

//               <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-white">

//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={LOCAL.company}
//                   className="h-10 w-11 object-contain"
//                 />

//               </div>

//               <div>

//                 <span className="block text-[15px] font-black uppercase">
//                   SuperGuard
//                 </span>

//                 <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.22em] text-white/45">
//                   Services West Wickham
//                 </span>

//               </div>

//             </Link>

//             <p className="mt-6 max-w-[420px] text-xs leading-6 text-white/50">
//               Local pest control services for residential and commercial
//               properties across West Wickham and surrounding London areas.
//             </p>

//             <div className="mt-7 flex flex-wrap gap-2">

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 West Wickham
//               </span>

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 BR4
//               </span>

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 London
//               </span>

//             </div>

//           </div>

//           {/* QUICK LINKS */}
//           <div className="border-b border-white/15 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-0">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//                 Navigate
//               </span>

//               <span className="text-[7px] font-black uppercase text-white/25">
//                 04 Pages
//               </span>

//             </div>

//             <nav className="mt-5">

//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sgw-footer-link group flex items-center gap-3 border-t border-white/10 py-3.5 last:border-b"
//                 >

//                   <span className="text-[7px] text-white/25">
//                     {link.number}
//                   </span>

//                   <span className="text-[13px] font-black text-white/65 group-hover:text-white">
//                     {link.name}
//                   </span>

//                   <ArrowRight
//                     size={14}
//                     className="ml-auto text-white/25"
//                   />

//                 </Link>
//               ))}

//             </nav>

//           </div>

//           {/* CONTACT */}
//           <div className="pt-10 lg:pl-9 lg:pt-0">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//                 Contact
//               </span>

//               <span className="text-[7px] uppercase text-white/30">
//                 Local Team
//               </span>

//             </div>

//             <div className="mt-5 grid gap-2">

//               <div className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5">

//                 <MapPin size={16} />

//                 <address className="not-italic text-xs font-bold text-white/65">
//                   {LOCAL.address}
//                 </address>

//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5"
//               >

//                 <Phone size={16} />

//                 <span className="text-xs font-black">
//                   {LOCAL.phoneDisplay}
//                 </span>

//               </a>

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5"
//               >

//                 <Mail size={16} />

//                 <span className="text-xs font-black break-all">
//                   {LOCAL.email}
//                 </span>

//               </a>

//             </div>

//           </div>

//         </div>

//         {/* SERVICES */}
//         <div className="border-b border-white/15 py-8">

//           <div className="flex items-center justify-between">

//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//               Popular Services
//             </span>

//             <Link
//               to="/services"
//               className="text-[8px] uppercase text-white/45"
//             >
//               View All
//             </Link>

//           </div>

//           <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">

//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="sgw-footer-service flex items-center gap-3 border border-white/10 bg-white/[0.035] p-3.5"
//                 >

//                   <span className="sgw-footer-service-icon flex h-9 w-9 items-center justify-center bg-white/[0.07]">

//                     <Icon size={17} />

//                   </span>

//                   <span className="text-[10px] font-black text-white/60">
//                     {service.name}
//                   </span>

//                 </Link>
//               );
//             })}

//           </div>

//         </div>

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">

//           <p className="text-[10px] text-white/30">
//             © {new Date().getFullYear()} {LOCAL.company}. All rights reserved.
//           </p>

//           <div className="flex gap-5 text-[7px] uppercase text-white/30">

//             <span>{LOCAL.area}</span>

//             <span>{LOCAL.postcode}</span>

//             <span>Residential & Commercial</span>

//           </div>

//           <Link
//             to="/contact-us"
//             className="flex items-center gap-2 text-[8px] uppercase text-white/55"
//           >

//             Contact West Wickham Team

//             <ArrowRight size={14} />

//           </Link>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



















import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Home,
  Mail,
  MapPin,
  Phone,
  Rat,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const LOCAL = {
    company: "SuperGuard Services Coulsdon",
    shortName: "SuperGuard Coulsdon",
    area: "Coulsdon",
    postcode: "CR5 2SS",
    city: "London",
    streetAddress: "15 Ashcroft Rise",
    address: "15 Ashcroft Rise, Coulsdon CR5 2SS",
    phoneDisplay: "07448 701144",
    phoneTel: "+447448701144",
    email: "info@superguardcoulsdon.uk",
  };

  const quickLinks = [
    { number: "01", name: "Home", path: "/" },
    { number: "02", name: "Services", path: "/services" },
    { number: "03", name: "About Us", path: "/about-us" },
    { number: "04", name: "Contact Us", path: "/contact-us" },
  ];

  const services = [
    {
      number: "01",
      name: "Rats & Mice Control",
      icon: Rat,
      state: {
        scrollToService: "Rats & Mice Control",
        category: "Rodents & Wildlife",
      },
    },
    {
      number: "02",
      name: "Bed Bug Treatments",
      icon: Bug,
      state: {
        scrollToService: "Bed Bugs Control",
        category: "Insects",
      },
    },
    {
      number: "03",
      name: "Wasp Nest Control",
      icon: ShieldCheck,
      state: {
        scrollToService: "Wasp Nest Removal",
        category: "Insects",
      },
    },
    {
      number: "04",
      name: "Home Pest Inspection",
      icon: Home,
      state: {
        scrollToService: null,
        category: "All",
      },
    },
  ];

  /* =========================================================
     SCROLL REVEAL
  ========================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(".sgc-footer-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => {
        el.classList.add("sgc-footer-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sgc-footer-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="sgc-footer relative w-full overflow-hidden bg-[#6055A6] text-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* =========================================================
          SCHEMA
      ========================================================== */}

      <meta itemProp="name" content={LOCAL.company} />
      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, ${LOCAL.city}`}
      />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
      <meta itemProp="email" content={LOCAL.email} />

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
          content={LOCAL.city}
        />
        <meta
          itemProp="postalCode"
          content={LOCAL.postcode}
        />
        <meta itemProp="addressCountry" content="GB" />
      </div>

      {/* =========================================================
          CUSTOM CSS
      ========================================================== */}

      <style>{`
        .sgc-footer {
          --purple: #6055A6;
          --purple-dark: #4F458F;
          --white: #ffffff;
        }

        /* ==============================
           BACKGROUND
        ============================== */

        .sgc-footer-grid {
          background-image:
            linear-gradient(
              rgba(255,255,255,0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.055) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
        }

        .sgc-footer-noise {
          background-image:
            radial-gradient(
              rgba(255,255,255,0.12) 0.7px,
              transparent 0.7px
            );
          background-size: 10px 10px;
        }

        /* ==============================
           SCROLL REVEAL
        ============================== */

        .sgc-footer-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgc-footer-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sgc-footer-delay-1 {
          transition-delay: 100ms;
        }

        .sgc-footer-delay-2 {
          transition-delay: 200ms;
        }

        .sgc-footer-delay-3 {
          transition-delay: 300ms;
        }

        /* ==============================
           CTA
        ============================== */

        .sgc-footer-main-cta {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            box-shadow 300ms ease;
        }

        .sgc-footer-main-cta:hover {
          transform: translateY(-5px);
          background-color: #4F458F;
          box-shadow:
            0 25px 60px rgba(0,0,0,0.22);
        }

        .sgc-footer-main-cta-arrow {
          transition: transform 300ms ease;
        }

        .sgc-footer-main-cta:hover
        .sgc-footer-main-cta-arrow {
          transform: translate(4px,-4px);
        }

        /* ==============================
           NAVIGATION
        ============================== */

        .sgc-footer-nav {
          transition:
            transform 280ms ease,
            background-color 280ms ease,
            padding-left 280ms ease;
        }

        .sgc-footer-nav:hover {
          transform: translateX(5px);
          padding-left: 10px;
          background-color: rgba(255,255,255,0.07);
        }

        .sgc-footer-nav-arrow {
          transition:
            transform 280ms ease,
            opacity 280ms ease;
        }

        .sgc-footer-nav:hover
        .sgc-footer-nav-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        /* ==============================
           SERVICE CARDS
        ============================== */

        .sgc-footer-service {
          transition:
            transform 320ms ease,
            background-color 320ms ease,
            border-color 320ms ease,
            box-shadow 320ms ease;
        }

        .sgc-footer-service:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,0.11);
          border-color: rgba(255,255,255,0.32);
          box-shadow:
            0 18px 35px rgba(0,0,0,0.10);
        }

        .sgc-footer-service-icon {
          transition:
            transform 320ms ease,
            background-color 320ms ease,
            color 320ms ease;
        }

        .sgc-footer-service:hover
        .sgc-footer-service-icon {
          transform: rotate(-7deg) scale(1.08);
          background-color: #ffffff;
          color: #6055A6;
        }

        /* ==============================
           CONTACT
        ============================== */

        .sgc-footer-contact {
          transition:
            transform 280ms ease,
            background-color 280ms ease,
            border-color 280ms ease;
        }

        .sgc-footer-contact:hover {
          transform: translateX(5px);
          background-color: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.30);
        }

        /* ==============================
           GIANT TYPE
        ============================== */

        .sgc-footer-giant {
          font-size: clamp(110px, 20vw, 320px);
          line-height: 0.72;
          letter-spacing: -0.11em;
        }

        /* ==============================
           CIRCLE
        ============================== */

        .sgc-footer-circle {
          transition:
            transform 600ms cubic-bezier(0.16,1,0.3,1),
            box-shadow 300ms ease;
        }

        .sgc-footer-circle:hover {
          transform: rotate(10deg) scale(1.04);
          box-shadow:
            0 25px 65px rgba(0,0,0,0.22);
        }

        /* ==============================
           REDUCED MOTION
        ============================== */

        @media (prefers-reduced-motion: reduce) {
          .sgc-footer-reveal,
          .sgc-footer-main-cta,
          .sgc-footer-main-cta-arrow,
          .sgc-footer-nav,
          .sgc-footer-nav-arrow,
          .sgc-footer-service,
          .sgc-footer-service-icon,
          .sgc-footer-contact,
          .sgc-footer-circle {
            transition: none;
          }

          .sgc-footer-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="sgc-footer-grid absolute inset-0 opacity-40" />

        <div className="sgc-footer-noise absolute inset-0 opacity-[0.035]" />

        <div className="absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full bg-white/[0.10] blur-[130px]" />

        <div className="absolute -bottom-72 -right-60 h-[680px] w-[680px] rounded-full bg-black/[0.20] blur-[140px]" />

        <div className="absolute right-[7%] top-[9%] h-[420px] w-[420px] rounded-full border border-white/[0.09]" />

        <div className="absolute right-[11%] top-[14%] h-[300px] w-[300px] rounded-full border border-white/[0.07]" />

        <div className="absolute left-[42%] bottom-[18%] h-[180px] w-[180px] rounded-full border border-white/[0.05]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =======================================================
            BIG CTA
        ======================================================== */}

        <section className="sgc-footer-reveal relative border-b border-white/20 py-16 sm:py-20 lg:py-28">

          <div className="absolute right-[-3%] top-1/2 hidden -translate-y-1/2 select-none lg:block">
            <span className="sgc-footer-giant font-black text-white/[0.06]">
              SG
            </span>
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-[900px]">

              <div className="mb-7 flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6]">
                  <ShieldCheck size={17} />
                </span>

                <span className="text-[8px] font-black uppercase tracking-[0.32em] text-white/70">
                  SuperGuard Services • Coulsdon
                </span>

              </div>

              <h2 className="max-w-[950px] text-[56px] font-black leading-[0.88] tracking-[-0.075em] text-white sm:text-[76px] lg:text-[105px]">

                Pest problems?

                <span className="block text-white/55">
                  Let's sort it.
                </span>

              </h2>

              <p className="mt-8 max-w-[620px] text-sm leading-7 text-white/75 sm:text-[15px]">
                Professional pest control for homes, landlords and
                businesses across Coulsdon and surrounding South
                London areas.
              </p>

            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="sgc-footer-circle group flex h-[155px] w-[155px] shrink-0 flex-col items-center justify-center rounded-full bg-white text-center text-[#6055A6] sm:h-[180px] sm:w-[180px]"
            >
              <Phone size={21} />

              <span className="mt-3 text-[8px] font-black uppercase tracking-[0.18em]">
                Call Us
              </span>

              <span className="mt-1 text-[10px] font-black">
                {LOCAL.phoneDisplay}
              </span>

              <ArrowUpRight
                size={17}
                className="mt-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </section>

        {/* =======================================================
            BRAND / NAV / CONTACT
        ======================================================== */}

        <section className="grid border-b border-white/20 lg:grid-cols-[1.15fr_0.7fr_1fr]">

          {/* BRAND */}

          <div className="sgc-footer-reveal border-b border-white/20 py-12 lg:border-b-0 lg:border-r lg:pr-12">

            <Link
              to="/"
              className="inline-flex items-center gap-4"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">

                <img
                  src="/images/superguard-logo.webp"
                  alt={LOCAL.company}
                  className="h-11 w-12 object-contain"
                />

              </div>

              <div>

                <span className="block text-[18px] font-black uppercase tracking-[-0.04em] text-white">
                  SuperGuard
                </span>

                <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.25em] text-white/65">
                  Services Coulsdon
                </span>

              </div>

            </Link>

            <p className="mt-7 max-w-[430px] text-xs leading-6 text-white/70">
              Local pest control services designed around the
              needs of homes and businesses in Coulsdon and
              surrounding South London areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">

              <span className="rounded-full border border-white/25 px-4 py-2 text-[7px] font-black uppercase tracking-[0.16em] text-white/75">
                Coulsdon
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-[7px] font-black uppercase tracking-[0.16em] text-white/75">
                CR5
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-[7px] font-black uppercase tracking-[0.16em] text-white/75">
                South London
              </span>

            </div>

          </div>

          {/* NAVIGATION */}

          <div className="sgc-footer-reveal sgc-footer-delay-1 border-b border-white/20 py-12 lg:border-b-0 lg:border-r lg:px-9">

            <div className="flex items-center justify-between">

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/65">
                Explore
              </span>

              <span className="text-[7px] font-black text-white/45">
                04 PAGES
              </span>

            </div>

            <nav className="mt-6">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="sgc-footer-nav group flex items-center gap-3 border-t border-white/15 py-4 last:border-b"
                >

                  <span className="text-[7px] font-bold text-white/45">
                    {link.number}
                  </span>

                  <span className="text-[13px] font-black text-white/80 group-hover:text-white">
                    {link.name}
                  </span>

                  <ArrowRight
                    size={14}
                    className="sgc-footer-nav-arrow ml-auto text-white/45 opacity-80"
                  />

                </Link>
              ))}

            </nav>

          </div>

          {/* CONTACT */}

          <div className="sgc-footer-reveal sgc-footer-delay-2 py-12 lg:pl-10">

            <div className="flex items-center justify-between">

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/65">
                Contact
              </span>

              <span className="text-[7px] font-bold uppercase text-white/45">
                Coulsdon Team
              </span>

            </div>

            <div className="mt-6 space-y-2">

              {/* ADDRESS */}

              <div className="sgc-footer-contact flex gap-4 border border-white/15 bg-white/[0.035] p-4">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-white"
                />

                <div>

                  <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/50">
                    Address
                  </span>

                  <address className="mt-1 not-italic text-xs font-bold leading-5 text-white">
                    {LOCAL.address}
                  </address>

                </div>

              </div>

              {/* PHONE */}

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="sgc-footer-contact flex gap-4 border border-white/15 bg-white/[0.035] p-4"
              >

                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-white"
                />

                <div>

                  <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/50">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm font-black text-white">
                    {LOCAL.phoneDisplay}
                  </span>

                </div>

              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${LOCAL.email}`}
                className="sgc-footer-contact flex gap-4 border border-white/15 bg-white/[0.035] p-4"
              >

                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-white"
                />

                <div className="min-w-0">

                  <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/50">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-xs font-black text-white">
                    {LOCAL.email}
                  </span>

                </div>

              </a>

            </div>

          </div>

        </section>

        {/* =======================================================
            SERVICES
        ======================================================== */}

        <section className="sgc-footer-reveal sgc-footer-delay-2 border-b border-white/20 py-10">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/65">
                Common Pest Problems
              </span>

              <p className="mt-2 text-xs text-white/60">
                Explore some of the services available from our
                Coulsdon team.
              </p>

            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
            >
              All Services
              <ArrowRight size={14} />
            </Link>

          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <Link
                  key={service.name}
                  to="/services"
                  state={service.state}
                  className="sgc-footer-service group flex min-h-[94px] items-center gap-4 rounded-xl border border-white/15 bg-white/[0.045] p-4"
                >

                  <span className="sgc-footer-service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.10] text-white">

                    <Icon size={18} />

                  </span>

                  <div>

                    <span className="block text-[7px] font-bold uppercase tracking-[0.18em] text-white/45">
                      {service.number}
                    </span>

                    <span className="mt-1 block text-[10px] font-black text-white/85 group-hover:text-white">
                      {service.name}
                    </span>

                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />

                </Link>
              );

            })}

          </div>

        </section>

        {/* =======================================================
            BOTTOM BAR
        ======================================================== */}

        <div className="sgc-footer-reveal sgc-footer-delay-3 flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-[9px] font-bold text-white/60">
              © {new Date().getFullYear()} {LOCAL.company}
            </p>

            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
              All rights reserved
            </p>

          </div>

          <div className="flex flex-wrap gap-3 text-[7px] font-black uppercase tracking-[0.18em] text-white/55">

            <span>{LOCAL.area}</span>

            <span>•</span>

            <span>{LOCAL.postcode}</span>

            <span>•</span>

            <span>Residential & Commercial</span>

          </div>

          <Link
            to="/contact-us"
            className="sgc-footer-main-cta inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-6 text-[8px] font-black uppercase tracking-[0.18em] text-[#6055A6]"
          >

            Contact Coulsdon Team

            <ArrowRight
              size={14}
              className="sgc-footer-main-cta-arrow"
            />

          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;