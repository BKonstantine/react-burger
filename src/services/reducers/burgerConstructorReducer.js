const constructorInitialState = {
  burgerConstructorList: [],
  currentIngredient: { ingredient: undefined },
  currentOrder: { order: undefined },
};

export function burgerConstructorReducer(
  state = constructorInitialState,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
