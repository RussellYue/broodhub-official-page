import { Row, Col, Icon } from 'antd';

import RegistrationForm from './RegistrationForm';
import styles from './ContactInfo.less';


function ContactInfo({ dispatch }) {

    const contactColConfig = {
        xs: {
            span: 24
        },
        sm: {
            span: 24
        },
        md: {
            span: 12,
            order: 2
        },
    }

    const formColConfig = {
        xs: {
            span: 24
        },
        sm: {
            span: 24
        },
        md: {
            span: 12,
            order: 1
        },
    }

    return (
        <Row type="flex" className={styles.contactInfo} >
            <Col {...contactColConfig}>
                <div className={styles.broodHubContact}>
                    <h className={styles.title}>
                        Contact us
                    </h>
                    <div className={styles.subtitle}>
                        Questions about plans, pricing, or availability? Just have your people call our people.
                    </div>
                    <div className={styles.item}>
                        <Icon type="phone" />
                        <span>03-9226 2880 </span>
                    </div>
                    <div className={styles.item}>
                        <Icon type="mail" />
                        <span>broodhub@gmail.com</span>
                    </div>
                </div>
            </Col>
            <Col {...formColConfig}>
                <div className={styles.form}>
                    <h className={styles.title}>
                        We'll follow up
                    </h>
                    <div className={styles.subtitle}>
                        One of our workspace experts will reach out to you, based on your communication preferences.
                    </div>
                    <RegistrationForm />
                </div>
            </Col>
        </Row>
    );
}

export default ContactInfo;