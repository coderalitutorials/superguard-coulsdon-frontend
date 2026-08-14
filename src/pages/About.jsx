

















import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Bug,
  Home,
  Building2,
  Rat,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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

  const principles = [
    {
      number: "01",
      title: "Understand",
      text: "We first look at the pest activity, the property and the circumstances surrounding the problem.",
    },
    {
      number: "02",
      title: "Assess",
      text: "We identify visible signs, possible harbourage areas, access points and conditions encouraging activity.",
    },
    {
      number: "03",
      title: "Control",
      text: "We use a practical treatment approach suited to the pest, property and level of activity identified.",
    },
    {
      number: "04",
      title: "Prevent",
      text: "Where appropriate, we highlight practical measures that can help reduce future pest activity.",
    },
  ];

  const serviceGroups = [
    {
      icon: Bug,
      number: "01",
      title: "Insect Control",
      text: "Targeted support for common household and commercial insect problems.",
      services: [
        "Ant Control",
        "Bed Bug Treatment",
        "Carpet Moth Treatment",
        "Carpet Beetle Control",
        "Cockroach Control",
        "Flea Treatment",
        "Wasp Nest Control",
        "Bee Activity Support",
      ],
    },
    {
      icon: Rat,
      number: "02",
      title: "Rodent & Wildlife",
      text: "Practical control solutions for rodents and selected wildlife activity.",
      services: [
        "Rats & Mice Control",
        "Squirrel Control",
      ],
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Birds & Prevention",
      text: "Control and preventative measures designed around the property.",
      services: [
        "Bird Control",
        "Property Proofing",
      ],
    },
  ];

  const coverage = [
    {
      icon: Home,
      title: "Homes",
      text: "Pest control support for homeowners and residential properties.",
    },
    {
      icon: Building2,
      title: "Businesses",
      text: "Professional support for offices, shops and commercial premises.",
    },
    {
      icon: ShieldCheck,
      title: "Landlords",
      text: "Practical pest control support for rental and managed properties.",
    },
  ];

  return (
    <main className="mt-20 overflow-hidden bg-white text-[#111111]">

      {/* =========================================================
          HERO — WHITE BACKGROUND / ANGLED IMAGE
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative background elements */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#6055A6]/10" />

          <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#6055A6]/10" />

          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#6055A6]/[0.035] blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">

          <div className="grid min-h-[780px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-24">

            {/* =====================================================
                HERO CONTENT
            ===================================================== */}

            <div className="relative z-20">

              <div className="mb-8 flex items-center gap-4">

                <span className="h-px w-14 bg-[#6055A6]" />

                <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.32em] text-[#6055A6]">
                  <Sparkles size={13} />
                  About {LOCAL.shortName}
                </span>

              </div>

              <h1 className="max-w-4xl text-[60px] font-black leading-[.82] tracking-[-.075em] sm:text-[82px] md:text-[100px] lg:text-[108px]">

                Pest control

                <span className="block text-[#6055A6]">
                  without
                </span>

                <span className="block">
                  the guesswork.
                </span>

              </h1>

              <p className="mt-9 max-w-2xl text-sm font-medium leading-8 text-[#666666] sm:text-base">
                {LOCAL.company} provides professional pest control
                support for homes, landlords, businesses and
                commercial properties throughout {LOCAL.area} and
                surrounding South London areas.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact-us"
                  className="group inline-flex min-h-[58px] items-center justify-between gap-12 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:-translate-y-1"
                >
                  Speak To Our Team

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="group inline-flex min-h-[58px] items-center gap-4 border border-[#6055A6]/25 px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#222222] transition duration-300 hover:bg-[#6055A6] hover:text-white"
                >
                  <Phone size={15} />

                  {LOCAL.phoneDisplay}

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

              </div>

              <div className="mt-12 grid max-w-xl grid-cols-2 border-t border-[#6055A6]/15 sm:grid-cols-4">

                {[
                  "Residential",
                  "Commercial",
                  "Local Team",
                  "Practical Approach",
                ].map((item, index) => (

                  <div
                    key={item}
                    className={`py-5 ${
                      index !== 0
                        ? "border-l border-[#6055A6]/15 pl-4"
                        : ""
                    }`}
                  >

                    <Check
                      size={14}
                      className="text-[#6055A6]"
                    />

                    <span className="mt-3 block text-[7px] font-black uppercase tracking-[.13em] text-[#777777]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* =====================================================
                HERO IMAGE — NEW SHAPE
            ===================================================== */}

            <div className="relative z-10 flex min-h-[560px] items-center justify-center lg:min-h-[680px]">

              {/* Purple back panel */}

              <div className="absolute right-0 top-[8%] h-[82%] w-[82%] bg-[#6055A6]" />

              {/* Decorative corner */}

              <div className="absolute right-[3%] top-[4%] h-24 w-24 border-r border-t border-[#6055A6]/40" />

              <div className="absolute bottom-[5%] left-[5%] h-20 w-20 border-b border-l border-[#6055A6]/30" />

              {/* Main image */}

              <div
                className="relative z-20 h-[520px] w-[88%] overflow-hidden sm:h-[600px] lg:h-[650px]"
                style={{
                  clipPath:
                    "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >

                <img
                  src="/images/about-story.webp"
                  alt={`${LOCAL.company} professional pest control`}
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 sm:p-9">

                  <div className="flex items-center gap-4">

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6]">
                      <ShieldCheck size={19} />
                    </span>

                    <div>

                      <span className="block text-[8px] font-black uppercase tracking-[.25em] text-white/60">
                        Local Pest Control
                      </span>

                      <span className="mt-1 block text-xl font-black text-white">
                        {LOCAL.area}, {LOCAL.city}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating location badge */}

              <div className="absolute bottom-[8%] left-0 z-30 bg-white px-6 py-5 text-[#6055A6] shadow-[0_20px_60px_rgba(0,0,0,.14)]">

                <span className="block text-[7px] font-black uppercase tracking-[.2em]">
                  Serving Locally
                </span>

                <span className="mt-1 block text-lg font-black">
                  CR5 & Beyond
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO STRIP
      ========================================================= */}

      <section className="border-y border-[#6055A6]/15 bg-white">

        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">

          <div className="grid sm:grid-cols-3">

            <div className="border-b border-[#6055A6]/15 p-8 sm:border-b-0 sm:border-r sm:p-10">

              <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                01
              </span>

              <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">
                Local knowledge
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777777]">
                Understanding the properties and pest challenges
                found across the local area.
              </p>

            </div>

            <div className="border-b border-[#6055A6]/15 p-8 sm:border-b-0 sm:border-r sm:p-10">

              <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                02
              </span>

              <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">
                Clear advice
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777777]">
                Straightforward communication about the issue and
                the practical next step.
              </p>

            </div>

            <div className="p-8 sm:p-10">

              <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                03
              </span>

              <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">
                Property focused
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777777]">
                Recommendations shaped around the pest, property
                and conditions involved.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FULL BACKGROUND IMAGE SECTION
      ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden">

        {/* FULL BACKGROUND IMAGE */}

        <img
          src="/images/about-superguard-banner.webp"
          alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
          className="absolute inset-0 h-full w-full object-contain object-center"
          loading="lazy"
        />

        {/* IMAGE OVERLAYS */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#6055A6]/90 via-[#6055A6]/65 to-black/25" />

        {/* Decorative lines */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute right-[8%] top-[10%] h-[350px] w-[350px] rounded-full border border-white/15" />

          <div className="absolute right-[13%] top-[15%] h-[250px] w-[250px] rounded-full border border-white/10" />

        </div>

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1550px] items-center px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid w-full gap-14 lg:grid-cols-[1fr_.65fr] lg:items-end">

            {/* CONTENT */}

            <div className="max-w-4xl text-white">

              <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/60">
                02 — Our Philosophy
              </span>

              <h2 className="mt-7 text-[55px] font-black leading-[.84] tracking-[-.07em] sm:text-[76px] lg:text-[96px]">

                A better way

                <span className="block text-white/55">
                  to approach
                </span>

                pest problems.

              </h2>

              <p className="mt-9 max-w-2xl text-sm font-medium leading-8 text-white/70 sm:text-base">
                Finding pests around your property can be frustrating.
                Our role is to make the situation easier to understand
                and help you move towards a practical solution.
              </p>

            </div>


            {/* FLOATING INFO PANEL */}

            <div className="bg-white p-7 text-[#111111] shadow-[0_25px_70px_rgba(0,0,0,.25)] sm:p-9">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center bg-[#6055A6] text-white">
                  <MapPin size={19} />
                </div>

                <div>

                  <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                    Local Base
                  </span>

                  <span className="mt-1 block text-lg font-black">
                    {LOCAL.area}, {LOCAL.city}
                  </span>

                </div>

              </div>

              <div className="mt-7 border-t border-[#6055A6]/15 pt-6">

                {principles.slice(0, 3).map((item) => (

                  <div
                    key={item.number}
                    className="flex gap-4 border-b border-[#6055A6]/10 py-4 last:border-b-0"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-[7px] font-black text-white">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="text-sm font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-[#777777]">
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PURPLE STATEMENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#6055A6] text-white">

        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[450px] w-[450px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[.45fr_1.55fr] lg:gap-20">

            <div>

              <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/55">
                03 — How We Work
              </span>

              <div className="mt-8 h-px w-24 bg-white/30" />

            </div>

            <div>

              <h2 className="max-w-6xl text-[48px] font-black leading-[.9] tracking-[-.06em] sm:text-[68px] lg:text-[84px]">

                Understand the problem.

                <span className="text-white/45">
                  {" "}Then deal with it properly.
                </span>

              </h2>

              <p className="mt-9 max-w-3xl text-sm leading-8 text-white/65 sm:text-base">
                Our approach is built around inspection, assessment,
                suitable control measures and practical prevention.
                The aim is to give customers a clear understanding of
                what is happening at the property.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="bg-[#f7f6fa]">

        <div className="mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="mb-14 max-w-3xl">

            <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
              Our Process
            </span>

            <h2 className="mt-6 text-[52px] font-black leading-[.88] tracking-[-.065em] sm:text-[70px]">

              Four steps.

              <span className="block text-[#6055A6]">
                One clear approach.
              </span>

            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {principles.map((item) => (

              <div
                key={item.number}
                className="group relative overflow-hidden bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,.04)] transition duration-500 hover:-translate-y-2 hover:bg-[#6055A6] hover:text-white sm:p-9"
              >

                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-black text-[#6055A6] group-hover:text-white/60">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#6055A6] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />

                </div>

                <div className="mt-16">

                  <h3 className="text-2xl font-black tracking-[-.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#777777] group-hover:text-white/65">
                    {item.text}
                  </p>

                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">

            <div>

              <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
                04 — What We Cover
              </span>

              <h2 className="mt-7 text-[54px] font-black leading-[.85] tracking-[-.07em] sm:text-[74px]">

                More than

                <span className="block text-[#6055A6]">
                  one pest.
                </span>

              </h2>

              <p className="mt-8 max-w-md text-sm leading-8 text-[#666666]">
                From insects and rodents to birds and property
                prevention, our local team provides support across
                a range of common pest problems.
              </p>

              <Link
                to="/services"
                className="group mt-9 inline-flex items-center gap-4 bg-[#6055A6] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
              >
                View All Services

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>

            </div>


            <div className="space-y-4">

              {serviceGroups.map((group) => {

                const Icon = group.icon;

                return (

                  <div
                    key={group.number}
                    className="group border border-[#6055A6]/15 p-6 transition duration-300 hover:bg-[#6055A6] hover:text-white sm:p-8"
                  >

                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6] text-white transition group-hover:bg-white group-hover:text-[#6055A6]">
                        <Icon size={19} />
                      </div>

                      <div className="flex-1">

                        <div className="flex items-center justify-between gap-4">

                          <div>

                            <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6] group-hover:text-white/50">
                              {group.number}
                            </span>

                            <h3 className="mt-2 text-2xl font-black tracking-[-.04em]">
                              {group.title}
                            </h3>

                          </div>

                          <ArrowUpRight
                            size={18}
                            className="shrink-0 text-[#6055A6] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                          />

                        </div>

                        <p className="mt-3 text-sm leading-7 text-[#777777] group-hover:text-white/65">
                          {group.text}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">

                          {group.services.map((service) => (

                            <span
                              key={service}
                              className="border border-[#6055A6]/15 px-3 py-2 text-[7px] font-black uppercase tracking-[.1em] text-[#666666] group-hover:border-white/20 group-hover:text-white/65"
                            >
                              {service}
                            </span>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHO WE HELP
      ========================================================= */}

      <section className="bg-[#f7f6fa]">

        <div className="mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="mb-14">

            <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
              05 — Who We Help
            </span>

            <h2 className="mt-6 max-w-4xl text-[52px] font-black leading-[.88] tracking-[-.065em] sm:text-[72px]">

              Pest control for

              <span className="text-[#6055A6]">
                {" "}real properties.
              </span>

            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {coverage.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group relative min-h-[280px] overflow-hidden bg-white p-8 transition duration-500 hover:bg-[#6055A6] hover:text-white sm:p-10"
                >

                  <div className="flex h-12 w-12 items-center justify-center bg-[#6055A6] text-white group-hover:bg-white group-hover:text-[#6055A6]">
                    <Icon size={20} />
                  </div>

                  <span className="absolute right-7 top-7 text-[9px] font-black text-[#6055A6]/40 group-hover:text-white/30">
                    0{index + 1}
                  </span>

                  <h3 className="mt-14 text-3xl font-black tracking-[-.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#777777] group-hover:text-white/65">
                    {item.text}
                  </p>

                  <ArrowUpRight
                    size={18}
                    className="absolute bottom-8 right-8 text-[#6055A6] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          LOCAL INFORMATION
      ========================================================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-24">

            <div>

              <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
                06 — Local Coverage
              </span>

              <h2 className="mt-7 text-[55px] font-black leading-[.84] tracking-[-.07em] sm:text-[76px]">

                Proudly

                <span className="block text-[#6055A6]">
                  local.
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-[#666666] sm:text-base">
                Based at {LOCAL.address}, {LOCAL.company} supports
                residential and commercial customers across{" "}
                {LOCAL.area} and surrounding London areas.
              </p>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group mt-9 inline-flex items-center gap-4 bg-[#6055A6] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
              >
                <Phone size={15} />

                Call {LOCAL.phoneDisplay}

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>


            <div className="border-t border-[#6055A6]/15">

              <div className="flex gap-5 border-b border-[#6055A6]/15 py-7">

                <MapPin
                  className="mt-1 shrink-0 text-[#6055A6]"
                  size={20}
                />

                <div>

                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                    Local Address
                  </span>

                  <p className="mt-2 text-lg font-black">
                    {LOCAL.address}
                  </p>

                </div>

              </div>

              <div className="flex gap-5 border-b border-[#6055A6]/15 py-7">

                <Phone
                  className="mt-1 shrink-0 text-[#6055A6]"
                  size={20}
                />

                <div>

                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                    Phone
                  </span>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-2 block text-lg font-black hover:text-[#6055A6]"
                  >
                    {LOCAL.phoneDisplay}
                  </a>

                </div>

              </div>

              <div className="flex gap-5 py-7">

                <Mail
                  className="mt-1 shrink-0 text-[#6055A6]"
                  size={20}
                />

                <div className="min-w-0">

                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                    Email
                  </span>

                  <a
                    href={`mailto:${LOCAL.email}`}
                    className="mt-2 block break-all text-lg font-black hover:text-[#6055A6]"
                  >
                    {LOCAL.email}
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#6055A6] text-white">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

          <div className="absolute bottom-[-250px] left-[-100px] h-[500px] w-[500px] rounded-full bg-black/10 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-[1550px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">

            <div>

              <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/55">
                07 — Get Started
              </span>

              <h2 className="mt-7 max-w-5xl text-[55px] font-black leading-[.83] tracking-[-.07em] sm:text-[78px] lg:text-[100px]">

                Found pests?

                <span className="block text-white/45">
                  Let's deal with it.
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                Tell us what you've noticed around your property
                and speak with the local SuperGuard Coulsdon team
                about the next practical step.
              </p>

            </div>

            <div className="flex flex-col gap-3">

              <Link
                to="/contact-us"
                className="group flex min-h-[60px] min-w-[260px] items-center justify-between gap-8 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6] transition hover:-translate-y-1"
              >
                Contact Our Team

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group flex min-h-[60px] min-w-[260px] items-center justify-between gap-8 border border-white/30 px-7 text-[9px] font-black uppercase tracking-[.18em] transition hover:bg-white hover:text-[#6055A6]"
              >

                <span className="flex items-center gap-3">
                  <Phone size={15} />
                  {LOCAL.phoneDisplay}
                </span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;