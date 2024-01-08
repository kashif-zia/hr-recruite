/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CompanyProfile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CompanyProfileUpdateForm(props) {
  const {
    id: idProp,
    companyProfile: companyProfileModelProp,
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
    established: "",
    capital: "",
    address: "",
    noOfEmployees: "",
    companyOverview: "",
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [established, setEstablished] = React.useState(
    initialValues.established
  );
  const [capital, setCapital] = React.useState(initialValues.capital);
  const [address, setAddress] = React.useState(initialValues.address);
  const [noOfEmployees, setNoOfEmployees] = React.useState(
    initialValues.noOfEmployees
  );
  const [companyOverview, setCompanyOverview] = React.useState(
    initialValues.companyOverview
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyProfileRecord
      ? { ...initialValues, ...companyProfileRecord }
      : initialValues;
    setName(cleanValues.name);
    setEstablished(cleanValues.established);
    setCapital(cleanValues.capital);
    setAddress(cleanValues.address);
    setNoOfEmployees(cleanValues.noOfEmployees);
    setCompanyOverview(cleanValues.companyOverview);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [companyProfileRecord, setCompanyProfileRecord] = React.useState(
    companyProfileModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CompanyProfile, idProp)
        : companyProfileModelProp;
      setCompanyProfileRecord(record);
    };
    queryData();
  }, [idProp, companyProfileModelProp]);
  React.useEffect(resetStateValues, [companyProfileRecord]);
  const validations = {
    name: [{ type: "Required" }],
    established: [],
    capital: [],
    address: [{ type: "Required" }],
    noOfEmployees: [{ type: "Required" }],
    companyOverview: [{ type: "Required" }],
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
          established,
          capital,
          address,
          noOfEmployees,
          companyOverview,
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
            CompanyProfile.copyOf(companyProfileRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CompanyProfileUpdateForm")}
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
              established,
              capital,
              address,
              noOfEmployees,
              companyOverview,
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
        label="Established"
        isRequired={false}
        isReadOnly={false}
        value={established}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              established: value,
              capital,
              address,
              noOfEmployees,
              companyOverview,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.established ?? value;
          }
          if (errors.established?.hasError) {
            runValidationTasks("established", value);
          }
          setEstablished(value);
        }}
        onBlur={() => runValidationTasks("established", established)}
        errorMessage={errors.established?.errorMessage}
        hasError={errors.established?.hasError}
        {...getOverrideProps(overrides, "established")}
      ></TextField>
      <TextField
        label="Capital"
        isRequired={false}
        isReadOnly={false}
        value={capital}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              established,
              capital: value,
              address,
              noOfEmployees,
              companyOverview,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.capital ?? value;
          }
          if (errors.capital?.hasError) {
            runValidationTasks("capital", value);
          }
          setCapital(value);
        }}
        onBlur={() => runValidationTasks("capital", capital)}
        errorMessage={errors.capital?.errorMessage}
        hasError={errors.capital?.hasError}
        {...getOverrideProps(overrides, "capital")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              established,
              capital,
              address: value,
              noOfEmployees,
              companyOverview,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="No of employees"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={noOfEmployees}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              established,
              capital,
              address,
              noOfEmployees: value,
              companyOverview,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.noOfEmployees ?? value;
          }
          if (errors.noOfEmployees?.hasError) {
            runValidationTasks("noOfEmployees", value);
          }
          setNoOfEmployees(value);
        }}
        onBlur={() => runValidationTasks("noOfEmployees", noOfEmployees)}
        errorMessage={errors.noOfEmployees?.errorMessage}
        hasError={errors.noOfEmployees?.hasError}
        {...getOverrideProps(overrides, "noOfEmployees")}
      ></TextField>
      <TextField
        label="Company overview"
        isRequired={true}
        isReadOnly={false}
        value={companyOverview}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              established,
              capital,
              address,
              noOfEmployees,
              companyOverview: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.companyOverview ?? value;
          }
          if (errors.companyOverview?.hasError) {
            runValidationTasks("companyOverview", value);
          }
          setCompanyOverview(value);
        }}
        onBlur={() => runValidationTasks("companyOverview", companyOverview)}
        errorMessage={errors.companyOverview?.errorMessage}
        hasError={errors.companyOverview?.hasError}
        {...getOverrideProps(overrides, "companyOverview")}
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
              established,
              capital,
              address,
              noOfEmployees,
              companyOverview,
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
              established,
              capital,
              address,
              noOfEmployees,
              companyOverview,
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
          isDisabled={!(idProp || companyProfileModelProp)}
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
              !(idProp || companyProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
