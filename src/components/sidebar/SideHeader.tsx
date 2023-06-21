import { Col, Image, Row, Typography} from "antd";
import {SidebarHeaderStyle, SidebarOpenLogoStyle, SidebarCloseLogoStyle} from "./SidebarStyle.ts";
import {useSelector} from "react-redux";
import {CollapseSelector, themeSelector} from "../../store/store.ts";
import {HTMLProps} from "react";
// declare type SidebarHeaderProps = {
//     isCollapsed?: boolean
// }

export  default function SidebarHeader(props: HTMLProps<HTMLDivElement>): JSX.Element{
         const isCollapsed = useSelector(CollapseSelector),
             isDark = useSelector(themeSelector),
             ImageLogo = isDark ? "./assets/dark_logo.png" : "./assets/light_logo.png";
        return (
            <div {...props}>
                <Row justify={"center"} style={SidebarHeaderStyle}>
                    <Col className="flex justify-center" span={24}>
                        <Image style={!isCollapsed ? SidebarOpenLogoStyle: SidebarCloseLogoStyle}   preview={false} src={ImageLogo}></Image>
                    </Col>
                    {!isCollapsed && <Col span={24}>
                        <Typography.Title level={3} className="text-center">IBN HAROON</Typography.Title>
                    </Col>}
                </Row>
            </div>
        )
}