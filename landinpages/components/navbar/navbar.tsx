'use client'
import { useState } from 'react'
import { AppBar, Button, Box, Stack, Toolbar, Typography } from '@mui/material'


export default function Navbar() {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const menuItems = [
        { text: 'Plataforma', href: '/platform' },
        { text: 'Empresa', href: '/company' },
        { text: 'Recurso', href: '/resources' },
    ];

    return (
        <AppBar position='fixed' elevation={0} sx={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}>
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography 
                        variant='h4' 
                        sx={{ 
                            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 700,
                            letterSpacing: '-1px',
                            mr: 4,
                            cursor: 'pointer',
                            '&:hover': { 
                                transform: 'translateY(-1px)',
                                textShadow: '0 5px 15px rgba(66, 165, 245, 0.4)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        ZYPHER
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((item) => (
                            <Typography
                                key={item.text}
                                variant='subtitle1'
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    mx: 2,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    fontWeight: 500,
                                    '&:hover': {
                                        color: 'primary.main',
                                        '&::after': {
                                            width: '100%',
                                            opacity: 1,
                                        }
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -2,
                                        left: 0,
                                        width: activeItem === item.text ? '100%' : '0%',
                                        opacity: activeItem === item.text ? 1 : 0,
                                        height: '3px',
                                        background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s ease'
                                    }
                                }}
                                onClick={() => setActiveItem(item.text)}
                            >
                                {item.text}
                            </Typography>
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
                                boxShadow: '0 6px 20px rgba(25, 118, 210, 0.39)'
                            },
                            transition: 'all 0.2s ease'
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
                            '&:hover': { 
                                transform: 'translateY(-2px)',
                                borderWidth: 2,
                                background: 'rgba(25, 118, 210, 0.04)'
                            },
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Sign in
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
