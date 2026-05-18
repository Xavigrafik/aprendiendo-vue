<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();

const footerLinks = ref([
    {
        title: 'Compañía',
        items: [
            { text: 'Sobre Nosotros', url: '#' },
            { text: 'Clientes', url: '#' },
            { text: 'Contacto', url: '#' }
        ]
    },
    {
        title: 'Recursos',
        items: [
            { text: 'Directorio', url: '#' },
            { text: 'Términos de Uso', url: '#' },
            { text: 'Privacidad', url: '#' }
        ]
    }
]);
</script>

<template>
    <footer class="main-footer">
        <div class="footer-content">
            <div class="footer-brand">
                <span class="footer-logo">🎯 DirectorioApp</span>
                <p class="footer-description">
                    Gestiona tus usuarios comerciales y optimiza tu flujo de trabajo diario de forma elegante.
                </p>
                <div class="footer-socials">
                    <a href="#" aria-label="Twitter">🕊️</a>
                    <a href="#" aria-label="GitHub">💻</a>
                    <a href="#" aria-label="LinkedIn">💼</a>
                </div>
            </div>

            <div class="footer-links-container">
                <div 
                    v-for="group in footerLinks" 
                    :key="group.title" 
                    class="footer-group"
                >
                    <h4 class="footer-title">{{ group.title }}</h4>
                    <ul class="footer-list">
                        <li v-for="link in group.items" :key="link.text">
                            <a :href="link.url" class="footer-link">
                                {{ link.text }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ currentYear }} DirectorioApp. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
// Hacemos uso de tus variables CSS globales nativas
.main-footer {
    background-color: var(--color-info, #ffffff); 
    border-top: 1px solid var(--border-color, #e0e0e0);
    padding: calc(var(--space-md) * 2) var(--space-md) var(--space-sm);
    color: var(--text-tertiary, #333333);
    margin-top: 2rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: calc(var(--space-md) * 2);
    
    // Desktop layout
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
}

.footer-brand {
    max-width: 320px;

    .footer-logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.5px;
        display: block;
        margin-bottom: var(--space-sm);
    }

    .footer-description {
        font-size: 0.9rem;
        line-height: 1.5;
        opacity: 0.75;
        margin-bottom: var(--space-md);
    }

    .footer-socials {
        display: flex;
        gap: var(--space-sm);
        
        a {
            text-decoration: none;
            font-size: 1.2rem;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(-3px);
            }
        }
    }
}

.footer-links-container {
    display: flex;
    gap: calc(var(--space-md) * 2);
}

.footer-group {
    min-width: 120px;

    .footer-title {
        font-size: 0.95rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: var(--space-md);
        opacity: 0.9;
    }

    .footer-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .footer-link {
        color: inherit;
        text-decoration: none;
        font-size: 0.9rem;
        opacity: 0.7;
        transition: opacity 0.2s, padding-left 0.2s;

        &:hover {
            opacity: 1;
            padding-left: 4px; // Sutil efecto de movimiento al pasar el ratón
            color: var(--primary-color, #0076ff); 
        }
    }
}

.footer-bottom {
    max-width: 1200px;
    margin: calc(var(--space-md) * 2) auto 0;
    padding-top: var(--space-md);
    border-top: 1px solid var(--border-color, #e0e0e0);
    text-align: center;
    font-size: 0.8rem;
    opacity: 0.6;
}
</style>