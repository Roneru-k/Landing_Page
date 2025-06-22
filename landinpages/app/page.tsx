'use client';

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
// import Persona4 from '@/public/images/RetratosReseña/Persona4.jpg'
// import Persona5 from '@/public/images/RetratosReseña/Persona5.jpeg'
// import Persona6 from '@/public/images/RetratosReseña/persona6.jpg'

import IconosSVG from '@/public/svg/coin-svgrepo-com.svg'
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




export default function Home() {
  return (
    <main
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* === INICIO === */}
      <section
        id="inicio"
        style={{ scrollMarginTop: '80px' }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={0}
          sx={{
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <Box
            flex={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 4, sm: 6, md: 12 },
              py: { xs: 6, md: 0 },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontWeight="800"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                color: '#1a1a1a',
                mb: 3,
              }}
            >
              Automatiza tu trading
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(0, 0, 0, 0.7)',
                mb: 6,
                lineHeight: 1.8,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Usa los mejores bots de trading, gestiona tu portafolio y ejecuta órdenes algorítmicas fácilmente. Todo desde un solo lugar.
            </Typography>

            <Stack
              direction="row"
              spacing={3}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #42a5f5, #1976d2, #42a5f5)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    animation: 'shimmer 2s infinite',
                  },
                  '@keyframes shimmer': {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' },
                  },
                  '&:hover': {
                    backgroundPosition: 'right center',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.39)',
                  },
                  transition: 'all 0.3s ease-in-out, background-position 0.8s',
                }}
              >
                Comenzar prueba gratuita
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Ver demo
              </Button>
            </Stack>
          </Box>

          <Box
            flex={1}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 4, md: 8 },
              perspective: '1500px',
              transformStyle: 'preserve-3d',
              '& > *': {
                transformStyle: 'preserve-3d',
              },
            }}
          >
            <FloatingCoins />

            <Box
              sx={{
                width: '100%',
                maxWidth: 600,
                bgcolor: '#2b2b2b',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(-2deg)',
                },
              }}
            >
              <Box
                sx={{
                  height: 32,
                  bgcolor: '#1e1e1e',
                  display: 'flex',
                  alignItems: 'center',
                  px: 3,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                  }}
                >
                  {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: 13,
                        height: 13,
                        borderRadius: '50%',
                        bgcolor: color,
                        border: '1px solid rgba(0,0,0,0.2)',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Image
                src={Fondo}
                alt="Trading Platform Preview"
                width={600}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                priority
              />
            </Box>
          </Box>
        </Stack>
      </section>

 {/* === PLATAFORMA === */}
<section
  id="plataforma"
  style={{
    scrollMarginTop: '80px',
    padding: '100px 20px',
    position: 'relative',
    backgroundColor: '#f8f9fb',
    overflow: 'hidden',
  }}
>
  {/* Fondo animado */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  >
    <Box
      component="img"
      src="/svg/uptrend.svg"
      alt="chart"
      sx={{
        position: 'absolute',
        top: '20%',
        left: '47%',
        width: 100,
        opacity: 1,
        animation: 'float 6s ease-in-out infinite',
      }}
    />
    <Box
      component="img"
      src='/svg/trading.svg'
      alt="coin"
      sx={{
        position: 'absolute',
        top: '70%',
        left: '75%',
        width: 70,
        opacity: 2,
        animation: 'scalePulse 12s ease-in-out infinite ',
      }}
    />
    <Box
      component="img"
      src="/svg/stocks.svg"
      alt="bull"
      sx={{
        position: 'absolute',
        top: '70%',
        left: '23%',
        width: 70,
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        animation: 'spin 12s linear infinite',
        color:blue
      }}
    />
  </Box>

  {/* Contenido */}
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Typography marginBottom={9} variant="h2" fontWeight={800} textAlign="center">
      Opiniones de nuestros usuarios
    </Typography>

    <MotionContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}
    >
      <TestimonialCard
        Imagen={Persona1}
        texto="Zypher me ha ayudado a automatizar mis operaciones en futuros de Binance..."
        nombre="Luis Ramírez"
        delay={0}
      />
      <TestimonialCard
        Imagen={Persona2}
        texto="Antes tenía miedo de operar en futuros, pero gracias a Zypher..."
        nombre="María González"
        delay={200}
      />
      <TestimonialCard
        Imagen={Persona3}
        texto="La gestión de portafolio en Zypher es simplemente increíble..."
        nombre="Carlos Méndez"
        delay={400}
      />
    </MotionContainer>
  </Container>
</section>

      {/* === EMPRESA === */}
      <section
        id="empresa"
        style={{
          scrollMarginTop: '80px',
          padding: '100px 20px',
          backgroundColor: '#ffffff',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
          >
            Empresa
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            ZYPHER nació con la visión de democratizar el acceso a tecnologías avanzadas de trading. Nuestro equipo combina expertos financieros con desarrolladores de alto nivel.
          </Typography>
        </Container>
      </section>

      {/* === RECURSO === */}
      <section
        id="recurso"
        style={{
          scrollMarginTop: '80px',
          padding: '100px 20px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
          >
            Recursos
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Explora nuestros tutoriales, documentación técnica, blogs y casos de éxito para potenciar tu experiencia con ZYPHER.
          </Typography>
        </Container>
      </section>
    </main>
  );
}
