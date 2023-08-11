import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <main className="">
        <section className="bg-test-background bg-no-repeat bg-cover">
          {/* Nav Bar */}
          <nav className="py-10 mb-12 mx-10 sm:mx-6 md:mx-8 lg:mx-12 flex justify-between">
            <div className="flex">
              <Image src="/logo.svg" width={40} height={40} alt="logo" />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7A2A1] to-[#FFED00] font-bold text-2xl ml-2 my-auto">
                Erin
              </h1>
            </div>
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#F7A2A1] to-[#FFED00] 
                text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <section className="rounded-2xl">
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-primary">Erin Redfern</h2>
              <h3 className="text-2xl py-2 text-secondary">Cosmetologist</h3>
              <p className="text-md py-5 leading-8 text-secondary">
                I&apos;m currently a cosmetology student at College of Hair
                Design in Lincoln, NE. I&apos;m located on our East campus at
                9000 Andermatt Drive.{" "}
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 text-tertiary pb-8">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </section>
        </section>
        <section>
          <div className="text-center my-10">
            <h3 className="text-3xl text-primary">Services I Offer</h3>
            <p className="text-md py-2 leading-8">
              I can do everything from
              <span className="text-secondary"> Hair Cuts and Styling</span> to
              <span className="text-secondary"> Coloring and Perms</span>.
              <br />
              For a full list of services click here{" "}
              <span className="text-secondary bold">
                <a
                  href="https://collegeofhairdesign.com/salon-services/"
                  target="_blank"
                >
                  Woop
                </a>
              </span>
            </p>
          </div>
          <div className="outline flex flex-wrap justify-center gap-8">
            <div className="card">
              <h3 className="text-lg font-medium ">Hair Cuts</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-2">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium ">Styling</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-2">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium ">Coloring</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-2">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium ">Perms</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-2">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium">Chemical Services</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-2">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
