/* Amplify Params - DO NOT EDIT
	API_ITORCHARD_CONTACTUSTABLE_ARN
	API_ITORCHARD_CONTACTUSTABLE_NAME
	API_ITORCHARD_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk')

const ses = new AWS.SES({
  region: process.env.REGION,
})

AWS.config.update({ region: process.env.REGION })

exports.handler = async (event) => {
  const name = event.Records[0].dynamodb.NewImage.name.S
  const email = event.Records[0].dynamodb.NewImage.email.S
  const jobTitle = event.Records[0].dynamodb.NewImage.jobTitle.S
  const phoneNumber = event.Records[0].dynamodb.NewImage.phone_number.S
  const age = event.Records[0].dynamodb.NewImage.age.N
  const experience = event.Records[0].dynamodb.NewImage.experience.S
  const education = event.Records[0].dynamodb.NewImage.education.S
  const currentCompany = event.Records[0].dynamodb.NewImage.currentCompany.S
  const linkedin = event.Records[0].dynamodb.NewImage.linkedin.S
  const message = event.Records[0].dynamodb.NewImage.message.S
  const portfolio = event.Records[0].dynamodb.NewImage.portfolio.L.map(
    (obj) => obj.S,
  )

  let filteredArray = portfolio.filter((value) => value !== '')
  let resultProtfolio = filteredArray.join(', ')

  const sendEmail = async (emailData) => {
    let emailParams = {
      Destination: {
        ToAddresses: [emailData.to],
      },
      Message: {
        Body: {
          Text: {
            Data: emailData.body,
          },
        },
        Subject: {
          Data: emailData.subject,
        },
      },
      Source: emailData.from,
    }
    try {
      await ses.sendEmail(emailParams).promise()
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
  // if (newData) {
  let adminEmailBody = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    body: `    
    Dear HR's,

    A new job application has been received for the position of ${jobTitle}. Please find the details below:
    Applicant Information:
    - Name: ${name}
    - Email: ${email}
    - Phone Number: ${phoneNumber}
    - Current Company: ${currentCompany}
    - Education: ${education}
    - Age: ${age}
    - Experience: ${experience}
    - LinkedIn Profile: ${linkedin}
    - Portfolio: ${resultProtfolio}
    
    Application Details:
    - Job Title: ${jobTitle}
    - Message from Applicant:
    ${message}
    
    The resume and additional information are attached to this email.
    
    Please review the application at your earliest convenience. If you have any questions or would like further details, feel free to contact the applicant directly via the provided email or phone number.
    
    Thank you for your attention to this matter.
    
    Best regards,
    ${name}    
    ${currentCompany}
    `,
    subject: 'New Job Application Received',
  }

  // Engagement: ${engagement}
  // Team Strength: ${teamStrength}
  let userEmailBody = {
    from: process.env.EMAIL,
    to: email,
    body: `
    Dear ${name},
    
    Thank you for submitting your application for the position of ${jobTitle} at IDENBRID. We have received your application, and our team will review it shortly.
    
    If your qualifications match our requirements, we will reach out to you for the next steps in the hiring process. Please make sure to keep an eye on your email for further updates.
    
    We appreciate your interest in joining IDENBRID.
    
    Thank you for your attention.
    `,
    subject: 'Thank You for Your Job Application',
  }

  await sendEmail(adminEmailBody)

  await sendEmail(userEmailBody)

  return {
    statusCode: 200,
    body: JSON.stringify('Successfully send the email'),
  }
}
