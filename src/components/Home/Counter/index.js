import React from 'react'
import styles from './counter.module.css'
import { Container, Row, Col } from 'react-bootstrap'
const Counter = () => {
  return (
    <div>
      <section className={styles.counterSection}>
        <Container>
          <Row className="g-0">
            <Col md={4}>
              <div className={`${styles.counterBox} ${styles.blueBox}`}>
                <div>
                  <svg className={styles.Happycustomeresvg}>
                    <use xlinkHref="/assets/images/svg/icons.svg#happycustomericon"></use>
                  </svg>
                </div>
                <div className={styles.counterLabel}>Number of Customers</div>
                <div className={styles.counterNo}>46</div>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${styles.counterBox} ${styles.greyBox}`}>
                <div>
                  <svg className={styles.teamgrowthicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#teamgrowthicon"></use>
                  </svg>
                </div>
                <div className={styles.counterLabel}>
                  Team growth: 2020-2023
                </div>
                <div className={styles.counterNo}>156%</div>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${styles.counterBox} ${styles.blueBox}`}>
                <div>
                  <svg className={styles.growthrate}>
                    <use xlinkHref="/assets/images/svg/icons.svg#growthrate"></use>
                  </svg>
                </div>
                <div className={styles.counterLabel}>
                  Growth Rate in 3 years
                </div>
                <div className={styles.counterNo}>3 times</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Counter
