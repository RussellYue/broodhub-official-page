import Link from 'umi/link';
import { Row, Col } from 'antd';

import styles from './Footer.less';
import { footerLinks } from '../constants';
import { Divider } from 'antd';

function Footer({ dispatch, isMobile }) {

    const colConfig = {
        sm: {
            span: 5
        },
        xs: {
            span: 24
        }
    }

    const links = footerLinks.map((item, index) => {
        const linkList = item.links.map((link) => {
            return (
                <div className={styles.item} key={link.key}>
                    <Link style={{ color: 'white' }} to={link.key}>{link.name}</Link>
                </div>
            )
        })
        return (
            <Col key={index} className={styles.nav} {...colConfig}>
                <div className={styles.header}>Navigation</div>
                <div className={styles.content}>
                    {linkList}
                </div>
            </Col>
        );
    }
    );

    return (
        <div className={styles.footer}>
            <Row className={styles.links} type="flex" justify="center" align="top">
                {/* {links} */}
            </Row>
            <Divider />
            <div className={styles.brand}>
                Copyright © 2018 BroodHub All rights reserved
            </div>
        </div>
    );

}

export default Footer;
