"use client";
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
          My journey has taken me across domains — from coal mines and classrooms
          to courtrooms and cricket fields — but one principle guides me:{" "}
          <span className="text-white">
            technology should solve real problems and create measurable impact.
          </span>{" "}
          Whether building tools for sustainability, education, or legal access,
          I aim to make complexity feel invisible through design and engineering.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Currently, I'm building intelligent web systems that combine AI,
          data-driven insights, and seamless UX. From reducing student dropout
          rates in rural India to predicting player performance in fantasy sports,
          I design and develop software that connects data with decisions. I'm also
          exploring the frontiers of secure identity, decentralized access, and
          climate tech innovation.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My work spans full-stack development, AI integration, and UI/UX design — often
          focused on impact-first goals. I believe technology is most powerful when
          it empowers communities, simplifies decisions, and accelerates trust. And
          that’s what I strive to build:{" "}
          <span className="text-white">
            meaningful systems, not just functional software.
          </span>
        </p>
      </div>
    </section>
  );
}
