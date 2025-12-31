import { Phone, Clock, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteMetadata } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

export default function CTABanner() {
    const { phone } = siteMetadata.contact_details;

    return (
        <section className="bg-secondary py-12 md:py-16 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-300" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
            </div>

            <Container className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Content */}
                    <div className="text-center lg:text-left animate-fade-in-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-white" />
                                <span className="text-white/90 font-medium">Available 24/7</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-white" />
                                <span className="text-white/90 font-medium">All GTA</span>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Stranded Anywhere in the GTA?
                        </h2>
                        <p className="text-white/90 text-lg max-w-xl">
                            Don&apos;t wait on the roadside in Toronto, Scarborough, Markham, or beyond.
                            Call us now and we&apos;ll be there fast to get you back on the road safely.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-right">
                        <Button
                            href={createPhoneLink(phone)}
                            variant="primary"
                            size="lg"
                            className="bg-primary text-white hover:bg-primary-600 min-w-[200px] group
                                       hover:scale-105 transition-transform duration-300"
                        >
                            <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            {phone}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
