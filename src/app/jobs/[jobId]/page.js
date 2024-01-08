'use client'
import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './apply.module.css'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb/index'

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'

import { API } from 'aws-amplify'
import { getJob } from '@/graphql/queries'

function JobDetail({ params }) {
  const [loading, setLoading] = useState(true)
  const [jobDetail, setJobDetail] = useState(null)
  const bannerBreadcrumbs = [
    { title: 'Home', path: '/' },
    { title: 'Job Listing', path: '/jobs' },
    { title: `${jobDetail?.jobTitle || params.jobId}` },
  ]

  const getJobDetailById = async () => {
    setLoading(true)
    try {
      const { data } = await API.graphql({
        query: getJob,
        variables: {
          id: params.jobId,
        },
      })
      setJobDetail(data.getJob)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error.message)
    }
  }

  useEffect(() => {
    getJobDetailById()
  }, [])

  return (
    <>
      <section className={styles.JobDetail}>
        <Breadcrumb breadcrumbs={bannerBreadcrumbs} />
        <Container>
          {!loading ? (
            <>
              <Row>
                <Col md={9}>
                  <h1 className={styles.jobDetailH1}>{jobDetail?.jobTitle}</h1>
                  <div className={styles.companyName}>
                    {jobDetail?.company?.name}
                  </div>
                  <div className={styles.companyInfoBox}>
                    <div className={styles.companyInfoItem}>
                      <span className={styles.ConpanyInfoLabel}>Group: </span>
                      <span className={styles.ConpanyInfoDetail}>
                        {jobDetail?.jobGroup}
                      </span>
                    </div>
                    <div className={styles.companyInfoItem}>
                      <span className={styles.ConpanyInfoLabel}>
                        Department:{' '}
                      </span>
                      <span className={styles.ConpanyInfoDetail}>
                        {jobDetail?.jobDepartment}
                      </span>
                    </div>
                    {/* <div className={styles.companyInfoItem}>
                  <span className={styles.ConpanyInfoLabel}>Position:</span>
                  <span className={styles.ConpanyInfoDetail}>
                  {jobDetail?.jobDepartment}
                  </span>
                </div> */}
                    <div className={styles.companyInfoItem}>
                      <span className={styles.ConpanyInfoLabel}>Layer: </span>
                      <span className={styles.ConpanyInfoDetail}>
                        {jobDetail?.jobLayer}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={styles.applyCol}>
                    <Link
                      href={`/jobs/${jobDetail?.id}/apply`}
                      className={styles.applyNowBtn}
                    >
                      Apply Now
                    </Link>
                    <div className={styles.shareIconBox}>
                      <div className={styles.shareIconText}>Share</div>
                      <div className={styles.socialIcon}>
                        <FacebookShareButton
                          url={window.location.href}
                          className="Demo__some-network__share-button"
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <LinkedinShareButton
                          url={window.location.href}
                          className="Demo__some-network__share-button"
                        >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <TwitterShareButton
                          url={window.location.href}
                          title={jobDetail?.jobTitle}
                          className="Demo__some-network__share-button"
                        >
                          <XIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton
                          url={window.location.href}
                          title={jobDetail?.jobTitle}
                          separator=":: "
                          className="Demo__some-network__share-button"
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className={styles.jobDetailTumnail}>
                    <StorageImage
                      className={styles.Thumbnail}
                      alt="Job Cover"
                      width="1110"
                      height="624"
                      imgKey={jobDetail?.jobCoverImage}
                      accessLevel="guest"
                    />
                  </div>
                  <div className={styles.jobDetailContent}>
                    <h2>Job Purpose and Expectations:</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.jobDescription,
                      }}
                    ></p>
                    <h3>Key Responsibilities:</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.keyResponsibilities,
                      }}
                    ></div>
                    <h3>Distinctive Features of the Role:</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.distinctiveFeaturesOfTheRole,
                      }}
                    ></div>
                    <h3>Benefits and Perks:</h3>
                    <div className="table-responsive">
                      <Table responsive="sm" bordered>
                        <tbody>
                          <tr>
                            <th>Salary</th>
                            <td>{jobDetail?.expectedSalary}</td>
                          </tr>
                          <tr>
                            <th>Job Type</th>
                            <td>{jobDetail?.jobType} employee</td>
                          </tr>
                          <tr>
                            <th>Work hours</th>
                            <td>{jobDetail?.workingHours}</td>
                          </tr>
                          <tr>
                            <th>Location</th>
                            <td>{jobDetail?.company?.address}</td>
                          </tr>
                          <tr>
                            <th>Benefits</th>
                            <td
                              dangerouslySetInnerHTML={{
                                __html: jobDetail?.benefits,
                              }}
                            ></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <h3>Application Process:</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.applicationProcess,
                      }}
                    ></div>
                    <h3>Equal Opportunity Statement:</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.equalOpportunityStatement,
                      }}
                    ></div>
                    <h3>Company Overview :</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobDetail?.company?.companyOverview,
                      }}
                    ></div>
                    <h3>Contact Information:</h3>
                    <p>
                      {jobDetail?.jobDepartment}, {jobDetail?.company?.name}{' '}
                      Office
                    </p>
                    <p>Location: {jobDetail?.company?.address}</p>
                  </div>
                </Col>
              </Row>
              <div className={styles.applybtnsticky}>
                <Link
                  href={`/jobs/${jobDetail?.id}/apply`}
                  className={styles.applystickyNowBtn}
                >
                  Apply Now
                </Link>
              </div>
            </>
          ) : (
            <MyLoader />
          )}
        </Container>
      </section>
    </>
  )
}

const MyLoader = () => (
  <div className={styles['job-detail-loader-content']}>
    <Row>
      <Col md={9}>
        <ContentLoader
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" height="40" />
          <rect x="0" y="50" rx="3" ry="3" height="30" />
          <rect x="0" y="90" rx="3" ry="3" height="84" />
        </ContentLoader>
      </Col>
      <Col md={3}>
        <div className={styles.applyCol}>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" height="60" />
            <rect x="0" y="90" rx="3" ry="3" height="35" />
          </ContentLoader>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <div className={styles.jobDetailTumnail}>
          <ContentLoader
            speed={2}
            height="624"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" height="624" />
          </ContentLoader>
        </div>
        <div className={styles.jobDetailContent}>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" height="24" />
            <rect x="0" y="40" rx="3" ry="3" height="112" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="15" rx="3" ry="3" height="24" />
            <rect x="0" y="55" rx="3" ry="3" height="150" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="15" rx="3" ry="3" height="24" />
            <rect x="0" y="55" rx="3" ry="3" height="150" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="15" rx="3" ry="3" height="24" />
            <rect x="0" y="55" rx="3" ry="3" height="150" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className={styles['job-detail-loader-benefits']}
          >
            <rect x="0" y="15" rx="3" ry="3" height="24" />
            <rect x="0" y="55" rx="3" ry="3" height="40" />
            <rect x="0" y="100" rx="3" ry="3" height="40" />
          </ContentLoader>
        </div>
      </Col>
    </Row>
  </div>
)

export default JobDetail
