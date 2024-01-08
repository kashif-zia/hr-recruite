'use client'
import styles from './banner.module.css'
import React from 'react'
import scrollToSection from '@/utils/scroll'
import { Container, Row, Col } from 'react-bootstrap'
const Banner = () => {
  return (
    <div>
      <section className={styles.bannerSection} id="intro">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.bannerh1}>Update the Future in Style</h1>
            </Col>
          </Row>
        </Container>
        <div
          onClick={() => scrollToSection('board-message')}
          className={styles.exploreBtn}
        >
          <div className={styles.ovalAnimation}>
            <div className={styles.ball}></div>
          </div>
          <div className={styles.scrollText}>Scroll</div>
        </div>
      </section>
    </div>
  )
}

export default Banner
