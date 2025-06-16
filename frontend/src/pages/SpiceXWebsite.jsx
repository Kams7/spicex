import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Leaf, Users, Award, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const SpiceXWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const spices = [
    {
      id: 1,
      name: "Wayanadan Green Cardamom",
      description: "Elegant, aromatic, citrusy. Handpicked from the lush plantations of Kerala's high ranges.",
      image: "🫘",
      price: "₹899",
      uses: "Ideal for sweets, biryani, tea, and Ayurvedic remedies"
    },
    {
      id: 2,
      name: "Malabar Black Pepper",
      description: "Bold, fiery, full-bodied. Grown on the sun-drenched slopes of Malabar.",
      image: "⚫",
      price: "₹299",
      uses: "The King of Spices that changed world history"
    },
    {
      id: 3,
      name: "Kanyakumari Cloves",
      description: "Deep, warm, and intensely aromatic. A must-have for garam masalas.",
      image: "🌰",
      price: "₹649",
      uses: "Perfect for winter infusions and spice blends"
    },
    {
      id: 4,
      name: "Star Anise",
      description: "Sweet licorice aroma, bold flavor. A culinary star in Indian cooking.",
      image: "⭐",
      price: "₹449",
      uses: "Essential for biryanis and desserts"
    },
    {
      id: 5,
      name: "Mace & Nutmeg",
      description: "Grown in the spice gardens of the Western Ghats. Luxurious and powerful.",
      image: "🥜",
      price: "₹799",
      uses: "Perfect for both sweet and savory dishes"
    },
    {
      id: 6,
      name: "Premium Cumin Seeds",
      description: "Earthy, warm, and aromatic. Essential for Indian cooking.",
      image: "🌾",
      price: "₹199",
      uses: "Foundation spice for curries and tempering"
    }
  ];

  const testimonials = [
    {
      name: "Rhea M.",
      location: "Mumbai",
      text: "I've never smelled cardamom this fresh. It reminds me of my grandmother's kitchen in Kerala.",
      rating: 5
    },
    {
      name: "Chef Arjun",
      location: "Delhi",
      text: "The black pepper is truly bold – nothing like what I've used before. You can feel the difference.",
      rating: 5
    },
    {
      name: "Tanvi S.",
      location: "Pune",
      text: "Bought this as a gift for a friend abroad — she couldn't stop talking about the aroma!",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "How Black Pepper Shaped World History",
      excerpt: "From ancient Rome to the spice routes of Europe.",
      image: "🌍"
    },
    {
      title: "The Healing Powers of Indian Spices in Ayurveda",
      excerpt: "Cardamom, fennel, cumin, and what they do for your gut.",
      image: "🌿"
    },
    {
      title: "From Soil to Spoon – Our Farmer Stories",
      excerpt: "Real voices from Wayanad, Coorg, and Idukki.",
      image: "👨‍🌾"
    }
  ];

  const addToCart = (spiceId) => {
    setCartItems(prev => prev + 1);
  };

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">🌶️ SpiceX</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('shop')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'shop' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Shop
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'about' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('blog')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'blog' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Blog
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'contact' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">Home</button>
            <button onClick={() => { setCurrentPage('shop'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">Shop</button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">About</button>
            <button onClick={() => { setCurrentPage('blog'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">Blog</button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-red-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              India's Heritage in <span className="text-orange-600">Every Spice</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              From the misty hills of Wayanad to the sun-soaked coasts of Tamil Nadu, we bring you handpicked, sun-dried, and soul-rich whole spices — just the way India intended.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 transform hover:scale-105"
              >
                Explore Our Collection
              </button>
              <button 
                onClick={() => setCurrentPage('shop')}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Born from the Soil</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SpiceX, we believe that spices are more than just ingredients – they are the essence of Indian tradition, culture, and healing.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every spice we offer is hand-selected from India's most pristine regions, harvested by farmers who've passed down their knowledge for generations. We work directly with them to ensure purity, traceability, and sustainability – without compromise.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're a home chef, gourmet connoisseur, or just someone who appreciates authenticity – we welcome you to rediscover India, one spice at a time.
              </p>
              <button 
                onClick={() => setCurrentPage('about')}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-4">🌾</div>
              <p className="text-gray-600 italic">Handpicked with tradition, delivered with love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Spices */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Crown Jewels of Indian Kitchens</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spices.map((spice) => (
              <div key={spice.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{spice.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{spice.name}</h3>
                  <p className="text-gray-600 mb-4">{spice.description}</p>
                  <p className="text-sm text-orange-600 mb-4 italic">{spice.uses}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{spice.price}</span>
                    <button 
                      onClick={() => addToCart(spice.id)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors mr-4"
            >
              Shop All Spices
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all">
              View Combos & Gift Packs
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Not Just Spices. Stories.</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Leaf className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">100% Natural & Whole</h3>
              <p className="text-gray-600">Pure, unprocessed spices straight from nature</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Direct From Farmers</h3>
              <p className="text-gray-600">Supporting local communities and traditional farming</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">No Preservatives</h3>
              <p className="text-gray-600">Chemical-free, as nature intended</p>
            </div>
          </div>
          <div className="text-center mt-12 p-8 bg-orange-50 rounded-lg">
            <p className="text-xl text-gray-700 font-medium">
              We don't blend or powder. We deliver whole, pure, and rich — as nature intended.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm text-gray-600">
                  <strong>{testimonial.name}</strong>, {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Hook */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl mb-8">☕</div>
          <h2 className="text-4xl font-bold mb-6">Taste the Legacy</h2>
          <p className="text-xl mb-4">There's a piece of India in every grain we deliver.</p>
          <p className="text-lg mb-8">Reconnect with your roots. Rediscover your flavors. Bring home the legacy of Indian kitchens.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ShopPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Spice Collection</h1>
          <p className="text-xl text-gray-600">Handpicked from India's finest spice gardens</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spices.map((spice) => (
            <div key={spice.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{spice.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{spice.name}</h3>
                <p className="text-gray-600 mb-3">{spice.description}</p>
                <p className="text-sm text-orange-600 mb-4 italic">{spice.uses}</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{spice.price}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600"><strong>Weight Options:</strong> 100g | 250g | 500g | 1kg</p>
                    <p className="text-sm text-gray-600"><strong>Origin:</strong> Kerala, India</p>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(spice.id)}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Roots. Our Spice.</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded with a simple belief — that India's most beautiful export is her flavor — SpiceX is an effort to preserve the legacy of our spices while ensuring fair, dignified livelihoods for those who grow them.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We don't buy from warehouses. We work with farmers in Kerala, Tamil Nadu, and the North East. Each spice is tested for quality, aroma, and natural oil content — so you get the most authentic experience, from soil to spoon.
            </p>
          </div>
          <div className="text-center">
            <div className="text-9xl mb-4">🌱</div>
            <p className="text-gray-600 italic">From our farms to your kitchen</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Direct Partnership</h3>
            <p className="text-gray-600">Working directly with farmers across India's spice regions</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Quality Tested</h3>
            <p className="text-gray-600">Each batch tested for purity, aroma, and oil content</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Leaf className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Sustainable</h3>
            <p className="text-gray-600">Eco-friendly packaging and sustainable farming practices</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">To bring the authentic taste of India to kitchens worldwide while supporting traditional farming communities and preserving ancient spice cultivation methods.</p>
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Spice Journal</h1>
          <p className="text-xl text-gray-600">Read the Spice Stories</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{post.image}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
            Visit The Spice Journal
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk Spice!</h1>
            <p className="text-xl text-gray-600">Got a question? Want to place a bulk order? Interested in collaborations?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-orange-600 mr-3" />
                  <span className="text-lg">WhatsApp: 7000464553</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-orange-600 mr-3" />
                  <span className="text-lg">Shashankmeena6s@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                  <span className="text-lg">Kerala, India</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Instagram className="h-8 w-8 text-orange-600 hover:text-orange-700 cursor-pointer" />
                  <Facebook className="h-8 w-8 text-orange-600 hover:text-orange-700 cursor-pointer" />
                  <Twitter className="h-8 w-8 text-orange-600 hover:text-orange-700 cursor-pointer" />
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your spice needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🌶️ SpiceX</h3>
            <p className="text-gray-400 mb-4">The Soul of India, In Every Spice</p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-orange-600 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="text-gray-400 hover:text-orange-600 transition-colors">Shop</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-orange-600 transition-colors">About</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="text-gray-400 hover:text-orange-600 transition-colors">Blog</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-orange-600 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Promise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>✓ 100% Natural & Whole</li>
              <li>✓ Direct From Farmers</li>
              <li>✓ No Preservatives</li>
              <li>✓ Sustainable Packaging</li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get monthly spice tips, recipes & discounts</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-600"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400">🏆 FSSAI Certified</span>
              <span className="text-gray-400">🌱 Organic</span>
              <span className="text-gray-400">👨‍🌾 Farmer Direct</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-orange-600 transition-colors">Privacy Policy</button>
              <button className="hover:text-orange-600 transition-colors">Return & Refunds</button>
              <button className="hover:text-orange-600 transition-colors">Terms of Service</button>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-400">
            <p>&copy; 2025 SpiceX. All rights reserved. Made with ❤️ for spice lovers worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
};

export default SpiceXWebsite;