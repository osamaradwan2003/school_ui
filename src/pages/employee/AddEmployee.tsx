import { Typography } from "antd";
import CreateForm from "../../components/Form/CreateForm";
import { EmployeeSchema } from "../../formsSchema/EmployeeSchema";


export default function AddEmployee(){
  return (
    <>
      <Typography.Title className="text-center">Add Employee</Typography.Title>
      <CreateForm className="grid grid-cols-2 gap-4" formSchema={EmployeeSchema}></CreateForm>
    </>
  )
}