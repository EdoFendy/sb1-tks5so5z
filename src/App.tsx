import React, { useEffect, useRef, useState } from 'react';
import {
  Rocket,
  Sparkles,
  ArrowRight,
  Cpu,
  Network,
  Lock,
  Leaf,
  Coins,
  LineChart,
  BookOpen,
  Building2,
  Shield,
  Globe2,
  Users,
  BarChart as ChartBar,
  Lightbulb,
  Target,
  Zap,
} from 'lucide-react';
import logo from './logo.png';
import foto from './foto.jpeg';

function App() {
  const [showWhitepaper, setShowWhitepaper] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const WhitepaperContent = () => (
    <div
      className="fixed inset-x-0 top-16 bottom-0 bg-black/90 backdrop-blur-xl z-40 overflow-y-auto"
      onClick={() => setShowWhitepaper(false)} // Chiusura cliccando fuori dal contenuto
    >
      <div
        className="max-w-4xl mx-auto px-4 py-12 bg-transparent"
        onClick={(e) => e.stopPropagation()} // Impedisce la chiusura quando si clicca sul contenuto
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            NOVA Token Whitepaper
          </h2>
          <button
            onClick={() => setShowWhitepaper(false)}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="space-y-8 text-gray-200">
          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              1. Executive Summary
            </h3>
            <p className="leading-relaxed">
              NOVA Token represents a revolutionary approach to decentralized
              finance, combining advanced AI technology with sustainable
              blockchain solutions. Our mission is to create a more accessible,
              efficient, and secure financial ecosystem that bridges traditional
              finance with the digital age.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              2. Technology Architecture
            </h3>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">
                2.1 Blockchain Infrastructure
              </h4>
              <p className="leading-relaxed">
                NOVA utilizes a hybrid consensus mechanism combining Proof of
                Stake with AI-driven validation, ensuring high throughput while
                maintaining decentralization and security.
              </p>

              <h4 className="text-xl font-semibold text-blue-400">
                2.2 AI Integration
              </h4>
              <p className="leading-relaxed">
                Our proprietary AI system analyzes market patterns, optimizes
                trading strategies, and enhances security protocols in
                real-time.
              </p>

              <h4 className="text-xl font-semibold text-blue-400">
                2.3 Cross-Chain Architecture
              </h4>
              <p className="leading-relaxed">
                NOVA's bridge protocol enables seamless asset transfer across
                multiple blockchain networks, utilizing atomic swaps and state
                channels for optimal efficiency.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              3. Tokenomics
            </h3>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">
                3.1 Token Distribution
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Community Rewards (40%): Incentivizing network participation
                </li>
                <li>Development Fund (30%): Continuous platform improvement</li>
                <li>Liquidity Pool (20%): Ensuring market stability</li>
                <li>Team & Advisors (10%): Long-term alignment of interests</li>
              </ul>

              <h4 className="text-xl font-semibold text-blue-400">
                3.2 Token Utility
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Governance rights in the NOVA DAO</li>
                <li>Access to premium trading features</li>
                <li>Staking rewards and yield farming</li>
                <li>Fee reductions on platform services</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              4. Security Measures
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed">
                NOVA implements multiple layers of security:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Quantum-resistant cryptography</li>
                <li>Multi-signature validation</li>
                <li>Real-time AI threat detection</li>
                <li>Regular security audits by leading firms</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              5. Governance Model
            </h3>
            <p className="leading-relaxed">
              The NOVA DAO enables token holders to participate in key decisions
              regarding:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Protocol upgrades and modifications</li>
              <li>Treasury fund allocation</li>
              <li>Partnership approvals</li>
              <li>Fee structure adjustments</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              6. Future Development
            </h3>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">
                6.1 Technical Roadmap
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhanced AI trading algorithms</li>
                <li>Additional cross-chain integrations</li>
                <li>Mobile app development</li>
                <li>Enterprise solutions</li>
              </ul>

              <h4 className="text-xl font-semibold text-blue-400">
                6.2 Ecosystem Expansion
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>DeFi product suite</li>
                <li>Institutional partnerships</li>
                <li>Developer tools and SDKs</li>
                <li>Educational resources</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              7. Conclusion
            </h3>
            <p className="leading-relaxed">
              NOVA Token represents the next evolution in decentralized finance,
              combining cutting-edge technology with practical utility. Our
              commitment to innovation, security, and community governance
              positions NOVA as a leader in the future of digital finance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {showWhitepaper && <WhitepaperContent />}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-100%" />
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#technology"
              className="hover:text-purple-400 transition-colors"
            >
              Technology
            </a>
            <a
              href="#tokenomics"
              className="hover:text-purple-400 transition-colors"
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className="hover:text-purple-400 transition-colors"
            >
              Roadmap
            </a>

            <a
              href="#ecosystem"
              className="hover:text-purple-400 transition-colors"
            >
              Ecosystem
            </a>
          </div>
          <button
            onClick={() => setShowWhitepaper(true)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Read Whitepaper
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16 mb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo grande e centrato */}
          <img
            src={logo}
            alt="Logo"
            className="mx-auto h-[200px] w-auto mb-8"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            NOVA Token
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Revolutionizing DeFi with Advanced AI Integration and Sustainable
            Blockchain Technology
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setShowWhitepaper(true)}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Read Whitepaper
            </button>
            <a
              href="#ecosystem"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold hover:bg-white/20 transition-all"
            >
              Explore Ecosystem
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400">$250M+</div>
              <div className="text-sm text-gray-400">Total Value Locked</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-400">200k+</div>
              <div className="text-sm text-gray-400">Token Holders</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4">
              <div className="text-2xl font-bold text-pink-400">45+</div>
              <div className="text-sm text-gray-400">Partner Networks</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Redefining Digital Finance 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                The Future of Finance
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                NOVA Token represents the convergence of artificial intelligence
                and blockchain technology, creating a new paradigm in
                decentralized finance. Our ecosystem is designed to provide
                unprecedented accessibility, security, and innovation in the
                digital asset space.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-purple-400" />
                  </div>
                  <span>AI-Powered Trading Solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Network className="h-5 w-5 text-blue-400" />
                  </div>
                  <span>Cross-Chain Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-400" />
                  </div>
                  <span>Eco-Friendly Blockchain</span>
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
              <img
                src={foto}
                alt="Blockchain Visualization"
                className="rounded-3xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div id="technology" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Advanced Technology Stack 🔧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Lock className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Quantum-Resistant Security
              </h3>
              <p className="text-gray-400">
                Advanced cryptographic algorithms ensuring future-proof security
                against quantum computing threats.
              </p>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Cpu className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-400">
                Machine learning algorithms for predictive analytics and
                automated trading strategies.
              </p>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Network className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cross-Chain Bridge</h3>
              <p className="text-gray-400">
                Seamless asset transfer across multiple blockchain networks with
                minimal fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div id="ecosystem" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            NOVA Ecosystem 🌐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Secure Trading</h3>
              <p className="text-gray-400">
                Advanced security protocols and real-time monitoring systems.
              </p>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Globe2 className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Network</h3>
              <p className="text-gray-400">
                Worldwide accessibility with local compliance integration.
              </p>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Community Governance</h3>
              <p className="text-gray-400">
                Democratic decision-making through DAO structure.
              </p>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10">
              <ChartBar className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Analytics Platform</h3>
              <p className="text-gray-400">
                Comprehensive market analysis and trading insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Hub Section */}
      <div id="innovation" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Innovation Hub 💡
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <Lightbulb className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Research & Development
              </h3>
              <p className="text-gray-400 mb-4">
                Continuous innovation in blockchain technology and AI
                integration.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-400" />
                  Advanced AI Algorithms
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-400" />
                  Blockchain Scalability
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-yellow-400" />
                  Security Protocols
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <Target className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Strategic Partnerships
              </h3>
              <p className="text-gray-400 mb-4">
                Collaborations with industry leaders and innovative startups.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  Financial Institutions
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  Tech Companies
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  Research Centers
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <Zap className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Developer Tools</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive SDK and API suite for builders.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  API Documentation
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  Development SDKs
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  Testing Environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div id="tokenomics" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Tokenomics 📊
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Community Rewards</span>
                  <span className="text-purple-400">40%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-purple-400 h-2 rounded-full"
                    style={{ width: '40%' }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Development</span>
                  <span className="text-blue-400">30%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full"
                    style={{ width: '30%' }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Liquidity Pool</span>
                  <span className="text-pink-400">20%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-pink-400 h-2 rounded-full"
                    style={{ width: '20%' }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team & Advisors</span>
                  <span className="text-green-400">10%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: '10%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Coins className="h-8 w-8 text-yellow-400 mb-2" />
                <h4 className="text-xl font-bold mb-2">Total Supply</h4>
                <p className="text-2xl font-bold text-yellow-400">
                  1,000,000,000 NOVA
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <LineChart className="h-8 w-8 text-green-400 mb-2" />
                <h4 className="text-xl font-bold mb-2">Initial Market Cap</h4>
                <p className="text-2xl font-bold text-green-400">$25,000,000</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <BookOpen className="h-8 w-8 text-purple-400 mb-2" />
                <h4 className="text-xl font-bold mb-2">Smart Contract</h4>
                <p className="text-sm font-mono bg-white/10 p-2 rounded">
                  0x1234...5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Strategic Roadmap 🗺️
          </h2>
          <div className="space-y-12">
            <div className="animate-on-scroll flex items-center gap-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">Q1</span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Foundation Phase</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Token Launch on Major DEXes
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Community Building & Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Security Audits & Certifications
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll flex items-center gap-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">Q2</span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">
                  Technology Integration
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    AI Trading Platform Beta
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Cross-Chain Bridge Development
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Mobile App Launch
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll flex items-center gap-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">Q3</span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Ecosystem Expansion</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    DeFi Products Launch
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Institutional Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Governance Implementation
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll flex items-center gap-8">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">Q4</span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Global Adoption</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Enterprise Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Global Marketing Campaign
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                    Research & Innovation Hub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold">NOVA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing the future of decentralized finance through
                innovation and sustainability.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setShowWhitepaper(true)}
                    className="hover:text-purple-400 transition-colors"
                  >
                    Whitepaper
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Audit Reports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t border-white/10">
            © 2025 NOVA Token. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
