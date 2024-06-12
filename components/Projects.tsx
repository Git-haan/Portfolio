import Image from "next/image";

const Projects = () => {
  return (
    <section>
        <div className="container text-sm animate-fadeIn">
            <hr className="mb-10 md:mt-40 border-stone-500"/>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto">
                <p className="p-5 md:p-0 text-stone-500">2024</p>
                <h1 className="p-5 md:p-0 text-2xl font-semibold text-white">Nike Lander</h1>
                <p className="p-5 md:p-0 text-white"> Developed a Nike.com clone using a React Framework and JavaScript.</p>
                <div className="md:flex md:justify-end p-5 md:p-0">
                    <a href="https://github.com/Git-haan/Nike-Landing-Page" target="_blank" className="p-5 md:p-0">
                    <Image src="icons8-github-100.svg" alt="github" width={30} height={30} />
                    </a>
                </div>
            </div>
            <a href="https://nike-lander.vercel.app/" target="_blank" className="m-10">
                <img src="/nike.png" alt="nike" width={6000} height={3000} className=" rounded-3xl"/>
            </a>
        </div>

        <div className="container text-sm animate-fadeIn">
            <hr className="mb-10 border-stone-500"/>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto">
                <p className="p-5 md:p-0 text-stone-500">2023</p>
                <h1 className="p-5 md:p-0 text-2xl font-semibold text-white">Portfolio Game</h1>
                <p className="p-5 md:p-0 text-white"> Leveraged Tiled Software and Kaboom.js to custom build interactive project maps.</p>
                <div className="md:flex md:justify-end p-5 md:p-0">
                    <a href="https://github.com/Git-haan/Pixel-Portfolio" target="_blank" className="p-5 md:p-0">
                    <Image src="icons8-github-100.svg" alt="github" width={30} height={30} />
                    </a>
                </div>
            </div>
            <a href="https://pixel-portfolio-five.vercel.app/" target="_blank" className="m-10 ">
                <img src="/game.png" alt="game" width={6000} height={3000} className=" rounded-3xl"/>
            </a>
        </div>

        <div className="container text-sm animate-fadeIn">
            <hr className="mb-10 border-stone-500"/>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto">
                <p className="p-5 md:p-0 text-stone-500">2023</p>
                <h1 className="p-5 md:p-0 text-2xl font-semibold text-white">REI Adventure</h1>
                <p className="p-5 md:p-0 text-white"> Employed Rust-based Next.js to create a REI Smoky Mountains adventure guide.</p>
                <div className="md:flex md:justify-end p-5 md:p-0">
                    <a href="https://github.com/Git-haan/REI-Landing-Page" target="_blank" className="p-5 md:p-0">
                    <Image src="icons8-github-100.svg" alt="github" width={30} height={30} />
                    </a>
                </div>
            </div>
            <a href="https://rei-smoky-mountains-adventure.vercel.app/" target="_blank" className="m-10">
                <img src="/rei.png" alt="rei" width={6000} height={3000} className=" rounded-3xl"/>
            </a>
        </div>
    </section>
  )
}

export default Projects;