/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Application } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ApplicationUpdateFormInputValues = {
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
export declare type ApplicationUpdateFormValidationValues = {
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
export declare type ApplicationUpdateFormOverridesProps = {
    ApplicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ApplicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    application?: Application;
    onSubmit?: (fields: ApplicationUpdateFormInputValues) => ApplicationUpdateFormInputValues;
    onSuccess?: (fields: ApplicationUpdateFormInputValues) => void;
    onError?: (fields: ApplicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationUpdateFormInputValues) => ApplicationUpdateFormInputValues;
    onValidate?: ApplicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationUpdateForm(props: ApplicationUpdateFormProps): React.ReactElement;
