import ReactDOM from 'react-dom/client'
import  {Provider} from "react-redux";
import "@app/css/app.css";
import store from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AppRouters} from "./routes/routes.tsx";
const browserRoute = createBrowserRouter(AppRouters);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <RouterProvider router={browserRoute}/>
  </Provider>
)
