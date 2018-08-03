import React from 'react';
import styles from './index.less';
import Header from './Header';
import Footer from './Footer';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

function Layout({ dispatch, children, location, isMobile, isNavOpen }) {

  const propsToHeader = { dispatch, location, isMobile, isNavOpen };
  const propsToFooter = { dispatch, isMobile };

  return (
    <div className={styles.normal}>
      <Header {...propsToHeader} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <Footer {...propsToFooter} />
    </div>
  );
}

function mapStateToProps(state) {
  const { isMobile } = state.initialization;
  const { isNavOpen } = state.layouts;
  return {
    isMobile,
    isNavOpen
  };
}

export default connect(mapStateToProps)(withRouter(Layout));

