import styles from './header.module.css'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.headerBox}>
                <div className={styles.logoImage}>
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/idenbrid-logo.svg"
                      width={186}
                      height={48}
                      alt="logo"
                      className={styles.mainLogo}
                    />
                  </Link>
                </div>
                <div className={styles.jobListingButton}>
                  <Link href="/jobs" className={styles.jobListingBtn}>
                    Job Listing
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Header
