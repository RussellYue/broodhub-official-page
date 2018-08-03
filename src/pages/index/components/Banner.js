import styles from './Banner.less';
import { Button } from 'antd';
import router from 'umi/router';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function Banner({ dispatch }) {

  function goToPage(page) {
    router.push(page);
  }

  const animConfig = {
    type: "bottom",
    interval: 300,
    duration: 2000
  }

  return (
    <ScrollOverPack className={styles.banner}>
      <QueueAnim key="content" className={styles.content} {...animConfig}>
        <div key='slogon' className={styles.slogon}>
          See Future Together
        </div>
        <div key='b'>
          <Button icon="login" ghost className={styles.button} onClick={() => { goToPage("/plans") }}>
            Join Us
          </Button>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}

export default Banner;
