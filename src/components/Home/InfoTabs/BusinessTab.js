import React from 'react'
import styles from './infoTabs.module.css'

const BusinessTab = () => {
  const businessContent = [
    {
      heading: 'POA: Pakistan Offshore Augmantation',
      content:
        'Elevate your business operations with our Offshore Augmentation services in Pakistan, where we seamlessly integrate top-tier engineering talent to enhance efficiency and scale. Our flexible engagement models cater to both part-time and full-time needs, offering a dynamic solution to match your business requirements. We prioritize excellence, ensuring that our skilled engineers seamlessly collaborate with your existing teams.',
    },
    {
      heading: 'DSP: Data Solution Program',
      content:
        "At IDENBRID, our expertise lies in the meticulous design, development, and deployment of applications that ride the crest of the latest technological advancements. Our overarching mission is to alleviate user pain points for our clients through each application we craft. Whether you're embarking on the journey of creating something entirely new or seeking to refine and enhance your existing system, IDENBRID is your comprehensive solution provider.",
    },
  ]
  return (
    <div className={styles.businessContainer}>
      <h3>
        IDENBRID Works In Two Business Models - Data Solution Program and
        Pakistan Offshore Augmentation.
      </h3>
      <div className={styles.businessSection}>
        {businessContent.map((x, i) => {
          return (
            <div key={i} className={styles.singleBusinessDiv}>
              <div className={styles.businessHeading}>
                <span>{x.heading}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.businessContentDiv}>
                <span>{x.content}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BusinessTab
