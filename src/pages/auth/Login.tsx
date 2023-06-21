import * as yup from  "yup";
import {Formik, Form} from "formik";
import {FormikInput} from "../../components/utils/FormikInput.tsx";
import {Button, Typography, Form as FT, theme} from "antd";
export function Login() {
	const loginSchema = yup.object().shape({
		username: yup.string()
			.required("Please Enter user name")
			.min(4, "invalid user name")
			.max(50, "username is to long"),
		password: yup.string().required("Please Enter Password").min(8, "invalid password"),
		remember: yup.boolean(),
	}),
		tokens= theme.useToken();
	const initialValues  = {
		username: "",
		password: "",
		remember: false,
	}

	const onSubmit= (value: typeof initialValues)=>{
		console.log("called", value);
	}

	return (

			<div className=" flex  p-2  justify-center items-center flex-col gap-10">
				<Typography.Title>Please Login</Typography.Title>
				<div
					className="w-1/2  p-2  px-4 pb-4"
				>
					<Formik
						initialValues={initialValues}
						validationSchema={loginSchema}
						onSubmit={onSubmit}
					>
						<Form className="">
							<FormikInput
								name="username" placeholder="Enter username" />
							<FormikInput
								type="password"
								name="password"
								placeholder="Enter password"
							/>
							<FormikInput
								FormItemProps={{

									label: "Remember"
								}}
								style={{
									outline: "none",
									border: "none",
									boxShadow: "none",
									width: "max-content"
								}}
								name='remember' type="checkbox"></FormikInput>
							<FT.Item className="flex w-full justify-end my-4">
								<Button style={{
									backgroundColor: tokens.token.colorPrimaryBg,
								}}  htmlType="submit">
									Submit
								</Button>
							</FT.Item>
						</Form>
					</Formik>
				</div>
			</div>

	)
}