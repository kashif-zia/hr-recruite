import React from 'react'
import styles from './media.module.css'
import { Container, Row, Col } from 'react-bootstrap'
const MediaLink = () => {
  return (
    <div>
      <section className={styles.mediaSection} id="media-link">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className={styles.mediaH2}>Media links by the numbers</h2>
              <div className={styles.desktopSection}>
                <div
                  className={`${styles.LeftTriangleBox} ${styles.MaleFemaleBox}`}
                >
                  <div className={styles.LeftmediaBoxItem}>
                    <svg className={styles.Lefttrianglesvg}>
                      <use xlinkHref="/assets/images/svg/icons.svg#malefemaleicon"></use>
                    </svg>
                    <div className={styles.triangleImageBox}>
                      <div className={styles.triangleBoxLabel}>
                        Male to female ratio
                      </div>
                      <ul className={styles.triangleList}>
                        <li>Male: 75%</li>
                        <li>Female: 25%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.RightTriangleBox} ${styles.OccupationBox}`}
                >
                  <div className={styles.RightmediaBoxItem}>
                    <svg className={styles.Righttrianglesvg}>
                      <use xlinkHref="/assets/images/svg/icons.svg#occupationicon"></use>
                    </svg>
                    <div className={styles.RighttriangleImageBox}>
                      <div className={styles.RighttriangleBoxLabel}>
                        Occupation percentage
                      </div>
                      <ul className={styles.RighttriangleList}>
                        <li>Engineer: 35%</li>
                        <li>Management: 30%</li>
                        <li>Back Office: 20%</li>
                        <li>Sales & Marketing: 10%</li>
                        <li>Designer: 5%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.LeftTriangleBox} ${styles.AgeStructureBox}`}
                >
                  <div className={styles.LeftmediaBoxItem}>
                    <svg className={styles.Lefttrianglesvg}>
                      <use xlinkHref="/assets/images/svg/icons.svg#ageicon"></use>
                    </svg>
                    <div className={styles.triangleImageBox}>
                      <div className={styles.triangleBoxLabel}>
                        Age structure
                      </div>
                      <ul className={styles.triangleList}>
                        <li>20s: 80%</li>
                        <li>30s: 15%</li>
                        <li>50s: 5%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.RightTriangleBox} ${styles.EmployeeBox}`}
                >
                  <div className={styles.RightmediaBoxItem}>
                    <svg className={styles.Righttrianglesvg}>
                      <use xlinkHref="/assets/images/svg/icons.svg#employeeicon"></use>
                    </svg>
                    <div className={styles.RighttriangleImageBox}>
                      <div className={styles.RighttriangleBoxLabel}>
                        Employee composition
                      </div>
                      <ul className={styles.RighttriangleList}>
                        <li>Halfway: 75%</li>
                        <li>New graduate: 25 %</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.spSection}>
                <div className={`${styles.spMediaBox} ${styles.MaleFemaleBox}`}>
                  <svg className={styles.spmalefemaleicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#spmalefemaleicon"></use>
                  </svg>
                  <div className={styles.spMediaBoxinfo}>
                    <div className={styles.triangleBoxLabel}>
                      Male to female ratio
                    </div>
                    <ul className={styles.triangleList}>
                      <li>Male: 75%</li>
                      <li>Female: 25%</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.spSection}>
                <div className={`${styles.spMediaBox} ${styles.OccupationBox}`}>
                  <svg className={styles.spoccupationicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#spoccupationicon"></use>
                  </svg>
                  <div className={styles.spMediaBoxinfo}>
                    <div className={styles.triangleBoxLabel}>
                      Occupation percentage
                    </div>
                    <ul className={styles.RighttriangleList}>
                      <li>Engineer: 35%</li>
                      <li>Management: 30%</li>
                      <li>Back Office: 20%</li>
                      <li>Sales & Marketing: 10%</li>
                      <li>Designer: 5%</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.spSection}>
                <div
                  className={`${styles.spMediaBox} ${styles.AgeStructureBox}`}
                >
                  <svg className={styles.spemployeeicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#spemployeeicon"></use>
                  </svg>
                  <div className={styles.spMediaBoxinfo}>
                    <div className={styles.triangleBoxLabel}>Age structure</div>
                    <ul className={styles.triangleList}>
                      <li>20s: 80%</li>
                      <li>30s: 15%</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.spSection}>
                <div className={`${styles.spMediaBox} ${styles.EmployeeBox}`}>
                  <svg className={styles.sphappycustomericon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#sphappycustomericon"></use>
                  </svg>
                  <div className={styles.spMediaBoxinfo}>
                    <div className={styles.triangleBoxLabel}>
                      Employee composition
                    </div>
                    <ul className={styles.RighttriangleList}>
                      <li>Halfway: 75%</li>
                      <li>New graduate: 25 %</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default MediaLink
