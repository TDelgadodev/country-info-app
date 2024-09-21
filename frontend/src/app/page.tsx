"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Country } from '@/types/Country';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get<Country[]>(`${process.env.NEXT_PUBLIC_API_URL}/countries`);
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map(country => (
          <li key={country.countryCode}>
            <Link href={`/country/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
