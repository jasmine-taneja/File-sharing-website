import React from 'react'
import Link from 'next/link'
function Hero() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Upload, Save and
        <strong className="text-indigo-600"> Securely </strong>
        share your files in one place
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Drag and drop your files directly on our cloud and share it with anyone securely.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
      <Link href="/sign-up" className="block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700">
  Get Started
</Link>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero