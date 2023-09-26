// 异步路由数据

import {FunctionComponent} from "react";
import Components from "./components";

export interface RouterConfig {
    label: string,
    type: 'router' | 'iframe' | 'snack' | 'snackPage' | 'redirect'
    path: string // 通用 路由Hash
    url?: string // iframe -> url; snack -> name; snackPage -> id;
    component?: FunctionComponent // router | redirect 模式 两种模式实现方式相同，为了渲染菜单过滤重定向
}

export const router = async (): Promise<Array<RouterConfig>> => {
    let list: Array<RouterConfig> = [
        {label: '按钮', type: 'router', path: '/button', component: Components['/button']}
    ];
    // local router demo 由于 import() 无法动态设置参数，因此需要开发阶段预设关联关系，从Components配置关系内导出组件
    list.push({label: '主页', type: 'router', path: '/home', component: Components['/home']});
    // 默认地址
    list.push({label: '默认跳转', type: 'redirect', path: '/', component: Components['/home']});

    return list;
}

export default router;
