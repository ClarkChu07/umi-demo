// 运行时配置
import { RunTimeLayoutConfig, RequestConfig } from '@umijs/max';
import { asideMenuConfig } from "@/menuConfig";
import AvatarDropdown from "@/components/AvatarDropdown";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Umi Demo' };
}

// 全局初始化请求配置配置
export const request: RequestConfig = {
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  requestInterceptors: [
    // @ts-ignore
    (config) => {
      return config;
    }
  ],
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response;
      console.log(data, 'data');
      return response;
    }
  ],
  // other axios options you want
  errorConfig: {
    errorHandler(error: any, opts: any){
      console.log(error, opts);
    },
    // 错误抛出
    errorThrower: (error) => {
      console.log(error, 'error')
      throw ''; // 抛出错误
    },
  },
};

// 全局初始化Layout配置
export const layout: RunTimeLayoutConfig = (initialAppData) => {
  console.log(initialAppData, 'initialAppData');

  let filterPathname = location.pathname; // 规则过滤pathname

  // 对存在二级菜单以上的菜单项，为了体验良好最好给每个一级菜单都设置一个重定向，这样可以防止切换到白屏页面。
  if (location.pathname === '/business') {
    filterPathname = '/business/business1'
  }

  return {
    // 常用属性
    token: { // 可使用token配置当前layout主题
      header: {
        // colorBgHeader: '#292f33',
        colorHeaderTitle: '#fff',
        colorTextMenu: '#dfdfdf',
        colorTextMenuSecondary: '#dfdfdf',
        colorTextMenuSelected: '#fff',
        // colorBgMenuItemSelected: '#1890ff', // 设置选中的菜单的背景色
        colorTextMenuActive: 'rgba(255,255,255,0.85)',
        colorTextRightActionsItem: '#dfdfdf',
      },
      sider: {
        colorMenuBackground: '#fff',
        colorMenuItemDivider: '#dfdfdf',
        colorBgMenuItemHover: '#f6f6f6',
        colorTextMenu: '#595959',
        colorTextMenuSelected: '#242424',
        colorTextMenuActive: '#242424',
      },
    },
    title: 'Umi Demo', // 平台title
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg', // 平台logo
    menu: {
      locale: false, // 是否使用国际化
      defaultOpenAll: true, // 默认展开所有菜单
      type: 'group', // 菜单的类型
    },
    location: { // 当前页面的pathname
      pathname: filterPathname,
    },
    layout: "mix", // layout模式 side | top | mix
    splitMenus: true, // 自动切割菜单是 mix 模式专属的能力，他可以把第一级的菜单放置到顶栏中。
    menuDataRender: () => asideMenuConfig, // 菜单项的配置
    rightRender: () => {
      return (
        <AvatarDropdown />
      )
    }
    // 支持所有ProLayout组件的配置
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};

