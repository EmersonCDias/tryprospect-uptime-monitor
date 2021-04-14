import produce from 'immer';

const INITIAL_STATE = {
  list: [],
};

export default function domains(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@domains/ADD_DOMAIN':
        draft.list = !state.list.includes(action.payload.domain) ? [...state.list, action.payload.domain] : [draft.list];
        break;

      default:
    }
  });
}
