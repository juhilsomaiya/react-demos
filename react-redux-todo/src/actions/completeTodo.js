export function completeTodoAction(todo) {
  return {
      type: 'COMPLETE_TODO',
      payload: todo
  };
}