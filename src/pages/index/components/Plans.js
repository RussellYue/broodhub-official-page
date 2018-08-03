import styles from './Plans.less';
import { Button, Row, Col } from 'antd';
import router from 'umi/router';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function Plans({ dispatch }) {

    function goToPage(page) {
        router.push(page);
    }

    const animConfig = {
        className: styles.content,
        type: "bottom",
        interval: 300,
        duration: 2000
    }

    const colConfig = {
        xs: {
            span: 24
        },
        sm: {
            span: 24
        },
        md: {
            span: 12
        }
    }
    return (
        <ScrollOverPack className={styles.plans}>
            <QueueAnim key="content"  {...animConfig}>
                <Row key="content" className={styles.Content}>
                    <Col className={styles.col1} {...colConfig}>
                        <div className={styles.title}>
                            Flexible Plans
                        </div>
                        <div className={styles.subtitle}>
                            For teams of 1 to 500+.
                        </div>
                        <div className={styles.text}>
                            With month-to-month agreements, you can grow your office as your team grows, or start with just a desk and see where it takes you.
                        </div>
                        <Button ghost className={styles.Button} onClick={() => { goToPage("/plans") }}>
                            See More
                        </Button>
                    </Col>
                    <Col className={styles.col2} {...colConfig}>
                        <h1>
                            Contact Us
                        </h1>
                        <p >
                            <b>Office opening hours: </b>Everyday from 9am to 6pm
                        </p>
                        <p>
                            <b>Address: </b>No 1A, Jalan Badak, Pudu, 55100, Kuala Lumpur
                        </p>
                        <p>
                            <b>TEL</b>: +6 03-9226 2880
                        </p>
                    </Col>
                </Row>
            </QueueAnim>
        </ScrollOverPack>
    );
}

export default Plans;
