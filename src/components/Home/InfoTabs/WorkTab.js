import React from 'react'
import styles from './infoTabs.module.css'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const WorkTab = () => {
  return (
    <div className={styles.workContainer}>
      <h3>Discover the excitement of growth at IDENBRID!</h3>
      <Row>
        <Col className={styles.workDiv} lg={8}>
          <p className={styles.workPara}>
            No matter your age, join us in a vibrant community where challenges
            are opportunities, and every day brings new excitement and learning
            as we follow our Leadership philosophy that discriminates us from
            others because the concept of OLP that make everyone Leader also
            shows in the actions and every member gives his extraordinary work.
            Let&apos;s make the journey together and update the future in Style!
          </p>
          <ul className={styles.workList}>
            <li>Comprehensive Training Programs</li>
            <li>Mentorship and Guidance</li>
            <li>Innovative Project Assignments</li>
            <li>Recognition and Rewards</li>
            <li>Career Progression Framework</li>
          </ul>
        </Col>
        <Col className={styles.workImageDiv} lg={4}>
          <Image
            src="/assets/images/TabImages/workTabImage.svg"
            width={320}
            height={336}
            style={{ width: '320px', height: '100%' }}
            className={styles.workImage}
            alt="Work Tab"
          />
        </Col>
      </Row>
    </div>
  )
}

export default WorkTab
