/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Job } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function JobUpdateForm(props) {
  const {
    id: idProp,
    job: jobModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    jobTitle: "",
    jobType: "",
    jobGroup: "",
    jobLayer: "",
    jobDepartment: "",
    jobCoverImage: "",
    jobDescription: "",
    keyResponsibilities: "",
    requirements: "",
    distinctiveFeaturesOfTheRole: "",
    expectedSalary: "",
    workingHours: "",
    benefits: "",
    applicationProcess: "",
    equalOpportunityStatement: "",
    probationPeriod: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  };
  const [jobTitle, setJobTitle] = React.useState(initialValues.jobTitle);
  const [jobType, setJobType] = React.useState(initialValues.jobType);
  const [jobGroup, setJobGroup] = React.useState(initialValues.jobGroup);
  const [jobLayer, setJobLayer] = React.useState(initialValues.jobLayer);
  const [jobDepartment, setJobDepartment] = React.useState(
    initialValues.jobDepartment
  );
  const [jobCoverImage, setJobCoverImage] = React.useState(
    initialValues.jobCoverImage
  );
  const [jobDescription, setJobDescription] = React.useState(
    initialValues.jobDescription
  );
  const [keyResponsibilities, setKeyResponsibilities] = React.useState(
    initialValues.keyResponsibilities
  );
  const [requirements, setRequirements] = React.useState(
    initialValues.requirements
  );
  const [distinctiveFeaturesOfTheRole, setDistinctiveFeaturesOfTheRole] =
    React.useState(initialValues.distinctiveFeaturesOfTheRole);
  const [expectedSalary, setExpectedSalary] = React.useState(
    initialValues.expectedSalary
  );
  const [workingHours, setWorkingHours] = React.useState(
    initialValues.workingHours
  );
  const [benefits, setBenefits] = React.useState(initialValues.benefits);
  const [applicationProcess, setApplicationProcess] = React.useState(
    initialValues.applicationProcess
  );
  const [equalOpportunityStatement, setEqualOpportunityStatement] =
    React.useState(initialValues.equalOpportunityStatement);
  const [probationPeriod, setProbationPeriod] = React.useState(
    initialValues.probationPeriod
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = jobRecord
      ? { ...initialValues, ...jobRecord }
      : initialValues;
    setJobTitle(cleanValues.jobTitle);
    setJobType(cleanValues.jobType);
    setJobGroup(cleanValues.jobGroup);
    setJobLayer(cleanValues.jobLayer);
    setJobDepartment(cleanValues.jobDepartment);
    setJobCoverImage(cleanValues.jobCoverImage);
    setJobDescription(cleanValues.jobDescription);
    setKeyResponsibilities(cleanValues.keyResponsibilities);
    setRequirements(cleanValues.requirements);
    setDistinctiveFeaturesOfTheRole(cleanValues.distinctiveFeaturesOfTheRole);
    setExpectedSalary(cleanValues.expectedSalary);
    setWorkingHours(cleanValues.workingHours);
    setBenefits(cleanValues.benefits);
    setApplicationProcess(cleanValues.applicationProcess);
    setEqualOpportunityStatement(cleanValues.equalOpportunityStatement);
    setProbationPeriod(cleanValues.probationPeriod);
    setStatus(cleanValues.status);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [jobRecord, setJobRecord] = React.useState(jobModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Job, idProp) : jobModelProp;
      setJobRecord(record);
    };
    queryData();
  }, [idProp, jobModelProp]);
  React.useEffect(resetStateValues, [jobRecord]);
  const validations = {
    jobTitle: [{ type: "Required" }],
    jobType: [{ type: "Required" }],
    jobGroup: [{ type: "Required" }],
    jobLayer: [{ type: "Required" }],
    jobDepartment: [{ type: "Required" }],
    jobCoverImage: [{ type: "Required" }],
    jobDescription: [{ type: "Required" }],
    keyResponsibilities: [{ type: "Required" }],
    requirements: [{ type: "Required" }],
    distinctiveFeaturesOfTheRole: [{ type: "Required" }],
    expectedSalary: [{ type: "Required" }],
    workingHours: [{ type: "Required" }],
    benefits: [{ type: "Required" }],
    applicationProcess: [{ type: "Required" }],
    equalOpportunityStatement: [{ type: "Required" }],
    probationPeriod: [],
    status: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          jobTitle,
          jobType,
          jobGroup,
          jobLayer,
          jobDepartment,
          jobCoverImage,
          jobDescription,
          keyResponsibilities,
          requirements,
          distinctiveFeaturesOfTheRole,
          expectedSalary,
          workingHours,
          benefits,
          applicationProcess,
          equalOpportunityStatement,
          probationPeriod,
          status,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Job.copyOf(jobRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "JobUpdateForm")}
      {...rest}
    >
      <TextField
        label="Job title"
        isRequired={true}
        isReadOnly={false}
        value={jobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle: value,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobTitle ?? value;
          }
          if (errors.jobTitle?.hasError) {
            runValidationTasks("jobTitle", value);
          }
          setJobTitle(value);
        }}
        onBlur={() => runValidationTasks("jobTitle", jobTitle)}
        errorMessage={errors.jobTitle?.errorMessage}
        hasError={errors.jobTitle?.hasError}
        {...getOverrideProps(overrides, "jobTitle")}
      ></TextField>
      <TextField
        label="Job type"
        isRequired={true}
        isReadOnly={false}
        value={jobType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType: value,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobType ?? value;
          }
          if (errors.jobType?.hasError) {
            runValidationTasks("jobType", value);
          }
          setJobType(value);
        }}
        onBlur={() => runValidationTasks("jobType", jobType)}
        errorMessage={errors.jobType?.errorMessage}
        hasError={errors.jobType?.hasError}
        {...getOverrideProps(overrides, "jobType")}
      ></TextField>
      <TextField
        label="Job group"
        isRequired={true}
        isReadOnly={false}
        value={jobGroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup: value,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobGroup ?? value;
          }
          if (errors.jobGroup?.hasError) {
            runValidationTasks("jobGroup", value);
          }
          setJobGroup(value);
        }}
        onBlur={() => runValidationTasks("jobGroup", jobGroup)}
        errorMessage={errors.jobGroup?.errorMessage}
        hasError={errors.jobGroup?.hasError}
        {...getOverrideProps(overrides, "jobGroup")}
      ></TextField>
      <TextField
        label="Job layer"
        isRequired={true}
        isReadOnly={false}
        value={jobLayer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer: value,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobLayer ?? value;
          }
          if (errors.jobLayer?.hasError) {
            runValidationTasks("jobLayer", value);
          }
          setJobLayer(value);
        }}
        onBlur={() => runValidationTasks("jobLayer", jobLayer)}
        errorMessage={errors.jobLayer?.errorMessage}
        hasError={errors.jobLayer?.hasError}
        {...getOverrideProps(overrides, "jobLayer")}
      ></TextField>
      <TextField
        label="Job department"
        isRequired={true}
        isReadOnly={false}
        value={jobDepartment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment: value,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobDepartment ?? value;
          }
          if (errors.jobDepartment?.hasError) {
            runValidationTasks("jobDepartment", value);
          }
          setJobDepartment(value);
        }}
        onBlur={() => runValidationTasks("jobDepartment", jobDepartment)}
        errorMessage={errors.jobDepartment?.errorMessage}
        hasError={errors.jobDepartment?.hasError}
        {...getOverrideProps(overrides, "jobDepartment")}
      ></TextField>
      <TextField
        label="Job cover image"
        isRequired={true}
        isReadOnly={false}
        value={jobCoverImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage: value,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobCoverImage ?? value;
          }
          if (errors.jobCoverImage?.hasError) {
            runValidationTasks("jobCoverImage", value);
          }
          setJobCoverImage(value);
        }}
        onBlur={() => runValidationTasks("jobCoverImage", jobCoverImage)}
        errorMessage={errors.jobCoverImage?.errorMessage}
        hasError={errors.jobCoverImage?.hasError}
        {...getOverrideProps(overrides, "jobCoverImage")}
      ></TextField>
      <TextField
        label="Job description"
        isRequired={true}
        isReadOnly={false}
        value={jobDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription: value,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.jobDescription ?? value;
          }
          if (errors.jobDescription?.hasError) {
            runValidationTasks("jobDescription", value);
          }
          setJobDescription(value);
        }}
        onBlur={() => runValidationTasks("jobDescription", jobDescription)}
        errorMessage={errors.jobDescription?.errorMessage}
        hasError={errors.jobDescription?.hasError}
        {...getOverrideProps(overrides, "jobDescription")}
      ></TextField>
      <TextField
        label="Key responsibilities"
        isRequired={true}
        isReadOnly={false}
        value={keyResponsibilities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities: value,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.keyResponsibilities ?? value;
          }
          if (errors.keyResponsibilities?.hasError) {
            runValidationTasks("keyResponsibilities", value);
          }
          setKeyResponsibilities(value);
        }}
        onBlur={() =>
          runValidationTasks("keyResponsibilities", keyResponsibilities)
        }
        errorMessage={errors.keyResponsibilities?.errorMessage}
        hasError={errors.keyResponsibilities?.hasError}
        {...getOverrideProps(overrides, "keyResponsibilities")}
      ></TextField>
      <TextField
        label="Requirements"
        isRequired={true}
        isReadOnly={false}
        value={requirements}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements: value,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.requirements ?? value;
          }
          if (errors.requirements?.hasError) {
            runValidationTasks("requirements", value);
          }
          setRequirements(value);
        }}
        onBlur={() => runValidationTasks("requirements", requirements)}
        errorMessage={errors.requirements?.errorMessage}
        hasError={errors.requirements?.hasError}
        {...getOverrideProps(overrides, "requirements")}
      ></TextField>
      <TextField
        label="Distinctive features of the role"
        isRequired={true}
        isReadOnly={false}
        value={distinctiveFeaturesOfTheRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole: value,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.distinctiveFeaturesOfTheRole ?? value;
          }
          if (errors.distinctiveFeaturesOfTheRole?.hasError) {
            runValidationTasks("distinctiveFeaturesOfTheRole", value);
          }
          setDistinctiveFeaturesOfTheRole(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "distinctiveFeaturesOfTheRole",
            distinctiveFeaturesOfTheRole
          )
        }
        errorMessage={errors.distinctiveFeaturesOfTheRole?.errorMessage}
        hasError={errors.distinctiveFeaturesOfTheRole?.hasError}
        {...getOverrideProps(overrides, "distinctiveFeaturesOfTheRole")}
      ></TextField>
      <TextField
        label="Expected salary"
        isRequired={true}
        isReadOnly={false}
        value={expectedSalary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary: value,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.expectedSalary ?? value;
          }
          if (errors.expectedSalary?.hasError) {
            runValidationTasks("expectedSalary", value);
          }
          setExpectedSalary(value);
        }}
        onBlur={() => runValidationTasks("expectedSalary", expectedSalary)}
        errorMessage={errors.expectedSalary?.errorMessage}
        hasError={errors.expectedSalary?.hasError}
        {...getOverrideProps(overrides, "expectedSalary")}
      ></TextField>
      <TextField
        label="Working hours"
        isRequired={true}
        isReadOnly={false}
        value={workingHours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours: value,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.workingHours ?? value;
          }
          if (errors.workingHours?.hasError) {
            runValidationTasks("workingHours", value);
          }
          setWorkingHours(value);
        }}
        onBlur={() => runValidationTasks("workingHours", workingHours)}
        errorMessage={errors.workingHours?.errorMessage}
        hasError={errors.workingHours?.hasError}
        {...getOverrideProps(overrides, "workingHours")}
      ></TextField>
      <TextField
        label="Benefits"
        isRequired={true}
        isReadOnly={false}
        value={benefits}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits: value,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.benefits ?? value;
          }
          if (errors.benefits?.hasError) {
            runValidationTasks("benefits", value);
          }
          setBenefits(value);
        }}
        onBlur={() => runValidationTasks("benefits", benefits)}
        errorMessage={errors.benefits?.errorMessage}
        hasError={errors.benefits?.hasError}
        {...getOverrideProps(overrides, "benefits")}
      ></TextField>
      <TextField
        label="Application process"
        isRequired={true}
        isReadOnly={false}
        value={applicationProcess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess: value,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.applicationProcess ?? value;
          }
          if (errors.applicationProcess?.hasError) {
            runValidationTasks("applicationProcess", value);
          }
          setApplicationProcess(value);
        }}
        onBlur={() =>
          runValidationTasks("applicationProcess", applicationProcess)
        }
        errorMessage={errors.applicationProcess?.errorMessage}
        hasError={errors.applicationProcess?.hasError}
        {...getOverrideProps(overrides, "applicationProcess")}
      ></TextField>
      <TextField
        label="Equal opportunity statement"
        isRequired={true}
        isReadOnly={false}
        value={equalOpportunityStatement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement: value,
              probationPeriod,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.equalOpportunityStatement ?? value;
          }
          if (errors.equalOpportunityStatement?.hasError) {
            runValidationTasks("equalOpportunityStatement", value);
          }
          setEqualOpportunityStatement(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "equalOpportunityStatement",
            equalOpportunityStatement
          )
        }
        errorMessage={errors.equalOpportunityStatement?.errorMessage}
        hasError={errors.equalOpportunityStatement?.hasError}
        {...getOverrideProps(overrides, "equalOpportunityStatement")}
      ></TextField>
      <TextField
        label="Probation period"
        isRequired={false}
        isReadOnly={false}
        value={probationPeriod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod: value,
              status,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.probationPeriod ?? value;
          }
          if (errors.probationPeriod?.hasError) {
            runValidationTasks("probationPeriod", value);
          }
          setProbationPeriod(value);
        }}
        onBlur={() => runValidationTasks("probationPeriod", probationPeriod)}
        errorMessage={errors.probationPeriod?.errorMessage}
        hasError={errors.probationPeriod?.hasError}
        {...getOverrideProps(overrides, "probationPeriod")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              jobTitle,
              jobType,
              jobGroup,
              jobLayer,
              jobDepartment,
              jobCoverImage,
              jobDescription,
              keyResponsibilities,
              requirements,
              distinctiveFeaturesOfTheRole,
              expectedSalary,
              workingHours,
              benefits,
              applicationProcess,
              equalOpportunityStatement,
              probationPeriod,
              status,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || jobModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || jobModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
