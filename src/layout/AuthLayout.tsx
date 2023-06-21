import {ConfigProvider, theme, Layout, App} from "antd";
import {useSelector} from "react-redux";
import {themeSelector} from "../store/store.ts";
import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";
import {darkColorsTheme} from "../css/theme/dark.ts";
import {lightColorsTheme} from "../css/theme/light.ts";

// interface AuthLayoutProps  {
// 		children?: ReactNode
// }
export const AuthLayout = () => {
  const isDark = useSelector(themeSelector);
  return (
    <ConfigProvider
      theme={
        {
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: isDark ? {...darkColorsTheme} : {...lightColorsTheme}
        }

      }
    >

      <App >
        <Layout style={{minHeight: "100vh"}}>
          <Header/>
          <Layout.Content >
            <Outlet/>
          </Layout.Content>
        </Layout>
      </App>
    </ConfigProvider>
  )
}