import { Country } from "../../models/country";
import { Region } from "../../models/region";


export interface IRegionsState {
  countries: Country[];
  regions: string[];
  selectedCountry: string;
  selectedRegion: string;
}

export const RegionsState:  IRegionsState = {
  regions: ['asia','europe'],
  countries: [],
  selectedCountry: '',
  selectedRegion: ''
};
