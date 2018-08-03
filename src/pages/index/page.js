import { connect } from 'dva';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Idea from './components/Idea';
import Plans from './components/Plans';
import styles from './index.less';

function Home({ dispatch, loading }) {

  return (
    <div className={styles.index}>
      <Banner />
      <Welcome />
      <Idea />
      <Plans />
    </div >
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.users,
  };
}

export default connect(mapStateToProps)(Home);
