// Type definitions for site content

export interface SiteMetadata {
    brand_name: string;
    domain_name_suggestions: string[];
    logo_concept: string;
    color_palette: {
        primary: string;
        secondary: string;
        accent: string;
    };
    pages: PageMeta[];
    contact_details: ContactDetails;
    service_area_summary: string;
}

export interface PageMeta {
    name: string;
    heading: string;
    description: string;
}

export interface ContactDetails {
    phone: string;
    address: string;
    hours: string;
}

export interface Service {
    name: string;
    description: string;
    compliance: string;
}

export interface Review {
    author: string;
    location: string;
    rating: number;
    text: string;
}

export interface HomePageContent {
    heading: string;
    content: string;
}

export interface AboutPageContent {
    heading: string;
    content: string;
}

export interface ServicesPageContent {
    heading: string;
    introduction: string;
    services_list: Service[];
}

export interface GalleryPageContent {
    heading: string;
    content: string;
}

export interface ReviewsPageContent {
    heading: string;
    content: string;
    reviews_list: Review[];
}

export interface ContactPageContent {
    heading: string;
    content: string;
    contact_details: ContactDetails;
    service_area: string;
    licensing_compliance_notes: string[];
}

export interface PageContent {
    home: HomePageContent;
    about_us: AboutPageContent;
    services: ServicesPageContent;
    gallery: GalleryPageContent;
    reviews: ReviewsPageContent;
    contact_us: ContactPageContent;
}
