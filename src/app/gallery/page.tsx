import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import CTABanner from '@/components/sections/CTABanner';
import { pageContent } from '@/lib/content';

export const metadata: Metadata = {
    title: 'Gallery',
    description:
        'See RoadSafe Mobile Tire & Auto in action. Browse photos of our mobile service trucks and on-site tire repairs across the Greater Toronto Area.',
};

// Gallery items with real images
const galleryItems = [
    {
        id: 1,
        title: 'Night Roadside Assistance',
        category: 'Service',
        description: '24/7 emergency tire service - we come to you anytime, anywhere',
        image: '/images/gallery/IMG-20251221-WA0002.jpg',
        size: 'normal',
    },
    {
        id: 2,
        title: 'Premium Tire Selection',
        category: 'Equipment',
        description: 'Quality Continental tires mounted on premium BMW alloy wheels',
        image: '/images/gallery/IMG-20251221-WA0005.jpg',
        size: 'tall',
    },
    {
        id: 3,
        title: 'Mobile Tire Change',
        category: 'Service',
        description: 'Professional on-site tire replacement at your location',
        image: '/images/gallery/IMG-20251221-WA0008.jpg',
        size: 'wide',
    },
    {
        id: 4,
        title: 'Fully Equipped Service Van',
        category: 'Equipment',
        description: 'Our mobile workshop with professional tire mounting and balancing equipment',
        image: '/images/gallery/IMG-20251221-WA0009.jpg',
        size: 'normal',
    },
];



const categories = ['All', 'Service', 'Equipment'];

export default function GalleryPage() {
    const content = pageContent.gallery;

    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Morphing blobs */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/15 animate-[morph_8s_ease-in-out_infinite] blur-3xl" />
                    <div className="absolute top-1/2 -left-32 w-64 h-64 bg-secondary/10 animate-[morph_10s_ease-in-out_infinite_reverse] blur-2xl" />
                    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/5 animate-[morph_12s_ease-in-out_infinite] blur-2xl" />

                    {/* Spinning camera frames */}
                    <div className="absolute top-16 right-16 w-24 h-24 border-2 border-secondary/20 rounded-lg animate-[spin-slow_15s_linear_infinite]" />
                    <div className="absolute top-20 right-20 w-16 h-16 border border-white/10 rounded-lg animate-[spin-reverse_12s_linear_infinite]" />

                    {/* Photo frame corners floating */}
                    <div className="absolute top-1/4 left-10 w-8 h-8 border-l-2 border-t-2 border-secondary/30 animate-[float_4s_ease-in-out_infinite]" />
                    <div className="absolute top-1/4 left-16 w-8 h-8 border-r-2 border-b-2 border-secondary/30 animate-[float_4s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute bottom-1/4 right-10 w-8 h-8 border-l-2 border-t-2 border-white/20 animate-[float_5s_ease-in-out_infinite_1s]" />
                    <div className="absolute bottom-1/4 right-16 w-8 h-8 border-r-2 border-b-2 border-white/20 animate-[float_5s_ease-in-out_infinite_1.5s]" />

                    {/* Animated particles */}
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-[ping_4s_ease-in-out_infinite_1s]" />
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-[wave_3s_ease-in-out_infinite]" />
                    <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-[bounce-subtle_2s_ease-in-out_infinite]" />

                    {/* Ripple effects like camera flash */}
                    <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-white/20 rounded-full animate-[ripple_2s_ease-out_infinite]" />
                    <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-secondary/20 rounded-full animate-[ripple_3s_ease-out_infinite_0.5s]" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                    {/* Gradient overlay that shifts */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 animate-[gradient-shift_10s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />

                    {/* Multiple shimmer lines */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite_0.5s]" />

                    {/* Camera icon floating with glow */}
                    <div className="absolute top-1/3 right-10 md:right-20 opacity-20 animate-[float_6s_ease-in-out_infinite]">
                        <div className="relative">
                            <svg className="w-24 h-24 md:w-32 md:h-32 text-white animate-[glow-pulse_3s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {/* Orbiting dot */}
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary rounded-full animate-[rotate-orbit_5s_linear_infinite]" />
                        </div>
                    </div>

                    {/* Secondary floating camera */}
                    <div className="absolute bottom-1/4 left-10 md:left-20 opacity-10 animate-[float_8s_ease-in-out_infinite_reverse]">
                        <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                </div>

                <Container className="relative">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-5 py-2.5 rounded-full mb-8 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 hover:bg-secondary/30 hover:scale-105 transition-all duration-300 border border-secondary/20" style={{ animationDelay: '0.1s' }}>
                            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="text-sm font-semibold tracking-wide">Our Work</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                            {content.heading}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                            {content.content}
                        </p>

                        {/* Decorative bars */}
                        <div className="mt-10 flex items-center gap-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-1.5 bg-gradient-to-r from-secondary to-secondary/60 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
                            <div className="w-10 h-1.5 bg-secondary/50 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.3s]" />
                            <div className="w-6 h-1.5 bg-secondary/30 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.6s]" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding bg-gradient-to-b from-white to-gray-50">
                <Container>
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 animate-pulse">
                            Our Work
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            See Us In Action
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From emergency roadside assistance to scheduled tire changes, we bring professional service directly to you.
                        </p>
                    </div>

                    {/* Bento Grid Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                        {/* Image 1 - Night Roadside (Large) */}
                        <div className="group relative md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                        animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.1s' }}>
                            <img
                                src={galleryItems[0].image}
                                alt={galleryItems[0].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                            opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            {/* Animated Border */}
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-secondary/60 
                                            rounded-2xl transition-all duration-500" />
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 
                                            group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                                        {galleryItems[0].category}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 
                                               drop-shadow-lg">
                                    {galleryItems[0].title}
                                </h3>
                                <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-500 delay-100 max-w-lg">
                                    {galleryItems[0].description}
                                </p>
                            </div>
                            {/* 24/7 Badge */}
                            <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full 
                                            text-sm font-bold shadow-lg animate-bounce">
                                24/7
                            </div>
                        </div>

                        {/* Image 2 - Premium Tires (Tall) */}
                        <div className="group relative aspect-[3/4] md:row-span-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                        animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.2s' }}>
                            <img
                                src={galleryItems[1].image}
                                alt={galleryItems[1].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                                            opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/60 
                                            rounded-2xl transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 
                                            group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
                                        {galleryItems[1].category}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                                    {galleryItems[1].title}
                                </h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-500 delay-100">
                                    {galleryItems[1].description}
                                </p>
                            </div>
                        </div>

                        {/* Image 3 - Mobile Change */}
                        <div className="group relative aspect-[4/3] md:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                        animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.3s' }}>
                            <img
                                src={galleryItems[2].image}
                                alt={galleryItems[2].title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent 
                                            opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-secondary/60 
                                            rounded-2xl transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 max-w-xl transform translate-y-4 
                                            group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                                        {galleryItems[2].category}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                                    {galleryItems[2].title}
                                </h3>
                                <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-500 delay-100">
                                    {galleryItems[2].description}
                                </p>
                            </div>
                            {/* We Come To You Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 
                                            rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                We Come To You
                            </div>
                        </div>

                        {/* Image 4 - Service Van Interior (Full Width) */}
                        <div className="group relative aspect-[16/9] md:aspect-[21/9] col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                        animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.4s' }}>
                            <img
                                src={galleryItems[3].image}
                                alt={galleryItems[3].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent 
                                            opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/60 
                                            rounded-2xl transition-all duration-500" />
                            <div className="absolute bottom-0 right-0 p-6 md:p-8 max-w-xl text-right transform translate-y-4 
                                            group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-end gap-2 mb-3">
                                    <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
                                        {galleryItems[3].category}
                                    </span>
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <h3 className="text-white font-bold text-xl md:text-3xl mb-2 drop-shadow-lg">
                                    {galleryItems[3].title}
                                </h3>
                                <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-500 delay-100">
                                    {galleryItems[3].description}
                                </p>
                            </div>
                            {/* Professional Equipment Badge */}
                            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full 
                                            text-sm font-bold shadow-lg flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Professional Equipment
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: '500+', label: 'Happy Customers', icon: '😊' },
                            { number: '24/7', label: 'Available', icon: '🕐' },
                            { number: '30min', label: 'Avg Response', icon: '⚡' },
                            { number: '100%', label: 'Satisfaction', icon: '⭐' },
                        ].map((stat, index) => (
                            <div key={index}
                                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl 
                                            transition-all duration-300 hover:-translate-y-1
                                            animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>


                </Container>
            </section>

            <CTABanner />
        </>
    );
}
