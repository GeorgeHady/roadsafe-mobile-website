import type { Metadata } from 'next';
import { Star, Quote, ThumbsUp, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Card, CardBody } from '@/components/ui/Card';
import CTABanner from '@/components/sections/CTABanner';
import { pageContent } from '@/lib/content';

export const metadata: Metadata = {
    title: 'Customer Reviews',
    description:
        'Read what GTA customers say about RoadSafe Mobile Tire & Auto. 5-star rated mobile tire service across Toronto, Scarborough, Markham, Brampton, Mississauga, and Ajax.',
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 transition-all duration-300 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                />
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    const content = pageContent.reviews;
    const reviews = content.reviews_list;
    const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Morphing gold/yellow blobs */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 animate-[morph_8s_ease-in-out_infinite] blur-3xl" />
                    <div className="absolute top-1/2 -left-32 w-64 h-64 bg-secondary/10 animate-[morph_10s_ease-in-out_infinite_reverse] blur-2xl" />
                    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-yellow-400/5 animate-[morph_12s_ease-in-out_infinite] blur-2xl" />

                    {/* Spinning star circles */}
                    <div className="absolute top-20 right-20 w-32 h-32 border border-yellow-400/20 rounded-full animate-[spin-slow_20s_linear_infinite]" />
                    <div className="absolute top-24 right-24 w-24 h-24 border border-yellow-400/15 rounded-full animate-[spin-reverse_15s_linear_infinite]" />

                    {/* Animated floating stars with glow */}
                    <div className="absolute top-1/4 right-1/3 text-yellow-400/40 animate-[float_3s_ease-in-out_infinite]"><Star className="w-6 h-6 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" /></div>
                    <div className="absolute top-1/3 right-1/5 text-yellow-400/30 animate-[float_4s_ease-in-out_infinite_0.5s]"><Star className="w-4 h-4 fill-current drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]" /></div>
                    <div className="absolute bottom-1/3 left-1/4 text-yellow-400/35 animate-[float_5s_ease-in-out_infinite_1s]"><Star className="w-8 h-8 fill-current drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" /></div>
                    <div className="absolute top-2/3 right-1/4 text-yellow-400/25 animate-[wave_4s_ease-in-out_infinite]"><Star className="w-5 h-5 fill-current" /></div>
                    <div className="absolute bottom-1/4 left-1/3 text-yellow-400/20 animate-[bounce-subtle_3s_ease-in-out_infinite]"><Star className="w-4 h-4 fill-current" /></div>

                    {/* Orbiting stars */}
                    <div className="absolute top-1/2 right-1/3 w-4 h-4">
                        <div className="absolute text-yellow-400/40 animate-[rotate-orbit_6s_linear_infinite]"><Star className="w-3 h-3 fill-current" /></div>
                    </div>

                    {/* Pinging stars */}
                    <div className="absolute top-1/4 left-1/5 text-yellow-400/30 animate-[ping_2s_ease-in-out_infinite]"><Star className="w-4 h-4 fill-current" /></div>
                    <div className="absolute bottom-1/4 right-1/5 text-yellow-400/25 animate-[ping_3s_ease-in-out_infinite_1s]"><Star className="w-3 h-3 fill-current" /></div>

                    {/* Ripple effects */}
                    <div className="absolute top-1/3 left-1/3 w-4 h-4 border border-yellow-400/20 rounded-full animate-[ripple_3s_ease-out_infinite]" />
                    <div className="absolute bottom-1/3 right-1/3 w-4 h-4 border border-yellow-400/15 rounded-full animate-[ripple_4s_ease-out_infinite_1s]" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                    {/* Gradient overlay that shifts */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-yellow-900/20 animate-[gradient-shift_10s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />

                    {/* Multiple shimmer lines - gold themed */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                    <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-[shimmer_4s_ease-in-out_infinite_1s]" />

                    {/* Large decorative quote mark */}
                    <div className="absolute top-1/4 right-10 md:right-20 opacity-10 animate-[float_6s_ease-in-out_infinite]">
                        <Quote className="w-24 h-24 md:w-32 md:h-32 text-yellow-400" />
                    </div>
                </div>

                <Container className="relative">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-yellow-400 px-5 py-2.5 rounded-full mb-8 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 hover:bg-yellow-400/30 hover:scale-105 transition-all duration-300 border border-yellow-400/20" style={{ animationDelay: '0.1s' }}>
                            <Star className="w-4 h-4 fill-yellow-400 animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide">5-Star Rated Across the GTA</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />))}
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                            {content.heading}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                            {content.content}
                        </p>

                        {/* Decorative stars */}
                        <div className="mt-10 flex items-center gap-3 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />))}</div>
                            <span className="text-yellow-400 font-semibold">5.0 Average Rating</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Overall Rating Summary */}
            <section className="bg-secondary/5 py-12 overflow-hidden">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-fade-in-up">
                        {/* Rating Score */}
                        <div className="text-center">
                            <p className="text-6xl font-bold text-primary mb-2">
                                {averageRating.toFixed(1)}
                            </p>
                            <div className="flex justify-center mb-2">
                                <StarRating rating={Math.round(averageRating)} />
                            </div>
                            <p className="text-gray-600">Overall Rating</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-24 bg-gray-300" />

                        {/* Review Count */}
                        <div className="text-center">
                            <p className="text-6xl font-bold text-primary mb-2">{reviews.length}+</p>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-24 bg-gray-300" />

                        {/* Recommendation */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <ThumbsUp className="w-8 h-8 text-secondary" />
                                <p className="text-4xl font-bold text-primary">100%</p>
                            </div>
                            <p className="text-gray-600">Would Recommend</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Reviews Grid */}
            <section className="section-padding">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, index) => (
                            <Card key={index} hover={false}>
                                <CardBody>
                                    {/* Quote Icon */}
                                    <div className="mb-4">
                                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                                            <Quote className="w-5 h-5 text-secondary" />
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="mb-4">
                                        <StarRating rating={review.rating} />
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                                        &quot;{review.text}&quot;
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <span className="text-primary font-semibold text-lg">
                                                {review.author.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary">{review.author}</p>
                                            <p className="text-sm text-gray-500">{review.location}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <CTABanner />
        </>
    );
}
