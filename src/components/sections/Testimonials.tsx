import { Star, Quote, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import { pageContent } from '@/lib/content';

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

export default function Testimonials() {
    const reviews = pageContent.reviews.reviews_list.slice(0, 3); // Show first 3 reviews

    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Trusted by GTA Drivers
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Don&apos;t just take our word for it — see what drivers across the Greater Toronto Area
                        have to say about our mobile tire service.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-6 md:p-8 relative animate-fade-in-up
                                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-6">
                                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center
                                              group-hover:scale-110 transition-transform duration-300">
                                    <Quote className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="mb-4 pt-2">
                                <StarRating rating={review.rating} />
                            </div>

                            {/* Review Text */}
                            <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                &quot;{review.text}&quot;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center
                                              group-hover:bg-secondary/10 transition-colors duration-300">
                                    <span className="text-primary font-semibold text-lg">
                                        {review.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">{review.author}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {review.location}, GTA
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overall Rating */}
                <div className="mt-12 text-center animate-fade-in-up delay-500">
                    <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full
                                   hover:bg-primary/10 transition-colors duration-300">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="font-semibold text-primary">
                            5.0 Average Rating from {pageContent.reviews.reviews_list.length}+ GTA Customers
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
