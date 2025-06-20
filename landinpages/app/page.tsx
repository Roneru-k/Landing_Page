import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import Fondo from '@/public/images/Minimalist Website Launch Computer Mockup Instagram Post.jpg';
import FloatingCoins from '@/components/FloatingCoins/FloatingCoins';

export default function Home() {
  return (
    <main style={{ 
      width: '100%', 
      minHeight: '100vh',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',  // Añadido para contener los elementos flotantes
    }}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={0}
        sx={{
          minHeight: '100vh',
          width: '100%',
        }}
      >
        {/* Contenido de texto mejorado */}
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
              mb: 3
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
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Usa los mejores bots de trading, gestiona tu portafolio y ejecuta órdenes algorítmicas fácilmente. Todo desde un solo lugar.
          </Typography>
          
          <Stack direction="row" spacing={3}>
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
                  '0%': {
                    left: '-100%',
                  },
                  '100%': {
                    left: '100%',
                  }
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

        {/* Imagen con efecto ventana macOS mejorado */}
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
              transformStyle: 'preserve-3d'
            }
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
              }
            }}
          >
            {/* Barra superior estilo macOS */}
            <Box
              sx={{
                height: 32,
                bgcolor: '#1e1e1e',
                display: 'flex',
                alignItems: 'center',
                px: 3,
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                  <Box
                    key={color}
                    sx={{
                      width: 13,
                      height: 13,
                      borderRadius: '50%',
                      bgcolor: color,
                      border: '1px solid rgba(0,0,0,0.2)',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  />
                ))}
              </Box>
            </Box>
            
            {/* Imagen */}
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
    </main>
  );
}
