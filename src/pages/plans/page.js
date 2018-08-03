import { connect } from 'dva';

import styles from './Plans.less';

import PlanCards from './components/PlanCards';
import Services from './components/Services';

function Plans({ dispatch, location, isMobile }) {

  const propsToPlans = { dispatch, isMobile };
  const propsToServices = { isMobile };

  return (
    <div className={styles.plans}>
      <PlanCards {...propsToPlans} />
      <Services {...propsToServices} />
    </div>
  );
}

function mapStateToProps(state) {
  const { isMobile } = state.initialization;
  return {
    loading: state.loading.models.plans,
    isMobile
  };
}

export default connect(mapStateToProps)(Plans);
