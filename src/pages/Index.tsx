import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Landmark, Users, IndianRupee } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TempleCard from "@/components/TempleCard";
import { temples } from "@/data/temples";

const stats = [
  { icon: Landmark, label: "Temples", value: "50+", labelTamil: "கோயில்கள்" },
  { icon: Users, label: "Donors", value: "2,000+", labelTamil: "தானமளிப்போர்" },
  { icon: IndianRupee, label: "Raised", value: "₹45L+", labelTamil: "திரட்டப்பட்டது" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <img
          src={heroImage}
          alt="Majestic South Indian Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-temple-gold font-display text-lg">
              அரன்பணி • Divine Service
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
              Preserve Our{" "}
              <span className="text-gradient-gold">Sacred Heritage</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg font-body max-w-lg">
              கோயில்களை காப்போம். Support the restoration and maintenance of
              ancient Tamil temples through your generous donations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/temples">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="gradient-saffron text-primary-foreground px-8 py-3.5 rounded-xl font-medium flex items-center gap-2 text-base"
                >
                  Explore Temples
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-xl font-medium text-base hover:bg-primary-foreground/10 transition-colors"
                >
                  Sign In
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <s.icon className="w-8 h-8 mx-auto text-primary" />
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.labelTamil}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Featured Temples
            </h2>
            <p className="text-muted-foreground">
              சிறப்புக் கோயில்கள் • Choose a temple to support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.slice(0, 3).map((temple, i) => (
              <TempleCard key={temple.id} temple={temple} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/temples"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all temples <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-gold">
        <div className="container mx-auto px-4 text-center space-y-5">
          <Heart className="w-12 h-12 mx-auto text-primary-foreground animate-float" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Every Donation Matters
          </h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            ஒவ்வொரு நன்கொடையும் முக்கியம். Your contribution helps preserve
            centuries of Tamil heritage and culture.
          </p>
          <Link to="/temples">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-background text-foreground px-8 py-3.5 rounded-xl font-medium mt-4"
            >
              Start Donating
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
