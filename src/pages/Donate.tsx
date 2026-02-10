import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Heart, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { temples } from "@/data/temples";

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const Donate = () => {
  const { id } = useParams();
  const temple = temples.find((t) => t.id === id);
  const [amount, setAmount] = useState<number | "">("");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!temple) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Temple not found</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const finalAmount = amount || Number(customAmount) || 0;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 max-w-md"
          >
            <div className="w-20 h-20 mx-auto rounded-full gradient-gold flex items-center justify-center">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              நன்றி! Thank You!
            </h1>
            <p className="text-muted-foreground">
              Your donation of{" "}
              <span className="font-bold text-foreground">₹{finalAmount.toLocaleString()}</span>{" "}
              to {temple.name} has been received.
            </p>
            <p className="text-sm text-muted-foreground">
              உங்கள் நன்கொடைக்கு நன்றி. கடவுள் உங்களை ஆசீர்வதிக்கட்டும்.
            </p>
            <Link
              to="/temples"
              className="inline-block gradient-saffron text-primary-foreground px-6 py-3 rounded-xl font-medium"
            >
              Browse More Temples
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Link
          to={`/temple/${temple.id}`}
          className="inline-flex items-center gap-1 text-muted-foreground text-sm mb-6 hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {temple.name}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Temple summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <img
              src={temple.image}
              alt={temple.name}
              className="w-full h-56 object-cover rounded-2xl"
            />
            <h1 className="font-display text-2xl font-bold text-foreground">
              {temple.name}
            </h1>
            <p className="font-display text-lg text-muted-foreground">
              {temple.nameTamil}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {temple.description.slice(0, 200)}...
            </p>
          </motion.div>

          {/* Payment form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 space-y-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">
                  Make a Donation
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                நன்கொடை செலுத்துங்கள் • Select or enter an amount
              </p>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 gap-2">
                {presetAmounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setAmount(a);
                      setCustomAmount("");
                    }}
                    className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                      amount === a
                        ? "gradient-gold text-primary-foreground border-transparent"
                        : "bg-muted text-foreground border-border hover:border-primary/40"
                    }`}
                  >
                    ₹{a.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Custom Amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("");
                  }}
                  placeholder="₹ Enter amount"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name for donation receipt"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="bg-muted rounded-xl p-4 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Secure Payment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    பாதுகாப்பான பணம் செலுத்துதல்
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={!finalAmount}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full gradient-saffron text-primary-foreground py-3.5 rounded-xl font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {finalAmount
                  ? `Donate ₹${finalAmount.toLocaleString()}`
                  : "Select an Amount"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
