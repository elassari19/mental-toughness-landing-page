import { Book, ChevronRight, LucideIcon } from "lucide-react";

// Card component for individual lessons
export const LessonCard = ({
  title,
  icon: Icon = Book,
  preview,
}: {
  title: string;
  icon?: LucideIcon;
  preview: React.ReactNode
}) => {
  return (
    <div className="group min-h-[450px] h-full perspective">
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
