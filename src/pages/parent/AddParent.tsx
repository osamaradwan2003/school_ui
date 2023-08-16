import  {Typography} from "antd";
import CreateForm from "../../components/Form/CreateForm.tsx";
import {ParentSchema} from "../../../formsSchema/parentSchema.tsx";

export  default  function AddParent() {
	return (
		<>
			<Typography.Title>Add Parent</Typography.Title>
			<CreateForm formSchema={ParentSchema}/>
		</>
	)
}