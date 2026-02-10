import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = location.pathname !== "/login";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            அரன்பணி
          </span>
          <span className="hidden sm:inline text-sm text-muted-foreground font-body">
            Aranpani
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/temples"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Temples
          </Link>
          {isLoggedIn ? (
            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 rounded-full gradient-gold flex items-center justify-center"
              >
                <User className="w-4 h-4 text-primary-foreground" />
              </motion.div>
            </Link>
          ) : (
            <Link
              to="/login"
              className="gradient-saffron text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3"
        >
          <Link to="/" className="text-sm py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/temples" className="text-sm py-2" onClick={() => setMobileOpen(false)}>Temples</Link>
          <Link to={isLoggedIn ? "/profile" : "/login"} className="text-sm py-2" onClick={() => setMobileOpen(false)}>
            {isLoggedIn ? "Profile" : "Login"}
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
