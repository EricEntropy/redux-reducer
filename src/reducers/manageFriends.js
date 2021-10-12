export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        default: 
        return state;
        case "ADD_FRIEND":
            return(
                {...state,
                friends:[
                    ...state.friends, 
                    action.friend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            const toRemove = state.friends.findIndex(friend => friend.id === action.id);
            return(
                {...state, 
                    friends: [
                        ...state.friends.slice(0, toRemove),
                        ...state.friends.slice(toRemove +1)
                    ]
                }
            )
    }
}
