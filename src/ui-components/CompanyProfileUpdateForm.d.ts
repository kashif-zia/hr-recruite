/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CompanyProfile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyProfileUpdateFormInputValues = {
    name?: string;
    established?: string;
    capital?: string;
    address?: string;
    noOfEmployees?: number;
    companyOverview?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CompanyProfileUpdateFormValidationValues = {
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
export declare type CompanyProfileUpdateFormOverridesProps = {
    CompanyProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    established?: PrimitiveOverrideProps<TextFieldProps>;
    capital?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    noOfEmployees?: PrimitiveOverrideProps<TextFieldProps>;
    companyOverview?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companyProfile?: CompanyProfile;
    onSubmit?: (fields: CompanyProfileUpdateFormInputValues) => CompanyProfileUpdateFormInputValues;
    onSuccess?: (fields: CompanyProfileUpdateFormInputValues) => void;
    onError?: (fields: CompanyProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyProfileUpdateFormInputValues) => CompanyProfileUpdateFormInputValues;
    onValidate?: CompanyProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyProfileUpdateForm(props: CompanyProfileUpdateFormProps): React.ReactElement;
