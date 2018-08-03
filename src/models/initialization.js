// this file is to initialise some initial state
// for example
// isMobile states whether the screen is less than 767px: means whether it's in mobilde mode
import enquire from 'enquire.js';

export default {
    namespace: 'initialization',
    state: {
        isMobile: false,
    },
    reducers: {
        SaveIsMobile(state, { payload: { isMobile } }) {
            return { ...state, isMobile };
        },
    },
    effects: {
        *saveIsMobile({ payload }, { put }) {
            yield put({
                type: 'SaveIsMobile',
                payload,
            });
        },
    },
    subscriptions: {
        setup({ dispatch }) {
            const enquireScreen = (cb) => {
                enquire.register('only screen and (min-width: 320px) and (max-width: 576px)', {
                    match: () => {
                        console.log("In mobile mode");
                        cb(true);
                    },
                    unmatch: () => {
                        console.log("In non-mobile mode")
                        cb();
                    },
                });
            };
            enquireScreen((isMobile) => {
                dispatch({ type: 'saveIsMobile', payload: { isMobile } });
            });
        },
    },
};
