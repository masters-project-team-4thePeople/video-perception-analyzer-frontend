export const SET_SELECTED_CATEGORIES = 'SET_SELECTED_CATEGORIES';
export const SET_USER_NAME = 'SET_USER_NAME';

export const setSelectedCategories = category => dispatch => {
    dispatch({
        type: SET_SELECTED_CATEGORIES,
        payload: category
    });
};

export const setUserName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    });
};

