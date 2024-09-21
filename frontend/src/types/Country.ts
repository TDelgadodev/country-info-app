export interface BorderCountry {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
}

export interface Country {
    commonName: string; 
    officialName: string; 
    countryCode: string; 
    region: string; 
    borders: BorderCountry[]; 
    flagUrl: string; 
    name: string;
}
