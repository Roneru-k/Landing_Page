'use client';

import {
    Avatar,
    Box,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import { Star } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";

// Tarjeta animada con hover
const MotionCard = motion(Card);

export default function TestimonialCard({ Imagen, texto, nombre, delay = 0 }) {
    return (
        <MotionCard
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0, 123, 255, 0.2)",
            }}
            transition={{
                duration: 0.7,
                delay: delay / 1000,
                ease: 'easeOut'
            }}
            sx={{
                width: 360,
                textAlign: "center",
                borderRadius: 6,
                px: 2,
                pt: 6,
                pb: 4,
                position: "relative",
                overflow: "visible",
                backgroundColor: "#ffffff",
                mx: 'auto',
                cursor: 'pointer',
                border: '8px solid #007bff', // azul brillante
                borderRadius: 6,
            }}

        >
            {/* Avatar flotante */}
            <Box
                sx={{
                    position: "absolute",
                    top: -45,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid white',
                    backgroundColor: '#fff',
                }}
            >
                <Image
                    src={Imagen}
                    alt={nombre}
                    width={90}
                    height={90}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Box>

            <CardContent>
                <Typography variant="subtitle1" fontWeight={800} sx={{ mt: 4, mb: 2 }}>
                    {nombre.toUpperCase()}
                </Typography>

                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                    {texto}
                </Typography>

                <Box display="flex" justifyContent="center" gap={0.5}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} sx={{ color: "#007bff", fontSize: "22px" }} />
                    ))}
                </Box>
            </CardContent>
        </MotionCard>
    );
}
