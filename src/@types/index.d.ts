import { Schema } from "yup";
import {
  AutoCompleteProps,
  FormItemProps,
  InputProps,
  UploadProps,
  SelectProps,
  ButtonProps,
} from "antd";
import { NonIndexRouteObject, RouteObject } from "react-router-dom";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

/*
 *FormSchema Data type for Create Form Component
 *
 *
 */
declare type FormSchema = {
  name: string;
  type:
    | string
    | "autoComplete"
    | "upload"
    | "button"
    | "field"
    | "select"
    | "field"
    | "input";
  rules?: Schema;
  fieldProps?: FormItemProps;
  inputProps?: InputProps;
  uploadProp?: UploadProps;
  autoCompleteProps?: AutoCompleteProps;
  selectProps?: SelectProps;
  buttonProps?: ButtonProps;
};

interface HyperRoute<
  Parm extends MenuItemType & RouteObject = MenuItemType & RouteObject
> extends NonIndexRouteObject,
    MenuItemType {
  children?: Parm[];
}
