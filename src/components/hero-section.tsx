import AppStoreButtons from "./app-store-buttons";

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-12 mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src="https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/65855f5cb056acf359b11e00_logo-brand.svg"
          alt="Atoms app screenshot"
          width={150}
          height={100}
          className="w-[150px] md:w-[200px] lg:w-[130px]"
        />
        <span className="text-xl md:text-[1.65rem] lg:text-lg">
          The <span className="font-serif italic">official</span> Atomic Habits
          app
        </span>
      </div>

      <div className="px-[3.5%] w-screen flex flex-col gap-12 items-center justify-between lg:flex-row max-w-screen-lg">
        <div className="space-y-6 w-1/2">
          <h1 className="font-cooper tracking-tight text-center lg:text-start lg:-mt-36">
            <span className="font-serif italic text-4xl text-[2.6rem] md:text-6xl lg:text-[4.5vw]">
              Tiny changes,
            </span>
            <br />
            <span className="text-4xl text-[2.5rem] md:text-6xl lg:text-[4.5vw]">
              remarkable results.
            </span>
          </h1>
          <p className="text-muted text-center lg:text-start text-lg md:text-2xl lg:text-base grid lg:-space-y-2">
            <span>Based on the easy yet proven habit</span>
            <span>change system from the NYT best-seller</span>
            <span>by James Clear, Atoms is a habit app like</span>
            <span>no other.</span>
          </p>
          <AppStoreButtons />
        </div>

        <div className="relative min-h-[100rem] w-[50vw] lg:w-1/2 xl:min-h-[50vw] xl:w-[25vw] lg:min-h-[50vw] flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/659c5189c93ac18fe3e5f7f1_iphone-mockup-p-500.png"
            alt="Atoms app screenshot"
            width={294}
            height={594}
            className="h-full w-full absolute z-[1] object-cover rounded-4xl"
          />
          <img
            src="https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/658592d120fedbf67a06ae85_home-screen.png"
            alt="Atoms app screenshot"
            width={294}
            height={594}
            className="h-[74%] w-[67%] top-14 absolute z-[2] object-cover rounded-4xl"
          />
          <video
            autoPlay
            muted
            src="https://content.atomscontent.com/mobile_pebble_hero_uncropped_24135de4a9.mp4"
            className="absolute w-[80rem] h-[30rem] object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
}
