/* ==========================================================================
   LEANITY LABS - MINIMALIST LIGHT CANVAS PARTICLE NETWORK
   Designed for the Medium Light Paper theme: Faint Charcoal & Indigo Nodes
   ========================================================================== */

(function () {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    let particles = [];
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const mouse = {
        x: null,
        y: null,
        radius: 120
    };
    
    window.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener("mouseleave", function () {
        mouse.x = null;
        mouse.y = null;
    });
    
    window.addEventListener("resize", function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    });
    
    // Light Paper Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            
            // Ultra elegant, slow speed
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            
            // Micro sizes
            this.size = Math.random() * 1.5 + 0.6;
            
            // Faint nodes suitable for light background
            const rand = Math.random();
            if (rand < 0.2) {
                this.color = "rgba(94, 106, 210, 0.16)"; // Elegant Indigo
            } else {
                this.color = "rgba(25, 25, 25, 0.07)";   // Faint Charcoal Gray
            }
        }
        
        update() {
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
            
            this.x += this.vx;
            this.y += this.vy;
            
            // Mouse connection
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 0.2;
                    this.y -= (dy / dist) * force * 0.2;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    function init() {
        particles = [];
        const density = Math.floor((width * height) / 15000);
        const particleCount = Math.min(density, 60); // Strict low density for clean paper look
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function connect() {
        const maxDist = 95;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < maxDist) {
                    // Very delicate grid lines on paper
                    const alpha = (maxDist - dist) / maxDist * 0.05;
                    ctx.strokeStyle = `rgba(25, 25, 25, ${alpha})`;
                    ctx.lineWidth = 0.4;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
            
            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const p = particles[i];
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < mouse.radius) {
                    const alpha = (mouse.radius - dist) / mouse.radius * 0.09;
                    ctx.strokeStyle = `rgba(94, 106, 210, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        
        connect();
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    init();
    animate();
})();
