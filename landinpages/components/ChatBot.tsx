import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const ChatBot = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'http://localhost:5678/webhook/f40137f1-94db-4528-ba15-b8ab0b1c3774/chat',
			webhookConfig: {
				method: 'POST',
				headers: {}
			},
			target: '#n8n-chat',
			mode: 'window',
			chatInputKey: 'chatInput',
			chatSessionKey: 'sessionId',
			loadPreviousSession: true,
			metadata: {},
			showWelcomeScreen: false,
			defaultLanguage: 'en',
			initialMessages: [
				'¡Hola! 👋',
				'Soy **ZypherBot**, tu asistente virtual. ¿En qué puedo ayudarte con Zypher hoy?'
			],
			i18n: {
				es: {
					title: '¡Bienvenido a ZypherBot! 🤖',
					subtitle: 'Chatea con nosotros. Estamos aquí para ayudarte 24/7.',
					footer: '',
					getStarted: 'Nueva conversación',
					inputPlaceholder: 'Escribe tu pregunta aquí...',
					closeButtonTooltip: 'Cerrar chat'
				}
			},
		});
	}, []);

	return <div id="n8n-chat"></div>;
};
