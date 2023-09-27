import  {Typography} from "antd";
import CreateForm from "../../components/Form/CreateForm.tsx";
import {ParentFormSchema} from "../../formsSchema/parentSchema.tsx";

export  default  function AddParent() {
	return (
		<>
			<Typography.Title>Add Parent</Typography.Title>
			<CreateForm formSchema={ParentFormSchema}/>
		</>
	)
}