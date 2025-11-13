import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] rounded-lg"></div>
              <span className="text-lg font-bold text-[#0F172A]">LearnHub</span>
            </div>
            <p className="text-gray-600">Empowering learners worldwide with cutting-edge courses</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#0F172A] mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-[#0F172A] mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#0F172A] mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#8B5CF6]" />
                <a href="mailto:hello@learnhub.com" className="hover:text-[#8B5CF6] transition-colors">
                  hello@learnhub.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#8B5CF6]" />
                <a href="tel:+1234567890" className="hover:text-[#8B5CF6] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-[#8B5CF6]" />
                <span>San Francisco, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; 2025 LearnHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
