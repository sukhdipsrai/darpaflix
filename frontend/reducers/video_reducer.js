import { TOGGLE_MUTE } from "../actions/actions";

export default (state = { audio: true }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_MUTE:
      return !state.audio;
    default:
      return state;
  }
};
