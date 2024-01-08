/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Job } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobUpdateFormInputValues = {
    jobTitle?: string;
    jobType?: string;
    jobGroup?: string;
    jobLayer?: string;
    jobDepartment?: string;
    jobCoverImage?: string;
    jobDescription?: string;
    keyResponsibilities?: string;
    requirements?: string;
    distinctiveFeaturesOfTheRole?: string;
    expectedSalary?: string;
    workingHours?: string;
    benefits?: string;
    applicationProcess?: string;
    equalOpportunityStatement?: string;
    probationPeriod?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type JobUpdateFormValidationValues = {
    jobTitle?: ValidationFunction<string>;
    jobType?: ValidationFunction<string>;
    jobGroup?: ValidationFunction<string>;
    jobLayer?: ValidationFunction<string>;
    jobDepartment?: ValidationFunction<string>;
    jobCoverImage?: ValidationFunction<string>;
    jobDescription?: ValidationFunction<string>;
    keyResponsibilities?: ValidationFunction<string>;
    requirements?: ValidationFunction<string>;
    distinctiveFeaturesOfTheRole?: ValidationFunction<string>;
    expectedSalary?: ValidationFunction<string>;
    workingHours?: ValidationFunction<string>;
    benefits?: ValidationFunction<string>;
    applicationProcess?: ValidationFunction<string>;
    equalOpportunityStatement?: ValidationFunction<string>;
    probationPeriod?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobUpdateFormOverridesProps = {
    JobUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    jobType?: PrimitiveOverrideProps<TextFieldProps>;
    jobGroup?: PrimitiveOverrideProps<TextFieldProps>;
    jobLayer?: PrimitiveOverrideProps<TextFieldProps>;
    jobDepartment?: PrimitiveOverrideProps<TextFieldProps>;
    jobCoverImage?: PrimitiveOverrideProps<TextFieldProps>;
    jobDescription?: PrimitiveOverrideProps<TextFieldProps>;
    keyResponsibilities?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
    distinctiveFeaturesOfTheRole?: PrimitiveOverrideProps<TextFieldProps>;
    expectedSalary?: PrimitiveOverrideProps<TextFieldProps>;
    workingHours?: PrimitiveOverrideProps<TextFieldProps>;
    benefits?: PrimitiveOverrideProps<TextFieldProps>;
    applicationProcess?: PrimitiveOverrideProps<TextFieldProps>;
    equalOpportunityStatement?: PrimitiveOverrideProps<TextFieldProps>;
    probationPeriod?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    job?: Job;
    onSubmit?: (fields: JobUpdateFormInputValues) => JobUpdateFormInputValues;
    onSuccess?: (fields: JobUpdateFormInputValues) => void;
    onError?: (fields: JobUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobUpdateFormInputValues) => JobUpdateFormInputValues;
    onValidate?: JobUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobUpdateForm(props: JobUpdateFormProps): React.ReactElement;
