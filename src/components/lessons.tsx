import { Book, ChevronRight, LucideIcon } from "lucide-react";

const lessons = [
  {
    title: "Start Small",
    preview: (
      <span>
        When it comes to building better habits, the most important decision is
        choosing the right habit to work on.
        <br />
        <br />
        One of the most common mistakes people make is trying to do too much in
        the beginning.
        <br />
        <br />
        It&apos;s easy to get excited when thinking about the habits you want to
        change...
      </span>
    ),
  },
  {
    title: "Make Your Habits Fun",
    preview: (
      <span>
        If you&apos;re struggling to stick to a habit because it feels like a
        hassle, then pick a different version of that habit.
        <br />
        <br />
        Different people like different things. Find the most enjoyable version
        of each habit you do. Make your habits fun!
      </span>
    ),
  },
  {
    title: "Aim to Be Great in 10 Years",
    preview: (
      <span>
        Many people build new habits because they are hoping to get better
        results.
        <br /> <br />
        Results take time.
        <br /> <br />
        Most big, deeply satisfying accomplishments in life take years to
        achieve. This can include building a business, cultivating a loving
        relationship, writing a book, getting in the best shape of your life,
        raising a family, and more...
      </span>
    ),
  },
  {
    title: "Everything is Imperfect",
    preview: (
      <span>
        Start now. Optimize later.
        <br />
        <br />
        One of the biggest traps is trying to plan the perfect habit from the
        beginning. Remember that an imperfect start can always be improved.
        Obsessing over a perfect plan will never take you anywhere on its own...
      </span>
    ),
  },
];

interface LessonCardProps {
  title: string;
  icon?: LucideIcon;
  preview: React.ReactNode;
}

const LessonCard = ({ title, icon: Icon = Book, preview }: LessonCardProps) => {
  return (
    <div className="max-w-xs lg:max-w-[16.5rem] group min-h-[450px] lg:min-h-[30vw] perspective">
      <div className="relative preserve-3d duration-200 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full bg-light-cream rounded-2xl p-8 pb-4 lg:px-3 flex flex-col [backface-visibility:hidden]">
          <div className="pb-2 pl-2">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="text-3xl lg:text-[1.75rem] font-serif mb-auto">
            {title}
          </h3>
          <button className="mt-6 px-4 inline-flex justify-between items-center hover:text-gray-900 transition-colors">
            <span className="text-sm">Read preview</span>
            <ChevronRight className="ml-2 h-8 w-8 p-2 bg-white rounded-full" />
          </button>
        </div>

        {/* Back side */}
        <div className="bg-dark-gray text-white absolute inset-0 w-full h-full rounded-2xl p-8 lg:p-4 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h4 className="text-xl lg:text-xs font-semibold font-serif mb-4">
            Preview
          </h4>
          <div className="prose prose-invert prose-sm max-w-none mb-auto text-sm lg:text-sm">
            {preview}
          </div>
          <button className="mt-6 inline-flex items-center transition-colors hover:text-accent lg:text-sm">
            Read more in the app
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Lessons() {
  return (
    <section className="text-center px-4 py-48 w-full lg:px-[11.5vw]">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-start lg:px-20">
        <h2 className="text-4xl md:text-5xl lg:text-2xl font-serif text-gray-800 mb-4">
          Daily Lessons
        </h2>
        <p className="max-w-md md:max-w-xl lg:max-w-sm lg:leading-snug text-lg md:text-2xl lg:text-base text-gray-600">
          Use Atoms to stay motivated and change your mindset with lessons from
          James Clear, delivered daily.
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden no-scrollbar px-0">
        <div className="w-[70rem] md:w-[75rem] lg:w-[67rem] text-start grid grid-cols-4 grid-rows-1 gap-4">
          {lessons.map((lesson, i) => (
            <LessonCard key={i} title={lesson.title} preview={lesson.preview} />
          ))}
        </div>
      </div>
    </section>
  );
}
