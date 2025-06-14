import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import Fondo from '@/public/images/Minimalist Website Launch Computer Mockup Instagram Post.jpg';

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
        padding={4}
      >
        {/* Imagen */}
        <Box flex={1} display="flex" justifyContent="center">
          <Image
            src={Fondo}
            alt="Imagen de fondo"
            width={450}
            height={450}
            style={{ borderRadius: 16 }}
          />
        </Box>

        {/* Texto llamativo */}
        <Box flex={1}>
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Automatiza tu <span style={{ color: '#1976d2' }}>trading</span> de forma inteligente
          </Typography>
          <Typography variant="body1" paragraph>
            Usa los mejores bots de trading, gestiona tu portafolio y ejecuta órdenes algorítmicas fácilmente. Todo desde un solo lugar.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Comenzar prueba gratuita
          </Button>
        </Box>
      </Stack>
    </main>
  );
}
