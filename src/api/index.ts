// LocationApiService.ts
import { useMutation } from "react-query";
import { ICountryLocation } from "../components/Ticket/components/LocationInput/types";

const useLocationApi = () => {
  return useMutation<ICountryLocation[], Error, string>(async (query) => {
    try {
      const regionResponse = await fetch(
        `https://restcountries.com/v3.1/region/${query}`
      );
      const regionData = await regionResponse.json();

      const capitalResponse = await fetch(
        `https://restcountries.com/v3.1/capital/${query}`
      );
      const capitalData = await capitalResponse.json();

      const nameResponse = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const nameData = await nameResponse.json();

      const regionArray = Array.isArray(regionData) ? regionData : [];
      const capitalArray = Array.isArray(capitalData) ? capitalData : [];
      const nameArray = Array.isArray(nameData) ? nameData : [];

      return [...regionArray, ...capitalArray, ...nameArray];
    } catch (error) {
      console.error("Erro na consulta da API:", error);
      return [];
    }
  });
};

export default useLocationApi;
