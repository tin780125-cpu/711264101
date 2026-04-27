const courseData = [
    { name: "聲音環境感知研究", skills: "量化分析", desc: "參與國立臺北大學研究，分析環境噪音如何影響心理韌性，熟悉科學研究行政與問卷編碼。" },
    { name: "碩士論文：數位復歸", skills: "數位政策", desc: "探討受刑人數位落差如何影響復歸社會的正義實現與挑戰。" }
];

const projectData = [
    { name: "網路詐騙個案探討", tech: ["法律實務", "詐騙防制"], desc: "針對受刑人因數位知能不足反覆陷入詐騙迴圈的困境，進行深度實務輔導。" },
    { name: "矯正數位賦能", tech: ["個案觀察", "數位賦能"], desc: "在第一線工作，試著縮減資訊鴻溝，協助受刑人順利回歸數位社會。" }
];

const skillData = [
    { name: "育兒與實驗教育", skills: "多工管理", desc: "研究 114 學年度實驗教育招生趨勢，將家長晤談經驗應用於職場平衡。" },
    { name: "Google 在地嚮導", skills: "旅行共享", desc: "評論累積逾 10,000 次瀏覽，擅長規劃親子休閒與跨文化旅行路徑。" },
    { name: "Python 程式設計", skills: "數據硬核", desc: "從 Bug 中學習。擅長使用 Python 進行數據清洗與研究分析，讓電腦處理雜事。" }
];

function init() {
    const render = (id, data) => {
        const container = document.getElementById(id);
        if (!container) return;
        data.forEach(item => {
            const tags = item.tech ? item.tech.map(t => `<span class="tech-tag">${t}</span>`).join(' ') : `<span class="tech-tag">${item.skills}</span>`;
            container.innerHTML += `
                <div class="card">
                    ${tags}
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>`;
        });
    };
    render('courses-container', courseData);
    render('projects-container', projectData);
    render('skills-container', skillData);
}

document.addEventListener('DOMContentLoaded', init);
