import {MainLayout} from "../layout/MainLayout.tsx";
import {RequireAuth} from "../layout/RequireAuth.tsx";
import {Login} from "../pages/auth/Login.tsx";
import {AuthLayout} from "../layout/AuthLayout.tsx";
import {CreateStudent} from "../pages/student/CreateStudent.tsx";
import AddParent from "../pages/parent/AddParent.tsx";
import AddEmployee from "../pages/employee/AddEmployee.tsx";
import { RouteObject } from "react-router-dom";
// import { MenuProps } from "antd";


export  const AppRouters: RouteObject[] = [
    {
        path: "/",
        element: (
                <RequireAuth>
                    <MainLayout/>
                </RequireAuth>
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
                        Component: AddParent,
                    },
                    {
                        path: "all"
                    }
                ]
            },
            {
                path: "emp",
                element: <AddEmployee />
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

// function createRouteLinks(routes: RouteObject[]): MenuProps['items']{
//     let links:MenuProps['items'] = []

//     return links;
// }
export default AppRouters;