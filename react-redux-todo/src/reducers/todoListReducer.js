const intialState = [
    { workName: 'Create todo with redux', isComplete: false }
];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            state.unshift(action.payload);
            return [...state];
        case 'DELETE_TODO':
            state.splice(action.payload, 1);
            return [...state];
        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.workName === action.payload.workName ? { ...todo, isComplete: !todo.isComplete } : todo
            );
        default:
            return state;
    }
}
