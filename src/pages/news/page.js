import { connect } from 'dva';

import styles from './News.less';

// import PlanCards from './components/PlanCards';


function News({ dispatch, location, isMobile }) {

    return (
        <div className={styles.news}>
            hello
        </div>
    );
}

function mapStateToProps(state) {
    const { isMobile } = state.initialization;
    return {
        loading: state.loading.models.news,
        isMobile
    };
}

export default connect(mapStateToProps)(News);
