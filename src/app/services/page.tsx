import type { Metadata } from 'next';
import { Wrench, CircleDot, RefreshCw, Snowflake, Battery, CheckCircle, Shield, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { pageContent } from '@/lib/content';

export const metadata: Metadata = {
    title: 'Our Services',
    description:
        'Mobile tire repair, replacement, rotation, seasonal changeover, and battery service. Professional on-site tire services across the GTA - Toronto, Scarborough, Markham, Ajax, Brampton, Mississauga.',
};

const serviceIcons: { [key: string]: React.ReactNode } = {
    'Tire Repair (Puncture Patching)': <Wrench className="w-10 h-10" />,
    'Tire Replacement & Installation': <CircleDot className="w-10 h-10" />,
    'Tire Rotation & Balancing': <RefreshCw className="w-10 h-10" />,
    'Seasonal Tire Changeover': <Snowflake className="w-10 h-10" />,
    'Battery Jumpstart & Replacement': <Battery className="w-10 h-10" />,
};

export default function ServicesPage() {
    const content = pageContent.services;

    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating orbs with different animations */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl 
                                    animate-[pulse_4s_ease-in-out_infinite]" />
                    <div className="absolute top-1/2 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-2xl 
                                    animate-[float_8s_ease-in-out_infinite]" />
                    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl 
                                    animate-[float_6s_ease-in-out_infinite_reverse]" />
                    <div className="absolute top-20 left-1/3 w-32 h-32 bg-secondary/5 rounded-full blur-xl 
                                    animate-[float_10s_ease-in-out_infinite]" />

                    {/* Animated particles */}
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-secondary/40 rounded-full 
                                    animate-[ping_3s_ease-in-out_infinite]" />
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full 
                                    animate-[ping_4s_ease-in-out_infinite_1s]" />
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary/30 rounded-full 
                                    animate-[ping_3.5s_ease-in-out_infinite_0.5s]" />

                    {/* Animated grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                               linear-gradient(to bottom, white 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }} />

                    {/* Moving diagonal lines */}
                    <div className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 30px,
                                white 30px,
                                white 31px
                            )`
                        }} />

                    {/* Animated road lines at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent
                                    animate-[shimmer_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                    animate-[shimmer_3s_ease-in-out_infinite_0.5s]" />

                    {/* Animated tire icon floating */}
                    <div className="absolute top-1/3 right-10 md:right-20 opacity-10 animate-[spin_20s_linear_infinite]">
                        <svg className="w-32 h-32 md:w-48 md:h-48" viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white" />
                            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="6" className="text-secondary" />
                            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-white/50" />
                        </svg>
                    </div>
                </div>

                <Container className="relative">
                    <div className="max-w-3xl">
                        {/* Badge with animation */}
                        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-5 py-2.5 rounded-full mb-8
                                        animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 hover:bg-secondary/30 hover:scale-105
                                        transition-all duration-300 cursor-default border border-secondary/20"
                            style={{ animationDelay: '0.1s' }}>
                            <MapPin className="w-4 h-4 animate-bounce" />
                            <span className="text-sm font-semibold tracking-wide">Mobile Services Across GTA</span>
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                        </div>

                        {/* Heading with animation and gradient */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6
                                       animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0
                                       bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
                            style={{ animationDelay: '0.2s' }}>
                            {content.heading}
                        </h1>

                        {/* Description with animation */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.3s' }}>
                            {content.introduction}
                        </p>

                        {/* Animated decorative element with icons */}
                        <div className="mt-10 flex items-center gap-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: '0.4s' }}>
                            {/* Animated bars */}
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 bg-gradient-to-r from-secondary to-secondary/60 rounded-full 
                                                animate-[pulse_2s_ease-in-out_infinite]" />
                                <div className="w-10 h-1.5 bg-secondary/50 rounded-full 
                                                animate-[pulse_2s_ease-in-out_infinite_0.3s]" />
                                <div className="w-6 h-1.5 bg-secondary/30 rounded-full 
                                                animate-[pulse_2s_ease-in-out_infinite_0.6s]" />
                            </div>

                            {/* Quick stats */}
                            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center
                                                     animate-[bounce_2s_ease-in-out_infinite]">
                                        <span className="text-secondary text-xs font-bold">24</span>
                                    </span>
                                    <span>Hour Service</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center
                                                     animate-[bounce_2s_ease-in-out_infinite_0.3s]">
                                        <span className="text-secondary text-xs font-bold">⚡</span>
                                    </span>
                                    <span>Fast Response</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services List */}
            <section className="section-padding overflow-hidden">
                <Container>
                    <div className="space-y-8">
                        {content.services_list.map((service, index) => (
                            <div
                                key={index}
                                className="group animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <Card hover={false} className="overflow-hidden border-l-4 border-l-transparent 
                                    hover:border-l-secondary hover:shadow-2xl transition-all duration-500 
                                    hover:-translate-y-1 relative">

                                    {/* Animated gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 
                                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="md:flex relative">
                                        {/* Icon Section */}
                                        <div className="md:w-48 bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 
                                                        flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-secondary
                                                            shadow-lg group-hover:bg-secondary group-hover:text-white 
                                                            transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                                                            group-hover:shadow-secondary/30 group-hover:shadow-xl">
                                                {serviceIcons[service.name] || <Wrench className="w-10 h-10" />}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-6 md:p-8">
                                            <CardHeader className="mb-0">
                                                <div className="flex flex-wrap items-start justify-between gap-4">
                                                    <h2 className="text-2xl font-bold text-primary group-hover:text-secondary 
                                                                   transition-colors duration-300">
                                                        {service.name}
                                                    </h2>
                                                    <Badge variant="secondary" className="group-hover:animate-pulse">
                                                        Mobile Service
                                                    </Badge>
                                                </div>
                                            </CardHeader>

                                            <CardBody>
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {service.description}
                                                </p>
                                            </CardBody>

                                            <CardFooter className="bg-gradient-to-r from-gray-50 to-gray-100/50 -mx-6 md:-mx-8 -mb-6 md:-mb-8 px-6 md:px-8 py-4 mt-4
                                                                   group-hover:from-secondary/5 group-hover:to-primary/5 transition-all duration-500">
                                                <div className="flex items-start gap-3">
                                                    <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 
                                                                       group-hover:scale-110 transition-transform duration-300" />
                                                    <div>
                                                        <p className="text-sm font-semibold text-primary mb-1">
                                                            Safety & Compliance
                                                        </p>
                                                        <p className="text-sm text-gray-600">{service.compliance}</p>
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary 
                                                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </Card>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Services Illustrated */}
            <section className="bg-gradient-to-b from-white to-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Our Services Illustrated
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A visual guide to our comprehensive mobile tire services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Roadside Assistance',
                                category: 'Service',
                                description: 'We come to you - day or night, wherever you are',
                                image: '/images/gallery/roadside-assistance.svg',
                            },
                            {
                                title: 'On-Site Tire Service',
                                category: 'Service',
                                description: 'Professional tire service at your location',
                                image: '/images/gallery/onsite-service.svg',
                            },
                            {
                                title: 'Home Service',
                                category: 'Service',
                                description: 'Convenient service at your driveway',
                                image: '/images/gallery/home-service.svg',
                            },
                            {
                                title: 'Professional Tools',
                                category: 'Equipment',
                                description: 'Industry-standard equipment for quality service',
                                image: '/images/gallery/professional-tools.svg',
                            },
                            {
                                title: 'Happy Customer',
                                category: 'Customers',
                                description: 'Another satisfied customer back on the road',
                                image: '/images/gallery/happy-customer.svg',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                                           transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="aspect-[3/2] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 
                                                   group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`w-2 h-2 rounded-full ${item.category === 'Service' ? 'bg-secondary' :
                                            item.category === 'Equipment' ? 'bg-primary' : 'bg-green-500'
                                            }`} />
                                        <span className={`text-xs font-semibold uppercase tracking-wider ${item.category === 'Service' ? 'text-secondary' :
                                            item.category === 'Equipment' ? 'text-primary' : 'text-green-600'
                                            }`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary 
                                                   transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary 
                                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Choose Our Services */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Why Choose Our Mobile Services?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We bring professional tire service directly to you, saving you time and hassle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Convenience',
                                description: 'No need to drive on a damaged tire or wait at a shop. We come to you.',
                            },
                            {
                                title: 'Professional Equipment',
                                description: 'Our trucks carry all the tools needed for professional tire service.',
                            },
                            {
                                title: 'Quality Work',
                                description: 'All services follow industry best practices and safety standards.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <CTABanner />
        </>
    );
}
