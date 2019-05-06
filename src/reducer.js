const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  keskiarvo: 0,
  positiiviset: 0,
  luvut: []

}


function laskekeskiarvo(state) {
  let yht = 0;
  let kesk = 0;

  state.luvut.map(p => yht = yht + p);
  if (state.luvut.length > 0) {
    kesk = yht / state.luvut.length;
  }
  return kesk;

}


function laskehyvatprosentit(state) {
  let pos = 0;

  if (state.bad > 0 || state.good > 0 || state.ok > 0) {
    pos = (state.good * 100) / (state.bad + state.ok + state.good);
  }

  return pos;
}

const counterReducer = (state = initialState, action) => {
  console.log(action)




  let newstate = {
    ...state
  };

  switch (action.type) {
    case 'GOOD':
      newstate.good++;
      newstate.luvut = [...state.luvut , 1]
     break
    case 'OK':
      newstate.ok++;
      newstate.luvut = [...state.luvut , 0]
      break
    case 'BAD':
      newstate.bad++;
      newstate.luvut = [...state.luvut , -1]
      break
    case 'ZERO':
      newstate.luvut.length = 0
      return initialState

    default:
      break
  }
  newstate.positiiviset = laskehyvatprosentit(newstate)
  newstate.keskiarvo = laskekeskiarvo(newstate)
  return newstate

}


export default counterReducer