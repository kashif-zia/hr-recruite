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
export declare type CompanyProfileCreateFormInputValues = {
    name?: string;
    established?: string;
    capital?: string;
    address?: string;
    noOfEmployees?: number;
    companyOverview?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CompanyProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    established?: ValidationFunction<string>;
    capital?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    noOfEmployees?: ValidationFunction<number>;
    companyOverview?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyProfileCreateFormOverridesProps = {
    CompanyProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    established?: PrimitiveOverrideProps<TextFieldProps>;
    capital?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    noOfEmployees?: PrimitiveOverrideProps<TextFieldProps>;
    companyOverview?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyProfileCreateFormInputValues) => CompanyProfileCreateFormInputValues;
    onSuccess?: (fields: CompanyProfileCreateFormInputValues) => void;
    onError?: (fields: CompanyProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyProfileCreateFormInputValues) => CompanyProfileCreateFormInputValues;
    onValidate?: CompanyProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyProfileCreateForm(props: CompanyProfileCreateFormProps): React.ReactElement;
