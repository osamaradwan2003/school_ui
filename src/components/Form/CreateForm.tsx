import {FieldSchema} from "../../@types";
import { Form, FormProps} from "antd";
import CreateField from "./CreateField.tsx";


interface Props extends FormProps{
    formSchema: FieldSchema[],
    children?: JSX.Element
}

export default function CreateForm({ formSchema,children,...props}: Props){
    return (
        <Form {...props}>
            {formSchema.map(field=>{
                return (
                    <CreateField  key={window.crypto.randomUUID()} {...field}></CreateField>
                )
            })}
            {children}
        </Form>
    )
}