import { motion } from "framer-motion";
import { 
  Code2, 
  FileCode, 
  Database, 
  Layout, 
  Palette, 
  Terminal, 
  Cpu, 
  Boxes 
} from "lucide-react";

const SKILLS = [
  { name: "React", icon: Code2 },
  { name: "Tailwind CSS", icon: Layout },
  { name: "JavaScript", icon: FileCode },
  { name: "PHP", icon: Terminal },
  { name: "MySQL", icon: Database },
  { name: "HTML5 / CSS3", icon: Code2 },
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Électronique Numérique", icon: Cpu },
  { name: "C / C++", icon: Boxes },
];

function Skill() {
  return (
    <div className="w-full py-10 bg-base-200/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <h3 className="text-xl font-bold text-base-content/80 uppercase tracking-widest">
          Mes Compétences & Technologies
        </h3>
      </div>

      {/* Masque de fondu transparent sur les côtés gauche et droit */}
      <div 
        className="relative w-full overflow-hidden flex"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        {/* Conteneur animé avec Motion */}
        <motion.div 
          className="flex items-center gap-4 py-2 cursor-pointer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Fait une pause au survol
        >
          {/* Liste originale + Duplication pour la boucle infinie */}
          {[...SKILLS, ...SKILLS].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm hover:border-accent/50 transition-colors whitespace-nowrap"
              >
                <Icon className="w-5 h-5 text-accent" />
                <span className="font-medium text-base-content">{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;