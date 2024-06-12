import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="container text-sm text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto">

          <div></div>
          <div>
            <h1 className="py-10 text-5xl font-medium">Reach Out</h1>
            <p className="py-4 md:max-w-60">
              Reach out to me today and let&apos;s discuss how I can help you achieve your goals. 
            </p>
            <ul className="hidden md:block flex-col space-y-5 ">
              <li className="flex flex-row hover:text-stone-400">
                <a href="mailto:ishaan.reddy5@gmail.com" className="px-1">Github</a>
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

          <div className="">
            <div className="flex items-center justify-start pt-10">
                <div className="mx-auto w-full ">
                    <form action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="d972aecc-be43-4974-958b-18cc484fae86" autoComplete="on"/> 
                    <div className="grid gap-6 sm:grid-cols-1">
                        <div className="relative z-0">
                        <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " autoComplete="name"/>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">NAME</label>
                        </div>
                        <div className="relative z-0">
                        <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " autoComplete="email"/>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">EMAIL</label>
                        </div>
                        <div className="relative z-0">
                        <textarea name="message" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">MESSAGE</label>
                        </div>
                    </div>
                    <button type="submit" className="mt-20 rounded-md border border-white px-10 py-2 hover:bg-white hover:text-black">Send Message</button>
                    </form>
                </div>
            </div>
          </div>

          
        </div>
      </div>
      <hr className="mb-10 border-stone-500"/>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto text-white text-xs">
        <p className="p-8">©2024 ISHAAN REDDY</p>
        <p className="p-8">ALL RIGHTS RESERVED</p>
        <p className="hidden md:block p-8">SITE BY ISHAAN REDDY</p>
        <div className="hidden md:flex md:justify-end px-16 py-5">
            <a href="https://github.com/Git-haan/portfolio" target="_blank" className="p-5 md:p-0">
            <Image src="icons8-github-100.svg" alt="github" width={30} height={30} />
            </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;