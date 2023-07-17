import {FieldSchema} from "../../@types";
import {AutoComplete, Button, Form, Input, Select, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {yupValidator} from "../../utils/helpers.ts";

export  default function CreateField(field: FieldSchema){
	if(field.type == "autoComplete"){
		return (
			<Form.Item  name={field.name} {...field.fieldProps}  {...(field.rules && {rules: [yupValidator(field.rules)]})} >
				<AutoComplete {...field.autoCompleteProps} >
					<Input {...field.inputProps}></Input>
				</AutoComplete>
			</Form.Item>
		)
	}else if(field.type == "upload"){
		return (
			<Form.Item  name={field.name} {...field.fieldProps}  {...(field.rules && {rules: [yupValidator(field.rules)]})} >
				<Upload  {...field.uploadProp}>
					<Button icon={<UploadOutlined />}>{field?.inputProps?.placeholder}</Button>
				</Upload>
			</Form.Item>
		)
	}else if(field.type == "select"){
		return (
			<Form.Item  name={field.name} {...field.fieldProps}  {...(field.rules && {rules: [yupValidator(field.rules)]})} >
				<Select
					{...field.selectProps}

				/>
			</Form.Item>
		);
	}else if(field.type == "button"){
		return (
			<Form.Item>
				<Button {...field.buttonProps}/>
			</Form.Item>
		)
	}
	return (
		<Form.Item  name={field.name} {...field.fieldProps}  {...(field.rules && {rules: [yupValidator(field.rules)]})} >
			<Input type={field.type}  {...field.inputProps}></Input>
		</Form.Item>
	)
}