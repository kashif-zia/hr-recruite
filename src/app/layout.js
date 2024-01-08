import { Poppins } from 'next/font/google'
import AmplifyProvider from '@/providers/AmplifyProvider'
import './globals.css'
import '@aws-amplify/ui-react/styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://recruit.idenbrid.com'),
  title: 'Careers/Hiring - Leading Software Development in Lahore | IDENBRID INC',
  description: `Embark on a fulfilling career in software development with IDENBRID INC. in Lahore. We specialize in creating innovative mobile apps and web systems. Join our team of experts to develop cutting-edge solutions and advance your skills in a dynamic, technology-driven environment.`,
  keywords: [
    'IDENBRID',
    'IDENBRID INC.',
    'IDENBRID hiring',
    'IDENBRID job',
    'IDENBRID job',
    'IDENBRID app',
    'IDENBRID DHA',
    'IDENBRID Japan',
    'IDENBRID Pakistan',
    'Software Lahore',
    'App Development Lahore',
    'Web Development Lahore',
    'DHA software',
    'IT Lahore',
    'Mobile Apps Lahore',
    'Programming Jobs Lahore',
    'Digital Solutions Lahore',
    'Tech Lahore',
    'Software job',
    'Lahore Technology',
    'Coding Careers',
    'UI Design Lahore',
    'UX Development Lahore',
    'Tech Startups Lahore',
    'Cloud Computing Lahore',
    'Lahore job',
    'Designer job',
    'DHA job',
    'IT job DHA',
    'IT hiring',
    'IT recruitment',
  ],
  publisher: 'https://www.facebook.com/idenbridinc',
  alternates: {
    canonical: 'https://recruit.idenbrid.com',
  },
  openGraph: {
    title: 'Careers/Hiring - Leading Software Development in Lahore | IDENBRID INC',
    description: `Embark on a fulfilling career in software development with IDENBRID INC. in Lahore. We specialize in creating innovative mobile apps and web systems. Join our team of experts to develop cutting-edge solutions and advance your skills in a dynamic, technology-driven environment.`,
    url: 'https://recruit.idenbrid.com',
    siteName: 'Careers/Hiring - Leading Software Development in Lahore | IDENBRID INC',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={poppins.className}>
          <AmplifyProvider>{children}</AmplifyProvider>
        </body>
      </html>
    </>
  )
}
