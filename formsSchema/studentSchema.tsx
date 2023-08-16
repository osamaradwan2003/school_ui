import {FormSchema} from "../src/@types";
import * as yup from "yup";
import {InputButton} from "../src/components/utils/InputButton";
import {IoAdd} from "react-icons/io5";
import FormModal, {modalActions} from "../src/components/modals/formModals/FormModal.tsx";
import {ParentSchema} from "./parentSchema.tsx";
import React from "react";

function parentHandel(dispatch: React.Dispatch<modalActions>) {
  dispatch('loading');
  setTimeout(()=>{
      dispatch('loaded')
      dispatch('close')
  }, 3000)
}

export const StudentSchema: FormSchema[] = [
  {
    type: "text",
    name: "st_name",
    rules: yup.string()
      .required("Please enter ST. name")
      .min(4, "ST. name is Too Short")
      .max(50, "St. name is To long"),
    inputProps: {
      placeholder: "ST. name"
    }
  },
  {
    type: "autoComplete",
    name: "st_parent",
    rules: yup.string().required("Please add Valid Parent"),
    fieldProps: {
      children:  (
          <FormModal handelFunc={parentHandel} button={<InputButton icon={<IoAdd/>}/>} formSchema={ParentSchema}></FormModal>
      ),
    },
    inputProps:{},

autoCompleteProps: {
  placeholder: "ST. Parent",
    options: [
    {
      label: "Osama Amin",
      value: "ID",

    }
  ]
}
},
  {
    type: "email",
      name:"st_email",
    rules: yup.string().email("Please enter valid email"),
    inputProps: {placeholder: "ST. Email"}
  },
  {
    type: "tel",
      name: "st_phone",
    inputProps: {placeholder: "St. Phone"}
  },
  {
    type: "autoComplete",
      name: "payment_type",
    inputProps:{
    suffix: (
      <InputButton icon={<IoAdd/>} />
  ),
  },
    autoCompleteProps: {placeholder:  "Payment",options: [{label: "Free", value: "ID"}]}
  },
  {
    type:"autoComplete",
      name: "st_group",
    inputProps:{
    suffix: (
      <InputButton icon={<IoAdd/>}/>
  ),
  },
    autoCompleteProps: {placeholder: "St. Group Or teacher",options: [{label: "Yousef", value: "ID"}]}
  },
  {
    type: "address",
      name: "st_address",
    inputProps: {placeholder: "St. address"}
  },
  {
    type: "upload",
      name: "st_id_doc",
    inputProps: {placeholder: "National ID Document"},
    uploadProp: {accept:"Image/*", maxCount:2, multiple: true}
  },
  {
    type: "button",
    name: "submit",
    fieldProps: {className: "flex justify-end"},
    buttonProps: {
      children: "Create Student",
        htmlType: "submit",
    }
  }
]