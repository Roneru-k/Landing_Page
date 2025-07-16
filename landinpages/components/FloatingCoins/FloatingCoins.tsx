'use client';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import CryptoModal from '../CryptoModal/CryptoModal';

const ORBIT_RADIUS = 400;
const TOTAL_COINS = 5;
const BASE_ANIMATION_DURATION = '20s';

const baseCoins = [
    {
        id: 1,
        icon: (
            <svg width="50" height="50" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A"/>
                <path d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.745-.17-1.1-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.56c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z" fill="#ffffff"/>
            </svg>
        ),
    },
    {
        id: 2,
        icon: (
            <svg width="45" height="45" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"/>
                <path d="M16.498 4v8.87l7.497 3.35L16.498 4z" fill="#fff" fillOpacity="0.602"/>
                <path d="M16.498 4L9 16.22l7.498-3.35V4z" fill="#fff"/>
                <path d="M16.498 21.968v6.027L24 17.616l-7.502 4.352z" fill="#fff" fillOpacity="0.602"/>
                <path d="M16.498 27.995v-6.028L9 17.616l7.498 10.379z" fill="#fff"/>
            </svg>
        ),
    },
    {
        id: 3,
        icon: (
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F0B90B"/>
                <path d="M16 7L18.6 9.6L13.2 15L10.6 12.4L16 7Z" fill="#fff"/>
                <path d="M18.6 15L21.2 17.6L15.8 23L13.2 20.4L18.6 15Z" fill="#fff"/>
                <path d="M10.6 17.6L13.2 20.2L7.8 25.6L5.2 23L10.6 17.6Z" fill="#fff"/>
                <path d="M26.6 12.4L24 15L18.6 9.6L21.2 7L26.6 12.4Z" fill="#fff"/>
            </svg>
        ),
    },
    {
        id: 4,
        icon: (
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2A5ADA"/>
                <path d="M16 6L20 8.5L16 11L12 8.5L16 6Z" fill="#fff"/>
                <path d="M20 14.5L16 17L12 14.5V9.5L16 12L20 9.5V14.5Z" fill="#fff"/>
                <path d="M20 20.5L16 23L12 20.5V15.5L16 18L20 15.5V20.5Z" fill="#fff"/>
                <path d="M16 23.5L12 21V18.5L16 21L20 18.5V21L16 23.5Z" fill="#fff"/>
            </svg>
        ),
    },
    {
        id: 5,
        icon: (
            <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#000000"/>
                <path d="M9.925 19.89c-.4.19-.85-.17-.75-.6l1.1-4.7c.1-.3.3-.5.6-.5h11.3c.5 0 .8.6.5 1l-2.7 3.7c-.2.3-.5.4-.8.4h-8.4c-.3 0-.6.3-.5.6.1.3.4.5.7.5h8.9c.3 0 .5.2.4.5l-.7 2.5c-.1.3-.4.5-.7.5h-7.5c-.4 0-.7-.3-.7-.7v-.7c0-.4-.4-.6-.7-.4z" fill="#00FFA3"/>
            </svg>
        ),
    }
];

const coins = baseCoins.map((coin, index) => ({
    ...coin,
    animation: BASE_ANIMATION_DURATION,
    initialRotation: (360 / TOTAL_COINS) * index,
    orbitRadius: ORBIT_RADIUS,
    size: coin.icon.props.width
}));

const cryptoInfo = {
    1: {
        name: "Bitcoin (BTC)",
        description: "La primera criptomoneda descentralizada del mundo. Bitcoin utiliza la tecnología blockchain para facilitar pagos peer-to-peer sin necesidad de intermediarios.",
        year: "2009",
        creator: "Satoshi Nakamoto"
    },
    2: {
        name: "Ethereum (ETH)",
        description: "Una plataforma blockchain que permite la creación de contratos inteligentes y aplicaciones descentralizadas (dApps).",
        year: "2015",
        creator: "Vitalik Buterin"
    },
    3: {
        name: "Binance Coin (BNB)",
        description: "La criptomoneda nativa del ecosistema Binance, utilizada para trading, pago de fees y participación en token sales en la Binance Launchpad.",
        year: "2017",
        creator: "Changpeng Zhao (CZ)"
    },
    4: {
        name: "Cardano (ADA)",
        description: "Una blockchain de prueba de participación desarrollada con metodología académica y enfoque en sostenibilidad y escalabilidad.",
        year: "2017",
        creator: "Charles Hoskinson"
    },
    5: {
        name: "Solana (SOL)",
        description: "Blockchain de alta velocidad y bajo costo diseñada para escalar, capaz de procesar hasta 65,000 transacciones por segundo.",
        year: "2020",
        creator: "Anatoly Yakovenko"
    }
} as const;

const FloatingCoins = () => {
    const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
    const [modalInfo, setModalInfo] = useState<typeof cryptoInfo[keyof typeof cryptoInfo] | null>(null);
    const modalTimeoutRef = useRef<NodeJS.Timeout | null| undefined>(undefined);

    const handleCoinHover = (coinId: number) => {
        if (modalTimeoutRef.current) {
            clearTimeout(modalTimeoutRef.current);
        }
        setSelectedCoin(coinId);
        setModalInfo(cryptoInfo[coinId as keyof typeof cryptoInfo]);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!modalInfo) return;

        // Obtener dimensiones y posición del contenedor
        const container = document.querySelector('.coin-container');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        // Verificar si el mouse está fuera del área de las monedas
        const isOutside = x < rect.left - 100 || 
                         x > rect.right + 100 || 
                         y < rect.top - 100 || 
                         y > rect.bottom + 100;

        if (isOutside) {
            modalTimeoutRef.current = setTimeout(() => {
                setSelectedCoin(null);
                setModalInfo(null);
            }, 100);
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(modalTimeoutRef.current);
        };
    }, [modalInfo]);

    return (
        <Box
            className="coin-container"
            sx={{
                position: 'absolute',
                width: '150%',
                height: '100%',
                top: 0,
                left: '-25%',
                overflow: 'visible',
                perspective: '2000px',
                transformStyle: 'preserve-3d',
                zIndex: 10,
            }}
        >
            {coins.map((coin) => (
                <Box
                    key={coin.id}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transformStyle: 'preserve-3d',
                        animation: `orbit-${coin.id} ${coin.animation} infinite linear`,
                        animationPlayState: selectedCoin ? 'paused' : 'running',
                        cursor: 'pointer',
                        [`@keyframes orbit-${coin.id}`]: {
                            from: {
                                transform: `translate(-50%, -50%) rotateY(${coin.initialRotation}deg) translateX(${coin.orbitRadius}px)`,
                            },
                            to: {
                                transform: `translate(-50%, -50%) rotateY(${coin.initialRotation + 360}deg) translateX(${coin.orbitRadius}px)`,
                            }
                        },
                    }}
                    onClick={() => {
                        setSelectedCoin(coin.id);
                        setModalInfo(cryptoInfo[coin.id as keyof typeof cryptoInfo]);
                    }}
                >
                    <Box
                        sx={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateY(-90deg)',
                            transition: 'transform 0.3s ease',
                            opacity: selectedCoin === coin.id ? 1 : 0.8,
                        }}
                    >
                        {coin.icon}
                    </Box>
                </Box>
            ))}
            
            {modalInfo && (
                <CryptoModal
                    open={!!modalInfo}
                    onClose={() => {
                        setSelectedCoin(null);
                        setModalInfo(null);
                    }}
                    cryptoInfo={modalInfo}
                />
            )}
        </Box>
    );
};

export default FloatingCoins;
