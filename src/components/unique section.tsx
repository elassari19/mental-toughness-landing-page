const whys = [
  {
    title: "We know what really works",
    description:
      "We built Atoms on the proven principles of habit change: make it obvious, make it attractive, make it easy, make it satisfying.",
  },
  {
    title: "We’re in it for the long-haul",
    description:
      "We support you in creating accountability and learning the mindsets essential to lasting positive change.",
  },
  {
    title: "We know what it takes to show up",
    description:
      "We know everybody needs reminders to return to what matters most, and we support you in building that system.",
  },
];

export default function UniqueSection() {
  return (
    <section className="pt-24">
      <h2 className="text-2xl text-center font-serif font-medium text-muted-foreground">
        Why we're different
      </h2>
      <div className="flex flex-col items-center justify-center space-y-8">
        {whys.map((why, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-full py-20 space-y-8 md:flex-row md:space-y-0 md:space-x-14"
            >
              <div className="md:text-left max-w-[320px]">
                <h3 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                  {why.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-[200px]">
                  {why.description}
                </p>
              </div>
              <div className="flex items-center justify-end w-full md:w-1/2">
                <div className="w-64 h-64 bg-gray-200 rounded-[60%_40%_50%_70%]"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
