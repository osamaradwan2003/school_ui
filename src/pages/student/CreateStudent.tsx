import CreateForm from "../../components/Form/CreateForm.tsx";
import { Typography} from "antd";
import {StudentSchema} from "../../../formsSchema/studentSchema.tsx";



export function CreateStudent() {
	return (
		<>
			<Typography.Title className="text-center my-2" >Create Student</Typography.Title>
			<CreateForm
				onFinish={(v)=>{
					console.log(v)
				}}
				initialValues={{payment_type: "ID"}}
				className="grid grid-cols-2 gap-4"
				formSchema={StudentSchema}/>
		</>
	)
}