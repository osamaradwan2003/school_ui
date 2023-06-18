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
    SettingFilled, BarcodeOutlined
} from "@ant-design/icons/lib/icons";

export  const sidebarLinks = [
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
                label: "Add",
                icon: React.createElement(UserAddOutlined)
            },
            {
                key: 29,
                label: "Adherence",
                icon: React.createElement(BarcodeOutlined)
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
        key: 6,
        label: "Teachers",
        icon: React.createElement(GroupOutlined),
        title: "Teachers",
        children: [
            {
                key: 7,
                label: "Add",
                icon: React.createElement(UserAddOutlined)
            },
            {
                key: 24,
                label: "Adherence",
                icon: React.createElement(BarcodeOutlined)
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
                key: 10,
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
        key: 21,
        label: "Setting",
        icon: React.createElement(SettingFilled),
    },
]