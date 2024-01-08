import React from 'react'
import styles from './infoTabs.module.css'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const PhilosphyTab = () => {
  const aimContent = [
    {
      icon: '/assets/images/TabImages/PhiloTarget.svg',
      heading: 'Mission',
      subHeading: 'Update the Future in Style:',
      content:
        " Aim to revolutionise society's needs and criteria through cutting-edge IT technology.",
    },
    {
      icon: '/assets/images/TabImages/PhiloEye.svg',
      heading: 'Vision',
      subHeading: 'Client User Pain Resolution:',
      content:
        "Client User Pain Resolution: Our key success lies in delivering precise solutions that address the specific needs and expectations of our clients, which we refer to as 'Client's User-pain.'",
    },
    {
      icon: '/assets/images/TabImages/PhiloDiamond.svg',
      heading: 'Value',
      subHeading: 'Our Leadership Philosophy:',
      content:
        'Our Unique culture is our OLP that embraces on every one acts as Leader and we recruit our employees on OLP basis that encompasses 10 indispensable qualities.',
    },
  ]
  return (
    <div className={styles.philosphyContainer}>
      <h3>
        A Global IT Venture Aiming To Become The World&apos;s Number One
        Software Company From Pakistan And Japan.
      </h3>
      <p>
        IDENBRID Is A Global IT Company Based In Tokyo And Lahore, Pakistan.
      </p>
      <div className={styles.aimSection}>
        {aimContent.map((x, i) => {
          return (
            <div key={i} className={styles.singleAimDiv}>
              <div className={styles.aimHeadingDiv}>
                <Image
                  src={x.icon}
                  height={26}
                  width={26}
                  alt="COO"
                  style={{ width: '26px', height: 'auto' }}
                />
                <span>{x.heading}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.aimContentDiv}>
                <p>{x.subHeading}</p>
                <span>{x.content}</span>
              </div>
            </div>
          )
        })}
      </div>
      <Link
        target="_new"
        href="https://docs.google.com/spreadsheets/d/ e/2PACX-1vRHbvnjlup5eKk0wEuDErmQEM8EP3SYfQ3qN2UhyHljd5Wnb19QKwF3h9RszrW1wa3zCHEbJCxyXWcb/pubhtml"
        className={styles.exploreLink}
      >
        <span>Explore Slides</span>
        <Image
          src="/assets/images/TabImages/arrow-right.svg"
          width={18}
          height={10}
          alt="Arrow"
          style={{ width: '18px', height: 'auto' }}
        />
      </Link>
    </div>
  )
}

export default PhilosphyTab
