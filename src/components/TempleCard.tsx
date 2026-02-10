import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Users, Heart } from "lucide-react";
import type { Temple } from "@/data/temples";

interface TempleCardProps {
  temple: Temple;
  index: number;
}

const TempleCard = ({ temple, index }: TempleCardProps) => {
  const progress = Math.round((temple.raised / temple.goal) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/temple/${temple.id}`}>
        <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="relative h-52 overflow-hidden">
            <img
              src={temple.image}
              alt={temple.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-primary-foreground font-display font-bold text-lg leading-tight">
                {temple.name}
              </p>
              <p className="text-primary-foreground/80 text-xs font-body">
                {temple.nameTamil}
              </p>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>{temple.location}</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Raised</span>
                <span className="font-semibold text-foreground">
                  ₹{(temple.raised / 100000).toFixed(1)}L / ₹{(temple.goal / 100000).toFixed(1)}L
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="h-full gradient-gold rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5" />
                <span>{temple.donors} donors</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary font-medium">
                <Heart className="w-3.5 h-3.5" />
                <span>Donate</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TempleCard;
