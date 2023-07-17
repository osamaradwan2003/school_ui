import {Schema} from "yup";
import {AutoCompleteProps, FormItemProps, InputProps, UploadProps, SelectProps, ButtonProps} from "antd";

declare type FieldSchema = {
    name: string;
    type: string | "autoComplete" | "upload";
    rules?: Schema,
    fieldProps?: FormItemProps;
    inputProps?: InputProps;
    uploadProp?: UploadProps;
    autoCompleteProps?: AutoCompleteProps;
    selectProps?: SelectProps;
    buttonProps? : ButtonProps
}