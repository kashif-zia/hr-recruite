/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      avatar_id
      email_verified
      status
      companyId
      companyDetail {
        id
        name
        established
        capital
        address
        noOfEmployees
        companyOverview
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        avatar_id
        email_verified
        status
        companyId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      jobTitle
      jobType
      jobGroup
      jobLayer
      jobDepartment
      jobCoverImage
      jobDescription
      keyResponsibilities
      requirements
      distinctiveFeaturesOfTheRole
      expectedSalary
      workingHours
      benefits
      applicationProcess
      equalOpportunityStatement
      probationPeriod
      application {
        nextToken
        __typename
      }
      companyId
      company {
        id
        name
        established
        capital
        address
        noOfEmployees
        companyOverview
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        jobTitle
        jobType
        jobGroup
        jobLayer
        jobDepartment
        jobCoverImage
        jobDescription
        keyResponsibilities
        requirements
        distinctiveFeaturesOfTheRole
        expectedSalary
        workingHours
        benefits
        applicationProcess
        equalOpportunityStatement
        probationPeriod
        companyId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompanyProfile = /* GraphQL */ `
  query GetCompanyProfile($id: ID!) {
    getCompanyProfile(id: $id) {
      id
      name
      established
      capital
      address
      noOfEmployees
      companyOverview
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanyProfiles = /* GraphQL */ `
  query ListCompanyProfiles(
    $filter: ModelCompanyProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        established
        capital
        address
        noOfEmployees
        companyOverview
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      name
      jobTitle
      jobId
      jobDetail {
        id
        jobTitle
        jobType
        jobGroup
        jobLayer
        jobDepartment
        jobCoverImage
        jobDescription
        keyResponsibilities
        requirements
        distinctiveFeaturesOfTheRole
        expectedSalary
        workingHours
        benefits
        applicationProcess
        equalOpportunityStatement
        probationPeriod
        companyId
        status
        createdAt
        updatedAt
        __typename
      }
      currentCompany
      education
      age
      phone_number
      experience
      linkedin
      portfolio
      email
      message
      resume
      applicationStatus
      createdAt
      updatedAt
      jobApplicationId
      __typename
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        jobTitle
        jobId
        currentCompany
        education
        age
        phone_number
        experience
        linkedin
        portfolio
        email
        message
        resume
        applicationStatus
        createdAt
        updatedAt
        jobApplicationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
