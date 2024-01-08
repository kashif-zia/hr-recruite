// Breadcrumb component
import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import styles from '../Breadcrumb/breadcrumb.module.css'

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <div>
      <section className={styles.breadcrumbSection}>
        <Container>
          <div className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb, index) => (
              <span className={styles.breadcrumbText} key={index}>
                {index > 0 && <span> / </span>}
                {breadcrumb.path ? (
                  <Link
                    href={breadcrumb.path}
                    className={styles.breadcrumbLink}
                  >
                    {breadcrumb.title === 'Home' ? (
                      <svg className={styles.homeicon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#homeicon"></use>
                      </svg>
                    ) : (
                      <span>{breadcrumb.title}</span>
                    )}
                  </Link>
                ) : (
                  <span>{breadcrumb.title}</span>
                )}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Breadcrumb
