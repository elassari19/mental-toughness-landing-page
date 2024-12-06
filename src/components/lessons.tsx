import { Book, ChevronRight, LucideIcon } from "lucide-react";

interface LessonCardProps {
  title: string;
  icon?: LucideIcon;
  preview: React.ReactNode;
}

const LessonCard = ({ title, icon: Icon = Book, preview }: LessonCardProps) => {
  return (
    <div className="min-w-full group min-h-[450px] h-full perspective">
      <div className="relative preserve-3d duration-200 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full bg-light-cream rounded-2xl p-8 flex flex-col [backface-visibility:hidden]">
          <div className="mb-4">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-serif mb-auto">{title}</h3>
          <button className="mt-6 inline-flex items-center hover:text-gray-900 transition-colors">
            Read preview
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Back side */}
        <div className="bg-dark-gray text-white absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h4 className="text-xl font-serif mb-4">Preview</h4>
          <div className="prose prose-invert prose-sm max-w-none mb-auto">
            {preview}
          </div>
          <button className="mt-6 inline-flex items-center transition-colors hover:text-accent">
            Read more in the app
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const lessons = [
  {
    title: "Make Your Habits Fun",
    preview: (
      <>
        If you&apos;re struggling to stick to a habit because it feels like a
        hassle, then pick a different version of that habit.
        <br />
        Different people like different things. Find the most enjoyable version
        of each habit you do. Make your habits fun!
      </>
    ),
  },
  {
    title: "Aim to Be Great in 10 Years",
    preview: "",
  },
  {
    title: "Start Small",
    preview: "",
  },
];

export default function Lessons() {
  return (
    <section className="text-center px-4 py-16 w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-serif text-gray-800 mb-4">
          Daily Lessons
        </h2>
        <p className="text-lg text-gray-600">
          Use Atoms to stay motivated and change your mindset with lessons from
          James Clear, delivered daily.
        </p>
      </div>

      <div className="text-start grid grid-cols-3 grid-rows-1 gap-6">
        {lessons.map((lesson, i) => (
          <LessonCard key={i} title={lesson.title} preview={lesson.preview} />
        ))}
      </div>
    </section>
  );
}
