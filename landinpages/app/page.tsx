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
<<<<<<< Updated upstream
=======
import TestimonialCard from '@/components/CardTestimonio/Testimonios';
import Persona1 from '@/public/images/RetratosReseña/Persona1.jpeg'
import Persona2 from '@/public/images/RetratosReseña/Persona2.jpg'
import Persona3 from '@/public/images/RetratosReseña/Persona3.jpg'
import { motion } from "framer-motion";
import { blue } from "@mui/material/colors";

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
  { question: "¿Por qué es importante un diseño atractivo en una plataforma de trading?", answer: "Un diseño claro y atractivo mejora la experiencia del usuario, facilita la navegación y permite tomar decisiones rápidas y eficientes." },
  { question: "¿Qué debo tener en cuenta al contratar un servicio de bots?", answer: "Debes verificar la seguridad, el rendimiento histórico, las configuraciones de riesgo y el soporte técnico disponible." },
  { question: "¿Quién controla el hosting y dominio?", answer: "Nosotros nos encargamos de toda la infraestructura para que te concentres en tus estrategias de trading." },
  { question: "¿Hay que pagar mensualidades?", answer: "Sí, ofrecemos planes mensuales adaptados a las necesidades de cada usuario. Puedes iniciar con una prueba gratuita." },
  { question: "¿Qué pasa si no me gusta la plataforma?", answer: "Puedes cancelar en cualquier momento. Además, ofrecemos soporte para resolver cualquier inconveniente que puedas tener." },
  { question: "¿Cómo es el proceso de creación de tu cuenta?", answer: "Simplemente crea tu cuenta, conecta tu exchange (como Binance), configura tus bots y comienza a operar." }
];
>>>>>>> Stashed changes

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
            <Typography variant="h1" component="h1" fontWeight="800" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }, color: '#1a1a1a', mb: 3 }}>
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
                '&::before': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)', animation: 'shimmer 2s infinite' },
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

      {/* === PLATAFORMA === */}
<<<<<<< Updated upstream
      <section
        id="plataforma"
        style={{
          scrollMarginTop: '80px',
          padding: '100px 20px',
          backgroundColor: '#f8f9fb',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
          >
            Plataforma
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Con nuestra plataforma puedes integrar múltiples exchanges, usar bots personalizables y acceder a análisis de mercado en tiempo real.
          </Typography>
=======
      <section id="plataforma" style={{ scrollMarginTop: '80px', padding: '100px 20px', position: 'relative', backgroundColor: '#f8f9fb', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography marginBottom={9} variant="h2" fontWeight={800} textAlign="center">
            Opiniones de nuestros usuarios
          </Typography>
          <MotionContainer variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <TestimonialCard Imagen={Persona1} texto="Zypher me ha ayudado a automatizar mis operaciones en futuros de Binance..." nombre="Luis Ramírez" delay={0} />
            <TestimonialCard Imagen={Persona2} texto="Antes tenía miedo de operar en futuros, pero gracias a Zypher..." nombre="María González" delay={200} />
            <TestimonialCard Imagen={Persona3} texto="La gestión de portafolio en Zypher es simplemente increíble..." nombre="Carlos Méndez" delay={400} />
          </MotionContainer>
        </Container>
      </section>

      {/* === PREGUNTAS FRECUENTES === */}
      <section id="Preguntas_Frecuentes" style={{ scrollMarginTop: '80px', padding: '100px 20px', backgroundColor: '#F9FAFB' }}>
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} gutterBottom textAlign="center">Preguntas Frecuentes</Typography>
          {faqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 2, borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
              <Box component="button" onClick={() => toggle(index)} sx={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2,
                background: 'linear-gradient(90deg, #42a5f5, #1976d2)', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer'
              }}>
                {faq.question}
                <Typography variant="h5">{activeIndex === index ? '-' : '+'}</Typography>
              </Box>
              {activeIndex === index && <Box sx={{ p: 2, backgroundColor: '#fff', color: '#24292F' }}>{faq.answer}</Box>}
            </Box>
          ))}
>>>>>>> Stashed changes
        </Container>
      </section>

      {/* === EMPRESA === */}
      <section id="Acerca_De" style={{ scrollMarginTop: '80px', padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} gutterBottom>Empresa</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            ZYPHER nació con la visión de democratizar el acceso a tecnologías avanzadas de trading. Nuestro equipo combina expertos financieros con desarrolladores de alto nivel.
          </Typography>
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
