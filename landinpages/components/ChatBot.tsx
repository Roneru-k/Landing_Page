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
		'Hola que tal! 👋',
		'Mi nombre es Zypherbot. ¿En qué puedo ayudarte hoy?'
	],
	i18n: {
		en: {
            title: 'Hola 👋',
            subtitle: "Bienvenido a Zypher.",
            footer: '',
            getStarted: 'Nueva Conversacion',
            inputPlaceholder: 'Nueva conversación',
            closeButtonTooltip: ''
        },
	},
});
	}, []);

	return (<div></div>);
};