



// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   Bug,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Mouse,
//   Bird,
//   ClipboardCheck,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneNo: "07466 565503",
//     phoneTel: "+447466565503",
//     companyName: "SuperGuard Walworth",
//   };

//   const serviceTypes = [
//     { title: "Rodents", text: "Rats, mice & squirrels", icon: Mouse },
//     { title: "Insects", text: "Bed bugs, ants & fleas", icon: Bug },
//     { title: "Birds", text: "Proofing & deterrents", icon: Bird },
//     { title: "Inspection", text: "Find the root cause", icon: ClipboardCheck },
//   ];

//   return (
//     <section className="relative mt-10 overflow-hidden bg-[#F8F6FF] pt-32 pb-20 lg:pt-40 lg:pb-28">
//       <style>{`
//         @keyframes sgHeroFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .sg-hero-up {
//           animation: sgHeroFadeUp .75s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sg-delay-1 { animation-delay: 120ms; }
//         .sg-delay-2 { animation-delay: 220ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hero-up { animation: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute right-0 top-0 h-full w-full bg-[#5F52B5]"
//           style={{
//             clipPath: "polygon(55% 0, 100% 0, 100% 100%, 70% 100%)",
//           }}
//         />
//         <div className="absolute -left-32 top-24 h-[460px] w-[460px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute -right-32 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#17122F]/22 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="sg-hero-up lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               <ShieldCheck className="mr-2 h-4 w-4" />
//               Services Directory • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h1 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Pest Control Services For SE17 Properties.
//             </h1>

//             <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
//               Browse {LOCAL.companyName} services for rodents, bed bugs, ants,
//               cockroaches, fleas, wasps, birds and property proofing across{" "}
//               {LOCAL.postcode}. Choose the issue and request local support.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#17122F]"
//               >
//                 Book Inspection
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 bg-[#17122F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#5F52B5]"
//               >
//                 <Phone className="h-4 w-4" />
//                 {LOCAL.phoneNo}
//               </a>
//             </div>

//             <div className="sg-hero-up sg-delay-2 mt-9 grid gap-3 sm:grid-cols-3">
//               {[
//                 { icon: SearchCheck, title: "Inspection First" },
//                 { icon: ShieldCheck, title: "Targeted Plan" },
//                 { icon: Home, title: "SE17 Support" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={item.title} className="bg-white p-4 shadow-xl shadow-[#17122F]/6">
//                     <Icon className="mb-3 h-5 w-5 text-[#5F52B5]" />
//                     <span className="text-sm font-black text-[#17122F]">
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* CENTER IMAGE */}
//           <div className="sg-hero-up sg-delay-1 lg:col-span-4">
//             <div className="relative min-h-[560px] overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/25">
//               <img
//                 src="/images/servicehero.webp"
//                 alt={`${LOCAL.companyName} pest control services in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover opacity-85"
//                 loading="eager"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#17122F] via-[#17122F]/25 to-transparent" />

//               <div className="absolute left-5 top-5 bg-white px-5 py-4 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Base
//                 </span>
//                 <span className="block text-xl font-black text-[#17122F]">
//                   {LOCAL.area}
//                 </span>
//               </div>

//               <div className="absolute bottom-5 left-5 right-5 bg-white p-6 shadow-2xl">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Address
//                 </span>
//                 <address className="mt-2 not-italic text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SERVICE COMMAND */}
//           <div className="sg-hero-up sg-delay-2 lg:col-span-3">
//             <div className="grid gap-4">
//               {serviceTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group bg-white p-5 shadow-2xl shadow-[#17122F]/10 transition-all hover:-translate-y-1 hover:bg-[#17122F]"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex h-13 w-13 items-center justify-center bg-[#5F52B5] text-white group-hover:bg-white group-hover:text-[#5F52B5]">
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <CheckCircle2 className="h-5 w-5 text-[#5F52B5] group-hover:text-white" />
//                     </div>

//                     <h3 className="mt-5 text-2xl font-black text-[#17122F] group-hover:text-white">
//                       {item.title}
//                     </h3>

//                     <p className="mt-2 text-sm font-semibold text-slate-600 group-hover:text-white/70">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="bg-[#17122F] p-6 text-white shadow-2xl shadow-[#17122F]/20 transition-all hover:bg-white hover:text-[#5F52B5]"
//               >
//                 <Phone className="mb-4 h-6 w-6" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">
//                   Call Direct
//                 </span>
//                 <span className="mt-2 block text-2xl font-black">
//                   {LOCAL.phoneNo}
//                 </span>
//               </a>
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
//   ArrowDown,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#6055A6] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes serviceHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes serviceHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.96) translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         @keyframes serviceHeroFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .service-hero-reveal {
//           animation: serviceHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-image-reveal {
//           animation: serviceHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-delay-1 {
//           animation-delay: 120ms;
//         }

//         .service-hero-delay-2 {
//           animation-delay: 220ms;
//         }

//         .service-hero-delay-3 {
//           animation-delay: 320ms;
//         }

//         .service-hero-float {
//           animation: serviceHeroFloat 5s ease-in-out infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .service-hero-reveal,
//           .service-hero-image-reveal,
//           .service-hero-float {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-52 -top-52 h-[620px] w-[620px] rounded-full bg-white/10 blur-[150px]" />

//         <div className="absolute -bottom-72 right-[-180px] h-[720px] w-[720px] rounded-full bg-[#171327]/35 blur-[170px]" />

//         <div className="absolute left-[42%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#867BC8]/30 blur-[130px]" />

//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//             backgroundSize: "88px 88px",
//           }}
//         />

//         <div
//           aria-hidden="true"
//           className="absolute left-[-40px] top-[120px] hidden rotate-[-90deg] text-[10px] font-black uppercase tracking-[0.5em] text-white/20 lg:block"
//         >
//           SuperGuard Holborn
//         </div>

//         <div
//           aria-hidden="true"
//           className="absolute right-[-70px] top-[120px] hidden select-none text-[220px] font-black leading-none tracking-[-0.08em] text-white/[0.035] lg:block"
//         >
//           01
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//         {/* TOP LINE */}
//         <div className="service-hero-reveal flex flex-col gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
//             </span>

//             <span className="text-[9px] font-black uppercase tracking-[0.26em] text-white/75 sm:text-[10px]">
//               Residential & Commercial Pest Control
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">
//             <MapPin
//               size={15}
//               strokeWidth={2.4}
//               className="shrink-0 text-white"
//             />

//             {LOCAL.address}
//           </div>
//         </div>

//         {/* MAIN HEADING */}
//         <div className="service-hero-reveal service-hero-delay-1 mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-14 bg-white/45 sm:w-20" />

//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
//                 Pest Control Services
//               </span>
//             </div>

//             <h1
//               id="services-hero-heading"
//               className="mt-6 max-w-[1050px] text-[48px] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[66px] md:text-[82px] lg:text-[98px] xl:text-[112px]"
//             >
//               Pest Control
//               <span className="block text-[#D9D4FF]">
//                 For Holborn Properties.
//               </span>
//             </h1>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
//               Explore professional pest control support for rodents, insects,
//               birds and property-related pest concerns across Holborn and
//               Central London.
//             </p>

//             <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/50">
//               We focus on inspection, treatment planning and clear practical
//               guidance for homes, landlords and businesses.
//             </p>
//           </div>
//         </div>

//         {/* CTA ROW */}
//         <div className="service-hero-reveal service-hero-delay-2 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
//           <Link
//             to="/contact-us"
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6] shadow-[0_18px_45px_rgba(23,19,39,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             Request An Inspection

//             <ArrowRight
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>

//           {/* <button
//             type="button"
//             onClick={scrollToServices}
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.08] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//           >
//             Browse Services

//             <ArrowDown
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button> */}
//         </div>

//         {/* IMAGE STAGE */}
//         <div className="service-hero-image-reveal service-hero-delay-2 relative mt-14 lg:mt-16">
//           <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/15 bg-[#171327] shadow-[0_40px_110px_rgba(23,19,39,0.28)] sm:min-h-[650px] lg:min-h-[760px]">
//             <img
//               src="/images/servicehero.webp"
//               alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//               className="absolute inset-0 h-full w-full object-cover object-center"
//               loading="eager"
//               fetchPriority="high"
//             />

//             <div className="absolute inset-0 bg-[#171327]/18" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/90 via-[#171327]/15 to-transparent" />

//             <div className="absolute inset-0 bg-gradient-to-r from-[#171327]/25 via-transparent to-[#6055A6]/25" />

//             <div className="absolute inset-0 bg-[#6055A6]/10 mix-blend-multiply" />

//             {/* TOP GLASS BADGE */}
//             <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
//               <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
//                 <ShieldCheck
//                   size={17}
//                   strokeWidth={2.5}
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[0.19em]">
//                   SuperGuard Holborn
//                 </span>
//               </div>
//             </div>

//             {/* FLOATING PROCESS PANEL */}
//             <div className="service-hero-float absolute right-5 top-5 hidden w-[270px] rounded-[26px] border border-white/15 bg-[#171327]/35 p-6 text-white shadow-2xl backdrop-blur-xl sm:right-8 sm:top-8 lg:block">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                 <SearchCheck
//                   size={21}
//                   strokeWidth={2.5}
//                 />
//               </div>

//               <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Our Approach
//               </span>

//               <h2 className="mt-2 text-xl font-black leading-tight text-white">
//                 Inspect first. Understand the issue. Plan the next step.
//               </h2>
//             </div>

//             {/* IMAGE BOTTOM COPY */}
//             <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-11">
//               <div className="max-w-[850px]">
//                 <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D9D4FF]">
//                   Professional Property Support
//                 </span>

//                 <h2 className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                   The Right Service Starts With Understanding The Property.
//                 </h2>

//                 <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8">
//                   Tell us what signs you have noticed, where activity is
//                   appearing and the type of property requiring attention.
//                 </p>
//               </div>
//             </div>

//             {/* SIDE NUMBER */}
//             <div className="absolute bottom-8 right-8 hidden lg:block">
//               <span className="text-[110px] font-black leading-none tracking-[-0.08em] text-white/[0.08]">
//                 SG
//               </span>
//             </div>
//           </div>

//           {/* ADDRESS OVERLAP */}
//           <div className="relative z-20 mx-4 -mt-8 rounded-[28px] bg-[#171327] px-6 py-6 text-white shadow-[0_25px_70px_rgba(23,19,39,0.28)] sm:mx-8 sm:px-8 lg:mx-12 lg:-mt-10 lg:px-10">
//             <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-start gap-4">
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <MapPin
//                     size={21}
//                     strokeWidth={2.5}
//                   />
//                 </span>

//                 <div>
//                   <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#BDB6FF]">
//                     Holborn Base
//                   </span>

//                   <address className="mt-2 not-italic text-base font-black leading-relaxed text-white sm:text-lg">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-x-6 gap-y-3">
//                 {trustPoints.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2"
//                   >
//                     <CheckCircle2
//                       size={17}
//                       strokeWidth={2.7}
//                       className="shrink-0 text-[#BDB6FF]"
//                     />

//                     <span className="text-xs font-black text-white/70">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CONTINUATION */}
//         <div className="service-hero-reveal service-hero-delay-3 mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white">
//               <Sparkles
//                 size={18}
//                 strokeWidth={2.4}
//               />
//             </span>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Next Section
//               </span>

//               <span className="mt-1 block text-sm font-black text-white">
//                 Explore the complete pest control service directory
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={scrollToServices}
//             aria-label="Scroll to pest control services"
//             className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             <ArrowDown
//               size={20}
//               strokeWidth={2.7}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowRight,
//   Building2,
//   Check,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     address: "14 Regency St, London SW1P 4BD",
//   };

//   /*
//    * Scroll behaviour intentionally preserved
//    * from the original ServicesHeroSection.
//    */
//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   const serviceIndex = [
//     {
//       number: "01",
//       title: "Rodents",
//       text: "Rats, mice and wildlife-related activity.",
//     },
//     {
//       number: "02",
//       title: "Insects",
//       text: "Bed bugs, cockroaches, ants, fleas and moths.",
//     },
//     {
//       number: "03",
//       title: "Nests",
//       text: "Wasps, bees and nesting pest concerns.",
//     },
//     {
//       number: "04",
//       title: "Proofing",
//       text: "Entry-point and property protection support.",
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#F4F1F8] pb-16 pt-28 text-[#18141F] sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes sgwServicesHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(28px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgwServicesHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.97);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes sgwServicesHeroLine {
//           from {
//             transform: scaleX(0);
//           }

//           to {
//             transform: scaleX(1);
//           }
//         }

//         .sgw-services-hero-reveal {
//           animation: sgwServicesHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-image {
//           animation: sgwServicesHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-line {
//           transform-origin: left;
//           animation: sgwServicesHeroLine 900ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-delay-1 {
//           animation-delay: 100ms;
//         }

//         .sgw-services-delay-2 {
//           animation-delay: 200ms;
//         }

//         .sgw-services-delay-3 {
//           animation-delay: 300ms;
//         }

//         .sgw-services-delay-4 {
//           animation-delay: 400ms;
//         }

//         .sgw-services-dot-pattern {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.34) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-services-hero-reveal,
//           .sgw-services-hero-image,
//           .sgw-services-hero-line {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         <div className="absolute -left-64 top-[-120px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/13 blur-[165px]" />

//         <div className="absolute -right-72 bottom-[-270px] h-[680px] w-[680px] rounded-full border-[120px] border-[#6254B4]/[0.04]" />

//         <div className="sgw-services-dot-pattern absolute right-6 top-24 h-48 w-48 opacity-40" />

//         <div className="absolute right-0 top-0 h-full w-[31%] border-l border-[#6254B4]/[0.055] bg-white/25" />
//       </div>

//       {/* BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.03] xl:block"
//       >
//         Services
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//         {/* TOP DATA BAR */}
//         <div className="sgw-services-hero-reveal grid border-y border-[#CEC7D8] lg:grid-cols-[1fr_auto_auto]">
//           <div className="flex items-center gap-4 py-5 lg:pr-8">
//             <span className="relative flex h-3 w-3 shrink-0">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6254B4] opacity-30" />

//               <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6254B4]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                 Westminster Service Atlas
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#18141F]">
//                 Residential & Commercial Pest Control
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:px-8">
//             <MapPin
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               {LOCAL.address}
//             </span>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:pl-8">
//             <ShieldCheck
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               Westminster · SW1P
//             </span>
//           </div>
//         </div>

//         {/* MAIN HERO */}
//         <div className="mt-14 grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
//           {/* LEFT EDITORIAL COLUMN */}
//           <div className="sgw-services-hero-reveal sgw-services-delay-1 flex flex-col">
//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#6254B4]/55 sm:w-20" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                   Pest Control Services
//                 </span>
//               </div>

//               <h1
//                 id="services-hero-heading"
//                 className="mt-7 max-w-[690px] text-[54px] font-black leading-[0.88] tracking-[-0.065em] text-[#18141F] sm:text-[72px] lg:text-[86px] xl:text-[91px]"
//               >
//                 Professional pest control
//                 <span className="block text-[#6254B4]">
//                   for Westminster properties.
//                 </span>
//               </h1>

//               <p className="mb-0 mt-8 max-w-[590px] text-[15px] font-medium leading-7 text-[#625D69] sm:text-base sm:leading-8">
//                 Explore pest control support for rodents, insects,
//                 wildlife, nests, birds and property proofing across
//                 Westminster and Central London.
//               </p>

//               <p className="mb-0 mt-4 max-w-[570px] text-sm font-medium leading-7 text-[#827C88]">
//                 Our service focuses on understanding the property,
//                 identifying the activity and planning a suitable next
//                 step.
//               </p>
//             </div>

//             {/* ACTIONS */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 bg-[#6254B4] px-7 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#18141F]"
//               >
//                 Request Pest Support

//                 <ArrowRight
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <button
//                 type="button"
//                 onClick={scrollToServices}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 border border-[#CFC8D9] bg-white/40 px-7 text-[10px] font-black uppercase tracking-[0.17em] text-[#18141F] transition-all duration-300 hover:-translate-y-1 hover:border-[#6254B4] hover:text-[#6254B4]"
//               >
//                 Browse Services

//                 <ArrowDown
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-y-1"
//                 />
//               </button>
//             </div>

//             {/* TRUST LEDGER */}
//             <div className="mt-11 border-y border-[#CFC8D9]">
//               {trustPoints.map((item, index) => (
//                 <div
//                   key={item}
//                   className="grid grid-cols-[52px_1fr] border-b border-[#CFC8D9] last:border-b-0"
//                 >
//                   <span className="flex min-h-[58px] items-center justify-center border-r border-[#CFC8D9] text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="flex min-h-[58px] items-center gap-3 px-4 text-[10px] font-black uppercase tracking-[0.13em] text-[#3B3541]">
//                     <Check
//                       size={15}
//                       strokeWidth={3}
//                       className="shrink-0 text-[#6254B4]"
//                     />

//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT VISUAL ATLAS */}
//           <div className="sgw-services-hero-image sgw-services-delay-2">
//             <div className="grid border border-[#CFC8D9] bg-white shadow-[0_35px_100px_rgba(38,28,63,0.12)] lg:grid-cols-[88px_minmax(0,1fr)]">
//               {/* VERTICAL INDEX */}
//               <div className="hidden border-r border-[#D8D2DF] bg-[#18141F] text-white lg:flex lg:flex-col">
//                 <div className="flex min-h-[96px] items-center justify-center border-b border-white/10">
//                   <span className="-rotate-90 whitespace-nowrap text-[8px] font-black uppercase tracking-[0.28em] text-[#BDB6FF]">
//                     Service Directory
//                   </span>
//                 </div>

//                 <div className="flex flex-1 flex-col">
//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="group flex flex-1 items-center justify-center border-b border-white/10 last:border-b-0"
//                     >
//                       <span className="text-[17px] font-black tracking-[-0.03em] text-white/25 transition-colors duration-300 group-hover:text-[#BDB6FF]">
//                         {service.number}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* IMAGE AND CONTENT */}
//               <div className="relative min-h-[650px] overflow-hidden bg-[#18141F] sm:min-h-[760px]">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                   className="absolute inset-0 h-full w-full object-cover object-center"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#18141F]/95 via-[#18141F]/25 to-[#18141F]/10" />

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#18141F]/30 via-transparent to-[#6254B4]/20" />

//                 {/* TOP REFERENCE */}
//                 <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 border border-white/15 bg-[#18141F]/45 px-5 py-4 text-white backdrop-blur-lg sm:left-7 sm:right-7 sm:top-7">
//                   <div className="flex items-center gap-3">
//                     <ShieldCheck
//                       size={18}
//                       strokeWidth={2.5}
//                       className="text-[#D3CDFF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em]">
//                       SuperGuard Westminster
//                     </span>
//                   </div>

//                   {/* <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/45">
//                     Service Ref · SGW-01
//                   </span> */}
//                 </div>

//                 {/* SERVICE INDEX PANEL */}
//                 {/* <div className="absolute right-5 top-24 hidden w-[280px] border border-white/15 bg-[#18141F]/55 text-white backdrop-blur-xl sm:right-7 sm:top-28 lg:block">
//                   <div className="flex items-center gap-3 border-b border-white/10 p-5">
//                     <SearchCheck
//                       size={20}
//                       strokeWidth={2.4}
//                       className="text-[#BDB6FF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#BDB6FF]">
//                       Service Categories
//                     </span>
//                   </div>

//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="grid grid-cols-[45px_1fr] border-b border-white/10 p-4 last:border-b-0"
//                     >
//                       <span className="text-[9px] font-black tracking-[0.16em] text-[#BDB6FF]">
//                         {service.number}
//                       </span>

//                       <div>
//                         <span className="block text-sm font-black text-white">
//                           {service.title}
//                         </span>

//                         <span className="mt-1 block text-[10px] font-medium leading-5 text-white/45">
//                           {service.text}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}

//                 {/* BOTTOM IMAGE COPY */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
//                   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D3CDFF]">
//                     Property-Based Pest Support
//                   </span>

//                   <h2 className="mt-4 max-w-[760px] text-[34px] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[58px]">
//                     The right service begins with understanding the
//                     property.
//                   </h2>

//                   <p className="mb-0 mt-5 max-w-[650px] text-sm font-medium leading-7 text-white/65 sm:text-base">
//                     Tell us where the activity is appearing, what signs
//                     you have noticed and the type of property requiring
//                     support.
//                   </p>
//                 </div>

//                 {/* LARGE MARK */}
//                 <span
//                   aria-hidden="true"
//                   className="pointer-events-none absolute bottom-5 right-7 hidden text-[95px] font-black leading-none tracking-[-0.08em] text-white/[0.055] xl:block"
//                 >
//                   SG
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SERVICE NAVIGATION RAIL */}
//         <div className="sgw-services-hero-reveal sgw-services-delay-3 mt-12 border-y border-[#CFC8D9]">
//           <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_90px]">
//             <div className="flex items-center gap-4 border-b border-[#CFC8D9] py-6 lg:border-b-0 lg:border-r lg:pr-7">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6254B4] text-white">
//                 <Sparkles size={19} strokeWidth={2.5} />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#8B8491]">
//                   Continue below
//                 </span>

//                 <span className="mt-1 block text-sm font-black text-[#18141F]">
//                   Full service directory
//                 </span>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 xl:grid-cols-4">
//               {serviceIndex.map((service, index) => (
//                 <div
//                   key={service.number}
//                   className={`flex items-center gap-4 py-5 lg:px-6 ${
//                     index !== serviceIndex.length - 1
//                       ? "xl:border-r xl:border-[#CFC8D9]"
//                       : ""
//                   }`}
//                 >
//                   <span className="text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {service.number}
//                   </span>

//                   <span className="text-[11px] font-black uppercase tracking-[0.11em] text-[#3A3440]">
//                     {service.title}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button
//               type="button"
//               onClick={scrollToServices}
//               aria-label="Scroll to pest control services"
//               className="group flex min-h-[74px] items-center justify-center border-t border-[#CFC8D9] bg-[#18141F] text-white transition-colors duration-300 hover:bg-[#6254B4] lg:border-l lg:border-t-0"
//             >
//               <ArrowDown
//                 size={21}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-y-1"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function ServicesHeroSection() {
  const LOCAL = {
    company: "SuperGuard Services Coulsdon",
    shortName: "SuperGuard Coulsdon",
    area: "Coulsdon",
    city: "London",
    postcode: "CR5 2SS",
    address: "15 Ashcroft Rise, Coulsdon CR5 2SS",
    phoneDisplay: "07448 701144",
    phoneTel: "+447448701144",
    email: "info@superguardcoulsdon.uk",
  };

  const scrollToServices = () => {
    const section =
      document.getElementById("services-list") ||
      document.getElementById("all-services") ||
      document.getElementById("service-directory");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes sgCoulsdonFade {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sgCoulsdonZoom {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sgCoulsdonSlide {
          from {
            opacity: 0;
            transform: translateX(45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes sgCoulsdonFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes sgCoulsdonPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(96, 85, 166, 0.35);
          }

          50% {
            box-shadow: 0 0 0 12px rgba(96, 85, 166, 0);
          }
        }

        @keyframes sgCoulsdonScroll {
          0% {
            transform: translateY(-8px);
            opacity: 0.4;
          }

          50% {
            transform: translateY(4px);
            opacity: 1;
          }

          100% {
            transform: translateY(-8px);
            opacity: 0.4;
          }
        }

        .sg-c-main {
          animation: sgCoulsdonFade 900ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-title {
          animation: sgCoulsdonFade 1000ms 100ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-copy {
          animation: sgCoulsdonFade 900ms 220ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-buttons {
          animation: sgCoulsdonFade 900ms 340ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-card {
          animation: sgCoulsdonSlide 1000ms 250ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-bg {
          animation: sgCoulsdonZoom 1400ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-c-float {
          animation: sgCoulsdonFloat 4s ease-in-out infinite;
        }

        .sg-c-pulse {
          animation: sgCoulsdonPulse 2.8s ease-in-out infinite;
        }

        .sg-c-scroll {
          animation: sgCoulsdonScroll 2s ease-in-out infinite;
        }

        .sg-contact-box {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            border-color 300ms ease;
        }

        .sg-contact-box:hover {
          transform: translateY(-4px);
          background: #6055A6;
          border-color: #6055A6;
        }

        .sg-contact-box:hover span,
        .sg-contact-box:hover p {
          color: white;
        }

        .sg-contact-box:hover .sg-contact-icon {
          background: white;
          color: #6055A6;
        }

        .sg-contact-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease;
        }

        .sg-contact-link {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            border-color 300ms ease;
        }

        .sg-contact-link:hover {
          transform: translateY(-4px);
          background: #6055A6;
          border-color: #6055A6;
        }

        .sg-contact-link:hover span,
        .sg-contact-link:hover p {
          color: white;
        }

        .sg-contact-link:hover .sg-contact-icon {
          background: white;
          color: #6055A6;
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-c-main,
          .sg-c-title,
          .sg-c-copy,
          .sg-c-buttons,
          .sg-c-card,
          .sg-c-bg,
          .sg-c-float,
          .sg-c-pulse,
          .sg-c-scroll {
            animation: none;
          }

          .sg-contact-box,
          .sg-contact-link,
          .sg-contact-icon {
            transition: none;
          }
        }
      `}</style>

      <section className="relative mt-32 overflow-hidden bg-[#17151C] text-white">

        {/* =====================================================
            FULL BACKGROUND HERO
        ===================================================== */}

        <div className="relative min-h-[850px] overflow-hidden">

          {/* =================================================
              CLEAR BACKGROUND IMAGE
              NO DARK OVERLAY
          ================================================= */}

          <img
            src="/images/servicehero.webp"
            alt={`${LOCAL.company} pest control services in ${LOCAL.area}, London`}
            className="sg-c-bg absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          {/* Very subtle edge gradient only for readability.
              Image remains clearly visible. */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

          {/* Bottom subtle fade */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#17151C]/35 to-transparent" />

          {/* Purple Decorative Glow */}

          <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6055A6]/10 blur-[100px]" />

          {/* =================================================
              TOP INFO BAR
          ================================================= */}

          <div className="relative z-20 border-b border-white/20 bg-black/5 backdrop-blur-[2px]">

            <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

              {/* Brand */}

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-[0_8px_25px_rgba(96,85,166,.35)]">
                  <ShieldCheck size={18} strokeWidth={2.4} />
                </div>

                <div>
                  <span className="block text-[7px] font-black uppercase tracking-[.3em] text-white/70">
                    SuperGuard Services
                  </span>

                  <span className="mt-1 block text-[10px] font-black uppercase tracking-[.2em] text-white">
                    {LOCAL.area}
                  </span>
                </div>

              </div>

              {/* Contact Information */}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

                <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.18em] text-white/75">
                  <MapPin size={13} className="text-[#6055A6]" />
                  {LOCAL.area}, {LOCAL.city}
                </span>

                <span className="hidden h-4 w-px bg-white/30 sm:block" />

                <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/75">
                  {LOCAL.postcode}
                </span>

                <span className="hidden h-4 w-px bg-white/30 sm:block" />

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:text-[#6055A6]"
                >
                  <Phone size={13} />
                  {LOCAL.phoneDisplay}
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative z-10 mx-auto flex min-h-[770px] max-w-[1600px] items-center px-5 py-20 sm:px-8 lg:px-12">

            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">

              {/* =================================================
                  LEFT SIDE
              ================================================= */}

              <div className="sg-c-main max-w-[900px]">

                {/* Eyebrow */}

                <div className="mb-7 flex items-center gap-4">

                  <span className="h-[2px] w-14 bg-[#6055A6]" />

                  <span className="rounded-sm bg-black/20 px-3 py-1.5 text-[8px] font-black uppercase tracking-[.35em] text-white backdrop-blur-sm">
                    Local Pest Control · {LOCAL.postcode}
                  </span>

                </div>

                {/* Main Heading */}

                <h1 className="sg-c-title max-w-[900px] text-[64px] font-black leading-[.83] tracking-[-.075em] sm:text-[86px] md:text-[105px] lg:text-[112px] xl:text-[135px]">

                  <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.25)]">
                    Keep pests
                  </span>

                  <span className="block text-[#6055A6] drop-shadow-[0_4px_20px_rgba(0,0,0,.15)]">
                    out.
                  </span>

                  <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.25)]">
                    Keep life
                  </span>

                  <span className="block text-white/80 drop-shadow-[0_4px_20px_rgba(0,0,0,.25)]">
                    moving.
                  </span>

                </h1>

                {/* Description */}

                <div className="sg-c-copy mt-9 max-w-[650px] border-l-2 border-[#6055A6] bg-black/10 pl-5 backdrop-blur-[2px]">

                  <p className="text-sm font-medium leading-7 text-white/85 sm:text-base sm:leading-8">

                    Professional pest control for homes,
                    landlords, businesses and commercial
                    properties throughout{" "}

                    <strong className="font-black text-white">
                      {LOCAL.area}
                    </strong>{" "}

                    and surrounding London areas.

                  </p>

                </div>

                {/* Buttons */}

                <div className="sg-c-buttons mt-10 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/contact-us"
                    className="group flex min-h-[62px] min-w-[235px] items-center justify-between gap-12 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.2em] text-white shadow-[0_20px_55px_rgba(96,85,166,.3)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#17151C]"
                  >
                    <span>
                      Book Pest Control
                    </span>

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="group flex min-h-[62px] min-w-[210px] items-center justify-between gap-10 border border-white/50 bg-black/10 px-7 text-[9px] font-black uppercase tracking-[.2em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#17151C]"
                  >
                    <span>
                      Explore Services
                    </span>

                    <ArrowDown
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </button>

                </div>

                {/* Trust */}

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">

                  {[
                    "Local Team",
                    "Residential",
                    "Commercial",
                    "Professional Service",
                  ].map((item) => (

                    <span
                      key={item}
                      className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-white/75"
                    >

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6055A6] text-white">
                        <Check size={11} />
                      </span>

                      {item}

                    </span>

                  ))}

                </div>

              </div>

              {/* =================================================
                  RIGHT FLOATING CARD
              ================================================= */}

              <div className="relative hidden lg:block">

                <div className="sg-c-card ml-auto w-full max-w-[390px]">

                  <div className="relative overflow-hidden border border-white/30 bg-white/90 p-8 text-[#17151C] shadow-[0_35px_100px_rgba(0,0,0,.25)] backdrop-blur-xl">

                    {/* Card top */}

                    <div className="flex items-center justify-between border-b border-[#17151C]/10 pb-6">

                      <div>

                        <span className="block text-[7px] font-black uppercase tracking-[.28em] text-[#6055A6]/60">
                          Service Area
                        </span>

                        <span className="mt-2 block text-2xl font-black tracking-[-.04em]">
                          {LOCAL.area}
                        </span>

                      </div>

                      <div className="sg-c-pulse flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] text-white">
                        <ShieldCheck size={20} />
                      </div>

                    </div>

                    {/* Card Content */}

                    <div className="py-7">

                      <span className="block text-[8px] font-black uppercase tracking-[.25em] text-[#17151C]/35">
                        Local Coverage
                      </span>

                      <p className="mt-3 text-sm font-medium leading-7 text-[#17151C]/60">
                        Practical pest control solutions
                        for homes, rental properties,
                        offices and businesses.
                      </p>

                    </div>

                    {/* Location */}

                    <div className="flex items-center gap-4 border-t border-[#17151C]/10 pt-6">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6055A6] text-white">
                        <MapPin size={17} />
                      </div>

                      <div>

                        <span className="block text-[7px] font-black uppercase tracking-[.2em] text-[#17151C]/35">
                          Coverage
                        </span>

                        <span className="mt-1 block text-sm font-black">
                          {LOCAL.area}, {LOCAL.city}
                        </span>

                      </div>

                    </div>

                    {/* Address */}

                    <div className="mt-5 border-t border-[#17151C]/10 pt-5">

                      <span className="block text-[7px] font-black uppercase tracking-[.2em] text-[#17151C]/35">
                        Address
                      </span>

                      <p className="mt-2 text-xs font-bold leading-6 text-[#17151C]/60">
                        {LOCAL.address}
                      </p>

                    </div>

                    {/* Call */}

                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="mt-6 flex min-h-[58px] items-center justify-between bg-[#17151C] px-5 text-white transition duration-300 hover:bg-[#6055A6]"
                    >

                      <div>

                        <span className="block text-[7px] font-black uppercase tracking-[.2em] text-white/40">
                          Call SuperGuard
                        </span>

                        <span className="mt-1 block text-sm font-black">
                          {LOCAL.phoneDisplay}
                        </span>

                      </div>

                      <Phone size={18} />

                    </a>

                  </div>

                </div>

                {/* Floating postcode */}

                <div className="sg-c-float absolute -bottom-8 -left-12 border border-white/20 bg-[#6055A6] px-6 py-5 shadow-[0_20px_55px_rgba(0,0,0,.25)]">

                  <span className="block text-[7px] font-black uppercase tracking-[.25em] text-white/60">
                    Postcode
                  </span>

                  <span className="mt-1 block text-lg font-black tracking-[-.02em] text-white">
                    {LOCAL.postcode}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              SCROLL INDICATOR
          ================================================= */}

          <div className="absolute bottom-10 left-5 z-20 flex items-center gap-4 sm:left-8 lg:left-12">

            <div className="sg-c-scroll flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/10">
              <ArrowDown size={14} />
            </div>

            <span className="rounded bg-black/10 px-2 py-1 text-[7px] font-black uppercase tracking-[.3em] text-white/65 backdrop-blur-sm">
              Discover Services
            </span>

          </div>

          {/* Hero Number */}

          <div className="pointer-events-none absolute bottom-3 right-5 hidden text-[180px] font-black leading-none tracking-[-.12em] text-white/[.08] lg:block">
            01
          </div>

        </div>

        {/* =====================================================
            LOCAL CONTACT STRIP
            WHAT WE HANDLE SECTION REMOVED COMPLETELY
        ===================================================== */}

        <div className="bg-white px-5 py-12 text-[#17151C] sm:px-8 lg:px-12 lg:py-16">

          <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-3">

            {/* =================================================
                LOCATION
            ================================================= */}

            <div className="sg-contact-box border border-[#17151C]/10 p-6">

              <div className="sg-contact-icon flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
                <MapPin size={17} />
              </div>

              <span className="mt-6 block text-[7px] font-black uppercase tracking-[.25em] text-[#17151C]/35">
                Local Address
              </span>

              <p className="mt-2 text-sm font-black leading-6 text-[#17151C]">
                {LOCAL.address}
              </p>

            </div>

            {/* =================================================
                PHONE
            ================================================= */}

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="sg-contact-link border border-[#17151C]/10 p-6"
            >

              <div className="sg-contact-icon flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
                <Phone size={17} />
              </div>

              <span className="mt-6 block text-[7px] font-black uppercase tracking-[.25em] text-[#17151C]/35">
                Call Us
              </span>

              <p className="mt-2 text-sm font-black text-[#17151C]">
                {LOCAL.phoneDisplay}
              </p>

            </a>

            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href={`mailto:${LOCAL.email}`}
              className="sg-contact-link border border-[#17151C]/10 p-6"
            >

              <div className="sg-contact-icon flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
                <ShieldCheck size={17} />
              </div>

              <span className="mt-6 block text-[7px] font-black uppercase tracking-[.25em] text-[#17151C]/35">
                Email
              </span>

              <p className="mt-2 break-all text-sm font-black text-[#17151C]">
                {LOCAL.email}
              </p>

            </a>

          </div>

        </div>

      </section>
    </>
  );
}