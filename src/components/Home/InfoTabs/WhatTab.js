import React from 'react'
import styles from './infoTabs.module.css'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const WhatTab = () => {
  return (
    <div className={styles.whatContainer}>
      <h3>
        The company was established in November 2019 and will celebrate its 3rd
        anniversary
      </h3>
      <Row>
        <Col className={styles.whatIntroDiv} lg={8}>
          <p className={styles.whatPara}>
            We are a leading one-stop-shop provider of effective web systems and
            applications with offices in Japan and Pakistan.
          </p>
          <div className={styles.whatSkillDiv}>
            <div className={styles.whatSkill}>
              <h6>Global Hybrid Expertise:</h6>
              <p>
                A unique fusion of Japanese and Pakistani talent for
                unparalleled solutions.
              </p>
            </div>
            <div className={styles.whatSkill}>
              <h6>Results-Driven Approach:</h6>
              <p>
                Focus on achieving measurable outcomes for our clients and team.
              </p>
            </div>
            <div className={styles.whatSkill}>
              <h6>Cutting-Edge Technology:</h6>
              <p>
                High-quality global services based on the latest tech curves,
                including AWS.
              </p>
            </div>
          </div>
        </Col>
        <Col className={styles.whatImageDiv} lg={4}>
          <Image
            src="/assets/images/TabImages/WhatTabImage.png"
            width={284}
            height={338}
            className={styles.whatImage}
            alt="Tab"
          />
        </Col>
      </Row>
    </div>
  )
}

export default WhatTab
