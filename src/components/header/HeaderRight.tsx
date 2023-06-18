import {HTMLProps} from "react";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {thmeSelector} from "../../store/store.ts";
import {toggle} from "../../store/themeSlice/themeSlice.ts";
export const HeaderRight = (props:HTMLProps<HTMLDivElement>) => {
	const isDark = useSelector(thmeSelector),
				dispatch = useDispatch();
	return (
		<div {...props}>
			<Button
				onClick = {()=>dispatch(toggle())}
			>
				{isDark ? "dark" : "light"}
			</Button>
		</div>
	)
}