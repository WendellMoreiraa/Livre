// LocationInput.tsx
import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { ICountryLocation, ILocationInput } from "./types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useLocationApi from "../../../../api/index";

const schema = yup.object().shape({
  searchQuery: yup.string().required("Search query is required"),
});

// ... (importações)

// ... (importações)

// ... (importações)

const LocationInput: ILocationInput = ({ label, onSelect }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate, data: searchResults, isLoading } = useLocationApi();

  const handleSearchChange = async (value: string) => {
    setValue("searchQuery", value);
    mutate(value);
  };

  const handleCountrySelect = (location: ICountryLocation) => {
    // Atualiza o valor do campo de pesquisa e aciona a mutação
    handleSearchChange(
      `${location.name.common}, ${location.capital}, ${location.region}`
    );
    onSelect(location.name.common);
  };

  return (
    <Flex direction={"column"}>
      <Text
        color={"primary.200"}
        fontSize={"14px"}
        fontWeight={"600"}
        marginBottom={"6px"}
      >
        {label}
      </Text>
      <form>
        <Box position={"relative"}>
          <Controller
            name="searchQuery"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                onChange={(e) => handleSearchChange(e.target.value)}
                onBlur={() => handleSearchChange(field.value)}
                bgColor={"gray.400"}
                border={"1px solid #D0D5DD"}
                placeholder="Search for a region, subregion, country, or capital"
                fontSize={"16px"}
                color={"gray.600"}
                w={"260px"}
              />
            )}
          />
          {errors.searchQuery && (
            <Text color="red.500" fontSize="12px" mt="2">
              {errors.searchQuery.message}
            </Text>
          )}
          {searchResults && searchResults.length > 0 && (
            <Box
              position="absolute"
              left={0}
              top={12}
              bgColor="white"
              border="1px solid #1976D2"
              borderRadius="8px"
              zIndex={1}
              width="100%"
              h="200px"
              overflowY={"scroll"}
            >
              {isLoading && <p>Carregando...</p>}
              {!isLoading &&
                searchResults.map((location) => (
                  <Text
                    alignSelf={"center"}
                    padding={"10px"}
                    key={location.name.common}
                    _hover={{
                      bgColor: "gray.400",
                      color: "primary.100",
                    }}
                    cursor={"pointer"}
                    onClick={() => handleCountrySelect(location)}
                  >
                    {location.name.common}, {location.capital},{" "}
                    {location.region}
                  </Text>
                ))}
            </Box>
          )}
        </Box>
      </form>
    </Flex>
  );
};

export default LocationInput;
