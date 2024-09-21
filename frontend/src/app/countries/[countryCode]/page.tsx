"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Country } from "@/types/Country";
import { ArrowLeft, Globe, Flag, Compass } from "lucide-react";
import CountryFlag from "@/app/components/CountryFlag";

export default function CountryInfo({
  params,
}: {
  params: { countryCode: string };
}) {
  const { countryCode } = params;
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/countries/${countryCode}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch country info");
        }
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load country information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [countryCode]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  if (!country) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/countries"
            className="flex items-center text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <ArrowLeft className="mr-2" /> Back to Countries
          </Link>
        </div>
      </header>
      <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
                <div className="relative h-64 md:h-full">
                  <CountryFlag
                    className="relative aspect-[3/2] h-auto w-auto object-fill"
                    countryCode={country.countryCode}
                    countryName={country.commonName}
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {country.commonName} ({country.countryCode})
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Flag className="mr-2 text-gray-500" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Official Name: {country.officialName}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Globe className="mr-2 text-gray-500" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Region: {country.region}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Compass className="mr-2 text-gray-500" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Country Code: {country.countryCode}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Border Countries
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {country.borders.map((border) => (
                      <Link
                        href={`/countries/${border.countryCode}`}
                        key={border.countryCode}
                        className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
                      >
                        {border.commonName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
