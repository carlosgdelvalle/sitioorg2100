// Modern Header & Footer Injection Script

(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModernHeaderFooter);
    } else {
        initModernHeaderFooter();
    }

    function initModernHeaderFooter() {
        // Get page title and determine active page
        const pageTitle = getPageTitle();
        const activePage = getActivePage();
        
        // Create and inject header
        createHeader(pageTitle);
        
        // Create and inject navigation
        createNavigation(activePage);
        
        // Create and inject footer
        createFooter();
    }

    function getPageTitle() {
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop();
        
        switch(filename) {
            case 'index.html':
            case '':
                return 'Inicio';
            case 'inicio.html':
                return 'Home';
            case 'acerca-de-nosotros.html':
                return 'Acerca de Nosotros';
            case 'tecnolog-a.html':
                return 'Tecnología';
            case 'servicios-de-recursos-humanos.html':
                return 'Servicios de RH';
            case 'contacto.html':
                return 'Contacto';
            default:
                return 'ORGANIZACIÓN 2100';
        }
    }

    function getActivePage() {
        const pathname = window.location.pathname;
        return pathname.split('/').pop() || 'index.html';
    }

    function createHeader(title) {
        const header = document.createElement('header');
        header.className = 'modern-header-overlay';
        header.innerHTML = `
            <div class="modern-container">
                <h1>${title}</h1>
                <p>ORGANIZACIÓN 2100 SA DE CV</p>
            </div>
        `;
        document.body.insertBefore(header, document.body.firstChild);
    }

    function createNavigation(activePage) {
        const nav = document.createElement('nav');
        nav.className = 'modern-nav-overlay';
        
        const navItems = [
            { href: 'index.html', text: 'Inicio', file: 'index.html' },
            { href: 'inicio.html', text: 'Home', file: 'inicio.html' },
            { href: 'acerca-de-nosotros.html', text: 'Acerca de', file: 'acerca-de-nosotros.html' },
            { href: 'tecnolog-a.html', text: 'Tecnología', file: 'tecnolog-a.html' },
            { href: 'servicios-de-recursos-humanos.html', text: 'Servicios', file: 'servicios-de-recursos-humanos.html' },
            { href: 'contacto.html', text: 'Contacto', file: 'contacto.html' }
        ];

        const navHTML = navItems.map(item => {
            const isActive = item.file === activePage || (activePage === '' && item.file === 'index.html');
            const activeClass = isActive ? ' active' : '';
            return `<li><a href="${item.href}" class="${activeClass}">${item.text}</a></li>`;
        }).join('');

        nav.innerHTML = `
            <div class="modern-container">
                <ul>
                    ${navHTML}
                </ul>
            </div>
        `;
        
        document.body.insertBefore(nav, document.body.children[1]);
    }

    function createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'modern-footer-overlay';
        footer.innerHTML = `
            <div class="modern-container">
                <p>&copy; 2024 ORGANIZACIÓN 2100 SA DE CV. Todos los derechos reservados.</p>
            </div>
        `;
        document.body.appendChild(footer);
    }
})();
