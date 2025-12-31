import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { pageContent } from '@/lib/content';

const serviceImages: { [key: string]: string } = {
  'Tire Repair (Puncture Patching)': '/images/services/tire-repair.svg',
  'Tire Replacement & Installation': '/images/services/tire-installation.svg',
  'Tire Rotation & Balancing': '/images/services/tire-rotation.svg',
  'Seasonal Tire Changeover': '/images/services/seasonal-changeover.svg',
  'Battery Jumpstart & Replacement': '/images/services/battery-service.svg',
};

export default function ServicesOverview() {
  const services = pageContent.services.services_list.slice(0, 4); // Show first 4 services

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mobile Services Across the GTA
          </h2>
          <p className="text-gray-600 text-lg">
            Professional tire and auto services delivered right to your location anywhere in the Greater Toronto Area.
            We come to you with all the tools needed to get you back on the road.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 stagger-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className="text-center group overflow-hidden hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <CardHeader className="p-0">
                  <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <Image
                      src={serviceImages[service.name] || '/images/services/tire-repair.svg'}
                      alt={service.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </CardHeader>
                <CardBody>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.name.split('(')[0].trim()}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {service.description.split('.')[0]}.
                  </p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up delay-400">
          <Button href="/services/" variant="primary" size="lg" className="group">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
