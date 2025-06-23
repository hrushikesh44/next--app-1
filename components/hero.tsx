import { ArrowRight, Twitter } from 'lucide-react';
import Link from 'next/link';
import { FloatingDock } from './floating-dock';

export const Hero = () => {
  return (
    <div className="">
      <div className="text-center px-8">
        <div
          className="mb-6"
          data-aos="fade-down"
        >
          <div className="inline-flex relative before:absolute before:inset-0">
            {/* <Link
              href={'http://localhost:3000'}
              className="px-3 py-1.5 text-sm inline-flex items-center justify-center font-medium border rounded-full group border-slate-400 text-zinc-300 hover:text-white transition duration-200
              w-full ease-in-out"
              target="_blank"
            >
              <span className="relative inline-flex items-center ">
                <Twitter className="size-9 group-hover:translate-x-1 transition-transform duration-200 ease-in-out ml-1 hover:animate-pulse" />
              </span>
            </Link> */}
          </div>
        </div>
        <h1
          className="text-7xl font-extrabold lg:text-8xl tracking-tighter pb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 hover:text-zinc-300/40 "
          data-aos="fade-in"
          data-aos-delay="100"
        >
          HRUSHIKESH
        </h1>
        <p
          className=" mb-8 text-lg text-zinc-300/40 font-medium hover:text-zinc-100/50"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          Fullstack developer skilled in different frontend and backend frameworks. Build scalable
          web apps with maintainable, clean code, responsive design and robust APIs.
        </p>
        <div className="flex items-center flex-col max-w-xs mx-auto">
          <Link
            href={'calendly'}
            className="w-full justify-center flex items-center whitespace-nowrap transition-transform duration-200 ease-in-out font-medium rounded px-4 py-1.5 bg-gradient-to-r from-white/80 via-white to-white/80 text-zinc-900 hover:bg-white group"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            Book a free call
            <ArrowRight className="w-4 h-4 tracking-normal group-hover:translate-x-1.5 transition-transform duration-200 ease-in-out ml-2" />
          </Link>
        </div>
        <FloatingDock data-aos="fade-in" />
      </div>
    </div>
  );
};
