import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Users, Phone, Mail, ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { temples } from "@/data/temples";

const TempleDetail = () => {
  const { id } = useParams();
  const temple = temples.find((t) => t.id === id);

  if (!temple) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Temple not found</p>
      </div>
    );
  }

  const progress = Math.round((temple.raised / temple.goal) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute bottom-6 left-0 right-0 container mx-auto px-4">
          <Link
            to="/temples"
            className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm mb-3 hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Temples
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            {temple.name}
          </h1>
          <p className="text-primary-foreground/80 font-display text-lg">
            {temple.nameTamil}
          </p>
          <div className="flex items-center gap-1.5 text-primary-foreground/70 text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>
              {temple.location} • {temple.locationTamil}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                About this Temple
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {temple.description}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {temple.descriptionTamil}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">Deity / தெய்வம்</p>
                  <p className="font-medium text-foreground text-sm mt-1">
                    {temple.deity}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {temple.deityTamil}
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">
                    Donors / நன்கொடையாளர்கள்
                  </p>
                  <p className="font-medium text-foreground text-sm mt-1">
                    {temple.donors} people
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Listed by */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Listed By
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground text-lg">
                    {temple.listedBy.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {temple.listedBy.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {temple.listedBy.role}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{temple.listedBy.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{temple.listedBy.email}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Donate */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 space-y-5 sticky top-24"
            >
              <h3 className="font-display text-lg font-bold text-foreground">
                Donation Progress
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Raised</span>
                  <span className="font-semibold text-foreground">
                    ₹{(temple.raised / 100000).toFixed(1)}L
                  </span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full gradient-gold rounded-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{progress}% funded</span>
                  <span>Goal: ₹{(temple.goal / 100000).toFixed(1)}L</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{temple.donors} donors have contributed</span>
              </div>

              <Link to={`/donate/${temple.id}`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-saffron text-primary-foreground py-3.5 rounded-xl font-medium text-base mt-2"
                >
                  Donate Now • நன்கொடை
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TempleDetail;
