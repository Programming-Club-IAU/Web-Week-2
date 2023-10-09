import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

function Home() {
  return (
    <html>
      <div>
        <main>
          <header>
            <section className="min-h-screen bg-neutral-900 snap-y snap-center">
              <nav className=" py-1 mb-20 fixed top-0 flex w-full flex-wrap items-center justify-between bg-neutral-950 lg:py select-none ">
                <ul>
                  <li className=" font-burtons space-x-20 p-8 flex justify-start ">
                    <a
                      className=" text-lg text-amber-50 hover:text-amber-200"
                      href="#about me"
                    >
                      About Me
                    </a>
                    <a
                      className="text-lg text-amber-50 hover:text-amber-200"
                      href="#services"
                    >
                      Services
                    </a>
                    <a
                      className="text-lg text-amber-50 hover:text-amber-200"
                      href="#projects"
                    >
                      Projects
                    </a>
                    <a
                      className="text-lg text-amber-50 hover:text-amber-200"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </header>
          <section className="min-h-screen bg-neutral-900">
            <div className="">
              <div className=" text-center text-6xl font-burtons text-amber-50 hover:text-amber-300 hover:scale-110 select-none">
                <h id="about me">Developer</h>
              </div>
              <div className=" text-center p-5 text-xl font-mono text-white ">
                <p>Programmer who likes to do fun stuff..</p>
              </div>
              <div className=" py-11 flex justify-center snap-y snap-center">
                <img
                  className=" w-44 h-44 p-2 rounded-full ring-2 ring-fuchsia-500 dark:ring-gray-500 shadow-lg shadow-fuchsia-600 hover:shadow-fuchsia-500 hover:shadow-xl"
                  alt="Bordered avatar"
                  src="https://th.bing.com/th/id/R.d9f1056d4ee1bfb3c63bd4717daf88bc?rik=9Pra96jCALbv%2bg&riu=http%3a%2f%2fpa1.narvii.com%2f6277%2fcfa4c50045d2a5ab7d149f8294a39219aabe9537_00.gif&ehk=B0UG5F8iIMGwz7Ma9D0SC4aTG610ENTn288mj3nQcjY%3d&risl=&pid=ImgRaw&r=0"
                />
              </div>
            </div>
          </section>
          <section className="min-h-screen bg-neutral-900">
            <div>
              <h
                id="services"
                className="text-3xl p-8 text-white font-burtons select-all"
              >
                Services
              </h>
              <p className="text-lg text-white px-8 py-2 mb-20 font-mono">
                I'll do it if i like it
              </p>
            </div>
          </section>
          <section className="min-h-screen bg-neutral-900 ">
            <div>
              <h
                id="projects"
                className="text-3xl px-8 mb-20 text-white font-burtons select-all"
              >
                Projects
              </h>
              <p className="text-lg text-white px-8 py-2 mb-20 font-mono">
                I do a little bit of everything.
                <br />
                Usually i have 2500000 bugs, 2500
                <br />
                errors, and 25 line of code, but
                <br />i can darw you a flower with python
              </p>
              <video
                className="px-8"
                src="src\components\Flower.mp4"
                height={500}
                width={500}
                controls
              ></video>
            </div>
          </section>
          <section className="min-h-screen bg-neutral-900 snap-y">
            <div>
              <h
                id="contact"
                className="text-3xl px-8 mb-20 text-white font-burtons select-all"
              >
                Contact
              </h>
              <div className=" flex justify-start px-10 py-12 text-slate-200">
                <svg fontSize={50}>
                  <a
                    className="fontSize-xl text-white"
                    href="https://github.com/ZahraHN-03"
                  >
                    <AiFillGithub />
                  </a>
                </svg>
                <svg fontSize={50}>
                  <a
                    className="fontSize-xl text-white"
                    href="https://twitter.com/Zahra01001110"
                  >
                    <AiOutlineTwitter />
                  </a>
                </svg>
              </div>
            </div>
          </section>
        </main>
      </div>
    </html>
  );
}

export default Home;
