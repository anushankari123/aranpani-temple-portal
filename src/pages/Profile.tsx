import { motion } from "framer-motion";
import { User, Mail, Phone, Heart, LogOut, MapPin, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recentDonations = [
  { temple: "Meenakshi Amman Temple", amount: 5000, date: "2026-01-15" },
  { temple: "Brihadeeswara Temple", amount: 2500, date: "2025-12-28" },
  { temple: "Shore Temple", amount: 10000, date: "2025-11-10" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Profile header */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full gradient-gold flex items-center justify-center">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="text-center sm:text-left space-y-1 flex-1">
              <h1 className="font-display text-2xl font-bold text-foreground">
                Karthik Sundaram
              </h1>
              <p className="text-sm text-muted-foreground font-display">
                கார்த்திக் சுந்தரம்
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> karthik@example.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" /> +91 99876 54321
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Donated", value: "₹17,500", labelTamil: "மொத்த நன்கொடை" },
              { label: "Temples Supported", value: "3", labelTamil: "ஆதரிக்கப்பட்ட கோயில்கள்" },
              { label: "Member Since", value: "2025", labelTamil: "உறுப்பினர்" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <p className="text-xl font-display font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.labelTamil}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent donations */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              Recent Donations
            </h2>
            <p className="text-sm text-muted-foreground">
              சமீபத்திய நன்கொடைகள்
            </p>
            <div className="space-y-3">
              {recentDonations.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between bg-muted rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {d.temple}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {d.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground text-sm">
                    ₹{d.amount.toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-destructive hover:underline mx-auto"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
