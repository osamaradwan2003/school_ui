warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.tsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 86f3d87..cff9e1f 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -10,14 +10,17 @@[m
       "dependencies": {[m
         "@reduxjs/toolkit": "^1.9.5",[m
         "antd": "^5.6.1",[m
[32m+[m[32m        "formik": "^2.4.2",[m
         "localforage": "^1.10.0",[m
         "match-sorter": "^6.3.1",[m
         "react": "^18.2.0",[m
         "react-dom": "^18.2.0",[m
[32m+[m[32m        "react-icons": "^4.9.0",[m
         "react-redux": "^8.0.7",[m
         "react-router-dom": "^6.13.0",[m
[31m-        "sort-by": "^1.2.0",[m
[31m-        "styled": "^1.0.0"[m
[32m+[m[32m        "sort-by": "^0.0.2",[m
[32m+[m[32m        "styled": "^1.0.0",[m
[32m+[m[32m        "yup": "^1.2.0"[m
       },[m
       "devDependencies": {[m
         "@types/node": "^20.3.0",[m
[36m@@ -1750,6 +1753,14 @@[m
       "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "node_modules/deepmerge": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-R9hc1Xa/NOBi9WRVUWg19rl1UB7Tt4kuPd+thNJgFZoxXsTz7ncaPaeIm+40oSGuP33DfMb4sZt1QIGiJzC4EA==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/didyoumean": {[m
       "version": "1.2.2",[m
       "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",[m
[36m@@ -2173,6 +2184,34 @@[m
       "integrity": "sha512-5nqDSxl8nn5BSNxyR3n4I6eDmbolI6WT+QqR547RwxQapgjQBmtktdP+HTBb/a/zLsbzERTONyUB5pefh5TtjQ==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "node_modules/formik": {[m
[32m+[m[32m      "version": "2.4.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/formik/-/formik-2.4.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-C6nx0hifW2uENP3M6HpPmnAE6HFWCcd8/sqBZEOHZY6lpHJ5qehsfAy43ktpFLEmkBmhiZDei726utcUB9leqg==",[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "individual",[m
[32m+[m[32m          "url": "https://opencollective.com/formik"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "deepmerge": "^2.1.1",[m
[32m+[m[32m        "hoist-non-react-statics": "^3.3.0",[m
[32m+[m[32m        "lodash": "^4.17.21",[m
[32m+[m[32m        "lodash-es": "^4.17.21",[m
[32m+[m[32m        "react-fast-compare": "^2.0.1",[m
[32m+[m[32m        "tiny-warning": "^1.0.2",[m
[32m+[m[32m        "tslib": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "react": ">=16.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/formik/node_modules/tslib": {[m
[32m+[m[32m      "version": "2.5.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.5.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-mSxlJJwl3BMEQCUNnxXBU9jP4JBktcEGhURcPR6VQVlnP0FdDEsIaz0C35dXNGLyRfrATNofF0F5p2KPxQgB+w=="[m
[32m+[m[32m    },[m
     "node_modules/fraction.js": {[m
       "version": "4.2.0",[m
       "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.2.0.tgz",[m
[36m@@ -2558,6 +2597,16 @@[m
         "url": "https://github.com/sponsors/sindresorhus"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/lodash": {[m
[32m+[m[32m      "version": "4.17.21",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",[m
[32m+[m[32m      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lodash-es": {[m
[32m+[m[32m      "version": "4.17.21",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.21.tgz",[m
[32m+[m[32m      "integrity": "sha512-mKnC+QJ9pWVzv+C4/U3rRsHapFfHvQFoFB92e52xeyGMcX6/OlIl78je1u8vePzYZSkkogMPJ2yjxxsb89cxyw=="[m
[32m+[m[32m    },[m
     "node_modules/lodash.merge": {[m
       "version": "4.6.2",[m
       "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",[m
[36m@@ -2719,14 +2768,6 @@[m
         "node": ">= 6"[m
       }[m
     },[m
[31m-    "node_modules/object-path": {[m
[31m-      "version": "0.6.0",[m
[31m-      "resolved": "https://registry.npmjs.org/object-path/-/object-path-0.6.0.tgz",[m
[31m-      "integrity": "sha512-fxrwsCFi3/p+LeLOAwo/wyRMODZxdGBtUlWRzsEpsUVrisZbEfZ21arxLGfaWfcnqb8oHPNihIb4XPE8CQPN5A==",[m
[31m-      "engines": {[m
[31m-        "node": ">=0.8.0"[m
[31m-      }[m
[31m-    },[m
     "node_modules/once": {[m
       "version": "1.4.0",[m
       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",[m
[36m@@ -3013,6 +3054,11 @@[m
         "node": ">= 0.8.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/property-expr": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/property-expr/-/property-expr-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-IJUkICM5dP5znhCckHSv30Q4b5/JA5enCtkRHYaOVOAocnH/1BQEYTC5NMfT3AVl/iXKdr3aqQbQn9DxyWknwA=="[m
[32m+[m[32m    },[m
     "node_modules/punycode": {[m
       "version": "2.3.0",[m
       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.0.tgz",[m
[36m@@ -3657,6 +3703,19 @@[m
         "react": "^18.2.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/react-fast-compare": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-fast-compare/-/react-fast-compare-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-suNP+J1VU1MWFKcyt7RtjiSWUjvidmQSlqu+eHslq+342xCbGTYmC0mEhPCOHxlW0CywylOC1u2DFAT+bv4dBw=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/react-icons": {[m
[32m+[m[32m      "version": "4.9.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-4.9.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ijUnFr//ycebOqujtqtV9PFS7JjhWg0QU6ykURVHuL4cbofvRCf3f6GMn9+fBktEFQOIVZnuAYLZdiyadRQRFg==",[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "react": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/react-is": {[m
       "version": "16.13.1",[m
       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",[m
[36m@@ -3948,12 +4007,9 @@[m
       }[m
     },[m
     "node_modules/sort-by": {[m
[31m-      "version": "1.2.0",[m
[31m-      "resolved": "https://registry.npmjs.org/sort-by/-/sort-by-1.2.0.tgz",[m
[31m-      "integrity": "sha512-aRyW65r3xMnf4nxJRluCg0H/woJpksU1dQxRtXYzau30sNBOmf5HACpDd9MZDhKh7ALQ5FgSOfMPwZEtUmMqcg==",[m
[31m-      "dependencies": {[m
[31m-        "object-path": "0.6.0"[m
[31m-      }[m
[32m+[m[32m      "version": "0.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sort-by/-/sort-by-0.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-iOX5oHA4a0eqTMFiWrHYqv924UeRKFBLhym7iwSVG37Egg2wApgZKAjyzM9WZjMwKv6+8Zi+nIaJ7FYsO9EkoA=="[m
     },[m
     "node_modules/source-map-js": {[m
       "version": "1.0.2",[m
[36m@@ -4142,6 +4198,16 @@[m
         "node": ">=12.22"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/tiny-case": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tiny-case/-/tiny-case-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Eet/eeMhkO6TX8mnUteS9zgPbUMQa4I6Kkp5ORiBD5476/m+PIRiumP5tmh5ioJpH7k51Kehawy2UDfsnxxY8Q=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/tiny-warning": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tiny-warning/-/tiny-warning-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA=="[m
[32m+[m[32m    },[m
     "node_modules/to-regex-range": {[m
       "version": "5.0.1",[m
       "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",[m
[36m@@ -4159,6 +4225,11 @@[m
       "resolved": "https://registry.npmjs.org/toggle-selection/-/toggle-selection-1.0.6.tgz",[m
       "integrity": "sha512-BiZS+C1OS8g/q2RRbJmy59xpyghNBqrr6k5L/uKBGRsTfxmu3ffiRnd8mlGPUVayg8pvfi5urfnu8TU7DVOkLQ=="[m
     },[m
[32m+[m[32m    "node_modules/toposort": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/toposort/-/toposort-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-0a5EOkAUp8D4moMi2W8ZF8jcga7BgZd91O/yabJCFY8az+XSzeGyTKs0Aoo897iV1Nj6guFq8orWDS96z91oGg=="[m
[32m+[m[32m    },[m
     "node_modules/ts-interface-checker": {[m
       "version": "0.1.13",[m
       "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",[m
[36m@@ -4380,6 +4451,28 @@[m
       "funding": {[m
         "url": "https://github.com/sponsors/sindresorhus"[m
       }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/yup": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yup/-/yup-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-PPqYKSAXjpRCgLgLKVGPA33v5c/WgEx3wi6NFjIiegz90zSwyMpvTFp/uGcVnnbx6to28pgnzp/q8ih3QRjLMQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "property-expr": "^2.0.5",[m
[32m+[m[32m        "tiny-case": "^1.0.3",[m
[32m+[m[32m        "toposort": "^2.0.2",[m
[32m+[m[32m        "type-fest": "^2.19.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/yup/node_modules/type-fest": {[m
[32m+[m[32m      "version": "2.19.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-2.19.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-RAH822pAdBgcNMAfWnCBU3CFZcfZ/i1eZjwFU/dsLKumyuuP3niueg2UAukXYF0E2AAoc82ZSSf9J0WQBinzHA==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12.20"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
[32m+[m[32m      }[m
     }[m
   }[m
 }[m
[1mdiff --git a/package.json b/package.json[m
[1mindex ab2a965..837ed48 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -12,14 +12,17 @@[m
   "dependencies": {[m
     "@reduxjs/toolkit": "^1.9.5",[m
     "antd": "^5.6.1",[m
[32m+[m[32m    "formik": "^2.4.2",[m
     "localforage": "^1.10.0",[m
     "match-sorter": "^6.3.1",[m
     "react": "^18.2.0",[m
     "react-dom": "^18.2.0",[m
[32m+[m[32m    "react-icons": "^4.9.0",[m
     "react-redux": "^8.0.7",[m
     "react-router-dom": "^6.13.0",[m
[31m-    "sort-by": "^1.2.0",[m
[31m-    "styled": "^1.0.0"[m
[32m+[m[32m    "sort-by": "^0.0.2",[m
[32m+[m[32m    "styled": "^1.0.0",[m
[32m+[m[32m    "yup": "^1.2.0"[m
   },[m
   "devDependencies": {[m
     "@types/node": "^20.3.0",[m
[1mdiff --git a/public/assets/logo.jpg b/public/assets/logo.jpg[m
[1mdeleted file mode 100644[m
[1mindex 2449678..0000000[m
Binary files a/public/assets/logo.jpg and /dev/null differ
[1mdiff --git a/src/components/header/Header.tsx b/src/components/header/Header.tsx[m
[1mindex 216f972..12fb517 100644[m
[1m--- a/src/components/header/Header.tsx[m
[1m+++ b/src/components/header/Header.tsx[m
[36m@@ -11,9 +11,9 @@[m [mexport default function Header() {[m
 		token: { colorBgContainer },[m
 	} = theme.useToken();[m
 	return ([m
[31m-		<AHeader  className="flex justify-between" style={{...headerStyle, backgroundColor: colorBgContainer}}>[m
[32m+[m		[32m<AHeader  className="flex justify-between " style={{...headerStyle, backgroundColor: colorBgContainer}}>[m
 			<HeaderLeft />[m
[31m-			<HeaderRight />[m
[32m+[m			[32m<HeaderRight className="flex items-center gap-3"/>[m
 		</AHeader>[m
 	)[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/header/HeaderLeft.tsx b/src/components/header/HeaderLeft.tsx[m
[1mindex 17c9b04..83a9054 100644[m
[1m--- a/src/components/header/HeaderLeft.tsx[m
[1m+++ b/src/components/header/HeaderLeft.tsx[m
[36m@@ -3,21 +3,22 @@[m [mimport {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";[m
 import {toggleSidebar} from "../../store/appSlice/appSlice.ts";[m
 import {Button} from "antd";[m
 import {useDispatch, useSelector} from "react-redux";[m
[31m-import {CollapseSelector} from "../../store/store.ts";[m
[32m+[m[32mimport {CollapseSelector, isAuthSelector} from "../../store/store.ts";[m
 import {HTMLProps} from "react";[m
 export const HeaderLeft = (props: HTMLProps<HTMLDivElement>) => {[m
 	const isOpen = useSelector(CollapseSelector);[m
[31m-	const dispatch = useDispatch();[m
[32m+[m	[32mconst dispatch = useDispatch(),[m
[32m+[m		[32misLogin = useSelector(isAuthSelector);[m
 	return ([m
 		<div {...props}>[m
[31m-			<Button[m
[32m+[m			[32m{isLogin && <Button[m
 				style={ButtonStyle}[m
 [m
 				icon={[m
 					isOpen ? <MenuUnfoldOutlined style={IconStyle}/> : <MenuFoldOutlined style={IconStyle}/>[m
 				}[m
[31m-				onClick={()=>dispatch(toggleSidebar())}[m
[31m-			></Button>[m
[32m+[m				[32monClick={() => dispatch(toggleSidebar())}[m
[32m+[m			[32m></Button>}[m
 		</div>[m
 	)[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/header/HeaderRight.tsx b/src/components/header/HeaderRight.tsx[m
[1mindex 22a2a9f..a648cb8 100644[m
[1m--- a/src/components/header/HeaderRight.tsx[m
[1m+++ b/src/components/header/HeaderRight.tsx[m
[36m@@ -1,18 +1,32 @@[m
 import {HTMLProps} from "react";[m
[31m-import {Button} from "antd";[m
[32m+[m[32mimport {Avatar, Button, Dropdown, Space} from "antd";[m
 import {useDispatch, useSelector} from "react-redux";[m
[31m-import {thmeSelector} from "../../store/store.ts";[m
[32m+[m[32mimport {isAuthSelector, themeSelector} from "../../store/store.ts";[m
 import {toggle} from "../../store/themeSlice/themeSlice.ts";[m
[32m+[m[32mimport {FaSun, FaRegMoon} from "react-icons/fa";[m
[32m+[m[32mimport items from "../../routes/ProfileLinks.tsx";[m
[32m+[m
[32m+[m
[32m+[m
 export const HeaderRight = (props:HTMLProps<HTMLDivElement>) => {[m
[31m-	const isDark = useSelector(thmeSelector),[m
[31m-				dispatch = useDispatch();[m
[32m+[m	[32mconst isDark = useSelector(themeSelector),[m
[32m+[m				[32mdispatch = useDispatch(),[m
[32m+[m				[32misLogin = useSelector(isAuthSelector);[m
 	return ([m
 		<div {...props}>[m
 			<Button[m
 				onClick = {()=>dispatch(toggle())}[m
[31m-			>[m
[31m-				{isDark ? "dark" : "light"}[m
[31m-			</Button>[m
[32m+[m				[32micon = {!isDark ? <FaSun/>: <FaRegMoon/> }[m
[32m+[m				[32mclassName="border-none text-xl"[m
[32m+[m				[32mtitle={isDark ? "Dark mod" : "Light mod"}[m
[32m+[m			[32m/>[m
[32m+[m			[32m{isLogin && <Dropdown overlayClassName="w-40" menu={{items}} trigger={['click']} arrow>[m
[32m+[m				[32m<a onClick={(e) => e.preventDefault()}>[m
[32m+[m					[32m<Space>[m
[32m+[m						[32m<Avatar>OS</Avatar>[m
[32m+[m					[32m</Space>[m
[32m+[m				[32m</a>[m
[32m+[m			[32m</Dropdown>}[m
 		</div>[m
 	)[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/header/styles.ts b/src/components/header/styles.ts[m
[1mindex 919ce7d..fb78815 100644[m
[1m--- a/src/components/header/styles.ts[m
[1m+++ b/src/components/header/styles.ts[m
[36m@@ -3,6 +3,8 @@[m [mimport React from "react";[m
 [m
 export const headerStyle: React.CSSProperties = {[m
     paddingLeft: "1rem",[m
[32m+[m[32m    position: "sticky",[m
[32m+[m[32m    top: 0[m
 }[m
 [m
 export const ButtonStyle: React.CSSProperties = {[m
[1mdiff --git a/src/components/sidebar/SideHeader.tsx b/src/components/sidebar/SideHeader.tsx[m
[1mindex e8580df..64a7605 100644[m
[1m--- a/src/c