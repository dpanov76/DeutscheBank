import { createAction, props } from '@ngrx/store';
import { Country } from "../../models/country";
import { Region } from "../../models/region";

export const selectRegion = createAction('[Region] Select Region', props<{region: Region}>());
//
// export enum ERegionActions {
//   SelectRegion = '[Region] Select Region',
//   SelectCountry = '[Region] Select Country',
//   GetCountries = '[Region] Get Countries',
//   ShowCountry = '[Region] Show Country',
// }
//
// export class SelectRegion implements Action {
//   public readonly type = ERegionActions.SelectRegion;
//   constructor(public payload: string) {}
// }
//
// export class SelectCountry implements Action {
//   public readonly type = ERegionActions.SelectCountry;
//   constructor(public payload: string) {}
// }
//
// export class GetCountries implements Action {
//   public readonly type = ERegionActions.GetCountries;
// }
//
// export class ShowCountry implements Action {
//   public readonly type = ERegionActions.ShowCountry;
//   constructor(public payload: Country) {}
// }
//
// export type RegionActions = GetCountries  | ShowCountry | SelectCountry | SelectRegion;
