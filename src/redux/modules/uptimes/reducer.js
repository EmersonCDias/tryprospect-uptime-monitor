import produce from 'immer';

export default function uptimes(state = {}, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@uptimes/LIST_RESPONSE':
        draft[action.payload.data.domain] = action.payload.data;
        break;

      default:
    }
  });
}
