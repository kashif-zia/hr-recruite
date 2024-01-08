/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      categoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createCompanyProfile = /* GraphQL */ `
  mutation CreateCompanyProfile(
    $input: CreateCompanyProfileInput!
    $condition: ModelCompanyProfileConditionInput
  ) {
    createCompanyProfile(input: $input, condition: $condition) {
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
export const updateCompanyProfile = /* GraphQL */ `
  mutation UpdateCompanyProfile(
    $input: UpdateCompanyProfileInput!
    $condition: ModelCompanyProfileConditionInput
  ) {
    updateCompanyProfile(input: $input, condition: $condition) {
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
export const deleteCompanyProfile = /* GraphQL */ `
  mutation DeleteCompanyProfile(
    $input: DeleteCompanyProfileInput!
    $condition: ModelCompanyProfileConditionInput
  ) {
    deleteCompanyProfile(input: $input, condition: $condition) {
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
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
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
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
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
