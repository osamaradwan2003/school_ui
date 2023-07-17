import {RouteObject} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
// import {RequireAuth} from "../layout/RequireAuth.tsx";
import {Login} from "../pages/auth/Login.tsx";
import {AuthLayout} from "../layout/AuthLayout.tsx";
import {CreateStudent} from "../pages/student/CreateStudent.tsx";


export  const AppRouters: RouteObject[] = [
    {
        path: "/",
        element: (
            <MainLayout/>
        ),
        children: [
            {
                path: "students",
                children: [
                    {
                        path: "add",
                        element: <CreateStudent/>
                    }
                ]
            },
            {
                path: "parents",
                children:[
                    {
                        path: "add",

                    },
                    {
                        path: "all"
                    }
                ]
            }
        ]

    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login />,
                index: true
            }
        ]
    }
]