import { connect } from 'dva';
import Banner from './components/Banner';

// import styles from './index.less';

function Events({ dispatch, loading, isMobile }) {

  const propsToBanner = { isMobile }
  return (
    <div>
      <Banner {...propsToBanner} />
    </div >
  );
}

function mapStateToProps(state) {
  const { isMobile } = state.initialization;
  return {
    loading: state.loading.models.events,
    isMobile
  };
}

export default connect(mapStateToProps)(Events);
