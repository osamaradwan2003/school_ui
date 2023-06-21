import {HTMLProps} from "react";
import {Avatar, Button, Dropdown, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector, themeSelector} from "../../store/store.ts";
import {toggle} from "../../store/themeSlice/themeSlice.ts";
import {FaSun, FaRegMoon} from "react-icons/fa";
import items from "../../routes/ProfileLinks.tsx";



export const HeaderRight = (props:HTMLProps<HTMLDivElement>) => {
	const isDark = useSelector(themeSelector),
				dispatch = useDispatch(),
				isLogin = useSelector(isAuthSelector);
	return (
		<div {...props}>
			<Button
				onClick = {()=>dispatch(toggle())}
				icon = {!isDark ? <FaSun/>: <FaRegMoon/> }
				className="border-none text-xl"
				title={isDark ? "Dark mod" : "Light mod"}
			/>
			{isLogin && <Dropdown overlayClassName="w-40" menu={{items}} trigger={['click']} arrow>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						<Avatar>OS</Avatar>
					</Space>
				</a>
			</Dropdown>}
		</div>
	)
}