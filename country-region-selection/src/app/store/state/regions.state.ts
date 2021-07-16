import { Country } from "../../models/country";
import { Region } from "../../models/region";


export interface ICountriesState {
  countries: Country[];
  regions: string[];
  selectedCountry: string;
  region: string;
}

export const initialCountriesState:  ICountriesState = {
  regions: ['asia','europe'],
  countries: [],
  selectedCountry: '',
  region: ''
};
