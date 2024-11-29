import Image from "next/image";
import rocks from "./imgs/rocks.png";
import clock from "./imgs/clock.png";
import heart from "./imgs/heart.png";
import tools from "./imgs/tools.png";
import handshake from "./imgs/handshake.png";

const whys = [
  {
    title: "We know what really works",
    description:
      "We built Atoms on the proven principles of habit change: make it obvious, make it attractive, make it easy, make it satisfying.",
    img: rocks,
  },
  {
    title: "We meet you where you are",
    description:
      "We believe building lasting habits means starting small and stretching just the right amount. We guide you through finding that balance.",
    img: handshake,
  },
  {
    title: "we evolve as you evolve",
    description:
      "We help you adjust habits that aren’t sticking, and level them up just the right amount as you make personal progress.",
    img: tools,
  },
  {
    title: <>We’re in it for the <br/> long-haul</>,
    description:
      "We support you in creating accountability and learning the mindsets essential to lasting positive change.",
    img: clock,
  },
  {
    title: "We know what it takes to show up",
    description:
      "We know everybody needs reminders to return to what matters most, and we support you in building that system.",
    img: heart,
  },
];

export default function UniqueSection() {
  return (
    <section className="pt-24">
      <h2 className="text-2xl text-center font-serif font-medium text-muted-foreground">
        Why we&apos;re different
      </h2>
      {/* <div className="flex items-center justify-end w-full md:w-1/2">
        <div className="w-64 h-64 bg-gray-200 rounded-[60%_40%_50%_70%]"></div>
      </div> */}
      <div className="flex flex-col items-center justify-center space-y-8 max-w-screen-lg mx-auto">
        {whys.map((why, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full py-20 space-y-8 md:flex-row md:space-y-0 md:space-x-14"
          >
            <div className="max-w-[64ch] space-y-10">
              <h3 className="mt-4 text-huge font-bold leading-[0.9] tracking-tighter hyphens-none">
                {why.title}
              </h3>
              <p className="mt-4 text-muted max-w-[40ch]">
                {why.description}
              </p>
            </div>
            <div className="flex items-center justify-end w-full md:w-1/2">
              <Image
                src={why.img}
                alt=""
                width={400}
                height={400}
                priority />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
