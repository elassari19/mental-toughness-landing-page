import { Book, ChevronRight, LucideIcon } from "lucide-react";

// Card component for individual lessons
export const LessonCard = ({
  title,
  icon: Icon = Book,
}: {
  title: string;
  icon?: LucideIcon;
}) => {
  return (
    <div className="group h-[300px] perspective">
      <div className="relative preserve-3d duration-500 w-full h-full group-hover:rotate-y-180">
        {/* Front side */}
        <div className="absolute backface-hidden w-full h-full bg-gray-50 rounded-2xl p-8 flex flex-col">
          <div className="mb-4">
            <Icon className="h-6 w-6 text-gray-800" />
          </div>
          <h3 className="text-2xl font-serif text-gray-800 mb-auto">{title}</h3>
          <button className="mt-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            Read preview
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Back side */}
        <div className="absolute backface-hidden rotate-y-180 w-full h-full bg-gray-50 rounded-2xl p-8 flex flex-col">
          <h4 className="text-xl font-serif text-gray-800 mb-4">Preview</h4>
          <p className="text-gray-600">
            This is a preview of the lesson content. Here you can find more
            details about what you&apos;ll learn in this lesson.
          </p>
          <button className="mt-auto inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            Read more in the app
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
