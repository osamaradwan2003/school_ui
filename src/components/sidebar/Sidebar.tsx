import {Divider, Layout, Menu, theme} from "antd";
import {useSelector} from "react-redux";
import {CollapseSelector,thmeSelector} from "../../store/store";
import {sidebarLinks} from "../../routes/sidebarLinks";
import SidebarHeader from "./SideHeader.tsx";
import {SidebarContainer}  from "./SidebarStyle.ts"
export default function Sidebar()  {
	const isCollapsed = useSelector(CollapseSelector),
		isDark = useSelector(thmeSelector);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout.Sider  style={{...SidebarContainer, backgroundColor:colorBgContainer}}  width={240} collapsed={isCollapsed}>
			<SidebarHeader className="mb-1" />
			<Divider />
			<Menu
				items={sidebarLinks}
				style={{ backgroundColor:colorBgContainer}}
				theme={isDark ? "dark" : "light"}
			>
			</Menu>
		</Layout.Sider>
	)
}