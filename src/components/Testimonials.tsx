import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      text: "SoloTravel.ai transformed my solo trip to Japan. The AI recommendations were spot-on, and I felt safe throughout my journey.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      text: "The community features helped me meet amazing travel buddies. Now I have friends from all over the world!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      text: "As a first-time solo traveler, this platform gave me the confidence I needed. The safety features are incredible.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Travelers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real experiences from solo travelers around the world
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}