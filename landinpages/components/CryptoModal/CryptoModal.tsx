'use client'
import { useEffect, useRef } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CryptoInfo {
    name: string;
    description: string;
    year: string;
    creator: string;
}

interface CryptoModalProps {
    open: boolean;
    onClose: () => void;
    cryptoInfo: CryptoInfo;
}

const CryptoModal = ({ open, onClose, cryptoInfo }: CryptoModalProps) => {
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!open) return;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Obtener el centro de la pantalla
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calcular la distancia desde el centro
            const distance = Math.sqrt(
                Math.pow(mouseX - centerX, 2) + 
                Math.pow(mouseY - centerY, 2)
            );

            // Si el mouse está a más de 400px del centro, cerrar el modal
            if (distance > 400) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    onClose();
                }, 100);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutRef.current);
        };
    }, [open, onClose]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    timeout: 500,
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(4px)',
                        transition: 'all 0.3s ease-in-out!important',
                    }
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    bgcolor: '#1e1e1e',
                    borderRadius: '12px',
                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                    outline: 'none',
                    position: 'relative',
                    opacity: 0,
                    transform: 'scale(0.95) translateY(20px)',
                    animation: open ? 'modalEnter 0.3s forwards' : 'modalExit 0.3s forwards',
                    '@keyframes modalEnter': {
                        to: {
                            opacity: 1,
                            transform: 'scale(1) translateY(0)',
                        }
                    },
                    '@keyframes modalExit': {
                        from: {
                            opacity: 1,
                            transform: 'scale(1) translateY(0)',
                        },
                        to: {
                            opacity: 0,
                            transform: 'scale(0.95) translateY(20px)',
                        }
                    }
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Barra superior estilo macOS con botón de cierre */}
                <Box
                    sx={{
                        height: 32,
                        bgcolor: '#2c2c2c',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                            <Box
                                key={color}
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    bgcolor: color,
                                    border: '1px solid rgba(0,0,0,0.2)',
                                }}
                            />
                        ))}
                    </Box>
                    <IconButton
                        size="small"
                        onClick={onClose}
                        sx={{
                            color: 'rgba(255,255,255,0.7)',
                            '&:hover': {
                                color: 'rgba(255,255,255,0.9)',
                            }
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>{cryptoInfo.name}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>{cryptoInfo.description}</Typography>
                    <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                            Año de creación: {cryptoInfo.year}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                            Creador: {cryptoInfo.creator}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default CryptoModal;
