export interface ICountryLocation {
  searchQuery(searchQuery: any): unknown;
  name: {
    common: string;
  };
  capital: string;

  region: string;
}

export interface LocationInputProps {
  label: string;
  onSelect: (location: string) => void;
}
export type ILocationInput = (props: LocationInputProps) => JSX.Element;
