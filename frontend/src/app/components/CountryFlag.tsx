import Image from 'next/image';

interface CountryFlagProps {
  countryCode: string;
  countryName: string;
  className?: string;
}

export default function CountryFlag({ countryCode, countryName, className }: CountryFlagProps) {
  const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;

  return (
    <div className={`relative h-40 w-full ${className}`}>
      <Image
        src={flagUrl}
        alt={`Flag of ${countryName}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}