import React from "react";
import {
    GroupOutlined,
    ScheduleFilled,
    HomeOutlined,
    UserOutlined,
    UserAddOutlined,
    EditOutlined,
    FileFilled,
    FileExclamationFilled,
    UsergroupAddOutlined,
    FileExclamationOutlined,
    ScheduleOutlined,
    SettingFilled,
    ProfileOutlined
} from "@ant-design/icons/lib/icons";
import {FaCriticalRole, FaTable, FaUsers} from "react-icons/fa";
import {AiOutlineCalendar, AiOutlineUsergroupAdd} from "react-icons/ai";
import {RiParentFill} from "react-icons/ri";
import {BsFillShieldFill} from "react-icons/bs";
import {FcBusiness} from "react-icons/fc"
import {Link} from "react-router-dom";


const sidebarLinks = [
    {
        key: 1,
        label: "Home",
        icon: React.createElement(HomeOutlined),
    },
    {
        key: 2,
        label: "Student",
        icon: React.createElement(UserOutlined),
        title: "Student",
        children: [
            {
                key: 3,
                label: (
                  <Link to="/students/add">Add</Link>
                ),
                icon: React.createElement(UserAddOutlined)
            },
            {
                key: 29,
                label: "Adherence",
                icon: React.createElement(AiOutlineCalendar)
            },
            {
                key: 332222,
                label: "Daily Log",
                icon: React.createElement(ProfileOutlined)
            },
            {
                key: 4,
                label: "Edit",
                icon: React.createElement(EditOutlined)
            },
            {
                key: 5,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 732673,
        label: "Parents",
        icon: React.createElement(RiParentFill),
        title: "Parents",
        children: [
            {
                key: 863664,
                label: (
                    <Link to="/parents/add">Add</Link>
                ),
                icon: React.createElement(UserAddOutlined)
            },
            {
                key: 6646,
                label: (
                    <Link to="/parents/all">All</Link>
                ),
                icon: React.createElement(UserAddOutlined)
            },

        ]
    },
    {
        key: 6,
        label: "Employees",
        icon: React.createElement(FcBusiness),
        title: "Employees",
        children: [
            {
                key: 7,
                label: <Link to="/emp">Add</Link>,
                icon: React.createElement(UserAddOutlined)
            },
            {
                key: 24,
                label: "Adherence",
                icon: React.createElement(AiOutlineCalendar)
            },

            {
                key: 8,
                label: "Edit",
                icon: React.createElement(EditOutlined)
            },
            {
                key: 9,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 10,
        label: "Plans",
        icon: React.createElement(ScheduleFilled),
        title: "Plans",
        children: [
            {
                key: 33,
                label: "Create",
                icon: React.createElement(ScheduleOutlined)
            },
            {
                key: 11,
                label: "Edit",
                icon: React.createElement(EditOutlined)
            },
            {
                key: 12,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 13,
        label: "Exams",
        icon: React.createElement(FileExclamationFilled),
        title: "Plans",
        children: [
            {
                key: 14,
                label: "Create",
                icon: React.createElement(FileExclamationOutlined)
            },
            {
                key: 15,
                label: "Edit",
                icon: React.createElement(EditOutlined)
            },
            {
                key: 16,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 17,
        label: "Groups",
        icon: React.createElement(GroupOutlined),
        title: "Groups",
        children: [
            {
                key: 18,
                label: "Create",
                icon: React.createElement(UsergroupAddOutlined)
            },
            {
                key: 19,
                label: "Edit",
                icon: React.createElement(EditOutlined)
            },
            {
                key: 20,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 44,
        label: "Roles",
        icon: React.createElement(BsFillShieldFill),
        title: "Roles",
        children: [
            {
                key: 74,
                label: "Create",
                icon: React.createElement(FaCriticalRole)
            },
            {
                key: 923,
                label: "All",
                icon: React.createElement(FaTable)
            },
        ]
    },
    {
        key: 322,
        label: "Users",
        icon: React.createElement(FaUsers),
        title: "Users",
        children: [
            {
                key: 3232,
                label: "Create",
                icon: React.createElement(AiOutlineUsergroupAdd)
            },
            {
                key: 23319,
                label: "All",
                icon: React.createElement(FaTable)
            },
            {
                key: 22230,
                label: "Reports",
                icon: React.createElement(FileFilled)
            }
        ]
    },
    {
        key: 21,
        label: "Setting",
        icon: React.createElement(SettingFilled),
    },
]

export default sidebarLinks;