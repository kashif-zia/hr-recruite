'use client'
import React, { useState } from 'react'
import styles from './career.module.css'
import './career.css'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Careers = () => {
  const router = useRouter()
  const [hovered1, setHovered1] = useState(false)
  const handleMouseEnter1 = () => {
    setHovered1(true)
  }
  const handleMouseLeave1 = () => {
    setHovered1(false)
  }
  const [hovered2, setHovered2] = useState(false)
  const handleMouseEnter2 = () => {
    setHovered2(true)
  }
  const handleMouseLeave2 = () => {
    setHovered2(false)
  }
  const [hovered3, setHovered3] = useState(false)
  const handleMouseEnter3 = () => {
    setHovered3(true)
  }
  const handleMouseLeave3 = () => {
    setHovered3(false)
  }
  const [hovered4, setHovered4] = useState(false)
  const handleMouseEnter4 = () => {
    setHovered4(true)
  }
  const handleMouseLeave4 = () => {
    setHovered4(false)
  }
  const handleButtonClick = (primaryDepartment = null) => {
    router.push('/jobs?primaryDepartment=' + primaryDepartment)
  }

  return (
    <div>
      <section className={styles.careerSection} id="careers">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.SubText}>Careers</div>
              <h2 className={styles.Caraeerh2}>Explore Jobs</h2>
              <div className={styles.RecruitmentHeading}>Recruitment type</div>
              <p className={styles.CarreerP}>
                Embark on a career journey with IDENBRID! Explore exciting job
                opportunities. Join us in shaping the future – where your skills
                meet limitless possibilities. Browse our open positions and be
                part of the IDENBRID family today!
              </p>
              <div className={styles.CarreerButtonGroup}>
                <button
                  onClick={() => handleButtonClick('Engineering Department')}
                  className={styles.CarreerBtn}
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  {hovered1 ? 'Explore Jobs' : 'Engineering Jobs'}
                </button>
                <button
                  onClick={() =>
                    handleButtonClick('Creative Marketing Department')
                  }
                  className={styles.CarreerBtn}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  {hovered2 ? 'Explore Jobs' : 'Marketing Jobs'}
                </button>
                <button
                  onClick={() => handleButtonClick('HR Department')}
                  className={styles.CarreerBtn}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  {hovered3 ? 'Explore Jobs' : 'HR Jobs'}
                </button>
                <button
                  onClick={() => handleButtonClick('UI/UX Design Department')}
                  className={styles.CarreerBtn}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  {hovered4 ? 'Explore Jobs' : 'Designer Jobs'}
                </button>
              </div>
              <div className={styles.RecruitmentHeading}>Interview Guide</div>
              <p className={styles.CarreerP}>
                Step into the IDENBRID&apos;s interview process by watching our
                video guide to gain a glimpse into our unique interview
                experience, highlighting our commitment to innovation, passion,
                and excellence in every interaction.
              </p>
              <div className={styles.CareerTabsDiv}>
                <Tabs
                  defaultActiveKey="Welfare"
                  id="career-Tabs"
                  className={styles.tabComponent}
                >
                  <Tab
                    eventKey="Welfare"
                    title="Welfare"
                    className="tabComponent-Link"
                  >
                    <ul className={styles.CareerTabsList}>
                      <li>Daily Lunch</li>
                      <li>Medical care -- Medical support system.</li>
                      <li>Fuel allowance</li>
                      <li>Snack Bar</li>
                    </ul>
                  </Tab>
                  <Tab eventKey="Treatment" title="Treatment">
                    <ul className={styles.CareerTabsList}>
                      <li>Quarterly evaluation and salary increment</li>
                      <li>Annual Tour</li>
                      <li>Annual Lunch</li>
                      <li>Internal & External events</li>
                    </ul>
                  </Tab>
                  <Tab eventKey="Holiday-Vacation" title="Holiday Vacation">
                    <ul className={styles.CareerTabsList}>
                      <li>Complete 2-day weekend off system</li>
                      <li>15 Public Holidays</li>
                      <li>10 Annual paid vacation</li>
                      <li>Congratulatory and condolence leave</li>
                      <li>*Over 125 days off per year</li>
                    </ul>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Careers
