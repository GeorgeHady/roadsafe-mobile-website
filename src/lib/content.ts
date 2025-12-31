import type {
    SiteMetadata,
    PageContent,
    ContactDetails,
    Service,
    Review
} from './types';

// Site metadata - hardcoded from YAML content
export const siteMetadata: SiteMetadata = {
    brand_name: "RoadSafe Mobile Tire & Auto",
    domain_name_suggestions: [
        "roadsafemobile.com",
        "roadsafetire.com",
        "roadsafeauto.com",
        "roadsafemobiletire.com"
    ],
    logo_concept: "A shield combined with a tire symbol to emphasize safety and reliability. The logo should convey motion (a road) and trustworthiness, using the brand colors.",
    color_palette: {
        primary: "Navy Blue (#0A1F44)",
        secondary: "Safety Orange (#F05A28)",
        accent: "White (#FFFFFF)"
    },
    pages: [
        {
            name: "home",
            heading: "On-Site Tire Service Anytime, Anywhere",
            description: "Homepage with a hero image, tagline, and an overview of services and key benefits."
        },
        {
            name: "about_us",
            heading: "Committed to Your Safety",
            description: "Page outlining the company's history, mission, and values, highlighting experience and dedication to safety."
        },
        {
            name: "services",
            heading: "Mobile Tire & Auto Services",
            description: "Overview of all services offered, each with a description and notes on safety/legal compliance."
        },
        {
            name: "gallery",
            heading: "RoadSafe in Action",
            description: "Photo gallery showcasing the mobile service team at work and equipment in use."
        },
        {
            name: "reviews",
            heading: "Testimonials",
            description: "Customer reviews page with testimonials and ratings from clients."
        },
        {
            name: "contact_us",
            heading: "Contact Us",
            description: "Contact information, service area coverage details, and licensing/compliance disclaimers."
        }
    ],
    contact_details: {
        phone: "905-555-1234",
        address: "Greater Toronto Area (Mobile Service - We Come to You)",
        hours: "24/7"
    },
    service_area_summary: "Serving the entire Greater Toronto Area including Toronto, Scarborough, Markham, Ajax, Brampton, Mississauga, and surrounding communities."
};

// Page content - hardcoded from YAML content
export const pageContent: PageContent = {
    home: {
        heading: "On-Site Tire Service Anytime, Anywhere",
        content: `Flat tire or unexpected car trouble? RoadSafe Mobile Tire & Auto brings the help to you wherever you are. Our fully equipped mobile units and expert technicians arrive on-site to repair or replace your tires, so you can get back on the road safely and quickly.

We handle everything from patching punctures to installing new tires right at your location. No more waiting for a tow truck or driving on a risky spare tire. Our team is experienced and committed to top-notch service with a smile - day or night.

With fast response times, competitive pricing, and a focus on safety, we make tire troubles less stressful. Stay safe and save time by calling RoadSafe anytime, 24/7. We'll be ready to keep you moving.`
    },
    about_us: {
        heading: "Committed to Your Safety",
        content: `RoadSafe Mobile Tire & Auto was founded with a simple mission: to make drivers feel safer and more supported on the road. As a locally owned business, we saw too many people stranded with flat tires or dead batteries, waiting hours for help. We knew there had to be a better way.

With over 10 years of automotive experience, our team launched RoadSafe to bring the tire shop directly to you. Our experienced team has helped countless motorists avoid towing and get back on their way faster. We take pride in our reputation for reliability, honesty, and excellent customer service.

Safety is at the core of everything we do. We ensure every repair or tire installation is done right, checking each detail for your peace of mind. We continuously improve our skills and stay updated on the latest safety standards. When you call us, you're not just a customer - you're our neighbor, and we'll treat you with the care and respect you deserve.`
    },
    services: {
        heading: "Mobile Tire & Auto Services",
        introduction: `RoadSafe offers a range of mobile tire and minor auto services to keep you moving. We come to you with all the tools and parts needed to get you back on the road swiftly and safely. Below is an overview of what we can do for you:`,
        services_list: [
            {
                name: "Tire Repair (Puncture Patching)",
                description: `Got a flat? If your tire has a small puncture (like a nail in the tread), we can repair it on the spot. Our technician will remove the object and patch or plug the tire from the inside, sealing the leak and reinforcing the tire for safe driving.`,
                compliance: "Repairs follow USTMA safety guidelines — we only fix punctures within the tread area and under a safe size limit, and we always test for leaks after the repair."
            },
            {
                name: "Tire Replacement & Installation",
                description: `When a tire is beyond repair, we offer on-site replacement to get you rolling again. Whether you have a spare ready or need a new tire from us, we'll mount and install it right where you are. We carry a selection of common tire sizes and can source specialty tires quickly to fit your vehicle.`,
                compliance: "All new tires are mounted and inflated to the proper PSI, and lug nuts are torqued to manufacturer specifications for maximum safety."
            },
            {
                name: "Tire Rotation & Balancing",
                description: `Regular rotations and balancing extend the life of your tires and ensure a smoother ride. We come to your home or workplace to rotate your tires (following the pattern your vehicle manufacturer recommends) and balance each wheel using precision mobile equipment.`,
                compliance: "Every rotation is done per manufacturer guidelines, and wheels are balanced to industry standards so you enjoy vibration-free driving."
            },
            {
                name: "Seasonal Tire Changeover",
                description: `When the seasons change, count on us to swap your winter or summer tires without the hassle of visiting a shop. We'll switch out your seasonal tires at your location and make sure they're properly inflated and ready for the road.`,
                compliance: "Seasonal changes are performed with proper safety measures (secure jacking and jack stands), and we ensure all lug nuts are re-torqued. We also check tread depths to confirm your tires are safe for the season."
            },
            {
                name: "Battery Jumpstart & Replacement",
                description: `In addition to tires, we can help if your car battery dies. Our roadside jumpstart service will get your vehicle started, or if the battery has failed, we can replace it with a new one on-site. We carry common battery types to fit most cars, trucks, and SUVs.`,
                compliance: "All battery work is handled safely to protect your vehicle's electronics, and we recycle old batteries in accordance with environmental regulations."
            }
        ]
    },
    gallery: {
        heading: "RoadSafe in Action",
        content: `Take a look at our team in action. Our gallery showcases RoadSafe technicians at work — from our fully stocked service trucks to happy customers back behind the wheel. We believe seeing is believing, so explore these photos to witness how we help drivers just like you.`
    },
    reviews: {
        heading: "Testimonials",
        content: `Don't just take our word for it — see what our customers have to say about RoadSafe Mobile Tire & Auto:`,
        reviews_list: [
            {
                author: "John D.",
                location: "Toronto",
                rating: 5,
                text: `Incredible service! I got a flat tire on the DVP, and RoadSafe was there within 20 minutes. The tech was super friendly and had me back on the road in no time. Life saver!`
            },
            {
                author: "Melissa T.",
                location: "Scarborough",
                rating: 5,
                text: `Highly recommend RoadSafe. I called late at night and they showed up with a new tire for my car. Professional, quick, and so convenient. I didn't have to tow my car or wait until the next day.`
            },
            {
                author: "David R.",
                location: "Markham",
                rating: 5,
                text: `Great experience overall. The pricing was transparent and the convenience can't be beat. They rotated my tires in my driveway while I was working from home. It was easy and hassle-free!`
            },
            {
                author: "Sara L.",
                location: "Brampton",
                rating: 5,
                text: `Friendly and knowledgeable staff. They went above and beyond to ensure my car was safe to drive after fixing my tire. I'll be using them for all my tire needs!`
            },
            {
                author: "Michael K.",
                location: "Mississauga",
                rating: 5,
                text: `Called them when my battery died at Square One. They arrived fast and got my car started right away. Excellent service across the GTA!`
            },
            {
                author: "Priya S.",
                location: "Ajax",
                rating: 5,
                text: `Best mobile tire service in the GTA! Had a blowout near the 401 and they came quickly. Professional and fair pricing. Highly recommend!`
            }
        ]
    },
    contact_us: {
        heading: "Contact Us",
        content: `Ready to get back on the road? Reach out to RoadSafe Mobile Tire & Auto anytime. Whether you have a flat tire, need a battery boost, or want a quote for our services, we're here to help across the entire GTA. Call or text us, and we'll get you back on track in no time.`,
        contact_details: {
            phone: "905-555-1234",
            address: "Greater Toronto Area (Mobile Service - We Come to You)",
            hours: "24/7"
        },
        service_area: "Serving all of the Greater Toronto Area including Toronto, Scarborough, North York, Etobicoke, Markham, Ajax, Pickering, Brampton, Mississauga, Vaughan, Richmond Hill, and surrounding communities.",
        licensing_compliance_notes: [
            "RoadSafe Mobile Tire & Auto provides tire services that do not require a mechanic license in Ontario.",
            "All services are performed following industry best practices and safety standards.",
            "Used tires and materials are disposed of in accordance with environmental regulations."
        ]
    }
};

// Helper functions
export function getContactDetails(): ContactDetails {
    return siteMetadata.contact_details;
}

export function getServices(): Service[] {
    return pageContent.services.services_list;
}

export function getReviews(): Review[] {
    return pageContent.reviews.reviews_list;
}

export function getBrandName(): string {
    return siteMetadata.brand_name;
}

export function getServiceArea(): string {
    return siteMetadata.service_area_summary;
}
