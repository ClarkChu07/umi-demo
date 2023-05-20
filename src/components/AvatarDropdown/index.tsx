import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar, Row, Col } from 'antd';
import styles from './index.module.less';

const AvatarDropdown: React.FC = () => {

  /**
   * 退出登录
   */
  const onMenuClick = async () => {
  };

  /**
   * 判断当前运行环境
   */
  // const checkEnv = (): string => {
  //   if (window.location.hostname === 'localhost') {
  //     return 'local';
  //   } else if (window.location.hostname === 'labeling-platform.mlops.testing.mpengine') {
  //     return 'test';
  //   } else if (window.location.hostname === 'labeling-platform.cn-bj.mlops-stage.skyengine.net.cn') {
  //     return 'stage';
  //   } else if (window.location.hostname === 'labeling-platform.cn-bj.mlops.skyengine.net.cn') {
  //     return 'prod';
  //   } else {
  //     return 'local';
  //   }
  // };

  // 用户抽屉菜单
  const menu = {
    items: [
      {
        key: 'logout',
        label: '退出登录',
        icon: <LogoutOutlined />,
        onClick: onMenuClick,
        className: styles.menu,
      },
    ],
  };

  return (
    <Row align="middle" style={{ paddingRight: 10 }}>
      <Col>
        <Dropdown menu={menu}>
          <div className={`${styles.action} ${styles.account}`}>
            <Avatar className={styles.avatar} src={null} alt="avatar">
              褚
            </Avatar>
            <span style={{ color: '#fff' }}>褚超</span>
          </div>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default AvatarDropdown;
