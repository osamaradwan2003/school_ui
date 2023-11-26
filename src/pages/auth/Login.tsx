import { Card, Col, Row, Space, Typography } from "antd";
import CreateForm from "../../components/Form/CreateForm";
import LoginForm from "../../formsSchema/LoginSchema";
export function Login() {
	return (
		<>
			<Space style={{display: 'flex', justifyContent:'center', marginTop:14}}>
				<Typography.Title>Welcome back</Typography.Title>
			</Space>
			<Row justify='center'>
				<Col span={6} sm={12}>
					<Card bordered title='Please Login First'>
						<CreateForm formSchema={LoginForm}/>
					</Card>
				</Col>
			</Row>
		</>
	)
}