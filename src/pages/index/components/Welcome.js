import styles from './Welcome.less';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function Welcome({ dispatch }) {

    const animConfig = {
        className: styles.content,
        type: "bottom",
        interval: 300,
        duration: 2000
    }

    return (
        <ScrollOverPack className={styles.welcome}>
            <QueueAnim key="content" className={styles.content} {...animConfig}>
                <div key="title" className={styles.title}>
                    Welcome to Brood Hub
                </div>
                <p key="text" className={styles.text}>
                    The nature of work is changing. Whether it is the recruitment of talent,
                    improve the stability of the team, or to stimulate the innovation and
                    productivity of the staff. There is more than coffee and leisure space here; not
                    only the hardware facilities, but also the artistic atmosphere. Brood Hub
                    provides a unique work experience for you who want to be in business
                    through active communities and rich member benefits.
                </p>
                {/* <img key="img" src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=art-blur-cappuccino-302899.jpg&fm=jpg" alt="Brood Hub" /> */}
                {/* <div key="contact" className={styles.contact}>
                    <p >
                        <b>Office opening hours: </b>Everyday from 9am to 6pm
                    </p>
                    <p>
                        <b>Address: </b>No 1A, Jalan Badak, Pudu, 55100, Kuala Lumpur
                    </p>
                    <p>
                        <b>TEL</b>: +6 03-9226 2880
                    </p>
                </div> */}
            </QueueAnim>
        </ScrollOverPack>
    );
}

export default Welcome;
