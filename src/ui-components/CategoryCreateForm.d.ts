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
export declare type CategoryCreateFormInputValues = {
    categoryName?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CategoryCreateFormValidationValues = {
    categoryName?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoryCreateFormOverridesProps = {
    CategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    categoryName?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoryCreateFormInputValues) => CategoryCreateFormInputValues;
    onSuccess?: (fields: CategoryCreateFormInputValues) => void;
    onError?: (fields: CategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoryCreateFormInputValues) => CategoryCreateFormInputValues;
    onValidate?: CategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoryCreateForm(props: CategoryCreateFormProps): React.ReactElement;
