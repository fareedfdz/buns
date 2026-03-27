"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function Hero({ onOrder, onViewMenu }: { onOrder?: () => void, onViewMenu?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4500" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff8c00" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#ff4500" />
            <stop offset="70%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full bg-black"
        colors={["#000000", "#ff4500", "#ff8c00", "#8b0000", "#1a1a1a"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60 bg-transparent"
        colors={["#000000", "#ffffff", "#ff4500", "#ff8c00"]}
        speed={0.2}
      />

      <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
        <div className="text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              ✨ The City's Most Viral Burger
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #ff4500 30%, #ff8c00 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Street Soul.
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl uppercase">Luxury Bite.</span>
          </motion.h1>

          <motion.p
            className="text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            We don't just make burgers. We create high-fashion flavor drops. Premium beef, melted cheese, and the attitude to match.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              onClick={onViewMenu}
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-[#ff4500]/50 hover:text-[#ff8c00] cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
            <motion.button
              onClick={onOrder}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#ff4500] to-[#ff8c00] text-white font-semibold text-sm transition-all duration-300 hover:from-[#e63e00] hover:to-[#e67e00] cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </main>

      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#ff4500", "#ff8c00", "#8b0000", "#ffffff", "#1a1a1a", "#ff4500", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 font-medium">
              <textPath href="#circle" startOffset="0%">
                Boujee Buns • Premium Smash Burgers • Boujee Buns • Premium Smash Burgers •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
