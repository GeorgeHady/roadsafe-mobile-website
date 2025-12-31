import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Shield, CheckCircle, MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { pageContent } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Contact RoadSafe Mobile Tire & Auto for 24/7 mobile tire service across the GTA. Serving Toronto, Scarborough, Markham, Ajax, Brampton, Mississauga, and surrounding areas.',
};

const gtaServiceAreas = [
    { region: 'Toronto', areas: ['Downtown', 'North York', 'Etobicoke', 'York'] },
    { region: 'East GTA', areas: ['Scarborough', 'Markham', 'Ajax', 'Pickering'] },
    { region: 'West GTA', areas: ['Mississauga', 'Brampton', 'Oakville'] },
    { region: 'North GTA', areas: ['Vaughan', 'Richmond Hill', 'Newmarket'] },
];

export default function ContactPage() {
    const content = pageContent.contact_us;
    const { phone, address, hours } = content.contact_details;

    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Morphing blobs */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/15 animate-[morph_8s_ease-in-out_infinite] blur-3xl" />
                    <div className="absolute top-1/2 -left-32 w-64 h-64 bg-green-500/10 animate-[morph_10s_ease-in-out_infinite_reverse] blur-2xl" />
                    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/5 animate-[morph_12s_ease-in-out_infinite] blur-2xl" />

                    {/* Signal wave circles */}
                    <div className="absolute top-20 right-20 w-32 h-32 border border-green-400/20 rounded-full animate-[ripple_3s_ease-out_infinite]" />
                    <div className="absolute top-20 right-20 w-32 h-32 border border-green-400/15 rounded-full animate-[ripple_3s_ease-out_infinite_1s]" />
                    <div className="absolute top-20 right-20 w-32 h-32 border border-green-400/10 rounded-full animate-[ripple_3s_ease-out_infinite_2s]" />

                    {/* Spinning connection rings */}
                    <div className="absolute bottom-20 left-20 w-40 h-40 border border-secondary/15 rounded-full animate-[spin-slow_25s_linear_infinite]" />
                    <div className="absolute bottom-24 left-24 w-32 h-32 border border-secondary/10 rounded-full animate-[spin-reverse_20s_linear_infinite]" />

                    {/* Animated particles - contact themed */}
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-[ping_3.5s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-[wave_4s_ease-in-out_infinite]" />
                    <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400/50 rounded-full animate-[bounce-subtle_2s_ease-in-out_infinite]" />

                    {/* Floating communication icons */}
                    <div className="absolute top-1/4 left-10 opacity-10 animate-[float_5s_ease-in-out_infinite]">
                        <MessageCircle className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 opacity-10 animate-[float_6s_ease-in-out_infinite_1s]">
                        <MapPin className="w-10 h-10 text-white" />
                    </div>

                    {/* Glowing orb with orbiting particle */}
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-[glow-pulse_2s_ease-in-out_infinite] shadow-lg shadow-green-400/50" />
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-[rotate-orbit_4s_linear_infinite]" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                    {/* Gradient overlay that shifts */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-green-900/20 animate-[gradient-shift_10s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />

                    {/* Multiple shimmer lines */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-[shimmer_4s_ease-in-out_infinite_1s]" />

                    {/* Phone icon floating with glow effect */}
                    <div className="absolute top-1/3 right-10 md:right-20 opacity-20 animate-[float_4s_ease-in-out_infinite]">
                        <div className="relative">
                            <Phone className="w-24 h-24 md:w-32 md:h-32 text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                            {/* Ring animation around phone */}
                            <div className="absolute -inset-4 border-2 border-green-400/20 rounded-full animate-[ripple_2s_ease-out_infinite]" />
                        </div>
                    </div>
                </div>

                <Container className="relative">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-5 py-2.5 rounded-full mb-8 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 hover:bg-secondary/30 hover:scale-105 transition-all duration-300 border border-secondary/20" style={{ animationDelay: '0.1s' }}>
                            <MapPin className="w-4 h-4 animate-bounce" />
                            <span className="text-sm font-semibold tracking-wide">GTA-Wide 24/7 Service</span>
                            <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span></span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                            {content.heading}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                            {content.content}
                        </p>

                        {/* Quick contact info */}
                        <div className="mt-10 flex flex-wrap items-center gap-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                            <a href="tel:+19055551234" className="flex items-center gap-3 bg-secondary/20 hover:bg-secondary/30 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 group">
                                <Phone className="w-5 h-5 text-secondary group-hover:animate-bounce" />
                                <span className="text-white font-semibold">905-555-1234</span>
                            </a>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="w-5 h-5 text-green-400" />
                                <span>Available 24/7</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact Content */}
            <section className="section-padding overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6 animate-fade-in-left">
                            {/* Quick Contact Card */}
                            <Card hover={false}>
                                <CardBody>
                                    <h2 className="text-xl font-bold text-primary mb-6">
                                        Get in Touch
                                    </h2>

                                    <div className="space-y-4">
                                        {/* Phone Call */}
                                        <a
                                            href={createPhoneLink(phone)}
                                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:shadow-md"
                                        >
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                                <Phone className="w-6 h-6 text-secondary group-hover:text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Call Us 24/7</p>
                                                <p className="font-semibold text-primary">{phone}</p>
                                            </div>
                                        </a>

                                        {/* Text Message */}
                                        <a
                                            href={`sms:${phone.replace(/\D/g, '')}`}
                                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:shadow-md"
                                        >
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-all duration-300 group-hover:scale-110">
                                                <MessageCircle className="w-6 h-6 text-secondary group-hover:text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Text Us</p>
                                                <p className="font-semibold text-primary">{phone}</p>
                                            </div>
                                        </a>

                                        {/* Location */}
                                        <div className="flex items-center gap-4 p-3">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Service Area</p>
                                                <p className="font-semibold text-primary">{address}</p>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="flex items-center gap-4 p-3">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                                                <Clock className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Hours</p>
                                                <p className="font-semibold text-primary">Open {hours}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        href={createPhoneLink(phone)}
                                        variant="secondary"
                                        size="lg"
                                        className="w-full mt-6 group hover:scale-105 transition-transform"
                                    >
                                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                        Call Now
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Service Areas */}
                            <Card hover={false}>
                                <CardBody>
                                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-secondary" />
                                        GTA Coverage Areas
                                    </h3>
                                    <div className="space-y-4">
                                        {gtaServiceAreas.map((region, idx) => (
                                            <div key={region.region} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                                                <p className="font-semibold text-primary text-sm mb-1">{region.region}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {region.areas.map((area) => (
                                                        <span key={area} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full
                                                                                   hover:bg-secondary hover:text-white transition-colors cursor-default">
                                                            {area}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Contact Options */}
                        <div className="lg:col-span-2 animate-fade-in-right">
                            <Card hover={false}>
                                <CardBody className="p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-primary mb-6">
                                        Get Help Now
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Need roadside assistance or have questions about our services?
                                        We&apos;re available 24/7 by phone call or text message. Our team is ready to help you get back on the road!
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Call Option */}
                                        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Phone className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                                            <p className="text-gray-600 text-sm mb-4">Speak directly with our team for immediate assistance</p>
                                            <Button
                                                href={createPhoneLink(phone)}
                                                variant="secondary"
                                                size="lg"
                                                className="w-full group"
                                            >
                                                <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                                {phone}
                                            </Button>
                                        </div>

                                        {/* Text Option */}
                                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                                <MessageCircle className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-primary mb-2">Text Us</h3>
                                            <p className="text-gray-600 text-sm mb-4">Send a text message and we&apos;ll respond promptly</p>
                                            <Button
                                                href={`sms:${phone.replace(/\D/g, '')}`}
                                                variant="primary"
                                                size="lg"
                                                className="w-full group"
                                            >
                                                <MessageCircle className="w-5 h-5 mr-2" />
                                                Send Text
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                                        <p className="text-sm text-gray-600 text-center">
                                            <span className="font-semibold text-primary">Pro tip:</span> For fastest service,
                                            include your location and describe your issue when calling or texting.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Licensing & Compliance */}
            <section className="bg-gray-50 py-12">
                <Container>
                    <div className="max-w-3xl mx-auto animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-6 h-6 text-secondary" />
                            <h2 className="text-xl font-bold text-primary">
                                Licensing & Compliance
                            </h2>
                        </div>
                        <ul className="space-y-3 stagger-children">
                            {content.licensing_compliance_notes.map((note, index) => (
                                <li key={index} className="flex items-start gap-3 animate-fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            {/* GTA Map Section */}
            <section className="h-auto min-h-[500px] bg-gradient-to-b from-white to-gray-100 relative py-12">
                <Container>
                    <div className="text-center mb-8 animate-fade-in-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                            Serving the Entire GTA
                        </h2>
                        <p className="text-gray-600">
                            {content.service_area}
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto animate-scale-in">
                        <img
                            src="/images/gta-map.svg"
                            alt="GTA Service Area Map"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                </Container>
            </section>
        </>
    );
}
