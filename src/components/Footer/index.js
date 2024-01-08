import styles from './footer.module.css'
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <section className={styles.footer}>
        <Container>
          <Row>
            <Col md={12}>
              <Link href="/">
                <Image
                  src="/assets/images/logo/idenbrid-logo.svg"
                  width={186}
                  height={48}
                  alt="logo"
                  className={styles.footerLogo}
                />
              </Link>

              <p className={styles.addressFooter}>
                Basement 1 Floor 176, DHA Y-block Lahore, 54000
              </p>
              <p className={styles.copyrightFooter}>
                ©IDENBRID INC., 2023. ALL RIGHTS RESERVED
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Footer
