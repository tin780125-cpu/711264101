:root {
    --primary: #ff8a71;
    --bg: #fdfbf7;
    --text: #334155;
    --shadow: 0 15px 30px rgba(255, 138, 113, 0.15);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body { font-family: 'Noto Sans TC', sans-serif; background-color: var(--bg); color: var(--text); line-height: 1.8; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

.navbar { position: sticky; top: 0; height: 70px; background: rgba(253, 251, 247, 0.95); backdrop-filter: blur(8px); z-index: 1000; display: flex; align-items: center; border-bottom: 1px solid rgba(0,0,0,0.05); }
.nav-flex { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.nav-links { display: flex; list-style: none; gap: 20px; }
.nav-links a { text-decoration: none; color: var(--text); font-weight: bold; }

.hero { padding: 60px 0; background: linear-gradient(135deg, #fff5f0 0%, #ffe4d9 100%); }
.hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: center; }
.personal-image-container { display: flex; justify-content: center; }
.personal-portrait { 
    width: 100%; max-width: 380px; height: auto; 
    border-radius: 30px; box-shadow: var(--shadow);
    border: 8px solid white; transform: rotate(-2deg); 
}

.section { padding: 80px 0; }
.bg-light { background-color: #ffffff; }
.section-title { text-align: center; margin-bottom: 40px; font-size: 2rem; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.card { background: white; padding: 30px; border-radius: 30px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); text-decoration: none; color: inherit; }

.tech-tag { background: #fff1ee; color: var(--primary); padding: 4px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: bold; margin-bottom: 10px; display: inline-block; }
.btn { padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; transition: 0.3s; }
.btn-primary { background: var(--primary); color: white; }
.btn-outline { border: 2px solid var(--primary); color: var(--primary); margin-left: 10px; }
.footer { text-align: center; padding: 40px 0; color: #94a3b8; }

@media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .personal-portrait { transform: rotate(0); margin-top: 30px; }
}
