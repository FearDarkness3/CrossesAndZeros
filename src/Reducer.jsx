const mainReducer = (state = {board: [0,0,0,0,0,0,0,0,0], currentPlayer: 0}, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return Object.assign({}, state, {
            board: [...state.board.slice(0, action.index), 1, ...state.board.slice(action.index + 1)]

                }
            );
        case 'INCREMENT_COMPUTER':
            return Object.assign({}, state, {
                computerScore: state.computerScore + 1,
                currentPlayer: state.currentPlayer - 1
            })
        default:
            return state;
    }
}

export default mainReducer;