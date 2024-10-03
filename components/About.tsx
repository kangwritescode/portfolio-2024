"use client";

import AnchorText from "./AnchorText";

/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          My professional SWE journey began at{" "}
          <AnchorText href="https://www.gofundme.com" text="GoFundMe" />, where
          I was a key contributor in the Create Team from &apos;20 to &apos;22.
          Since, I&apos;ve ventured into contracting roles, collaborating with
          start-ups such as{" "}
          <AnchorText href="https://www.science.xyz" text="Science" /> and{" "}
          <AnchorText href="https://www.moonhub.ai/" text="Moonhub" />. I
          currently build web experiences at{" "}
          <AnchorText href="https://www.aetna.com" text="Aetna Health" />.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I'm a product-minded engineer, proficient in modern front-end
          technologies, with an expertise in FE performance optimization and
          data management, API integration, and accessibility.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Beyond the screen, I'm a fan of pickleball, skateboarding, and
          spending time with loved ones.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Ready to bring your ideas to life. Let's build something exceptional
          together.
        </p>
      </div>
    </section>
  );
}
