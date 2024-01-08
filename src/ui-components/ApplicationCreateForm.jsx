/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Application } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ApplicationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    jobTitle: "",
    currentCompany: "",
    education: "",
    age: "",
    phone_number: "",
    experience: "",
    linkedin: "",
    portfolio: [],
    email: "",
    message: "",
    resume: "",
    applicationStatus: "",
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [jobTitle, setJobTitle] = React.useState(initialValues.jobTitle);
  const [currentCompany, setCurrentCompany] = React.useState(
    initialValues.currentCompany
  );
  const [education, setEducation] = React.useState(initialValues.education);
  const [age, setAge] = React.useState(initialValues.age);
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [experience, setExperience] = React.useState(initialValues.experience);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [portfolio, setPortfolio] = React.useState(initialValues.portfolio);
  const [email, setEmail] = React.useState(initialValues.email);
  const [message, setMessage] = React.useState(initialValues.message);
  const [resume, setResume] = React.useState(initialValues.resume);
  const [applicationStatus, setApplicationStatus] = React.useState(
    initialValues.applicationStatus
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setJobTitle(initialValues.jobTitle);
    setCurrentCompany(initialValues.currentCompany);
    setEducation(initialValues.education);
    setAge(initialValues.age);
    setPhone_number(initialValues.phone_number);
    setExperience(initialValues.experience);
    setLinkedin(initialValues.linkedin);
    setPortfolio(initialValues.portfolio);
    setCurrentPortfolioValue("");
    setEmail(initialValues.email);
    setMessage(initialValues.message);
    setResume(initialValues.resume);
    setApplicationStatus(initialValues.applicationStatus);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const [currentPortfolioValue, setCurrentPortfolioValue] = React.useState("");
  const portfolioRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    jobTitle: [{ type: "Required" }],
    currentCompany: [{ type: "Required" }],
    education: [{ type: "Required" }],
    age: [{ type: "Required" }],
    phone_number: [{ type: "Required" }],
    experience: [{ type: "Required" }],
    linkedin: [{ type: "Required" }],
    portfolio: [],
    email: [{ type: "Required" }],
    message: [],
    resume: [{ type: "Required" }],
    applicationStatus: [],
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
          name,
          jobTitle,
          currentCompany,
          education,
          age,
          phone_number,
          experience,
          linkedin,
          portfolio,
          email,
          message,
          resume,
          applicationStatus,
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
          await DataStore.save(new Application(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ApplicationCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Job title"
        isRequired={true}
        isReadOnly={false}
        value={jobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle: value,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
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
        label="Current company"
        isRequired={true}
        isReadOnly={false}
        value={currentCompany}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany: value,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.currentCompany ?? value;
          }
          if (errors.currentCompany?.hasError) {
            runValidationTasks("currentCompany", value);
          }
          setCurrentCompany(value);
        }}
        onBlur={() => runValidationTasks("currentCompany", currentCompany)}
        errorMessage={errors.currentCompany?.errorMessage}
        hasError={errors.currentCompany?.hasError}
        {...getOverrideProps(overrides, "currentCompany")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={true}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education: value,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age: value,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        value={phone_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number: value,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.phone_number ?? value;
          }
          if (errors.phone_number?.hasError) {
            runValidationTasks("phone_number", value);
          }
          setPhone_number(value);
        }}
        onBlur={() => runValidationTasks("phone_number", phone_number)}
        errorMessage={errors.phone_number?.errorMessage}
        hasError={errors.phone_number?.hasError}
        {...getOverrideProps(overrides, "phone_number")}
      ></TextField>
      <TextField
        label="Experience"
        isRequired={true}
        isReadOnly={false}
        value={experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience: value,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.experience ?? value;
          }
          if (errors.experience?.hasError) {
            runValidationTasks("experience", value);
          }
          setExperience(value);
        }}
        onBlur={() => runValidationTasks("experience", experience)}
        errorMessage={errors.experience?.errorMessage}
        hasError={errors.experience?.hasError}
        {...getOverrideProps(overrides, "experience")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={true}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin: value,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio: values,
              email,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.portfolio ?? values;
          }
          setPortfolio(values);
          setCurrentPortfolioValue("");
        }}
        currentFieldValue={currentPortfolioValue}
        label={"Portfolio"}
        items={portfolio}
        hasError={errors?.portfolio?.hasError}
        errorMessage={errors?.portfolio?.errorMessage}
        setFieldValue={setCurrentPortfolioValue}
        inputFieldRef={portfolioRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Portfolio"
          isRequired={false}
          isReadOnly={false}
          value={currentPortfolioValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.portfolio?.hasError) {
              runValidationTasks("portfolio", value);
            }
            setCurrentPortfolioValue(value);
          }}
          onBlur={() => runValidationTasks("portfolio", currentPortfolioValue)}
          errorMessage={errors.portfolio?.errorMessage}
          hasError={errors.portfolio?.hasError}
          ref={portfolioRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "portfolio")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email: value,
              message,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message: value,
              resume,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Resume"
        isRequired={true}
        isReadOnly={false}
        value={resume}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume: value,
              applicationStatus,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.resume ?? value;
          }
          if (errors.resume?.hasError) {
            runValidationTasks("resume", value);
          }
          setResume(value);
        }}
        onBlur={() => runValidationTasks("resume", resume)}
        errorMessage={errors.resume?.errorMessage}
        hasError={errors.resume?.hasError}
        {...getOverrideProps(overrides, "resume")}
      ></TextField>
      <TextField
        label="Application status"
        isRequired={false}
        isReadOnly={false}
        value={applicationStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.applicationStatus ?? value;
          }
          if (errors.applicationStatus?.hasError) {
            runValidationTasks("applicationStatus", value);
          }
          setApplicationStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("applicationStatus", applicationStatus)
        }
        errorMessage={errors.applicationStatus?.errorMessage}
        hasError={errors.applicationStatus?.hasError}
        {...getOverrideProps(overrides, "applicationStatus")}
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
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
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
              name,
              jobTitle,
              currentCompany,
              education,
              age,
              phone_number,
              experience,
              linkedin,
              portfolio,
              email,
              message,
              resume,
              applicationStatus,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
