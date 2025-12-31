import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Award, Users, Heart, MapPin, Wrench, Car, Battery, Gauge, Settings, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import CTABanner from '@/components/sections/CTABanner';
import { pageContent } from '@/lib/content';

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Learn about RoadSafe Mobile Tire & Auto - the GTA\'s trusted mobile tire service provider. Serving Toronto, Scarborough, Markham, Brampton, Mississauga, Ajax, and surrounding areas.',
};

const values = [
    {
        icon: Shield,
        title: 'Safety First',
        description:
            'Every repair and installation is done with your safety as the top priority.',
    },
    {
        icon: Award,
        title: 'Quality Service',
        description:
            'We use quality parts and follow industry best practices for every job.',
    },
    {
        icon: Users,
        title: 'Customer Focus',
        description:
            "You're not just a customer - you're our neighbor. We treat you like family.",
    },
    {
        icon: Heart,
        title: 'Honest & Transparent',
        description:
            'No hidden fees, no upselling. Just honest service at fair prices.',
    },
];

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'GTA Customers' },
    { value: '24/7', label: 'Availability' },
    { value: '100%', label: 'GTA Coverage' },
];

export default function AboutPage() {
    const content = pageContent.about_us;

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

                    {/* Spinning rings */}
                    <div className="absolute top-20 right-20 w-32 h-32 border border-secondary/20 rounded-full animate-[spin-slow_20s_linear_infinite]" />
                    <div className="absolute top-24 right-24 w-24 h-24 border border-secondary/15 rounded-full animate-[spin-reverse_15s_linear_infinite]" />
                    <div className="absolute bottom-20 left-20 w-40 h-40 border border-white/10 rounded-full animate-[spin-slow_25s_linear_infinite]" />

                    {/* Glowing orbs with orbiting particles */}
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full animate-[glow-pulse_2s_ease-in-out_infinite] shadow-lg shadow-secondary/50" />
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-[rotate-orbit_4s_linear_infinite]" />

                    {/* Animated particles */}
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-[ping_3.5s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-white/40 rounded-full animate-[wave_4s_ease-in-out_infinite]" />
                    <div className="absolute top-1/2 right-10 w-1 h-1 bg-secondary/50 rounded-full animate-[bounce-subtle_2s_ease-in-out_infinite]" />
                    <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-[ping_4s_ease-in-out_infinite_1s]" />

                    {/* Ripple effects */}
                    <div className="absolute top-1/2 left-1/3 w-4 h-4 border border-secondary/20 rounded-full animate-[ripple_3s_ease-out_infinite]" />
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-4 border border-white/10 rounded-full animate-[ripple_4s_ease-out_infinite_1s]" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                    {/* Gradient overlay that shifts */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 animate-[gradient-shift_10s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />

                    {/* Multiple shimmer lines */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-[shimmer_4s_ease-in-out_infinite_1s]" />
                </div>

                <Container className="relative">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-5 py-2.5 rounded-full mb-8 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 hover:bg-secondary/30 hover:scale-105 transition-all duration-300 border border-secondary/20" style={{ animationDelay: '0.1s' }}>
                            <MapPin className="w-4 h-4 animate-bounce" />
                            <span className="text-sm font-semibold tracking-wide">Serving All of GTA</span>
                            <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span></span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                            {content.heading}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                            The Greater Toronto Area&apos;s trusted mobile tire service provider, serving
                            Toronto, Scarborough, Markham, Ajax, Brampton, Mississauga, and all surrounding
                            communities with dedication and expertise.
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

            {/* Story Section */}
            <section className="section-padding overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-left">
                            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                Our Story
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                {content.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-fade-in-right">
                            {/* Decorative background elements */}
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-secondary/10 rounded-2xl blur-2xl animate-pulse" />
                            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/5 rounded-2xl blur-xl animate-pulse delay-300" />

                            {/* Main professional equipment showcase */}
                            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                                {/* Center vehicle illustration with logo */}
                                <div className="relative mb-8">
                                    <div className="flex items-center justify-center gap-6 md:gap-8">
                                        {/* Logo beside car */}
                                        <div className="animate-float">
                                            <Image
                                                src="/images/logo.svg"
                                                alt="RoadSafe Mobile Tire & Auto"
                                                width={240}
                                                height={85}
                                                className="h-32 md:h-36 w-auto drop-shadow-2xl"
                                            />
                                        </div>

                                        {/* Car */}
                                        <div className="relative">
                                            <Car className="w-40 h-40 md:w-48 md:h-48 text-white/90 drop-shadow-2xl" strokeWidth={1.5} />
                                            {/* Tire positions */}
                                            <div className="absolute -left-4 top-1/3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-xl">
                                                <div className="w-8 h-8 border-4 border-gray-400 rounded-full" />
                                            </div>
                                            <div className="absolute -right-4 top-1/3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-xl">
                                                <div className="w-8 h-8 border-4 border-gray-400 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Professional equipment grid */}
                                <div className="relative grid grid-cols-3 gap-4 md:gap-6 mb-6">
                                    {/* Tool 1 - Wrench */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Wrench className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Pro Tools</p>
                                    </div>

                                    {/* Tool 2 - Battery */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Battery className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Battery Test</p>
                                    </div>

                                    {/* Tool 3 - Gauge */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Gauge className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Pressure</p>
                                    </div>

                                    {/* Tool 4 - Settings */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Settings className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Alignment</p>
                                    </div>

                                    {/* Tool 5 - Zap */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Zap className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Fast Service</p>
                                    </div>

                                    {/* Tool 6 - Shield */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                        <Shield className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                                        <p className="text-xs md:text-sm text-white/80 text-center font-medium">Certified</p>
                                    </div>
                                </div>

                                {/* Floating stat card */}
                                <div className="relative bg-white rounded-xl shadow-2xl p-6 animate-float border-4 border-secondary/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-4xl font-bold text-secondary mb-1">10+</p>
                                            <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                                        </div>
                                        <Award className="w-12 h-12 text-secondary/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-12">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="section-padding">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Our Values
                        </h2>
                        <p className="text-gray-600 text-lg">
                            These core values guide everything we do at RoadSafe Mobile Tire & Auto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Trust Indicators */}
            <section className="bg-primary/5 py-12">
                <Container>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3">
                            <Shield className="w-8 h-8 text-secondary" />
                            <span className="font-semibold text-primary">Safety Focused</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="w-8 h-8 text-secondary" />
                            <span className="font-semibold text-primary">Transparent Pricing</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-8 h-8 text-secondary" />
                            <span className="font-semibold text-primary">Experienced Team</span>
                        </div>
                    </div>
                </Container>
            </section>

            <CTABanner />
        </>
    );
}
