(function () {
    function showCelebrationAnm() {
        let celebrationBox = document.getElementById('celebration_box_anm');

        // If the celebration box doesn't exist, create it dynamically
        if (!celebrationBox) {
            celebrationBox = document.createElement('div');
            celebrationBox.id = 'celebration_box_anm';
            celebrationBox.className = 'celebration-container_anm';
            celebrationBox.innerHTML = `
        <div class="background-layer_anm"></div>
        <div class="celebration-content_anm">
          <div class="celebration-text_anm">لقد قمت بعمل رائع ..</div>
          <div class="celebration-subtext_anm">استمر في التألق 🚀</div>
        </div>
        <div class="celebration-emoji_anm emoji-1_anm">💯</div>
        <div class="celebration-emoji_anm emoji-2_anm">🌟</div>
        <div class="celebration-emoji_anm emoji-3_anm">🎈</div>
        <div class="celebration-emoji_anm emoji-4_anm">✨</div>
        <canvas id="fireworks_canvas_anm"></canvas>
      `;
            document.body.appendChild(celebrationBox);
        }

        celebrationBox.style.display = 'flex';
        startFireworksAnm();
    }

    function startFireworksAnm() {
        const canvas = document.getElementById('fireworks_canvas_anm');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth * 0.8; // Adjust canvas width to 80% of screen width
        canvas.height = 350;

        class Firework {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.particles = [];

                for (let i = 0; i < 40; i++) {
                    this.particles.push(new Particle(this.x, this.y, this.color));
                }
            }

            update() { this.particles.forEach(p => p.update()); }
            draw() { this.particles.forEach(p => p.draw()); }
        }

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.radius = Math.random() * 4 + 1;
                this.velocityX = (Math.random() - 0.5) * 8;
                this.velocityY = (Math.random() - 0.5) * 8;
                this.alpha = 1;
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;
                this.alpha -= 0.02;
            }

            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        let fireworks = [];

        function createFireworkAnm() {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
            fireworks.push(new Firework(x, y, color));
        }

        function animateFireworksAnm() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach(f => f.update());
            fireworks.forEach(f => f.draw());
            fireworks = fireworks.filter(f => f.particles[0].alpha > 0);
            requestAnimationFrame(animateFireworksAnm);
        }

        setInterval(createFireworkAnm, 500);
        animateFireworksAnm();
    }

    // Show Celebration as soon as the page loads
    window.onload = function () {
        showCelebrationAnm();
    };

    window.showCelebrationAnm = showCelebrationAnm;
})();
