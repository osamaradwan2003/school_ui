import {ButtonStyle, IconStyle} from "./styles.ts";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {toggleSidebar} from "../../store/appSlice/appSlice.ts";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CollapseSelector} from "../../store/store.ts";
import {HTMLProps} from "react";
export const HeaderLeft = (props: HTMLProps<HTMLDivElement>) => {
	const isOpen = useSelector(CollapseSelector);
	const dispatch = useDispatch();
	return (
		<div {...props}>
			<Button
				style={ButtonStyle}

				icon={
					isOpen ? <MenuUnfoldOutlined style={IconStyle}/> : <MenuFoldOutlined style={IconStyle}/>
				}
				onClick={()=>dispatch(toggleSidebar())}
			></Button>
		</div>
	)
}