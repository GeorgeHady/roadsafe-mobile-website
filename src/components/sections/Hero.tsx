import { Phone, ArrowRight, MapPin, Shield, Clock, Star, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteMetadata } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

const gtaCities = [
  'Toronto',
  'Scarborough',
  'Markham',
  'Ajax',
  'Brampton',
  'Mississauga',
  'Vaughan',
  'Richmond Hill',
  'Pickering',
  'North York',
  'Etobicoke'
];

const trustIndicators = [
  { icon: Shield, text: 'Transparent Pricing' },
  { icon: Zap, text: 'Fast GTA-Wide Response' },
  { icon: Star, text: 'Experienced Team' },
  { icon: Clock, text: '24/7 Availability' },
];

export default function Hero() {
  const { phone } = siteMetadata.contact_details;

  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061229] via-primary to-[#0d2a5c]" />

        {/* Mesh gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Top shine */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 left-[20%] w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-32 right-[15%] w-2 h-2 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-[25%] w-4 h-4 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-[30%] w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 right-[10%] w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="animate-fade-in-down inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-5 py-2.5 rounded-full mb-6 border border-secondary/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide">Available 24/7 Across the GTA</span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Greater Toronto Area&apos;s
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-secondary 
                             animate-fade-in-up delay-200 mt-2">
                RoadSafe Mobile Tire &amp; Auto
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up delay-300 text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Flat tire or car trouble anywhere in the GTA? We bring professional tire service directly to you.
              Fast response, experienced team, and competitive pricing.
            </p>

            {/* GTA Cities List */}
            <div className="animate-fade-in-up delay-400 mb-10">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Serving All GTA Communities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {gtaCities.map((city, index) => (
                  <span
                    key={city}
                    className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm text-gray-200 text-sm rounded-full 
                               border border-white/10 hover:bg-secondary hover:border-secondary hover:text-white 
                               transition-all duration-300 cursor-default animate-scale-in"
                    style={{ animationDelay: `${400 + index * 50}ms` }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary Call Button */}
              <a
                href={createPhoneLink(phone)}
                className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white 
                           bg-gradient-to-r from-secondary via-orange-500 to-secondary bg-[length:200%_100%] rounded-2xl 
                           shadow-[0_10px_40px_-10px_rgba(240,90,40,0.5)]
                           hover:bg-[position:100%_0] hover:shadow-[0_20px_50px_-10px_rgba(240,90,40,0.6)] hover:scale-[1.02] 
                           active:scale-[0.98] transition-all duration-500 overflow-hidden"
              >
                {/* Animated shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent 
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {/* Button content */}
                <span className="relative flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm
                                   group-hover:bg-white/30 transition-colors">
                    <Phone className="w-6 h-6 group-hover:animate-bounce" />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="text-xs uppercase tracking-widest opacity-90">24/7 Emergency</span>
                    <span className="text-xl">{phone}</span>
                  </span>
                </span>
              </a>

              {/* Secondary Services Button */}
              <a
                href="/services/"
                className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-semibold 
                           text-white bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl
                           hover:bg-white hover:text-primary hover:border-white 
                           hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]
                           active:scale-[0.98] transition-all duration-300"
              >
                <span className="relative flex items-center gap-3">
                  <span className="text-lg">Explore Services</span>
                  <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl 
                                   group-hover:bg-secondary group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up delay-600 flex flex-wrap gap-4 md:gap-6">
              {trustIndicators.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full
                             border border-white/10 hover:border-secondary/50 hover:bg-secondary/10 
                             transition-all duration-300 group"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 left-5 w-60 h-60 bg-secondary/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}
