import styles from './Idea.less';
import { Row, Col } from 'antd';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function Idea({ dispatch }) {

    const animConfig = {
        className: styles.content,
        type: "bottom",
        interval: 300,
        duration: 2000
    }

    // const services = [
    //     {
    //         title: "Project Incubation",
    //         service: [
    //             "1. belongs to the application hatching project",
    //             "2. team should not be less than 4 person",
    //             "3. belongs to the high and new technology industry or the original project",
    //             "4. other hatching conditions that must be completed"
    //         ]
    //         // img:
    //     },

    // ]
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
        <ScrollOverPack className={styles.idea}>
            <QueueAnim key="content" className={styles.content} {...animConfig}>
                {/* <div key="title" className={styles.title}>
                    Why join us
                </div> */}
                <Row key="idea" className={styles.ideaContent}>
                    <Col className={styles.col1} {...colConfig}>
                        <p>
                            You focus on your work
                        </p>
                        <h1>
                            <b>We handle the rest</b>
                        </h1>
                    </Col>
                    <Col className={styles.col2} {...colConfig}>
                    </Col>
                </Row>
            </QueueAnim>
        </ScrollOverPack>
    );
}

export default Idea;
