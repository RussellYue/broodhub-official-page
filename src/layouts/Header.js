import { Menu, Icon } from 'antd';
import router from 'umi/router';

import styles from './Header.less';
import { navData } from '../constants';

const Item = Menu.Item;

function Header({ dispatch, location, isMobile, isNavOpen }) {

  // click toggle
  function clickToggle() {
    dispatch({
      type: 'layouts/clickToggle',
      payload: { isNavOpen: !isNavOpen },
    });
  }

  function backToHome() {
    router.push('/');
  }

  function goToPage(page) {
    router.push(page);
    clickToggle();
  }

  // generate navigation list
  const navList = navData.map(item =>
    (<Item key={item.key}><span onClick={() => { goToPage(item.key) }}>{item.name}</span></Item>),
  );

  // navigation 
  const nav = isMobile ?
    (
      // mobile mode nav
      <div>
        <div onClick={() => { clickToggle(); }} className={styles.navToggle}>
          <Icon type={isNavOpen ? 'menu-unfold' : 'menu-fold'} />   {/* toggle of navigation */}
        </div>
        <div className={styles.nav}>
          {isNavOpen ? (
            <Menu
              selectedKeys={[location.pathname]}
              mode="inline"
              theme="dark"
            >
              {navList}
            </Menu>) : null
          }
        </div>
      </div>) :
    // desktop mode nav
    (
      <div className={styles.nav}>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
          {navList}
        </Menu>
      </div>);

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={backToHome}>
        BroodHub
      </div>
      {nav}
    </div>
  );

}

export default Header;
