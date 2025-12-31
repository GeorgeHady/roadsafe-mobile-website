import { Clock, Shield, Truck, Award, ThumbsUp, Zap, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

const features = [
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Day or night, weekday or weekend — we\'re always ready to help across the GTA.',
    },
    {
        icon: Truck,
        title: 'We Come to You',
        description: 'No towing needed. We bring the tire shop to your location anywhere in the GTA.',
    },
    {
        icon: Zap,
        title: 'Fast GTA Response',
        description: 'Quick 20-30 minute arrival times throughout the Greater Toronto Area.',
    },
    {
        icon: Shield,
        title: 'Transparent Pricing',
        description: 'No hidden fees or surprises. Upfront, honest pricing every time.',
    },
    {
        icon: MapPin,
        title: 'GTA-Wide Coverage',
        description: 'Toronto, Scarborough, Markham, Brampton, Mississauga, and beyond.',
    },
    {
        icon: ThumbsUp,
        title: 'Satisfaction Guaranteed',
        description: 'We stand behind our work with quality service every time.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                        The RoadSafe Difference
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Why GTA Drivers Choose Us
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We&apos;re committed to providing the best mobile tire service experience
                        across the entire Greater Toronto Area. Here&apos;s what sets us apart.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300
                                       hover:shadow-lg hover:-translate-y-1 animate-fade-in-up group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center
                                              group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
