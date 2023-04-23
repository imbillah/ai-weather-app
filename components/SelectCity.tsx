"use client";

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/outline";
type countryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;
type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const SelectCity = () => {
  const [selectCountry, setSelectCountry] = useState<countryOption>(null);
  const [selectCity, setSelectCity] = useState<cityOption>(null);
  const router = useRouter();

  const countryOptions = Country.getAllCountries().map((c) => ({
    value: {
      latitude: c.latitude,
      longitude: c.longitude,
      isoCode: c.isoCode,
    },
    label: c.name,
  }));

  const handleSelectCountry = (option: countryOption) => {
    setSelectCountry(option);
    setSelectCity(null);
  };
  const handleSelectCity = (option: cityOption) => {
    setSelectCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xl">
          <GlobeIcon className="w-8 h-8 text-black" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          options={countryOptions}
          value={selectCountry}
          onChange={handleSelectCountry}
        />
      </div>
      {selectCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xl">
            <GlobeIcon className="w-8 h-8 text-black" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            options={City.getCitiesOfCountry(selectCountry.value.isoCode)?.map(
              (ct) => ({
                value: {
                  latitude: ct.latitude,
                  longitude: ct.longitude,
                  countryCode: ct.countryCode,
                  name: ct.name,
                  stateCode: ct.stateCode,
                },
                label: ct.name,
              })
            )}
            value={selectCity}
            onChange={handleSelectCity}
          />
        </div>
      )}
    </div>
  );
};

export default SelectCity;
