import { createReducer, on} from '@ngrx/store';
import { Country } from '../../models/country';
import { Region } from '../../models/region';
import { selectRegion } from './../actions/regions.actions';

const region = Region;
const initialRegions: Region[] = [
  region.Europe, region.Asia
]

export const regionsReducer = createReducer<Region[]>(
  initialRegions,
  on(selectRegion, (state, action) => state.concat({
    ...state,
//    selectedRegion: action.region
})));
// export const countryReducers = (
//   state = initialFruitState,
//   action: FruitActions
// ): IFruitsState => {
//   switch (action.type) {
//     case EFruitActions.GetFruits: {
//       return {
//         ...state
//       };
//     }
//     case EFruitActions.ShowFruit: {
//       return {
//         ...state,
//         selectedFruit: action.payload
//       };
//     }
//     case EFruitActions.AddFruitToBasket: {
//       // Use do round here to avoid JS float calculations 0.000000003 or something
//       let basketTotal = Math.round((state.basketTotal + action.payload) * 100) / 100;
//       return {
//         ...state,
//         basketTotal: basketTotal
//       };
//     }
//
//     }
//     default:
//       return state;
//   }
// };
