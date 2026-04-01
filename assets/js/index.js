
        // ========== PREVENCIÓN DE INSPECCIÓN Y CONSOLA ==========
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'K') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                return false;
            }
        });
        
        (function() {
            const element = new Image();
            Object.defineProperty(element, 'id', {
                get: function() {
                    console.clear();
                    console.log('%c🔒 Inspección deshabilitada', 'color: #E30613; font-size: 16px; font-weight: bold;');
                    throw new Error('Acceso denegado');
                }
            });
            console.log(element);
        })();
        
        setInterval(() => {
            console.clear();
        }, 1000);
        // ========== FIN PREVENCIÓN ==========

        const projectsData = [
            { title: "Sistema Web de Gestión de POA", desc: "Lideré la transición de procesos manuales (Word/Excel) a plataforma digital, coordinando el ciclo completo: revelamiento, desarrollo y entrega. Optimicé tiempos de procesamiento institucional mediante automatización de flujos de aprobación.", tech: "PHP, MySQL, Postman", img: "assets/img/poa.jpeg" },
            { title: "Aplicación Interactiva - Contabilidad", desc: "Desarrollé aplicación interactiva tipo juego para estudiantes de contabilidad, permitiendo evaluar conocimientos mediante formato lúdico. Implementé sistema de base de datos para registro de usuarios y seguimiento de progreso.", tech: "JavaScript, Node.js, MongoDB", img: "assets/img/fondo1.png" },
            { title: "Solución QR - Instituto Geográfico Militar", desc: "Diseñé e implementé solución con códigos QR para optimizar registro y seguimiento de cursos, reduciendo tiempos de búsqueda y mejorando trazabilidad.", tech: "JavaScript, QRCode API, HTML/CSS", img: "assets/img/qr.jpeg" },
            { title: "Integración PayPal - Proyecto Ágil", desc: "Actué como Scrum Master integrando pasarela de pagos PayPal, removiendo impedimentos técnicos y facilitando ceremonias ágiles para garantizar avance del proyecto.", tech: "Node.js, Express, PayPal SDK", img: "assets/img/project4.jpg" }
        ];

        function renderProjects() {
            const grid = document.getElementById('projectsGrid');
            grid.innerHTML = '';
            projectsData.forEach((proj, idx) => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3 style="color:#E30613; margin-bottom: 0.5rem;">${proj.title}</h3>
                    <p style="margin: 0.5rem 0; color: #4A4A4A;">${proj.desc.substring(0, 120)}${proj.desc.length > 120 ? '...' : ''}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0;">
                        ${proj.tech.split(',').map(t => `<span class="badge-tech">${t.trim()}</span>`).join('')}
                    </div>
                    <button class="btn-primary" style="padding: 8px 20px; font-size:0.85rem; margin-top: 8px;" data-index="${idx}">Ver más detalles</button>
                `;
                grid.appendChild(card);
            });
            document.querySelectorAll('.project-card .btn-primary').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = btn.getAttribute('data-index');
                    const project = projectsData[idx];
                    document.getElementById('modalTitle').innerText = project.title;
                    document.getElementById('modalImg').src = project.img;
                    document.getElementById('modalDesc').innerHTML = `${project.desc}<br><br><strong>Tecnologías:</strong> ${project.tech}<br><i class="fab fa-github"></i> GitHub: github.com/morales-593`;
                    document.getElementById('projectModal').style.display = 'flex';
                });
            });
        }

        const toolsList = [
            { name: "PHP", icon: "fab fa-php" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "React", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express", icon: "fas fa-server" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Azure", icon: "fab fa-microsoft" },
            { name: "GitLab", icon: "fab fa-gitlab" },
            { name: "Postman", icon: "fas fa-paper-plane" },
            { name: "DevOps", icon: "fas fa-infinity" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "WordPress", icon: "fab fa-wordpress" },
            { name: "Canva", icon: "fab fa-canva" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "UX/UI", icon: "fas fa-palette" },
            { name: "Moodle", icon: "fas fa-graduation-cap" },
            { name: "Gestión por Procesos", icon: "fas fa-chart-line" },
            { name: "CI/CD", icon: "fas fa-sync-alt" },
            { name: "OKRs", icon: "fas fa-bullseye" },
            { name: "KPIs", icon: "fas fa-chart-simple" }
        ];
        
        const track = document.getElementById('toolsTrack');
        function buildCarousel() {
            const items = [...toolsList, ...toolsList];
            items.forEach(tool => {
                const div = document.createElement('div');
                div.className = 'tool-item';
                div.innerHTML = `<i class="${tool.icon}" style="color:#E30613;"></i> ${tool.name}`;
                track.appendChild(div);
            });
        }
        buildCarousel();

        const floatingMenu = document.getElementById('floatingMenu');
        const heroSection = document.getElementById('home');
        
        function checkMenuVisibility() {
            const scrollY = window.scrollY;
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            
            if (scrollY > heroBottom - 100) {
                floatingMenu.classList.add('visible');
            } else {
                floatingMenu.classList.remove('visible');
            }
        }
        
        const sections = document.querySelectorAll('section[id]');
        const menuIcons = document.querySelectorAll('.menu-icon');
        
        function updateActiveMenu() {
            let current = '';
            const scrollPos = window.scrollY + 150;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            menuIcons.forEach(icon => {
                icon.classList.remove('active');
                const href = icon.getAttribute('href');
                if (href && href.substring(1) === current) {
                    icon.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', () => {
            updateActiveMenu();
            checkMenuVisibility();
        });
        window.addEventListener('load', () => {
            updateActiveMenu();
            checkMenuVisibility();
        });
        
        menuIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = icon.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        document.getElementById('scrollToContact').addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));
        document.getElementById('scrollToProjects').addEventListener('click', () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }));
        document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('projectModal').style.display = 'none');
        window.onclick = (e) => { if(e.target === document.getElementById('projectModal')) document.getElementById('projectModal').style.display = 'none'; };

        renderProjects();
