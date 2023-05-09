export const SET_SELECTED_CATEGORIES = 'SET_SELECTED_CATEGORIES';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_RESET_ACTION = 'SET_RESET_ACTION';
export const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';

export const setSelectedCategories = category => dispatch => {
    dispatch({
        type: SET_SELECTED_CATEGORIES,
        payload: category
    });
};

export const setUserCategories = usercategories => dispatch => {
    dispatch({
        type: SET_USER_CATEGORIES,
        payload: usercategories
    });
};

export const setUserName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    });
};

export const setUserInfo = userinfo => dispatch => {
    dispatch({
        type: SET_USER_INFO,
        payload: userinfo
    });
};

export const setResetAction = () => dispatch => {
    dispatch({
        type: SET_RESET_ACTION
    });
};