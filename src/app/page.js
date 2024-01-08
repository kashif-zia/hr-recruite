'use client'
import { useState } from 'react'
import Banner from '@/components/Banner'
import BoardMessage from '@/components/Home/BoardMessage'
import About from '@/components/Home/About'
import MediaLink from '@/components/Home/Media'
import Counter from '@/components/Home/Counter'
import Employee from '@/components/Home/Employee'
import Careers from '@/components/Home/Careers'
import InfoTabs from '@/components/Home/InfoTabs'
import { Link } from 'react-scroll'

export default function Home() {
  const [activeLink, setActiveLink] = useState('intro')

  const handleSvgClick = (link) => {
    const sanitizedLink = link.replace(/-/g, ' ')
    setActiveLink(sanitizedLink)
  }

  const getIconForLink = (link) => {
    return activeLink === link.replace(/-/g, ' ') ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#2F80ED" />
        <circle cx="12" cy="12" r="3" fill="#2F80ED" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="3" fill="black" />
      </svg>
    )
  }

  return (
    <section>
      <Banner />
      <BoardMessage />
      <About />
      <section className="circle-bg-seaction">
        <InfoTabs />
        <MediaLink />
      </section>
      <Counter />
      <Employee />
      <Careers />
      <section className="sidebar-menu-wrapper">
        <div
          className={
            activeLink === 'careers'
              ? 'section-name change-color'
              : 'section-name'
          }
        >
          {activeLink}
        </div>
        <div
          className={
            activeLink === 'careers'
              ? 'sidebar-menu change-background'
              : 'sidebar-menu'
          }
        >
          {[
            'intro',
            'board-message',
            'about-us',
            'employees',
            'careers',
          ].map((name, index) => (
            <Link
              key={index}
              activeClass="active"
              to={name}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => handleSvgClick(name)}
            >
              {getIconForLink(name)}
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
