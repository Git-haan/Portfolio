import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container text-white text-sm grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 md:gap-y-20 animate-fadeIn" >
        <h1>Ishaan Reddy</h1>

        <div className="hidden md:block flex-col">
          <h1>Atlanta, GA</h1>
          <h1>Computer Science</h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-5">
            <li className="flex flex-row hover:text-stone-400">
              <a href="mailto:ishaan.reddy5@gmail.com" className="px-1">Email</a>
              <Image src="diagonal-arrow.svg" alt="arrow" width={20} height={20} className="bg-white"/>
            </li>
            <li className="flex flex-row hover:text-stone-400">
              <a href="https://www.linkedin.com/in/ishaan-r-05-/" target="_blank" className="px-1">LinkedIn</a>
              <Image src="diagonal-arrow.svg" alt="arrow" width={20} height={20} className="bg-white"/>
            </li>
            <li className="flex flex-row hover:text-stone-400">
              <a href="https://ishaan-task-manager.vercel.app/" target="_blank" className="px-1">Tasks</a>
              <Image src="diagonal-arrow.svg" alt="arrow" width={20} height={20} className="bg-white"/>
            </li>
          </ul>
        </div>

        <div className="flex justify-end">
          <a href="https://github.com/Git-haan/Nike-Landing-Page" target="_blank">
            <Image src="icons8-github-100.svg" alt="github" width={30} height={30} />
          </a>
        </div>
        
        <div className="hidden lg:block"></div>
        <div className="text-white py-20 lg:py-0">
          <p>Front End Addicted</p>
          <p>Full Stack Capable</p>
        </div>
        <h1 className="text-5xl font-medium col-span-2">
          Hey - I&apos;m Ishaan. A Student / Software Developer based in Atlanta.
        </h1>
      </div>
    </section>
  )
}

export default Hero;