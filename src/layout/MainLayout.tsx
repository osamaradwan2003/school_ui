import {ConfigProvider, theme, Layout, App} from "antd";
import {useSelector} from "react-redux";
import {State} from "../store/store.ts";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import Header from "../components/header/Header.tsx";

export const MainLayout = () => {
	const isDark = useSelector((state:State)=>state.theme.isDark);
	return (
		<ConfigProvider
			theme={
				{
					algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
				}
			}
		>

			<App >
				<Layout style={{minHeight: "100vh"}}>
					<Sidebar />
					<Layout>
						<Header />
						<Layout.Content >
							<div className="container m-auto p-2">
								Content
							</div>
						</Layout.Content>
						{/*<Layout.Footer >Footer</Layout.Footer>*/}
					</Layout>
				</Layout>
			</App>
		</ConfigProvider>
	)
}