// States management of layouts

export default {
    namespace: 'layouts',
    state: {
        isNavOpen: false,
    },
    reducers: {
        SaveIsNavOpen(state, { payload: { isNavOpen } }) {
            return { ...state, isNavOpen };
        },
    },
    effects: {
        *clickToggle({ payload }, { put }) {
            yield put({
                type: 'SaveIsNavOpen',
                payload,
            });
        },
    },
};
