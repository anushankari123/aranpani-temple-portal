import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TempleCard from "@/components/TempleCard";
import { temples } from "@/data/temples";

const Temples = () => {
  const [search, setSearch] = useState("");

  const filtered = temples.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.nameTamil.includes(search) ||
      t.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 space-y-3"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Temple Listings
          </h1>
          <p className="text-muted-foreground">
            கோயில் பட்டியல் • Browse and support temples in need
          </p>
          <div className="relative max-w-md mx-auto mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search temples... கோயில்களைத் தேடுங்கள்"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((temple, i) => (
            <TempleCard key={temple.id} temple={temple} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No temples found. Try a different search.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Temples;
