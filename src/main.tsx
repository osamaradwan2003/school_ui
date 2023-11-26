
import "antd/dist/reset.css";
import "@app/css/app.css?iniline";
import  "./config/axiosDefualt";
import ReactDOM from 'react-dom/client'
import  {Provider} from "react-redux";
import store from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppRouters from "./routes/routes.tsx";
const browserRoute = createBrowserRouter(AppRouters);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <RouterProvider router={browserRoute}/>
  </Provider>
)

