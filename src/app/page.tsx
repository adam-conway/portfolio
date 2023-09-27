'use client'

import Link from "next/link"
import Image from "next/image"
import headshot from './assets/headshot.jpg'

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    })
  }

  return (
    <div>

       {/* NAV */}
      <div>
        <Link
          href="#about-me"
          onClick={handleScroll}
        >
          About Me
        </Link>
        <Link
          href="#projects"
          onClick={handleScroll}
        >
          Projects
        </Link>
      </div>

      {/* About me */}
      <div id="about-me" className="flex flex-col">
        {/* Header */}
        <div className="grow bg-gray-200 flex justify-center items-center">
          <h2 className="text-3xl font-bold">Adam Conway</h2>
        </div>
        

        {/* About me container */}
        <div  className="flex flex-row">
          <Image
            src={headshot}
            alt="Dashboard"
            className="max-w-xs"
          />
          <div>
            <div>This is a text section with an overview about myself and my background</div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        {/* Header */}
        <div className="grow bg-gray-200 flex justify-center items-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          
        </div>
      </div>

      {/* Work with me section */}
      <div id="work-with-me">
        <div className="grow bg-gray-200 flex justify-center items-center">
          <h2 className="text-3xl font-bold">Work with me</h2>
        </div>
      </div>
    </div>
  )
}
