import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import ContactInfo from './components/ContactInfo';

import styles from './Contact.less';


function Contact({ dispatch, loading }) {
  const animConfig = {
    type: "right",
    duration: 3000
  }
  return (
    <QueueAnim className={styles.contact} {...animConfig}>
      <ContactInfo key="contact" />
    </QueueAnim >
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.contact,
  };
}

export default connect(mapStateToProps)(Contact);
