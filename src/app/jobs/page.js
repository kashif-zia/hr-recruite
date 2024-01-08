'use client'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'
import BG from '../../../public/assets/listingbackground.png'
import style from './style.module.css'
import { useSearchParams } from 'next/navigation'
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
import { listJobs } from '@/graphql/queries'

const jobTypeData = ['Full Time', 'Part Time', 'Internship', 'Contract Based']
const jobGroup = ['Administration', 'Business', 'Development']
const jobDepartmentData = [
  'HR Department',
  'Legal Department',
  'Accounts Deprtment',
  'Facilities Department',
  'Sales Department',
  'Creative Marketing Department',
  'Business Planning Department',
  'Engineering Department',
  'UI/UX Design Department',
  'Project Management Department',
]
const jobLayerData = [
  'Executive Director',
  'Management Director',
  'Department Lead',
  'Manager',
  'Senior',
  'Middle',
  'Junior',
]

function JobsListing() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadMoreLoading, setLoadMoreLoading] = useState(false)
  const [filterLoading, setFilterLoading] = useState(false)
  const [filterQuery, setFilterQuery] = useState(null)
  const [nextToken, setNextToken] = useState(null)

  const bannerBreadcrumbs = [
    { title: 'Home', path: '/' },
    { title: 'Job Listing', path: '/jobs' },
  ]

  const searchParams = useSearchParams()
  const primaryDepartment = searchParams.get('primaryDepartment')

  const fetchActiveJobs = async (token = null, filter = null) => {
    try {
      setLoading(true)
      const variables = {
        nextToken: token,
        limit: 5,
      }
      if (filter) {
        variables.filter = filter
      }
      const { data } = await API.graphql({
        query: listJobs,
        variables,
      })
      const adsList = data.listJobs.items
      if (token) {
        setJobs((prev) => [...prev, ...adsList])
      } else {
        setJobs(adsList)
      }
      setNextToken(data.listJobs.nextToken)
      setLoading(false)
      setLoadMoreLoading(false)
      setFilterLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error, 'Get ads post error')
    }
  }

  const loadMoreHandler = async () => {
    setLoadMoreLoading(true)
    let filter = null
    if (filterQuery !== null) {
      filter = {
        jobDepartment: {
          contains: filterQuery,
        },
      }
    }
    await fetchActiveJobs(nextToken, filter)
  }

  const getJobsByDepartment = async () => {
    setFilterLoading(true)
    let filter = null
    if (filterQuery !== null) {
      filter = {
        jobDepartment: {
          contains: filterQuery,
        },
      }
    }
    await fetchActiveJobs(null, filter)
  }

  useEffect(() => {
    let filter = null
    if (primaryDepartment !== 'null' && primaryDepartment !== null) {
      filter = { jobDepartment: { contains: primaryDepartment } }
      setFilterQuery(primaryDepartment)
    }
    fetchActiveJobs(null, filter)
  }, [])

  return (
    <section className={style['job-listing-page']}>
      <Image
        src={BG}
        className={style['job-listing-page-bg']}
        alt="background cover"
      />
      <Container>
        {/* <section className={style['job-listing-breadcrumb']}>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3333 4.77286V1.6701C18.3333 1.21019 17.9608 0.836926 17.5 0.836926C17.0392 0.836926 16.6667 1.21019 16.6667 1.6701V3.6414L12.3308 0.716116C10.915 -0.238705 9.085 -0.238705 7.66917 0.716116L1.83583 4.65204C0.686667 5.42773 0 6.71832 0 8.10556V15.8341C0 18.1312 1.86917 20 4.16667 20H5.83333C6.29417 20 6.66667 19.6267 6.66667 19.1668V11.6682C6.66667 11.2091 7.04 10.8351 7.5 10.8351H12.5C12.96 10.8351 13.3333 11.2091 13.3333 11.6682V19.1668C13.3333 19.6267 13.7058 20 14.1667 20H15.8333C18.1308 20 20 18.1312 20 15.8341V8.10556C20 6.78831 19.38 5.55771 18.3333 4.77286Z"
                fill="#808080"
              />
            </svg>
          </Link>
          <span className={style['job-listing-breadcrumb-slash']}>/</span>
          <Link href="/jobs" className={style['job-listing-breadcrumb-title']}>
            Job Listing
          </Link>
        </section> */}
        <Breadcrumb breadcrumbs={bannerBreadcrumbs} />
        <section className={style['job-listing-wrapper']}>
          <aside className={style['job-listing-filter-container']}>
            <div className={style['job-listing-filter-team-container']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.2 22.4V0H2.8V22.4H0V24H24V22.4H21.2ZM19.6 22.4H12.8V19.2H11.2V22.4H4.4V1.6H19.6V22.4Z"
                  fill="black"
                />
                <path d="M8.79999 14.4H7.19999V16H8.79999V14.4Z" fill="black" />
                <path d="M12.8 14.4H11.2V16H12.8V14.4Z" fill="black" />
                <path d="M16.8 14.4H15.2V16H16.8V14.4Z" fill="black" />
                <path
                  d="M8.79999 9.60002H7.19999V11.2H8.79999V9.60002Z"
                  fill="black"
                />
                <path d="M12.8 9.60002H11.2V11.2H12.8V9.60002Z" fill="black" />
                <path d="M16.8 9.60002H15.2V11.2H16.8V9.60002Z" fill="black" />
                <path
                  d="M8.79999 4.80001H7.19999V6.40001H8.79999V4.80001Z"
                  fill="black"
                />
                <path
                  d="M12.8 4.80001H11.2V6.40001H12.8V4.80001Z"
                  fill="black"
                />
                <path
                  d="M16.8 4.80001H15.2V6.40001H16.8V4.80001Z"
                  fill="black"
                />
              </svg>
              <select
                onChange={(e) =>
                  setFilterQuery(e.target.value === '' ? null : e.target.value)
                }
                value={filterQuery}
                className={style['job-listing-filter-team-select']}
              >
                <option value="">All</option>
                {jobDepartmentData.map((department, index) => {
                  return (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  )
                })}
              </select>
            </div>
            <button
              onClick={() => {
                getJobsByDepartment()
              }}
              className={style['job-listing-filter-btn']}
            >
              {filterLoading ? <Spinner /> : 'Find Now'}
            </button>
            <div className={style['social-media-wrapper']}>
              <span className={style['social-media-share']}>Share</span>
              <div className={style['social-media-container']}>
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
                  title={'Explore Exciting Job Opportunities'}
                  className="Demo__some-network__share-button"
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={window.location.href}
                  title={'Explore Exciting Job Opportunities'}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </aside>
          <section className={style['job-listing-container']}>
            {loading &&
              Array.from({ length: 4 }).map((item, index) => (
                <MyLoader key={index} />
              ))}
            {!loading &&
              jobs.map((job, index) => {
                return (
                  <Link key={index} href={`/jobs/${job.id}`}>
                    <section className={style['job-list']}>
                      <h3 className={style['job-list-title']}>
                        {job.jobTitle} | Marketing Department
                      </h3>
                      <h4
                        className={style['job-list-subtitle']}
                        dangerouslySetInnerHTML={{
                          __html: job.jobDescription,
                        }}
                      ></h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: job.requirements,
                        }}
                        className={style['job-list-requirement']}
                      ></div>
                    </section>
                  </Link>
                )
              })}
            {!loading && jobs.length === 0 && !nextToken && (
              <h1> No Jobs Found</h1>
            )}

            {nextToken && (
              <button
                onClick={() => loadMoreHandler(nextToken, filterQuery)}
                className={style['job-listing-loadmore-btn']}
              >
                {loadMoreLoading ? <Spinner /> : 'Load More'}
              </button>
            )}
          </section>
        </section>
      </Container>
    </section>
  )
}

const MyLoader = () => (
  <div className={style['job-list']}>
    <ContentLoader
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" height="40" />
      <rect x="0" y="50" rx="3" ry="3" height="40" />
      <rect x="0" y="100" rx="3" ry="3" height="40" />
    </ContentLoader>
  </div>
)

export default JobsListing
