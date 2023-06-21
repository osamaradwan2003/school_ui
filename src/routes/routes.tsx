import {RouteObject} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {RequireAuth} from "../layout/RequireAuth.tsx";
import {Login} from "../pages/auth/Login.tsx";
import {AuthLayout} from "../layout/AuthLayout.tsx";


export  const AppRouters: RouteObject[] = [
    {
        path: "/",
        element: (
            <RequireAuth>
                <MainLayout/>
            </RequireAuth>
        ),

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