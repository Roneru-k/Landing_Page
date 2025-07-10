'use client'
import { useState } from 'react'
import { AppBar, Button, Box, Stack, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    { text: 'Inicio', href: '#inicio' },
    { text: 'Reseñas', href: '#plataforma' },
    { text: 'Preguntas Frecuentes', href: '#Preguntas_Frecuentes' },
    { text: 'Sobre Nosotros', href: '#Nosototros' },
  ];

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          py: 1.5,
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='h4'
            sx={{
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 800,
              letterSpacing: '-1px',
              mr: 4,
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-1px)',
                textShadow: '0 5px 15px rgba(66, 165, 245, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            ZYPHER
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveItem(item.text)}
              >
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    position: 'relative',
                    fontWeight: 500,
                    borderRadius: 1,
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(25, 118, 210, 0.04)',
                      '&::after': {
                        width: '100%',
                        opacity: 1,
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: activeItem === item.text ? '80%' : '0%',
                      opacity: activeItem === item.text ? 1 : 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </a>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 3,
              py: 1,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              fontWeight: 600,
              boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(25, 118, 210, 0.39)',
                background: 'linear-gradient(45deg, #1565c0, #1976d2)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 3,
              py: 1,
              borderWidth: 2,
              fontWeight: 600,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                borderWidth: 2,
                background: 'rgba(25, 118, 210, 0.04)',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Sign in
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
