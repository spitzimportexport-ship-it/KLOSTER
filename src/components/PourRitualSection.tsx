import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, RotateCcw, Volume2, VolumeX, ShieldCheck, Thermometer, Compass, Flame } from 'lucide-react';
import pourChaliceImg from '../assets/images/kloster_pour_chalice_1788393272393.jpg';

interface Bubble {
  x: number;
  y: number;
  speed: number;
  size: number;
  wobbleSpeed: number;
  wobbleOffset: number;
  alpha: number;
}

interface CondensationDrop {
  x: number;
  y: number;
  r: number;
  alpha: number;
  trail: number;
}

export const PourRitualSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Pour progress (0 = empty, 1 = perfectly served)
  // CRITICAL RULE: Monotonic forward-only pour. Never drains or un-pours on scroll up!
  const [pourProgress, setPourProgress] = useState<number>(0);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const hasTriggeredRef = useRef<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Active liturgical step indicator based on progress
  const currentStep = pourProgress < 0.25 ? 0 : pourProgress < 0.65 ? 1 : pourProgress < 0.92 ? 2 : 3;

  // Sound synthesis for authentic pour fizz & abbey atmosphere
  const toggleSound = () => {
    if (!soundEnabled) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create brown/pink noise buffer for gentle liquid fizz
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 3.5;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Bandpass filter centered at warm pour frequencies
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);
        filter.Q.setValueAtTime(1.8, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();

        noiseNodeRef.current = gain;
        setSoundEnabled(true);
      } catch {
        // AudioContext prevented by browser policy
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setSoundEnabled(false);
    }
  };

  // Replay ritual function if user wants to watch the ritual again from the start
  const handleReplay = () => {
    targetProgressRef.current = 0;
    currentProgressRef.current = 0;
    setPourProgress(0);
    setIsCompleted(false);

    // Smooth forward progression
    setTimeout(() => {
      targetProgressRef.current = 1;
    }, 150);
  };

  // 1. SCROLL LISTENER WITH STRICT FORWARD-ONLY PROGRESSION
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the top of the section enters the viewport
      if (rect.top < windowHeight * 0.75) {
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          // Smoothly animate target to full pour (1.0)
          targetProgressRef.current = 1.0;
        } else {
          // If already triggered, ensure it stays forward
          const scrollFraction = Math.min(
            1,
            Math.max(0, (windowHeight * 0.85 - rect.top) / (rect.height * 0.8))
          );
          // STRICT FORWARD MONOTONIC PROGRESS: never decrease!
          if (scrollFraction > targetProgressRef.current) {
            targetProgressRef.current = scrollFraction;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. CANVAS RENDERING ENGINE (Ultra-Cinematic Monastic Chalice Pour)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Generate bubbles
    const bubbles: Bubble[] = Array.from({ length: 90 }, () => ({
      x: (Math.random() - 0.5) * 140,
      y: Math.random() * 220,
      speed: 0.6 + Math.random() * 1.8,
      size: 0.8 + Math.random() * 2.2,
      wobbleSpeed: 2 + Math.random() * 3,
      wobbleOffset: Math.random() * Math.PI * 2,
      alpha: 0.3 + Math.random() * 0.6
    }));

    // Generate condensation drops on glass
    const drops: CondensationDrop[] = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 160,
      y: 30 + Math.random() * 170,
      r: 1 + Math.random() * 2.5,
      alpha: 0.35 + Math.random() * 0.45,
      trail: Math.random() > 0.8 ? Math.random() * 18 : 0
    }));

    const render = () => {
      time += 0.016;

      // Smooth interpolation towards targetProgress (FORWARD ONLY)
      if (currentProgressRef.current < targetProgressRef.current) {
        currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.035 + 0.001;
        if (currentProgressRef.current >= 0.995) {
          currentProgressRef.current = 1.0;
          setIsCompleted(true);
        }
        setPourProgress(currentProgressRef.current);
      }

      const p = currentProgressRef.current;

      // Handle HiDPI
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.54;

      // --- CHALICE GEOMETRY CONSTANTS ---
      const rimWidth = 190;
      const rimY = centerY - 120;
      const bowlDepth = 190;
      const bowlBottomY = rimY + bowlDepth;
      const stemHeight = 110;
      const baseWidth = 150;
      const baseY = bowlBottomY + stemHeight;

      // Liquid calculation
      // Fill level climbs from bowlBottomY - 10 up to rimY + 15
      const liquidMaxH = bowlDepth - 25;
      const liquidH = Math.max(0, liquidMaxH * p);
      const liquidSurfaceY = bowlBottomY - liquidH;

      // Foam calculation: thickens rapidly near top
      const foamThickness = p < 0.15 ? 0 : p < 0.5 ? p * 20 : 15 + Math.pow((p - 0.5) / 0.5, 1.3) * 32;

      // -------------------------------------------------------------
      // 1. BACKGROUND WARM GLOW & CANDLELIGHT DIFFUSION
      // -------------------------------------------------------------
      const bgGlow = ctx.createRadialGradient(centerX, centerY - 20, 20, centerX, centerY, 280);
      bgGlow.addColorStop(0, `rgba(209, 168, 90, ${0.12 + Math.sin(time * 2.5) * 0.02 + p * 0.08})`);
      bgGlow.addColorStop(0.5, `rgba(90, 58, 36, ${0.08 + p * 0.05})`);
      bgGlow.addColorStop(1, 'rgba(12, 12, 12, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 2. CHALICE BACKSTAGE SHADOW / GLASS SILHOUETTE
      // -------------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      // Draw chalice bowl path
      ctx.moveTo(centerX - rimWidth / 2, rimY);
      ctx.bezierCurveTo(
        centerX - rimWidth / 2 + 5, rimY + bowlDepth * 0.65,
        centerX - 35, bowlBottomY - 10,
        centerX - 14, bowlBottomY
      );
      ctx.lineTo(centerX - 10, baseY - 12);
      ctx.lineTo(centerX - baseWidth / 2, baseY);
      ctx.lineTo(centerX + baseWidth / 2, baseY);
      ctx.lineTo(centerX + 10, baseY - 12);
      ctx.lineTo(centerX + 14, bowlBottomY);
      ctx.bezierCurveTo(
        centerX + 35, bowlBottomY - 10,
        centerX + rimWidth / 2 - 5, rimY + bowlDepth * 0.65,
        centerX + rimWidth / 2, rimY
      );
      ctx.closePath();

      // Soft back-refraction
      ctx.fillStyle = 'rgba(18, 14, 11, 0.45)';
      ctx.fill();
      ctx.restore();

      // -------------------------------------------------------------
      // 3. LIQUID RENDERING (Amber Quadrupel with Caustics)
      // -------------------------------------------------------------
      if (p > 0.02) {
        ctx.save();
        // Clip to chalice inner bowl
        ctx.beginPath();
        const bowlInnerMargin = 4;
        ctx.moveTo(centerX - (rimWidth / 2 - bowlInnerMargin), rimY + 5);
        ctx.bezierCurveTo(
          centerX - (rimWidth / 2 - bowlInnerMargin) + 6, rimY + bowlDepth * 0.65,
          centerX - 32, bowlBottomY - 12,
          centerX, bowlBottomY - 4
        );
        ctx.bezierCurveTo(
          centerX + 32, bowlBottomY - 12,
          centerX + (rimWidth / 2 - bowlInnerMargin) - 6, rimY + bowlDepth * 0.65,
          centerX + (rimWidth / 2 - bowlInnerMargin), rimY + 5
        );
        ctx.closePath();
        ctx.clip();

        // Liquid body
        const liquidGradient = ctx.createLinearGradient(centerX, liquidSurfaceY, centerX, bowlBottomY);
        liquidGradient.addColorStop(0, '#D9771E'); // Glowing warm amber head layer
        liquidGradient.addColorStop(0.2, '#B45309'); // Rich amber-orange
        liquidGradient.addColorStop(0.55, '#632504'); // Deep abbey dubbel mahogany
        liquidGradient.addColorStop(1, '#2D1204'); // Dark roasted malt depth

        ctx.fillStyle = liquidGradient;
        ctx.fillRect(centerX - rimWidth, liquidSurfaceY, rimWidth * 2, bowlDepth + 50);

        // Center optical amber caustic reflection
        const causticGrad = ctx.createRadialGradient(
          centerX, bowlBottomY - liquidH * 0.45, 10,
          centerX, bowlBottomY - liquidH * 0.45, rimWidth * 0.6
        );
        causticGrad.addColorStop(0, 'rgba(245, 158, 11, 0.42)');
        causticGrad.addColorStop(0.5, 'rgba(180, 83, 9, 0.22)');
        causticGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = causticGrad;
        ctx.fillRect(centerX - rimWidth, liquidSurfaceY, rimWidth * 2, bowlDepth);

        // Surface meniscus & gentle wave motion during pour
        const waveAmp = p < 0.95 ? Math.sin(time * 9) * 2.5 * (1 - p * 0.5) : Math.sin(time * 2) * 0.5;
        ctx.beginPath();
        ctx.ellipse(centerX, liquidSurfaceY + waveAmp, (rimWidth * 0.42) * Math.min(1, 0.4 + p * 0.6), 8, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.35)';
        ctx.fill();

        // Active Rising Bubbles
        ctx.fillStyle = 'rgba(254, 243, 199, 0.75)';
        bubbles.forEach((b) => {
          b.y -= b.speed * (0.8 + p * 0.6);
          if (b.y < liquidSurfaceY) {
            b.y = bowlBottomY - 10 - Math.random() * 20;
          }
          const wobble = Math.sin(time * b.wobbleSpeed + b.wobbleOffset) * 2;
          const bubbleX = centerX + b.x + wobble;
          const bubbleY = b.y;

          if (bubbleY > liquidSurfaceY && bubbleY < bowlBottomY - 5) {
            ctx.beginPath();
            ctx.arc(bubbleX, bubbleY, b.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(254, 243, 199, ${b.alpha * Math.min(1, p * 2)})`;
            ctx.fill();
          }
        });

        // -------------------------------------------------------------
        // 4. MONASTIC DENSE CREAMY FOAM CROWN (Dos Dedos de Espuma)
        // -------------------------------------------------------------
        if (foamThickness > 2) {
          const foamTopY = liquidSurfaceY - foamThickness;

          // Creamy foam gradient (meringue / toasted biscuit head)
          const foamGrad = ctx.createLinearGradient(centerX, foamTopY, centerX, liquidSurfaceY + 8);
          foamGrad.addColorStop(0, '#FFFFFF'); // Crisp pure white highlight
          foamGrad.addColorStop(0.2, '#FBF7EE'); // Monastic Marfil
          foamGrad.addColorStop(0.7, '#EBDDC3'); // Warm biscuit crema
          foamGrad.addColorStop(1, '#C7A97A'); // Roasted amber transition

          ctx.beginPath();
          // Gentle domed top meniscus
          const foamRimW = (rimWidth * 0.44) * Math.min(1, 0.4 + p * 0.65);
          ctx.ellipse(centerX, foamTopY, foamRimW, 12, 0, 0, Math.PI * 2);
          ctx.rect(centerX - foamRimW, foamTopY, foamRimW * 2, foamThickness + 6);
          ctx.fillStyle = foamGrad;
          ctx.fill();

          // Foam micro-texture & Brussels lace (encaje belga)
          ctx.save();
          ctx.globalAlpha = 0.35;
          for (let f = 0; f < 16; f++) {
            const fx = centerX - foamRimW + (foamRimW * 2 * f) / 16 + Math.sin(f * 2.5 + time) * 3;
            const fy = foamTopY + 4 + (f % 4) * 6;
            ctx.beginPath();
            ctx.arc(fx, fy, 2 + (f % 3), 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
          }
          ctx.restore();
        }

        ctx.restore(); // Exit liquid clip
      }

      // -------------------------------------------------------------
      // 5. POURING CASCADE STREAM & SPLASH (Only while actively pouring)
      // -------------------------------------------------------------
      if (p > 0.03 && p < 0.96) {
        ctx.save();
        const streamStartX = centerX + 110;
        const streamStartY = rimY - 110;
        const streamTargetX = centerX - 15;
        const streamTargetY = liquidSurfaceY + 12;

        // Golden stream gradient
        const streamGrad = ctx.createLinearGradient(streamStartX, streamStartY, streamTargetX, streamTargetY);
        streamGrad.addColorStop(0, 'rgba(217, 119, 6, 0.95)');
        streamGrad.addColorStop(0.5, 'rgba(251, 191, 36, 0.98)');
        streamGrad.addColorStop(1, 'rgba(254, 240, 138, 1)');

        ctx.beginPath();
        ctx.lineWidth = 9 + Math.sin(time * 15) * 1.5;
        ctx.strokeStyle = streamGrad;
        ctx.lineCap = 'round';
        ctx.moveTo(streamStartX, streamStartY);
        ctx.bezierCurveTo(
          streamStartX - 35, streamStartY + 45,
          streamTargetX + 25, streamTargetY - 45,
          streamTargetX, streamTargetY
        );
        ctx.stroke();

        // Inner luminous core of stream
        ctx.beginPath();
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.moveTo(streamStartX - 2, streamStartY + 2);
        ctx.bezierCurveTo(
          streamStartX - 34, streamStartY + 45,
          streamTargetX + 24, streamTargetY - 45,
          streamTargetX, streamTargetY
        );
        ctx.stroke();

        // Splash turbulence burst at contact point
        ctx.beginPath();
        ctx.arc(streamTargetX, streamTargetY, 8 + Math.sin(time * 20) * 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();

        // Tiny animated splash droplets
        for (let s = 0; s < 6; s++) {
          const sAngle = (s / 6) * Math.PI - Math.PI * 0.9;
          const sDist = 12 + Math.sin(time * 25 + s) * 7;
          ctx.beginPath();
          ctx.arc(
            streamTargetX + Math.cos(sAngle) * sDist,
            streamTargetY + Math.sin(sAngle) * sDist,
            1.4,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(254, 240, 138, 0.9)';
          ctx.fill();
        }

        // BOTTLE SILHOUETTE (Inclined at 45° pouring downwards)
        ctx.save();
        ctx.translate(streamStartX + 20, streamStartY - 10);
        ctx.rotate(-Math.PI * 0.28);
        ctx.fillStyle = '#110C07';
        ctx.strokeStyle = '#D1A85A';
        ctx.lineWidth = 1;
        // Bottle neck and lip
        ctx.beginPath();
        ctx.rect(-12, -40, 24, 50);
        ctx.fill();
        ctx.stroke();
        // Bottle gold foil collar
        ctx.fillStyle = '#D1A85A';
        ctx.fillRect(-13, -25, 26, 12);
        ctx.restore();

        ctx.restore();
      }

      // -------------------------------------------------------------
      // 6. FOREGROUND CHALICE GLASS, GILDED RIM & SPECULAR REFLECTIONS
      // -------------------------------------------------------------
      ctx.save();

      // Outer glass wall contour
      ctx.beginPath();
      ctx.moveTo(centerX - rimWidth / 2, rimY);
      ctx.bezierCurveTo(
        centerX - rimWidth / 2 + 5, rimY + bowlDepth * 0.65,
        centerX - 35, bowlBottomY - 10,
        centerX - 14, bowlBottomY
      );
      // Stem
      ctx.lineTo(centerX - 10, baseY - 12);
      // Base
      ctx.lineTo(centerX - baseWidth / 2, baseY);
      ctx.lineTo(centerX + baseWidth / 2, baseY);
      ctx.lineTo(centerX + 10, baseY - 12);
      ctx.lineTo(centerX + 14, bowlBottomY);
      ctx.bezierCurveTo(
        centerX + 35, bowlBottomY - 10,
        centerX + rimWidth / 2 - 5, rimY + bowlDepth * 0.65,
        centerX + rimWidth / 2, rimY
      );
      ctx.closePath();

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = 'rgba(209, 168, 90, 0.45)';
      ctx.stroke();

      // Left specular curvature highlight (crystal gloss)
      ctx.beginPath();
      ctx.moveTo(centerX - rimWidth / 2 + 8, rimY + 15);
      ctx.bezierCurveTo(
        centerX - rimWidth / 2 + 15, rimY + bowlDepth * 0.55,
        centerX - 30, bowlBottomY - 18,
        centerX - 18, bowlBottomY - 6
      );
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.stroke();

      // Right soft rim refraction
      ctx.beginPath();
      ctx.moveTo(centerX + rimWidth / 2 - 8, rimY + 15);
      ctx.bezierCurveTo(
        centerX + rimWidth / 2 - 14, rimY + bowlDepth * 0.55,
        centerX + 30, bowlBottomY - 18,
        centerX + 18, bowlBottomY - 6
      );
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = 'rgba(209, 168, 90, 0.3)';
      ctx.stroke();

      // Gilded Rim Lip (Gold leaf 24k trim)
      ctx.beginPath();
      ctx.ellipse(centerX, rimY, rimWidth / 2, 8, 0, 0, Math.PI * 2);
      const goldRimGrad = ctx.createLinearGradient(centerX - rimWidth / 2, rimY, centerX + rimWidth / 2, rimY);
      goldRimGrad.addColorStop(0, '#C5A059');
      goldRimGrad.addColorStop(0.3, '#FFF3D1'); // Specular sheen
      goldRimGrad.addColorStop(0.7, '#D1A85A');
      goldRimGrad.addColorStop(1, '#8A6A2C');
      ctx.lineWidth = 3.2;
      ctx.strokeStyle = goldRimGrad;
      ctx.stroke();

      // Foot base engraving & bevel
      ctx.beginPath();
      ctx.ellipse(centerX, baseY, baseWidth / 2, 10, 0, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(209, 168, 90, 0.6)';
      ctx.stroke();

      // Monastic Inscription on Base
      ctx.fillStyle = 'rgba(209, 168, 90, 0.55)';
      ctx.font = '10px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('KLOSTER · ANNO 1142', centerX, baseY + 18);

      // -------------------------------------------------------------
      // 7. CHILLED CONDENSATION DROPLETS (Rocío de la Cripta)
      // -------------------------------------------------------------
      if (p > 0.4) {
        const condAlpha = Math.min(1, (p - 0.4) / 0.5);
        drops.forEach((d) => {
          if (d.y > liquidSurfaceY && d.y < bowlBottomY - 10) {
            ctx.beginPath();
            ctx.arc(centerX + d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${d.alpha * condAlpha * 0.65})`;
            ctx.fill();

            if (d.trail > 0) {
              ctx.beginPath();
              ctx.moveTo(centerX + d.x, d.y);
              ctx.lineTo(centerX + d.x, d.y + d.trail);
              ctx.lineWidth = 0.8;
              ctx.strokeStyle = `rgba(255, 255, 255, ${d.alpha * condAlpha * 0.3})`;
              ctx.stroke();
            }
          }
        });
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stepsData = [
    {
      num: 'I',
      title: 'El Vínculo Térmico',
      spec: '12°C - 14°C',
      icon: Thermometer,
      desc: 'El cáliz no se congela. Se atempera en frío de cripta para no anestesiar los ésteres de higo, dátil y madera.'
    },
    {
      num: 'II',
      title: 'La Inclinación a 45°',
      spec: 'Flujo Continuo',
      icon: Compass,
      desc: 'La cerveza desciende suavemente por la curvatura del cristal, despertando la carbonatación sin agredirla.'
    },
    {
      num: 'III',
      title: 'La Coronación Monástica',
      spec: 'Dos Dedos de Espuma',
      icon: ShieldCheck,
      desc: 'Al llegar a tres cuartos, el cáliz se yergue perpendicular para forjar una cabeza densa y cremosa tipo merengue.'
    },
    {
      num: 'IV',
      title: 'El Encaje y el Reposo',
      spec: 'Permanencia Belga',
      icon: Flame,
      desc: 'La corona sella los aromas sagrados y firma cada trago con el legendario encaje de Bruselas en el cristal.'
    }
  ];

  return (
    <section
      id="caliz"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] text-[#F7F4EA] overflow-hidden border-t border-b border-[#D1A85A]/25 scroll-mt-12"
    >
      <div id="ritual" className="absolute -top-12" />
      {/* BACKGROUND ATMOSPHERIC CHAIR-OBSCURITY */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity filter blur-[1px]"
        style={{ backgroundImage: `url(${pourChaliceImg})` }}
      />

      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#D1A85A 0.6px, transparent 0.6px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER BADGE & CALLOUT */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D1A85A]/40 bg-[#17130F]/90 mb-4 shadow-[0_0_20px_rgba(209,168,90,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-[#D1A85A] font-semibold">
              Liturgia de Servicio · Códice Monástico
            </span>
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl lg:text-6xl text-[#F7F4EA] mb-4 tracking-tight">
            El Ritual del Cáliz
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#F7F4EA]/75 font-light leading-relaxed max-w-2xl mx-auto">
            Servir una <span className="text-[#D1A85A] font-medium">Kloster</span> no es verter un líquido; es consagrar el tiempo. La botella se entrega con reverencia, inclinación y una corona inquebrantable.
          </p>
        </div>

        {/* MAIN INTERACTIVE STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: STEP SELECTOR & LITURGICAL TIMELINE */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            <div className="p-6 rounded-lg bg-[#14100C]/90 border border-[#D1A85A]/25 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#D1A85A] font-bold block mb-4">
                Pasos del Servicio Sacro
              </span>

              <div className="space-y-4">
                {stepsData.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = currentStep === idx;
                  const isPassed = currentStep > idx;

                  return (
                    <div
                      key={step.num}
                      className={`p-4 rounded-md border transition-all duration-500 ${
                        isActive
                          ? 'bg-[#231A12] border-[#D1A85A] shadow-[0_0_25px_rgba(209,168,90,0.2)] translate-x-1'
                          : isPassed
                          ? 'bg-[#17130F]/60 border-[#D1A85A]/30 opacity-80'
                          : 'bg-black/30 border-white/5 opacity-40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-cinzel text-xs font-bold px-2 py-0.5 rounded ${
                              isActive
                                ? 'bg-[#D1A85A] text-[#0C0C0C]'
                                : 'bg-[#1B1612] text-[#D1A85A] border border-[#D1A85A]/30'
                            }`}
                          >
                            {step.num}
                          </span>
                          <h4 className="font-cinzel text-sm font-semibold text-[#F7F4EA]">
                            {step.title}
                          </h4>
                        </div>
                        <span className="font-sans text-[11px] text-[#D1A85A] font-mono">
                          {step.spec}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-[#F7F4EA]/70 font-light leading-relaxed pl-8">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SOMMELIER ALLIANCE SUMMARY */}
            <div className="p-4 rounded-lg bg-[#14100C]/70 border border-[#D1A85A]/15 text-xs text-[#F7F4EA]/60 flex items-center justify-between">
              <span>Cristalería: Cáliz de boca ancha 330ml</span>
              <span className="text-[#D1A85A]">Santa Cruz, Bolivia</span>
            </div>
          </div>

          {/* CENTER: HIGH REALISM CINEMATIC CHALICE CANVAS */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
              
              {/* Gold Ring Halo */}
              <div
                className="absolute inset-4 rounded-full border border-[#D1A85A]/20 pointer-events-none transition-all duration-700"
                style={{
                  transform: `scale(${0.9 + pourProgress * 0.12})`,
                  boxShadow: `0 0 ${40 * pourProgress}px rgba(209, 168, 90, ${0.1 + pourProgress * 0.2})`
                }}
              />

              {/* The Master Ritual Canvas */}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain relative z-10"
                style={{ touchAction: 'none' }}
              />
            </div>

            {/* INTERACTIVE CONTROLS BAR (Audio + Replay) */}
            <div className="flex items-center gap-4 mt-4 z-20">
              <button
                onClick={handleReplay}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1A85A]/40 bg-[#17130F] hover:bg-[#D1A85A] hover:text-[#0C0C0C] text-[#F7F4EA] font-cinzel text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                title="Volver a reproducir la animación de vertido"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D1A85A] group-hover:text-[#0C0C0C] transition-colors" />
                Repetir Ritual
              </button>

              <button
                onClick={toggleSound}
                className={`flex items-center gap-2 px-4 py-2 rounded-md border text-xs font-cinzel uppercase tracking-wider transition-all cursor-pointer ${
                  soundEnabled
                    ? 'border-[#D1A85A] bg-[#231A12] text-[#D1A85A] shadow-[0_0_15px_rgba(209,168,90,0.3)]'
                    : 'border-white/10 bg-[#17130F] text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                }`}
                title="Activar efervescencia acústica de vertido"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#D1A85A]" />
                    Efervescencia Activa
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    Sonido de Vertido
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT: SOMMELIER SPECIFICATIONS & TASTING PROTOCOL */}
          <div className="lg:col-span-3 space-y-4 order-3">
            <div className="p-6 rounded-lg bg-[#14100C]/90 border border-[#D1A85A]/25 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#D1A85A] font-bold block mb-4">
                Norma de Cristalería
              </span>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[#F7F4EA]/50 block mb-0.5">Geometría del Cáliz</span>
                  <p className="text-[#F7F4EA] font-medium">Boca acampanada para oxigenar los ésteres de la levadura de abadía.</p>
                </div>

                <div className="border-t border-[#D1A85A]/15 pt-3">
                  <span className="text-[#F7F4EA]/50 block mb-0.5">Tallo & Aislamiento</span>
                  <p className="text-[#F7F4EA] font-medium">Sujeción obligatoria por el fuste para evitar calentar el brebaje con la mano.</p>
                </div>

                <div className="border-t border-[#D1A85A]/15 pt-3">
                  <span className="text-[#F7F4EA]/50 block mb-0.5">Retención de Corona</span>
                  <p className="text-[#D1A85A] font-medium">Espuma compacta que previene la oxidación de la malta caramelo.</p>
                </div>
              </div>
            </div>

            {/* PROTOCOL NOTICE FOR RESTAURANTS */}
            <div className="p-5 rounded-lg bg-gradient-to-br from-[#1C1611] to-[#120E0A] border border-[#D1A85A]/30">
              <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#D1A85A] font-semibold block mb-2">
                Protocolo Restaurantes & Hoteles
              </span>
              <p className="font-sans text-[12px] text-[#F7F4EA]/70 font-light leading-relaxed">
                Cada caja de <strong className="text-[#F7F4EA]">Kloster</strong> para cuentas exclusivas en Santa Cruz incluye capacitación en mesa y cristalería consagrada para el personal de servicio.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
