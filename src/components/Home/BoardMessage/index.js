import React from 'react'
import styles from './boardmessage.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
const BoardMessage = () => {
  return (
    <div>
      <section id="board-message" className={styles.BoardSection}>
        <Container>
          <Row className={styles.rowInverse}>
            <Col md={6}>
              <div className={styles.BoardTextBox}>
                <div className={styles.BoardSubText}>
                  For Leadership Philosphy
                </div>
                <div className={styles.BoardHeading}>Board Message</div>
                <div className={styles.BoardParagraph}>
                  <p>
                    I am delighted that you are considering joining our team as
                    we work towards our mission of becoming the best IT venture
                    company in Pakistan.
                  </p>
                  <p>
                    As we embark on this journey, I would like to share with you
                    the core principles that guide how I run this company and
                    the kind of individuals we are looking to hire.
                  </p>
                  <p>
                    Emphasis on Value: At IDENBRID, we believe that the true
                    measure of our success lies in the value we create for our
                    clients, teammates, supervisors, and other stakeholders. We
                    focus on delivering high-quality solutions within a limited
                    time frame, ensuring that we not only meet but exceed
                    expectations.
                  </p>
                  <p>I look forward to welcoming you to the IDENBRID family.</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Image
                src="/assets/images/Images.svg"
                width={545}
                height={545}
                alt="logo"
                className={styles.BoardMemberImage}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default BoardMessage
