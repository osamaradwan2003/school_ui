import {FormSchema} from "../@types";

export const EmployeeSchema: FormSchema[] = [
  {
    name: "ep_name",
    type: "name",
  },
  {
    name: "ep_email",
    type: "email",
  },
  {
    name: "ep_phone",
    type: "phone",
  },
  {
    name: "ep_address",
    type: "address",
  },
  {
    name: "salary",
    type: "number",
  }
];