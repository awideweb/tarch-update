export interface Project {
  id: string;
  name: string;
  description?: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'aia' | 'non-aia';
  description?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}