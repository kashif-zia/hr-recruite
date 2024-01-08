'use client'
import React, { useState, useRef, useCallback } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Form, Formik, Field, FieldArray } from 'formik'
import { useDropzone } from 'react-dropzone'
import * as Yup from 'yup'
import style from './style.module.css'
import ThankYouModal from '@/components/ThankYouModal'
import Link from 'next/link'
import Image from 'next/image'

import { API, graphqlOperation, Storage } from 'aws-amplify'
import { createApplication } from '@/graphql/mutations'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required*'),
  email: Yup.string()
    .email('Email is invalid')
    .required('This field is required*'),
  phone_number: Yup.string().required('This field is required*'),
  currentCompany: Yup.string().required('This field is required*'),
  jobTitle: Yup.string().required('This field is required*'),
  education: Yup.string().required('This field is required*'),
  age: Yup.number()
    .integer('Please enter a valid integer for age')
    .positive('Age must be a positive number')
    .required('This field is required*'),
  experience: Yup.string().required('This field is required*'),
  linkedin: Yup.string()
    .url('Please enter a valid URL')
    .required('This field is required*'),
  resume: Yup.mixed()
    .required('This field is required*')
    .test(
      'fileFormat',
      'Unsupported file format. Please upload a PDF or PNG file.',
      (value) => {
        return value && ['application/pdf', 'image/png'].includes(value.type)
      },
    ),
  isAgree: Yup.boolean().oneOf([true], 'You must agree to the Privacy Policy*'),
})

function ApplyForm({ params }) {
  const formikRef = useRef()
  const [isFormShow, setIsFormShow] = useState(true)
  const [portfolioFields, setPortfolioFields] = useState(1)
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [file, setFile] = useState(null)
  const [resumePreview, setResumePreview] = useState(null)

  const handleSvgClick = () => {
    setPortfolioFields((prevFields) => prevFields + 1)
  }

  const handleRemoveField = (no) => {
    if (portfolioFields > 1) {
      setPortfolioFields((prevFields) => prevFields - 1)
      const currentValues = formikRef.current.values
      currentValues.portfolio[no - 1] = ''
      formikRef.current.setFieldValue('portfolio', [...currentValues.portfolio])
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    formikRef.current.setFieldValue('resume', file)
    const previewUrl = URL.createObjectURL(file)
    setResumePreview(previewUrl)
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop: (acceptedFiles) => onDrop(acceptedFiles),
      accept: '.pdf, .png',
      multiple: false,
    })

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path} className={style['apply-form__input-output']}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <section className="apply-form-wrapper">
      <Container>
        {!showThankYouModal ? (
          <Formik
            innerRef={formikRef}
            initialValues={{
              name: '',
              jobTitle: '',
              currentCompany: '',
              education: '',
              age: '',
              phone_number: '',
              experience: '',
              linkedin: '',
              portfolio: ['', '', ''],
              email: '',
              message: '',
              resume: '',
              isAgree: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (isFormShow) {
                setIsFormShow(false)
                return
              }
              try {
                delete values.isAgree
                let finalData = {
                  ...values,
                  jobId: params.jobId,
                }
                if (values.resume) {
                  await Storage.put(values.resume.name, values.resume)
                  finalData.resume = values.resume.name
                }
                const res = await API.graphql(
                  graphqlOperation(createApplication, { input: finalData }),
                )
                if (res) {
                  setSubmitting(false)
                  resetForm()
                  setFile(null)
                  setShowThankYouModal(true)
                }
              } catch (error) {
                setSubmitting(false)
                console.error(error)
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              isValid,
              setFieldError,
              setFieldValue,
            }) => {
              return (
                <>
                  {/* EditTable Form & Detail Form Switch Bases on isFormShow State */}
                  {isFormShow ? (
                    <Form className={style['apply-form']}>
                      <div className={style['apply-form__header']}>
                        <h2 className={style['apply-form__header-title']}>
                          Occasional company information session and first
                          selection
                        </h2>
                        <span
                          className={style['apply-form__header-company-tag']}
                        >
                          IDENBRID
                        </span>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Name
                        </label>
                        <Field
                          // className={style['apply-form__input']}
                          className={
                            errors.name && touched.name
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="text"
                          name="name"
                          placeholder="Jerry  Balvin"
                        />
                        {errors.name && touched.name ? (
                          <div className={style['error-qoute']}>
                            {errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Email
                        </label>
                        <Field
                          className={
                            errors.email && touched.email
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                        />
                        {errors.email && touched.email ? (
                          <div className={style['error-qoute']}>
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Phone No.
                        </label>
                        <Field
                          className={
                            errors.phone_number && touched.phone_number
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="tel"
                          name="phone_number"
                          placeholder="+92 300 123 4567"
                        />
                        {errors.phone_number && touched.phone_number ? (
                          <div className={style['error-qoute']}>
                            {errors.phone_number}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Current Company
                        </label>
                        <Field
                          className={
                            errors.currentCompany && touched.currentCompany
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="text"
                          name="currentCompany"
                          placeholder="Company name"
                        />
                        {errors.currentCompany && touched.currentCompany ? (
                          <div className={style['error-qoute']}>
                            {errors.currentCompany}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Job Title
                        </label>
                        <Field
                          className={
                            errors.jobTitle && touched.jobTitle
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="text"
                          name="jobTitle"
                          placeholder="SQA Engineer"
                        />
                        {errors.jobTitle && touched.jobTitle ? (
                          <div className={style['error-qoute']}>
                            {errors.jobTitle}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Education
                        </label>
                        <Field
                          className={
                            errors.education && touched.education
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="text"
                          name="education"
                          placeholder="Master’s, ____ University"
                        />
                        {errors.education && touched.education ? (
                          <div className={style['error-qoute']}>
                            {errors.education}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Age
                        </label>
                        <Field
                          className={
                            errors.age && touched.age
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="number"
                          name="age"
                          placeholder="21"
                        />
                        {errors.age && touched.age ? (
                          <div className={style['error-qoute']}>
                            {errors.age}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Job Experience
                        </label>
                        <Field
                          className={
                            errors.experience && touched.experience
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="text"
                          name="experience"
                          placeholder="3 Year’s"
                        />
                        {errors.experience && touched.experience ? (
                          <div className={style['error-qoute']}>
                            {errors.experience}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Linkedin Profile
                        </label>
                        <Field
                          className={
                            errors.linkedin && touched.linkedin
                              ? `${style['apply-form__input']} ${style['apply-form__input-error']}`
                              : style['apply-form__input']
                          }
                          type="url"
                          name="linkedin"
                          placeholder="https://www.linkedin.com"
                        />
                        {errors.linkedin && touched.linkedin ? (
                          <div className={style['error-qoute']}>
                            {errors.linkedin}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Portfolio
                        </label>
                        <div
                          className={
                            style['apply-form__input-portfolio-wrapper']
                          }
                        >
                          <Field
                            className={style['apply-form__input-portfolio']}
                            type="url"
                            name="portfolio[0]"
                            placeholder="https://www.behace.com"
                          />
                          <span
                            onClick={handleSvgClick}
                            className={
                              style['apply-form__input-portfolio-icon']
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_119_244)">
                                <path
                                  d="M11.9999 22.9091C18.0248 22.9091 22.909 18.025 22.909 12C22.909 5.97511 18.0248 1.09094 11.9999 1.09094C5.97499 1.09094 1.09082 5.97511 1.09082 12C1.09082 18.025 5.97499 22.9091 11.9999 22.9091Z"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 7.63635V16.3636"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.63647 12H16.3637"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_119_244">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                        {/* Next Portfolio Field */}
                        {portfolioFields > 1 && (
                          <div
                            className={
                              style['apply-form__input-portfolio-wrapper']
                            }
                          >
                            <Field
                              className={style['apply-form__input-portfolio']}
                              type="url"
                              name="portfolio[1]"
                              placeholder="https://www.behace.com"
                            />
                            <span
                              onClick={() => handleRemoveField(2)}
                              className={
                                style['apply-form__input-portfolio-icon']
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_119_281)">
                                  <path
                                    d="M11.9999 22.9091C18.0248 22.9091 22.909 18.025 22.909 12C22.909 5.97511 18.0248 1.09094 11.9999 1.09094C5.97499 1.09094 1.09082 5.97511 1.09082 12C1.09082 18.025 5.97499 22.9091 11.9999 22.9091Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.3635 12L7.63625 12"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.63647 12H16.3637"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_119_281">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        )}
                        {/* Next Portfolio Field */}
                        {portfolioFields > 2 && (
                          <div
                            className={
                              style['apply-form__input-portfolio-wrapper']
                            }
                          >
                            <Field
                              className={style['apply-form__input-portfolio']}
                              type="url"
                              name="portfolio[2]"
                              placeholder="https://www.behace.com"
                            />
                            <span
                              onClick={() => handleRemoveField(3)}
                              className={
                                style['apply-form__input-portfolio-icon']
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_119_281)">
                                  <path
                                    d="M11.9999 22.9091C18.0248 22.9091 22.909 18.025 22.909 12C22.909 5.97511 18.0248 1.09094 11.9999 1.09094C5.97499 1.09094 1.09082 5.97511 1.09082 12C1.09082 18.025 5.97499 22.9091 11.9999 22.9091Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.3635 12L7.63625 12"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.63647 12H16.3637"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_119_281">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Upload Resume or CV
                        </label>
                        <section
                          className={style['apply-form__dropzone-wrapper']}
                        >
                          <div
                            {...getRootProps({
                              onClick: () => {
                                setResumePreview(null)
                                formikRef.current.setFieldValue('resume', '')
                              },
                              className: 'apply-form__dropzone',
                            })}
                          >
                            <input {...getInputProps()} />
                            <div className="content-wrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="39"
                                height="40"
                                viewBox="0 0 39 40"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_117_624)">
                                  <path
                                    d="M4.00008 33.9125V6.1704C3.99635 5.25783 4.16654 4.35292 4.50156 3.50408C4.59103 3.27229 4.70175 3.04928 4.83231 2.83789C5.77938 1.34086 7.14678 0.497782 8.9858 0.502377C14.1155 0.51616 19.2451 0.51616 24.3748 0.502377C24.5257 0.496223 24.6761 0.523513 24.8152 0.58229C24.9543 0.641067 25.0787 0.729878 25.1795 0.842366C28.3231 4.14271 31.4678 7.4423 34.6134 10.7411C34.7391 10.8675 34.8382 11.0177 34.9047 11.1831C34.9713 11.3484 35.004 11.5254 35.0008 11.7036C34.997 19.2424 35.0077 26.7819 34.9917 34.3206C34.9871 36.4945 33.8103 38.2672 31.9514 39.0981C31.4326 39.3261 30.8719 39.4432 30.3053 39.4419C26.9189 39.4557 12.3025 39.5123 8.9904 39.5001C8.21726 39.5031 7.45419 39.3247 6.76244 38.9794C5.88648 38.5302 5.16789 37.8252 4.70215 36.9578C4.60134 36.7739 4.51433 36.5827 4.44184 36.3858C4.14577 35.595 3.99607 34.7569 4.00008 33.9125ZM23.4683 2.34781C23.3152 2.34016 23.2156 2.32944 23.1153 2.32944C18.5068 2.32944 13.8983 2.32944 9.28975 2.32944C7.25779 2.33327 5.89728 3.72998 5.89652 5.79289C5.89652 15.2559 5.89652 24.719 5.89652 34.182C5.89652 36.2962 7.27005 37.6615 9.39235 37.6623C16.1268 37.6623 22.8612 37.6623 29.5956 37.6623C31.7316 37.6623 33.1021 36.284 33.1029 34.1483C33.1029 27.0524 33.1029 19.9586 33.1029 12.8668V12.4303H32.6435C31.0143 12.4303 29.385 12.4303 27.755 12.4303C25.2453 12.4234 23.4813 10.6638 23.4714 8.15137C23.4645 6.38098 23.4714 4.61058 23.4714 2.84019L23.4683 2.34781ZM25.3533 3.76077L25.3533 4.24685C25.3533 5.52028 25.3487 6.79371 25.3533 8.06791C25.3601 9.62925 26.2636 10.5321 27.8216 10.5382C29.1353 10.5433 30.4615 10.5953 31.773 10.5137L25.3533 3.76077Z"
                                    fill="#292929"
                                  />
                                  <path
                                    d="M20.4341 16.9236V21.5441C20.4341 23.3911 20.4341 25.2381 20.4303 27.0843C20.4355 27.3022 20.3652 27.5152 20.2312 27.6872C20.0972 27.8592 19.9079 27.9795 19.6953 28.0277C19.482 28.0771 19.258 28.0484 19.0641 27.9466C18.8702 27.8449 18.7193 27.6769 18.6388 27.4733C18.5697 27.2556 18.5391 27.0276 18.5484 26.7994C18.5428 23.6527 18.5415 20.5068 18.5446 17.3616V16.9183L18.4619 16.8762C18.3723 16.9749 18.2843 17.0745 18.1932 17.1717C17.0677 18.3852 15.9417 19.5986 14.8153 20.8121C14.5366 21.113 14.2303 21.3328 13.7832 21.2432C13.6292 21.217 13.4845 21.1522 13.3624 21.0548C13.2403 20.9575 13.1448 20.8307 13.085 20.6865C13.0252 20.5422 13.003 20.3851 13.0204 20.2299C13.0378 20.0747 13.0942 19.9264 13.1845 19.799C13.2913 19.6563 13.4085 19.5217 13.5351 19.3962C15.2358 17.5692 16.937 15.7429 18.6388 13.9173C19.2237 13.2902 19.7413 13.2848 20.3231 13.9089C22.0871 15.7977 23.8498 17.6881 25.6113 19.58C25.9099 19.8985 26.0331 20.2516 25.8892 20.6605C25.7659 21.0096 25.4918 21.2103 25.1197 21.2646C24.7369 21.3205 24.4667 21.1237 24.2232 20.8618C23.0702 19.6213 21.9177 18.3806 20.7657 17.1396C20.6884 17.0416 20.6196 16.9374 20.5597 16.8279L20.4341 16.9236Z"
                                    fill="#292929"
                                  />
                                  <path
                                    d="M19.5123 31.1519C22.02 31.1519 24.5274 31.1519 27.0346 31.1519C27.2119 31.1436 27.3894 31.1619 27.5613 31.2063C27.7634 31.2695 27.9382 31.3992 28.0572 31.5744C28.1762 31.7496 28.2324 31.9599 28.2167 32.1711C28.1929 32.3809 28.1014 32.5772 27.9561 32.7303C27.8107 32.8834 27.6195 32.9849 27.4112 33.0195C27.3235 33.0346 27.2346 33.042 27.1456 33.0417C22.0542 33.0417 16.9626 33.0417 11.8707 33.0417C11.2903 33.0417 10.8754 32.7301 10.7988 32.2622C10.697 31.6573 11.1395 31.1549 11.7987 31.1526C13.5175 31.1465 15.2356 31.1526 16.9544 31.1526L19.5123 31.1519Z"
                                    fill="#292929"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_117_624">
                                    <rect
                                      width="39"
                                      height="39"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <div>
                                <h3>Select file to upload</h3>
                                <ul>
                                  <li>
                                    Multiple files up to 50MB can be uploaded.
                                  </li>
                                  <li>Supported format PDF, Docx</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <aside>
                            <ul className="px-3">{acceptedFileItems}</ul>
                          </aside>
                        </section>

                        {resumePreview &&
                          (values.resume.type === 'application/pdf' ? (
                            <embed
                              src={resumePreview}
                              type="application/pdf"
                              width="250"
                              height="250"
                            />
                          ) : (
                            <Image
                              width="250"
                              height="250"
                              src={resumePreview}
                              alt="File Preview"
                            />
                          ))}

                        {errors.resume ? (
                          <div className={style['error-qoute']}>
                            {errors.resume}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Message
                        </label>
                        <Field
                          className={style['apply-form__input-textarea']}
                          type="text"
                          as="textarea"
                          name="message"
                          placeholder="I graduated from XX University and spent three years as a recruiter at XXXXX Inc."
                        />
                        {errors.message && touched.message ? (
                          <div className={style['error-qoute']}>
                            {errors.message}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__agreement-wrapper']}>
                        <div style={{ cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={values.isAgree}
                            onChange={(e) => {
                              setFieldValue('isAgree', e.target.checked)
                            }}
                            className={style['apply-form__agreement-checkbox']}
                          />
                          <span
                            className={style['apply-form__agreement-title']}
                            onClick={(e) => {
                              setFieldValue('isAgree', !values.isAgree)
                            }}
                          >
                            I have read and agree to the Privacy Policy{' '}
                          </span>
                        </div>
                        {errors.isAgree ? (
                          <div className={style['error-qoute']}>
                            {errors.isAgree}
                          </div>
                        ) : null}
                      </div>
                      <div className={style['apply-form__submit-btn-wrapper']}>
                        <button
                          disabled={isSubmitting || !isValid}
                          className={style['apply-form__submit-btn']}
                          type="submit"
                        >
                          Apply Now
                        </button>
                      </div>
                    </Form>
                  ) : (
                    <Form className={style['apply-form']}>
                      <div className={style['apply-form__header']}>
                        <h2 className={style['apply-form__header-title']}>
                          Occasional company information session and first
                          selection
                        </h2>
                        <span
                          className={style['apply-form__header-company-tag']}
                        >
                          IDENBRID
                        </span>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Name
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.name}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Email
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.email}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Phone No.
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.phone_number}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Current Company
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.currentCompany}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Job Title
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.jobTitle}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Education
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.education}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Age
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.age}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Job Experience
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.experience}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Linkedin Profile
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.linkedin}
                        </h4>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Portfolio
                        </label>
                        <div>
                          {values.portfolio.map((portf, index) => {
                            return (
                              <>
                                <Link
                                  href={portf}
                                  key={index}
                                  className={style['apply-form__input-output']}
                                >
                                  {portf}
                                </Link>
                                <br />
                              </>
                            )
                          })}
                        </div>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Upload Resume or CV
                        </label>
                        <div>
                          <aside>
                            <ul className="px-3">{acceptedFileItems}</ul>
                          </aside>
                          {resumePreview &&
                            (values.resume.type === 'application/pdf' ? (
                              <embed
                                src={resumePreview}
                                type="application/pdf"
                                width="250"
                                height="250"
                              />
                            ) : (
                              <Image
                                width="250"
                                height="250"
                                src={resumePreview}
                                alt="File Preview"
                              />
                            ))}
                        </div>
                      </div>
                      <div className={style['apply-form__input-wrapper']}>
                        <label className={style['apply-form__input-label']}>
                          Message
                        </label>
                        <h4 className={style['apply-form__input-output']}>
                          {values.message}
                        </h4>
                      </div>
                      <div className={style['apply-form__submit-btn-wrapper']}>
                        <button
                          onClick={() => setIsFormShow(true)}
                          className={`${style['apply-form__submit-btn']} ${style['apply-form__submit-edit-btn']}`}
                          type="button"
                        >
                          Edit Form
                        </button>
                        <button
                          disabled={isSubmitting || !isValid}
                          className={style['apply-form__submit-btn']}
                          type="submit"
                        >
                          {isSubmitting ? (
                            <Spinner color="light" />
                          ) : (
                            'Apply Now'
                          )}
                        </button>
                      </div>
                    </Form>
                  )}
                </>
              )
            }}
          </Formik>
        ) : (
          <ThankYouModal jobTitle={'Engineering Manager Candidate'} />
        )}
      </Container>
    </section>
  )
}

export default ApplyForm
