"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Country } from '@/types/Country';
import { Search, Globe } from 'lucide-react';
import CountryFlag from '../components/CountryFlag';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <Globe className="mr-2" /> World Countries
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search countries..."
              className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map(country => (
            <Link href={`/countries/${country.countryCode}`} key={country.countryCode} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <div className="relative h-40">
                <CountryFlag
                  countryCode={country.countryCode}
                  countryName={country.commonName}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{country.name}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{country.region}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}