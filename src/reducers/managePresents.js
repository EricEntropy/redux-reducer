export function managePresents(state, action){
    switch(action.type) {
        default:
            return {numberOfPresents: 0}
        case "INCREASE":
            return { numberOfPresents: state.numberOfPresents + 1 };
    }
}
