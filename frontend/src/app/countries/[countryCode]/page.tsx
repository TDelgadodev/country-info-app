"use client";

import { useEffect, useState } from 'react';
import { Country } from '@/types/Country';

const CountryInfo = ({ params }: { params: { countryCode: string } }) => {
  const { countryCode } = params;
  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries/${countryCode}`);
        if (!res.ok) {
          throw new Error('Failed to fetch country info');
        }
        const data = await res.json();
        setCountry(data);
        setBorders(data.borders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryInfo();
  }, [countryCode]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country.commonName} ({country.countryCode})</h1>
      <p>Official Name: {country.officialName}</p>
      <p>Region: {country.region}</p>
      <h2>Border Countries:</h2>
      <ul>
        {borders.map(border => (
          <li key={border.countryCode}>
            <a href={`/countries/${border.countryCode}`}>{border.commonName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryInfo;
