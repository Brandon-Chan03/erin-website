import Image from "next/image";
import {BsFillMoonStarsFill, BsFacebook, BsLinkedin} from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <header className="px-10">
          {/* Nav Bar */}
        <nav className="py-10 mb-12 flex justify-between">
            <div className="flex">
              <Image 
                src="/logo.svg"
                width={30}
                height={30}
              />
              <h1 className="text-xl ml-2">Erin</h1>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
              </li>
              <li><a href="#" className="bg-red-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>
      </header>
      <main className="bg-white px-10">
        <div>
          <h2>Erin Redfern</h2>
          <h3>Cosmetologist</h3>
          <p>I'm currently a cosmetology student at College of Hair Design in Lincoln, NE. 
            I'm located on our East campus at 9000 Andermatt Drive. </p>
        </div>   
      </main>
    </div>
  )
}
