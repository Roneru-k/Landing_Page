'use client';

import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Container
} from "@mui/material";
import Image from "next/image";
import Fondo from '@/public/images/Minimalist Website Launch Computer Mockup Instagram Post.jpg';
import FloatingCoins from '@/components/FloatingCoins/FloatingCoins';
import TestimonialCard from '@/components/CardTestimonio/Testimonios';
import Persona1 from '@/public/images/RetratosReseña/Persona1.jpeg'
import Persona2 from '@/public/images/RetratosReseña/Persona2.jpg'
import Persona3 from '@/public/images/RetratosReseña/Persona3.jpg'
import { motion } from 'framer-motion';
import AnimatedIconsBackground from '@/components/AnimatedIconsBackground/AnimatedIconsBackground';
import { AnimatePresence } from 'framer-motion';

const MotionContainer = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const faqs = [
  { question: "¿Qué te ofrecemos en Zypher?", answer: "Te ofrecemos bots de trading automáticos, gestión de portafolio, y ejecución de órdenes algorítmicas de forma sencilla y eficiente." },
  { question: "¿Por qué es tan importante tener un bot de trading?", answer: "El bot permite ejecutar estrategias automatizadas sin intervención humana, optimizando oportunidades de trading 24/7." },
  { question: "¿Qué debo tener en cuenta al contratar un servicio de bots?", answer: "Debes verificar la seguridad, el rendimiento histórico, las configuraciones de riesgo y el soporte técnico disponible." },
  { question: "¿Hay que pagar mensualidades?", answer: "Sí, ofrecemos planes mensuales adaptados a las necesidades de cada usuario. Puedes iniciar con una prueba gratuita." },
  { question: "¿Cómo es el proceso de creación de tu cuenta?", answer: "Simplemente crea tu cuenta, conecta tu exchange (como Binance), configura tus bots y comienza a operar." },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* === INICIO === */}
      <section id="inicio" style={{ scrollMarginTop: '80px' }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={0} sx={{ minHeight: '100vh', width: '100%' }}>
          <Box flex={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 4, sm: 6, md: 12 }, py: { xs: 6, md: 0 } }}>
            <Typography variant="h1" component="h1" fontWeight={800} sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }, color: '#1a1a1a', mb: 3 }}>
              Automatiza tu trading
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 6, lineHeight: 1.8, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              Usa los mejores bots de trading, gestiona tu portafolio y ejecuta órdenes algorítmicas fácilmente. Todo desde un solo lugar.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button variant="contained" size="large" sx={{
                py: 2, px: 6, borderRadius: 3, textTransform: 'none', fontSize: '1.1rem', fontWeight: 600,
                background: 'linear-gradient(90deg, #42a5f5, #1976d2, #42a5f5)', backgroundSize: '200% 100%',
                boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)', position: 'relative', overflow: 'hidden',
                '&::before': {
                  content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                  background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  animation: 'shimmer 2s infinite'
                },
                '@keyframes shimmer': { '0%': { left: '-100%' }, '100%': { left: '100%' } },
                '&:hover': { backgroundPosition: 'right center', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(25, 118, 210, 0.39)' },
                transition: 'all 0.3s ease-in-out, background-position 0.8s',
              }}>
                Comenzar prueba gratuita
              </Button>
              <Button variant="outlined" size="large" sx={{ py: 2, px: 6, borderRadius: 3, textTransform: 'none', fontSize: '1.1rem', fontWeight: 600, borderWidth: 2, '&:hover': { borderWidth: 2, transform: 'translateY(-2px)' } }}>
                Ver demo
              </Button>
            </Stack>
          </Box>

          <Box flex={1} sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 4, md: 8 }, perspective: '1500px', transformStyle: 'preserve-3d' }}>
            <FloatingCoins />
            <Box sx={{
              width: '100%', maxWidth: 600, bgcolor: '#2b2b2b', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)', position: 'relative', backdropFilter: 'blur(20px)',
              transform: 'perspective(1000px) rotateY(-5deg)', transition: 'all 0.3s ease',
              '&:hover': { transform: 'perspective(1000px) rotateY(-2deg)' }
            }}>
              <Box sx={{ height: 32, bgcolor: '#1e1e1e', display: 'flex', alignItems: 'center', px: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                    <Box key={color} sx={{ width: 13, height: 13, borderRadius: '50%', bgcolor: color, border: '1px solid rgba(0,0,0,0.2)', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
                  ))}
                </Box>
              </Box>
              <Image src={Fondo} alt="Trading Platform Preview" width={600} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </Box>
          </Box>
        </Stack>
      </section>


      {/* === Quienes somos === */}
      <section
        id="nosotros"
        style={{
          scrollMarginTop: '80px',
          padding: 0,
          backgroundColor: '#ffffff',
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', minHeight: { xs: 320, md: 480 }, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Banner Video */}
          <motion.video
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '320px',
              maxHeight: '480px',
              objectFit: 'cover',
              filter: 'brightness(0.7)',
              display: 'block',
            }}
          >
            <source src="/images/videos/videoTrading2.mp4" type="video/mp4" />
            Tu navegador no soporta este video.
          </motion.video>

          {/* Texto encima del video */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                background: 'rgba(18, 30, 48, 0.65)',
                backdropFilter: 'blur(16px)',
                borderRadius: 8,
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 4 },
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
                maxWidth: 420,
                minWidth: { xs: '90%', sm: 340 },
                textAlign: 'center',
                pointerEvents: 'auto',
                border: '1.5px solid rgba(255,255,255,0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, color: '#fff', letterSpacing: 1, mb: 1 }}>
                ¿Quiénes Somos?
              </Typography>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'circOut' }}
                style={{
                  height: '4px',
                  width: '70px',
                  margin: '0 auto 18px',
                  background: 'linear-gradient(90deg, #ff7b47, #5f2eea, #42a5f5, #00e0d3)',
                  borderRadius: '4px',
                  transformOrigin: 'left',
                  boxShadow: '0 0 8px 2px rgba(95,46,234,0.18)',
                }}
              />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.6, color: '#fff', fontWeight: 400, mb: 0 }}>
                ZYPHER nació con la visión democratizar el acceso a tecnologías avanzadas de trading.<br /><br />
                Combinamos expertos financieros con desarrolladores de alto nivel para potenciar tu rentabilidad.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </section>

      {/* === TECNOLOGÍA DE VANGUARDIA === */}
      <section id="tecnologia" style={{ background: '#fff', padding: '80px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={800} textAlign="center" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2, color: '#1a1a1a' }}>
            Tecnología de Vanguardia
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 7, color: 'rgba(30,32,48,0.7)', fontWeight: 400, maxWidth: 700, mx: 'auto' }}>
            Nuestra plataforma combina algoritmos avanzados con inteligencia artificial para ofrecerte los mejores resultados.
  </Typography>
  <Box
    sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: { xs: 3, md: 4 },
              justifyContent: 'center',
            }}
          >
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Brain SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#4285F4" d="M12 2a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V9a5 5 0 0 1 5-5Z"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Aprendizaje Automático</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Nuestros algoritmos aprenden de los mercados en tiempo real, adaptándose a las condiciones cambiantes para optimizar tus operaciones.
                </Typography>
              </Box>
            </motion.div>
            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Shield SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#4285F4" d="M12 2 4 5v6c0 5.25 4.5 9.75 8 11 3.5-1.25 8-5.75 8-11V5l-8-3Z"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Gestión de Riesgos</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Protección avanzada que limita automáticamente las pérdidas y diversifica las inversiones para minimizar riesgos.
                </Typography>
              </Box>
            </motion.div>
            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Lightning SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#4285F4" d="M13 2v7h5l-6 13v-7H7l6-13Z"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Ejecución Ulrarrápida</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Latencia ultrabaja para ejecutar operaciones en milisegundos, aprovechando cada oportunidad del mercado.
                </Typography>
              </Box>
            </motion.div>
            {/* CARD 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Chart SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#4285F4" d="M5 21V9h4v12H5Zm5 0V3h4v18h-4Zm5 0v-6h4v6h-4Z"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Análisis Predictivo</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Identificación de patrones y tendencias antes de que ocurran, dándote una ventaja competitiva en el mercado.
                </Typography>
              </Box>
            </motion.div>
            {/* CARD 5 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Globe SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4285F4" opacity="0.2"/><path fill="#4285F4" d="M12 2a10 10 0 0 0 0 20V2Zm0 0a10 10 0 0 1 0 20V2Z"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Múltiples Mercados</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Acceso a Forex, Criptomonedas, Índices y Materias Primas desde una sola plataforma integrada.
                </Typography>
              </Box>
            </motion.div>
            {/* CARD 6 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, boxShadow: '0 4px 24px 0 rgba(30,32,48,0.08)', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 200, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(30,32,48,0.16)' } }}>
                <Box sx={{ bgcolor: '#e3f0ff', borderRadius: 2, p: 1.5, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Device SVG */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#4285F4" opacity="0.2"/><rect x="7" y="7" width="10" height="10" rx="2" fill="#4285F4"/></svg>
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#1a1a1a' }}>Control Total</Typography>
                <Typography sx={{ color: '#3a3a3a', fontSize: '1rem', fontWeight: 400 }}>
                  Supervisa y ajusta tu estrategia desde cualquier dispositivo, en cualquier momento y lugar.
  </Typography>
</Box>
            </motion.div>
          </Box>
        </Container>
      </section>


      {/* === PLATAFORMA === */}
      <section
        id="plataforma"
        style={{
          scrollMarginTop: '80px',
          padding: '100px 20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* <AnimatedIconsBackground /> */}

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography marginBottom={9} variant="h2" fontWeight={800} textAlign="center">
            Opiniones de nuestros usuarios
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: { xs: 4, md: 6 },
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%',
              mb: 4,
            }}
          >
            <TestimonialCard Imagen={Persona1} texto="Zypher me ha ayudado a automatizar mis operaciones en futuros de Binance. Los bots son rápidos y precisos, ahora tengo más tiempo libre sin preocuparme por el mercado..." nombre="Luis Ramírez" delay={0} />
            <TestimonialCard Imagen={Persona2} texto="Antes tenía miedo de operar en futuros, pero gracias a Zypher y su interfaz intuitiva, pude empezar sin complicaciones. Excelente herramienta para traders de todos los niveles..." nombre="María González" delay={200} />
            <TestimonialCard Imagen={Persona3} texto="La gestión de portafolio en Zypher es simplemente increíble. Los algoritmos analizan el mercado en tiempo real y ejecutan órdenes que han mejorado mi rentabilidad de forma consistente..." nombre="Carlos Méndez" delay={400} />
          </Box>
        </Container>
      </section>


      {/* === PLANES === */}
      <section id="planes" style={{ background: '#F9FAFB', padding: '80px 0 60px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={800} textAlign="center" sx={{ fontSize: { xs: '2.3rem', md: '2.7rem' }, mb: 1, color: '#23272F', letterSpacing: -1 }}>
            Planes a tu Medida
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: '#6B7280', fontWeight: 400, fontSize: { xs: '1.08rem', md: '1.18rem' } }}>
            Elige el plan que mejor se adapte a tus necesidades de inversión
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 5 }, justifyContent: 'center', alignItems: 'stretch', mb: 3 }}>
            {/* Básico */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ flex: 1, display: 'flex' }}
            >
              <Box sx={{ flex: 1, bgcolor: '#fff', borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(30,32,48,0.10)', p: 5, minWidth: 290, maxWidth: 390, minHeight: 540, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2.5px solid transparent', transition: 'box-shadow 0.2s, border 0.2s', mb: { xs: 0, md: 0 } }}>
                <Typography fontWeight={800} sx={{ fontSize: '1.28rem', mb: 0.5, color: '#23272F', letterSpacing: -0.5 }}>Básico</Typography>
                <Typography sx={{ color: '#6B7280', fontWeight: 400, mb: 2.5, fontSize: '1.08rem' }}>Ideal para comenzar</Typography>
                <Typography sx={{ color: '#2563eb', fontWeight: 800, fontSize: '2.3rem', mb: 0.5, letterSpacing: -1 }}>$49<span style={{ fontWeight: 400, fontSize: '1.1rem', color: '#6B7280' }}>/mes</span></Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '1.13rem', mb: 3, textAlign: 'center' }}>Acceso a estrategias básicas y mercados limitados</Typography>
                <Button variant="contained" sx={{ bgcolor: '#2563eb', color: '#fff', borderRadius: 2.5, fontWeight: 800, fontSize: '1.08rem', py: 1.3, px: 3, mb: 3, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', textTransform: 'uppercase', letterSpacing: 1, '&:hover': { bgcolor: '#1749b1' } }}>Seleccionar plan</Button>
                <Box sx={{ width: '100%', mt: 2, mb: 1.5, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  <FeatureItem checked={true} color="#23272F">3 estrategias básicas</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Mercados Forex y Cripto</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Soporte por email</FeatureItem>
                  <FeatureItem checked={false} color="#23272F">Optimización automática</FeatureItem>
                  <FeatureItem checked={false} color="#23272F">Acceso a mercados premium</FeatureItem>
                </Box>
              </Box>
            </motion.div>
            {/* Profesional (destacado) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ flex: 1, display: 'flex' }}
            >
              <Box sx={{ flex: 1, bgcolor: '#fff', borderRadius: 5, boxShadow: '0 12px 40px 0 rgba(37,99,235,0.18)', p: 5, minWidth: 290, maxWidth: 410, minHeight: 580, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid #2563eb', position: 'relative', zIndex: 2, transition: 'box-shadow 0.2s, border 0.2s', mb: { xs: 0, md: 0 } }}>
                <Box sx={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', bgcolor: '#2563eb', color: '#fff', px: 3.5, py: 0.8, borderRadius: 2.5, fontWeight: 800, fontSize: '1.08rem', letterSpacing: 1, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', textTransform: 'uppercase' }}>Popular</Box>
                <Typography fontWeight={800} sx={{ fontSize: '1.28rem', mb: 0.5, color: '#23272F', mt: 2, letterSpacing: -0.5 }}>Profesional</Typography>
                <Typography sx={{ color: '#6B7280', fontWeight: 400, mb: 2.5, fontSize: '1.08rem' }}>Para traders serios</Typography>
                <Typography sx={{ color: '#2563eb', fontWeight: 800, fontSize: '2.3rem', mb: 0.5, letterSpacing: -1 }}>$99<span style={{ fontWeight: 400, fontSize: '1.1rem', color: '#6B7280' }}>/mes</span></Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '1.13rem', mb: 3, textAlign: 'center' }}>Acceso completo a todas las estrategias y mercados</Typography>
                <Button variant="contained" sx={{ bgcolor: '#2563eb', color: '#fff', borderRadius: 2.5, fontWeight: 800, fontSize: '1.08rem', py: 1.3, px: 3, mb: 3, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', textTransform: 'uppercase', letterSpacing: 1, '&:hover': { bgcolor: '#1749b1' } }}>Seleccionar plan</Button>
                <Box sx={{ width: '100%', mt: 2, mb: 1.5, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  <FeatureItem checked={true} color="#23272F">15+ estrategias avanzadas</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Todos los mercados disponibles</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Soporte prioritario 24/5</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Optimización automática</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Alertas personalizadas</FeatureItem>
                </Box>
              </Box>
            </motion.div>
            {/* Institucional */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ flex: 1, display: 'flex' }}
            >
              <Box sx={{ flex: 1, bgcolor: '#fff', borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(30,32,48,0.10)', p: 5, minWidth: 290, maxWidth: 390, minHeight: 540, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2.5px solid transparent', transition: 'box-shadow 0.2s, border 0.2s', mb: { xs: 0, md: 0 } }}>
                <Typography fontWeight={800} sx={{ fontSize: '1.28rem', mb: 0.5, color: '#23272F', letterSpacing: -0.5 }}>Institucional</Typography>
                <Typography sx={{ color: '#6B7280', fontWeight: 400, mb: 2.5, fontSize: '1.08rem' }}>Para grandes capitales</Typography>
                <Typography sx={{ color: '#2563eb', fontWeight: 800, fontSize: '2.3rem', mb: 0.5, letterSpacing: -1 }}>$299<span style={{ fontWeight: 400, fontSize: '1.1rem', color: '#6B7280' }}>/mes</span></Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '1.13rem', mb: 3, textAlign: 'center' }}>Solución personalizada para inversores institucionales</Typography>
                <Button variant="contained" sx={{ bgcolor: '#2563eb', color: '#fff', borderRadius: 2.5, fontWeight: 800, fontSize: '1.08rem', py: 1.3, px: 3, mb: 3, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', textTransform: 'uppercase', letterSpacing: 1, '&:hover': { bgcolor: '#1749b1' } }}>Contactar ventas</Button>
                <Box sx={{ width: '100%', mt: 2, mb: 1.5, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  <FeatureItem checked={true} color="#23272F">Estrategias personalizadas</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Acceso a API completa</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Gerente de cuenta dedicado</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Reportes ejecutivos</FeatureItem>
                  <FeatureItem checked={true} color="#23272F">Servidores dedicados</FeatureItem>
                </Box>
              </Box>
            </motion.div>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography sx={{ color: '#6B7280', fontSize: '1.13rem', mb: 1.5 }}>¿Necesitas algo más personalizado?</Typography>
            <Button variant="outlined" sx={{ borderColor: '#2563eb', color: '#2563eb', borderRadius: 2.5, fontWeight: 800, fontSize: '1.08rem', px: 3, py: 1.2, textTransform: 'uppercase', letterSpacing: 1, '&:hover': { bgcolor: '#2563eb', color: '#fff', borderColor: '#2563eb' } }}>
              Solicitar plan personalizado
            </Button>
          </Box>
        </Container>
      </section>


      {/* === PREGUNTAS FRECUENTES === */}
      <section id="preguntas" style={{ scrollMarginTop: '80px', padding: '80px 0', backgroundColor: '#fff' }}>
        <Container maxWidth="sm">
          <Typography variant="h2" fontWeight={800} gutterBottom textAlign="center" sx={{ mb: 1, color: '#23272F', fontSize: { xs: '2rem', md: '2.4rem' } }}>
            Preguntas Frecuentes
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 5, color: '#6B7280', fontWeight: 400, fontSize: { xs: '1rem', md: '1.15rem' } }}>
            Todo lo que necesitas saber sobre Zypher
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                style={{ width: '100%' }}
              >
                <Box
                  sx={{
                    borderRadius: 4.5,
                    boxShadow: '0 4px 18px 0 rgba(30,32,48,0.10)',
                    bgcolor: '#fff',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: 700,
                    mx: 'auto',
                  }}
                >
                  <Box
                    component="button"
                    onClick={() => toggle(index)}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: { xs: 2.5, md: 3 },
                      background: 'none',
                      color: '#23272F',
                      fontWeight: 700,
                      fontSize: { xs: '1.13rem', md: '1.18rem' },
                      border: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      borderRadius: 4.5,
                      transition: 'background 0.2s',
                      textAlign: 'left',
                      '&:hover': { background: '#f3f6fa' },
                    }}
                  >
                    <span style={{ flex: 1 }}>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'inline-block', marginLeft: 18, fontSize: 32, color: '#2563eb', fontWeight: 700, lineHeight: 1 }}
                    >
                      +
                    </motion.span>
                  </Box>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Box sx={{
                          px: { xs: 3, md: 4 },
                          pb: 2.8,
                          pt: 0.5,
                          color: '#444',
                          fontSize: { xs: '1.13rem', md: '1.18rem' },
                          textAlign: 'left',
                          fontWeight: 400,
                          letterSpacing: 0.01,
                          lineHeight: 1.7,
                          borderBottomLeftRadius: 28,
                          borderBottomRightRadius: 28,
                          background: '#fff',
                          boxShadow: '0 2px 12px 0 rgba(30,32,48,0.04)',
                        }}>
                          {faq.answer}
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </section>



      {/* === RECURSO === */}
      <section id="recurso" style={{ scrollMarginTop: '80px', padding: '100px 20px', backgroundColor: '#f0f0f0' }}>
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} gutterBottom>Recursos</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Explora nuestros tutoriales, documentación técnica, blogs y casos de éxito para potenciar tu experiencia con ZYPHER.
          </Typography>
        </Container>
      </section>
    </main>
  );
}

// Componente FeatureItem para checks y cruces
function FeatureItem({ children, checked, color }: { children: React.ReactNode; checked: boolean; color: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, color: checked ? color : '#bdbdbd', fontWeight: 500, fontSize: '1.08rem', mb: 0.5, pl: 0.5 }}>
      {checked ? (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ) : (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#bdbdbd" strokeWidth="2.2" strokeLinecap="round"/></svg>
      )}
      <span style={{ textDecoration: checked ? 'none' : 'line-through', opacity: checked ? 1 : 0.6 }}>{children}</span>
    </Box>
  );
}
