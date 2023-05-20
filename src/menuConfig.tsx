// 自定义菜单配置

import { MenuDataItem } from "@ant-design/pro-components";
import { SmileFilled } from "@ant-design/icons";
const asideMenuConfig: MenuDataItem[] = [
  {
    name: '首页',
    path: 'home',
    icon: <SmileFilled style={{ color: '#fff' }} />
  },
  {
    name: '权限演示',
    path: 'access',
    icon: <SmileFilled style={{ color: '#fff' }} />
  },
  {
    name: ' CRUD 示例',
    path: 'table',
    icon: <SmileFilled style={{ color: '#fff' }} />
  },
  {
    name: '业务',
    path: 'business',
    icon: <SmileFilled style={{ color: '#fff' }} />,
    children: [
      {
        name: ' 业务1',
        path: 'business1',
        icon: <SmileFilled />,
      },
      {
        name: ' 业务2',
        path: 'business2',
        icon: <SmileFilled />,
      },
    ]
  },
];

export { asideMenuConfig };
