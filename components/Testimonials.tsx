
import React from 'react';

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-slate-600'}`}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);


const Rating: React.FC<{ score: number }> = ({ score }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < score} />
        ))}
    </div>
);


const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Freelance Designer',
      quote: 'ZenithPay has completely changed how I handle my finances. It\'s incredibly fast, and I feel so much more secure than with my old banking app. Sending invoices and getting paid is now a breeze!',
      avatar: 'https://picsum.photos/seed/person1/100/100',
      rating: 5,
    },
    {
      name: 'Mike R.',
      role: 'Small Business Owner',
      quote: 'The ability to make instant international payments has been a game-changer for my business. Low fees, great exchange rates, and top-notch security. I highly recommend it to any entrepreneur.',
      avatar: 'https://picsum.photos/seed/person2/100/100',
      rating: 5,
    },
    {
      name: 'Alex Chen',
      role: 'Student',
      quote: 'Splitting bills with my roommates used to be a headache. With ZenithPay, it takes two seconds. The interface is so clean and easy to use. Honestly, I don\'t know how I managed without it.',
      avatar: 'https://picsum.photos/seed/person3/100/100',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Loved by Users Worldwide</h2>
          <p className="mt-4 text-lg text-slate-400">
            Don't just take our word for it. Here's what some of our happy customers have to say about their ZenithPay experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col">
              <div className="flex-grow mb-4">
                <Rating score={testimonial.rating} />
                <p className="text-slate-300 mt-4 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
