import React from 'react';
import { Card } from '@/components/ui/card';
import { Wrench, Car, Clock, DollarSign, Star, Phone } from 'lucide-react';

const MobileBrakeLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Tallahassee Mobile Brake Service - We Come to You!
          </h1>
          <p className="text-xl mb-8">
            Professional brake replacement at your home or office. Save time and money with our mobile service.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
            Book Now - Free Quote
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Service</h3>
              <p>We come to your location - home, work, or anywhere convenient for you</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p>Save money with our efficient mobile service - no overhead costs</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p>Available when you need us - including evenings and weekends</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start">
                <Wrench className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brake Service</h3>
                  <ul className="space-y-2">
                    <li>• Brake pad replacement</li>
                    <li>• Rotor inspection and replacement</li>
                    <li>• Brake fluid check and top-up</li>
                    <li>• Complete brake system inspection</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start">
                <Star className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Choose Us</h3>
                  <ul className="space-y-2">
                    <li>• Licensed and insured technicians</li>
                    <li>• Convenient mobile service</li>
                    <li>• Competitive pricing</li>
                    <li>• Quality parts and workmanship</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Customer Reviews</h2>
          <p className="text-gray-600 text-center mb-12">See what our satisfied customers are saying</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-yellow-400 text-blue-900 rounded-full p-2 font-bold">
                  5.0 ★
                </div>
              </div>
              <div className="flex flex-col h-full">
                <p className="text-gray-700 mb-4">
                  "Incredible service! My brakes started squealing on my way to work. They came right to my office parking lot and replaced my brake pads during my shift. Saved me so much time and hassle!"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-500">Killearn Estates</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-yellow-400 text-blue-900 rounded-full p-2 font-bold">
                  5.0 ★
                </div>
              </div>
              <div className="flex flex-col h-full">
                <p className="text-gray-700 mb-4">
                  "As a student at FSU, I really appreciated them coming to my apartment complex. The price was much better than other shops, and they were done in about an hour. Highly recommend!"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Marcus J.</p>
                  <p className="text-sm text-gray-500">FSU Student</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-yellow-400 text-blue-900 rounded-full p-2 font-bold">
                  5.0 ★
                </div>
              </div>
              <div className="flex flex-col h-full">
                <p className="text-gray-700 mb-4">
                  "Great experience with this mobile brake service! They were honest about what needed to be replaced and what didn't. Saved me hundreds compared to the dealership quote. Will use again!"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Robert K.</p>
                  <p className="text-sm text-gray-500">Southwood</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 relative">
              <div className="absolute -top-3 -right-3">
                <div className="bg-yellow-400 text-blue-900 rounded-full p-2 font-bold">
                  5.0 ★
                </div>
              </div>
              <div className="flex flex-col h-full">
                <p className="text-gray-700 mb-4">
                  "Called them for an emergency brake repair on a Sunday. They arrived within an hour, fixed the issue right in my driveway, and the price was very reasonable. Outstanding service!"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Lisa W.</p>
                  <p className="text-sm text-gray-500">Crawfordville</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold mb-4">Overall Rating</p>
            <div className="flex justify-center items-center gap-2 text-2xl">
              <span className="text-yellow-400">★★★★★</span>
              <span className="font-bold">5.0</span>
              <span className="text-gray-500 text-lg">(127 Reviews)</span>
            </div>
          </div>

          {/* Review Submission Form */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Share Your Experience</h3>
            <Card className="max-w-2xl mx-auto p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Service Location</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select location</option>
                    <option value="tallahassee">Tallahassee</option>
                    <option value="killearn">Killearn Estates</option>
                    <option value="southwood">Southwood</option>
                    <option value="fsu">FSU/FAMU Area</option>
                    <option value="crawfordville">Crawfordville</option>
                    <option value="quincy">Quincy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Rating</label>
                  <div className="flex gap-4 text-3xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-gray-300 hover:text-yellow-400 focus:text-yellow-400 transition-colors"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Service Type</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select service received</option>
                    <option value="brake-pads">Brake Pad Replacement</option>
                    <option value="rotors">Rotor Replacement</option>
                    <option value="emergency">Emergency Brake Service</option>
                    <option value="inspection">Brake System Inspection</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Review</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                    placeholder="Share your experience with our service..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-600">
                    I confirm this is a genuine review based on my experience with the service. I understand this review may be displayed publicly.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Review
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Reviews are typically published within 24-48 hours after moderation
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Tallahassee</h3>
              <ul className="space-y-2">
                <li>• Downtown Tallahassee</li>
                <li>• FSU/FAMU Area</li>
                <li>• Killearn Estates</li>
                <li>• Southwood</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Nearby Cities</h3>
              <ul className="space-y-2">
                <li>• Crawfordville</li>
                <li>• Quincy</li>
                <li>• Havana</li>
                <li>• Woodville</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Extended Range</h3>
              <ul className="space-y-2">
                <li>• Monticello</li>
                <li>• Madison</li>
                <li>• Perry</li>
                <li>• Bristol</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">First-Time Customer Special!</h2>
            <p className="text-xl mb-8 text-center text-gray-600">Get 15% off your first service - Limited Time Offer!</p>
            
            <form className="max-w-lg mx-auto space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(850) XXX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Vehicle Information (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Year, Make, Model"
                  />
                </div>
              </div>

              <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                Claim Your 15% Off Now
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting this form, you'll receive a free quote within 2 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBrakeLanding;
