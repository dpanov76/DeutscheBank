import { IFruitsState, initialFruitState} from "../state/fruits.state";
import { EFruitActions, FruitActions} from "../actions/fruit.actions";

export const countryReducers = (
  state = initialFruitState,
  action: FruitActions
): IFruitsState => {
  switch (action.type) {
    case EFruitActions.GetFruits: {
      return {
        ...state
      };
    }
    case EFruitActions.ShowFruit: {
      return {
        ...state,
        selectedFruit: action.payload
      };
    }
    case EFruitActions.AddFruitToBasket: {
      // Use do round here to avoid JS float calculations 0.000000003 or something
      let basketTotal = Math.round((state.basketTotal + action.payload) * 100) / 100;
      return {
        ...state,
        basketTotal: basketTotal
      };
    }

    }
    default:
      return state;
  }
};
