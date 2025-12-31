import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteMetadata } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Services', href: '/services/' },
  { name: 'Gallery', href: '/gallery/' },
  { name: 'Reviews', href: '/reviews/' },
  { name: 'Contact', href: '/contact/' },
];

const services = [
  'Tire Repair',
  'Tire Replacement',
  'Tire Rotation',
  'Seasonal Changeover',
  'Battery Service',
];

export default function Footer() {
  const { phone, address, hours } = siteMetadata.contact_details;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12">
                  <img
                    src="/images/logo.svg"
                    alt="RoadSafe Logo"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">RoadSafe</span>
                  <span className="block text-xs text-gray-300 -mt-1">Mobile Tire & Auto</span>
                </div>
              </Link>
              <p className="text-gray-300 text-sm mb-4">
                The GTA&apos;s trusted mobile tire service. We come to you 24/7, wherever you are in the Greater Toronto Area.
              </p>
              <p className="text-gray-400 text-sm">
                {siteMetadata.service_area_summary}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services/"
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={createPhoneLink(phone)}
                    className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`sms:${phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Text Us</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{address}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>Open {hours}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} RoadSafe Mobile Tire & Auto. All rights reserved.</p>
            <p className="text-center md:text-right">
              Serving the entire Greater Toronto Area — Toronto, Scarborough, Markham, Ajax, Brampton, Mississauga & more.
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
            <p>
              Designed and powered by{' '}
              <a
                href="https://rimush.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-orange-400 transition-colors"
              >
                rimush.ca
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
