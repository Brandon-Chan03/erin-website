import Image from "next/image";
import { BsFillMoonStarsFill, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="px-10">
        {/* Nav Bar */}
        <nav className="py-10 mb-12 flex justify-between">
          <div className="flex">
            <Image src="/logo.svg" width={40} height={40} alt="logo"/>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7A2A1] to-[#FFED00] bold text-3xl ml-2 my-auto">Erin</h1>
          </div>
          <ul className="flex items-center">
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-[#F7A2A1] to-[#FFED00] text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-10">
        <section className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-primary">Erin Redfern</h2>
            <h3 className="text-2xl py-2 text-secondary">Cosmetologist</h3>
            <p className="text-md py-5 leading-8">
              I&apos;m currently a cosmetology student at College of Hair Design in
              Lincoln, NE. I&apos;m located on our East campus at 9000 Andermatt Drive.{" "}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-primary pb-8">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-10">Services I Offer</h3>
            <p className="text-md py-2 leading-8">
              I can do everything from 
              <span>Hair Cuts and Styling</span> to 
              <span>Coloring and Perms</span>.
              <br />For a list of services click here{" "}
              <span>
                <a 
                href="https://collegeofhairdesign.com/salon-services/" 
                target="_blank"
                className="text-blue-500">
                  Woop
                </a>
              </span>
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Hair Cuts</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Styling</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Coloring</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Perms</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Chemical Services</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium pt-8 pb-2">Conditioners and Treatments</h3>
              <p className="py-2">Temporary</p>
              <h4 className="py-4">Techniques I Use</h4>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
              <p className="text-gray-800 py-1">Temp</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl pt-10">Portfolio and Testimonials</h3>
        </section>
      </main>
    </div>
  );
}
