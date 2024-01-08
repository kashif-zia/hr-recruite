'use client'
import React from 'react'
import awsConfig from '../aws-exports'
import { Amplify } from 'aws-amplify'
import ScrollToTop from 'react-scroll-to-top'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Amplify.configure({ ...awsConfig, ssr: true })
const AmplifyProvider = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop smooth />
      <Footer />
    </>
  )
}

export default AmplifyProvider
