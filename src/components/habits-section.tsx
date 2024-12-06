import React from 'react'
import AppStoreButtons from './app-store-buttons'

const HabitsSection = () => {
  return (
    <div className="px-[5vw] lg:px-[15vw] py-16 flex flex-col lg:flex-row items-center justify-between gap-16">
    {/* Text and Buttons Column */}
    <div className="flex-1 text-center lg:text-start space-y-14">
      <h3 className="text-[2.1rem] md:text-[2.75rem] lg:text-[1.4rem] lg:max-w-sm leading-tight font-serif text-gray-800">
        Build good habits, break bad ones, and make better decisions in just
        five good minutes a day. Get started today and cast a vote for
        future you.
      </h3>

      {/* App Store Buttons */}
      <AppStoreButtons />
    </div>

    {/* Illustration Column */}
    <div className="flex-1 max-w-sm">
      <img src="https://placehold.co/400x600" width={400} height={400} />
    </div>
  </div>

  )
}

export default HabitsSection