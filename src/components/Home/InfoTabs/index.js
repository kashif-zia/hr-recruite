'use client'

import React, { useState } from 'react'
import styles from './infoTabs.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import WhatTab from './WhatTab'
import PhilosphyTab from './PhilosphyTab'
import BusinessTab from './BusinessTab'
import WorkTab from './WorkTab'

const InfoTabs = () => {
  const tabs = [
    'What is IDENBRID?',
    'Management Philosophy',
    'Business Content',
    'For those looking for work',
  ]
  const [activeTab, setActiveTab] = useState('What is IDENBRID?')

  const ShowTab = () => {
    if (activeTab === 'What is IDENBRID?') {
      return <WhatTab />
    } else if (activeTab === 'Management Philosophy') {
      return <PhilosphyTab />
    } else if (activeTab === 'Business Content') {
      return <BusinessTab />
    } else if (activeTab === 'For those looking for work') {
      return <WorkTab />
    }
  }

  return (
    <section className={styles.infoSection}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.scrollable}>
              <div
                onClick={() => setActiveTab('What is IDENBRID?')}
                className={
                  activeTab === 'What is IDENBRID?'
                    ? `${styles.newSingleTab} ${styles.newActiveTab}`
                    : styles.newSingleTab
                }
              >
                What is IDENBRID?
              </div>
              <div
                onClick={() => setActiveTab('Management Philosophy')}
                className={
                  activeTab === 'Management Philosophy'
                    ? `${styles.newSingleTab} ${styles.newActiveTab}`
                    : styles.newSingleTab
                }
              >
                Management Philosophy
              </div>
              <div
                onClick={() => setActiveTab('Business Content')}
                className={
                  activeTab === 'Business Content'
                    ? `${styles.newSingleTab} ${styles.newActiveTab}`
                    : styles.newSingleTab
                }
              >
                Business Content
              </div>
              <div
                onClick={() => setActiveTab('For those looking for work')}
                className={
                  activeTab === 'For those looking for work'
                    ? `${styles.newSingleTab} ${styles.newActiveTab}`
                    : styles.newSingleTab
                }
              >
                For those looking for work
              </div>
            </div>

            <div  className={`${styles.show} ${styles.scrollTabsRow}`}>
              {tabs.map((x, i) => {
                return (
                  <Col
                    key={i}
                    onClick={() => setActiveTab(x)}
                    className={
                      activeTab === x
                        ? `${styles.singleTab} ${styles.activeTab}`
                        : styles.singleTab
                    }
                  >
                    {x}
                  </Col>
                )
              })}
            </div>
            <div className={styles.tabDetailSection}>
              <ShowTab />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default InfoTabs
