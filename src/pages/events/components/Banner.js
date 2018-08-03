import styles from './Banner.less';
import { Button } from 'antd';
import router from 'umi/router';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function Banner({ dispatch, isMobile }) {

  const animConfig = {
    className: styles.content,
    type: "bottom",
    interval: 300,
    duration: 2000
  }

  function goToPage(page) {
    router.push(page);
  }

  return (
    <ScrollOverPack className={styles.banner}>
      <QueueAnim key="content" className={styles.content} {...animConfig}>
        <div key='slogon' className={styles.slogon}>
          Coming soon
        </div>
        {
          isMobile ?
            (<div key='b'>
              <Button ghost className={styles.button} onClick={() => { goToPage('/plans') }}>
                View more
              </Button>
            </div>) : null
        }
      </QueueAnim>
    </ScrollOverPack>
  );
}

export default Banner;
