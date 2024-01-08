/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ApplicationCreateFormInputValues = {
    name?: string;
    jobTitle?: string;
    currentCompany?: string;
    education?: string;
    age?: number;
    phone_number?: string;
    experience?: string;
    linkedin?: string;
    portfolio?: string[];
    email?: string;
    message?: string;
    resume?: string;
    applicationStatus?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ApplicationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    jobTitle?: ValidationFunction<string>;
    currentCompany?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    phone_number?: ValidationFunction<string>;
    experience?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    portfolio?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
    applicationStatus?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationCreateFormOverridesProps = {
    ApplicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    currentCompany?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin?: PrimitiveOverrideProps<TextFieldProps>;
    portfolio?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
    applicationStatus?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationCreateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApplicationCreateFormInputValues) => ApplicationCreateFormInputValues;
    onSuccess?: (fields: ApplicationCreateFormInputValues) => void;
    onError?: (fields: ApplicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationCreateFormInputValues) => ApplicationCreateFormInputValues;
    onValidate?: ApplicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationCreateForm(props: ApplicationCreateFormProps): React.ReactElement;
