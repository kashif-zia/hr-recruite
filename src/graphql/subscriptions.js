/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
    onCreateJob(filter: $filter) {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
    onUpdateJob(filter: $filter) {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
    onDeleteJob(filter: $filter) {
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
export const onCreateCompanyProfile = /* GraphQL */ `
  subscription OnCreateCompanyProfile(
    $filter: ModelSubscriptionCompanyProfileFilterInput
  ) {
    onCreateCompanyProfile(filter: $filter) {
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
export const onUpdateCompanyProfile = /* GraphQL */ `
  subscription OnUpdateCompanyProfile(
    $filter: ModelSubscriptionCompanyProfileFilterInput
  ) {
    onUpdateCompanyProfile(filter: $filter) {
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
export const onDeleteCompanyProfile = /* GraphQL */ `
  subscription OnDeleteCompanyProfile(
    $filter: ModelSubscriptionCompanyProfileFilterInput
  ) {
    onDeleteCompanyProfile(filter: $filter) {
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
export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onCreateApplication(filter: $filter) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onUpdateApplication(filter: $filter) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onDeleteApplication(filter: $filter) {
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
