// 學術資料：包含科學研究與碩士課程
const academicItems = [
    { 
        title: "聲音環境感知科學研究", 
        tag: "量化分析 / 科學精神", 
        desc: "參與國立臺北大學研究，探討思考模式如何影響個體對環境噪音的感知，熟稔科學研究倫理與匿名編碼實務。" 
    },
    { 
        title: "矯正數位化碩士論文", 
        tag: "數位復歸 / 法律政策", 
        desc: "研究監禁造成的數位落差如何影響假釋受刑人的復歸社會的正義實現，並提出數位防制詐騙之實務建議。" 
    }
];

// 實務資料：包含詐騙個案討論與觀護人守門
const caseItems = [
    { 
        title: "網路詐騙個案實務討論", 
        tags: ["愛情詐騙", "投資詐騙"], 
        desc: "觀護實務聚焦：針對受刑人因數位知能不足反覆陷入詐騙被害迴圈的情境，進行深度個案討論與危機處理。" 
    },
    { 
        title: "數位復歸指引實務", 
        tags: ["個案觀察", "守門人"], 
        desc: "致力於在矯正體系內推動數位賦能，縮減個案資訊斷層，協助其重建與數位社會的連結。" 
    }
];

// 跨界資料：包含在地嚮導旅遊與育兒實驗教育
const skillItems = [
    { 
        title: "育兒與實驗教育", 
        tag: "多工時間管理", 
        desc: "深入研究實驗教育招生趨勢與家庭晤談實務，將多工管理能力應用於家庭、研究與職涯的平衡。" 
    },
    { 
        title: "旅遊與在地共享", 
        tag: "在地嚮導", 
        desc: "Google 地圖在地嚮導，評論瀏覽量破萬次，擅長規劃親子休閒、慈善跑旅活動與跨文化旅行路徑。" 
    },
    { 
        title: "專業與溫度", 
        tag: "跨界解決力", 
        desc: "Python 程式設計、法律木槌導航、家庭家常食譜與跨文化適應力，將溫馨氣質融入高壓工作中。" 
    }
];

function initPage() {
    const renderContent = (id, data) => {
        const cont = document.getElementById(id);
        if (!cont) return;
        data.forEach(item => {
            const tagsHtml = item.tags ? item.tags.map(t => `<span class="tech-tag">${t}</span>`).join(' ') : `<span class="tech-tag">${item.tag}</span>`;
            cont.innerHTML += `
                <div class="card">
                    ${tagsHtml}
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>`;
        });
    };

    renderContent('courses-container', academicItems);
    renderContent('projects-container', caseItems);
    renderContent('skills-container', skillItems);
}

document.addEventListener('DOMContentLoaded', initPage);
