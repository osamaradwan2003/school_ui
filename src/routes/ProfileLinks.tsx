import {MenuProps} from "antd";
import {DropLink} from "../components/utils/DropLink.tsx";
import {UserOutlined} from "@ant-design/icons/lib/icons";
import {FcSettings} from "react-icons/fc";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
           <DropLink to="/profile">
               <UserOutlined/>
               Profile
           </DropLink>
        )
    },
    {
        key: '2',
        label: (
            <DropLink to="/prfile/setting">
                <FcSettings/>
                Setting
            </DropLink>
        )
    },
];


export default items;