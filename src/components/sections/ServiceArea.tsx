import Image from 'next/image';
import { MapPin, CheckCircle, Clock, Users, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteMetadata } from '@/lib/content';
import Button from '@/components/ui/Button';
import { createPhoneLink } from '@/lib/utils';

const gtaRegions = [
    { name: 'Toronto', areas: ['Downtown', 'Midtown', 'North York', 'Etobicoke', 'York'] },
    { name: 'Scarborough', areas: ['Agincourt', 'Malvern', 'Morningside', 'Rouge'] },
    { name: 'Markham', areas: ['Unionville', 'Thornhill East', 'Milliken'] },
    { name: 'Brampton', areas: ['Downtown Brampton', 'Bramalea', 'Heart Lake'] },
    { name: 'Mississauga', areas: ['Square One', 'Port Credit', 'Streetsville', 'Meadowvale'] },
    { name: 'Ajax', areas: ['Downtown Ajax', 'Pickering Beach'] },
    { name: 'Vaughan', areas: ['Woodbridge', 'Maple', 'Concord'] },
    { name: 'Richmond Hill', areas: ['Oak Ridges', 'Langstaff'] },
    { name: 'Pickering', areas: ['Pickering Town Centre', 'Liverpool'] },
];

export default function ServiceArea() {
    const { phone } = siteMetadata.contact_details;

    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold">GTA-Wide Coverage</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Serving the Entire Greater Toronto Area
                    </h2>
                    <p className="text-gray-600 text-lg">
                        From downtown Toronto to the surrounding suburbs — our mobile service reaches you
                        wherever you are in the GTA. No towing needed, we come to you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* GTA Map */}
                    <div className="animate-fade-in-left">
                        <div className="relative bg-white rounded-2xl shadow-xl p-4 overflow-hidden group">
                            {/* Map Image */}
                            <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/gta-map.svg"
                                    alt="GTA Service Area Map"
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Map overlay info */}
                            <div className="absolute bottom-8 left-8 right-8 bg-primary/95 backdrop-blur rounded-xl p-4 
                                          transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                          transition-all duration-300">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <p className="text-sm text-gray-300">Average Response Time</p>
                                        <p className="text-2xl font-bold text-secondary">20-30 min</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-300">Coverage Area</p>
                                        <p className="text-2xl font-bold">100% GTA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6 stagger-children">
                            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up">
                                <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-primary">24/7</p>
                                <p className="text-xs text-gray-500">Service</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up">
                                <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-primary">500+</p>
                                <p className="text-xs text-gray-500">Happy Customers</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up">
                                <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-primary">50+</p>
                                <p className="text-xs text-gray-500">Areas Covered</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas List */}
                    <div className="animate-fade-in-right">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-secondary" />
                                Cities & Regions We Serve
                            </h3>

                            <div className="space-y-4 stagger-children">
                                {gtaRegions.map((region, index) => (
                                    <div
                                        key={region.name}
                                        className="p-4 rounded-xl border-2 border-gray-100 bg-white transition-all duration-300 
                                                   hover:shadow-md hover:border-secondary/30 animate-fade-in-up cursor-default"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <h4 className="font-semibold text-primary flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-secondary" />
                                                {region.name}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Including: {region.areas.join(' • ')}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                                <p className="text-sm text-gray-600 mb-3">
                                    Don&apos;t see your area? We likely still serve you!
                                </p>
                                <Button
                                    href={createPhoneLink(phone)}
                                    variant="secondary"
                                    size="sm"
                                    className="w-full justify-center"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call to Confirm Coverage
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
