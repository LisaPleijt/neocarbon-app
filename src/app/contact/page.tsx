import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-shadow">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-300 text-shadow">
            Ready to start your sustainability journey? Let's talk about how Neocarbon can help your business.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-xl">
          <form className="space-y-6 p-8 rounded-xl glass-effect">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:ring-offset-0 sm:text-sm transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:ring-offset-0 sm:text-sm transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:ring-offset-0 sm:text-sm transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:ring-offset-0 sm:text-sm transition-colors"
                placeholder="Enter your company name"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:ring-offset-0 sm:text-sm transition-colors resize-none"
                placeholder="Tell us about your sustainability goals..."
              />
            </div>
            
            <div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
