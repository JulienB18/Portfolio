import { ActionType } from 'type';

export type GlobalState = {
    clicks: number;
    mobileMenu: boolean;
    skillRef?: React.MutableRefObject<null>;
};

const initialState: GlobalState = {
    clicks: 1,
    mobileMenu: false,
};

const globalReducer = (
    // eslint-disable-next-line default-param-last, @typescript-eslint/default-param-last
    state: GlobalState = initialState,
    action: ActionType,
) => {
    if (action.type === 'DECREMENT') {
        return { ...state, clicks: state.clicks - 1 };
    }

    if (action.type === 'INCREMENT') {
        return { ...state, clicks: state.clicks + 1 };
    }

    if (action.type === 'SETVALUE') {
        return { ...state, clicks: action.payload };
    }

    if (action.type === 'SetMobileMenu') {
        return { ...state, mobileMenu: !state.mobileMenu };
    }

    if (action.type === 'SetSkillRef') {
        return { ...state, skillRef: action.payload };
    }
    return state;
};

export default globalReducer;
