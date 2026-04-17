/* ===================================
   ZeroCode — Interactive Learning App
   =================================== */

// ===================================
// COURSE DATA 
// ===================================
// Dibuat rapi memanjang ke bawah (vertical) agar mudah dibaca di mobile/layar kecil
// Total: 6 lesson HTML, 6 lesson CSS, 6 lesson JavaScript

// ===================================
// ACHIEVEMENTS DATA
// ===================================
const ACHIEVEMENTS = [
    {
        id: 'first-lesson',
        icon: '🌟',
        title: 'Langkah Pertama',
        desc: 'Selesaikan pelajaran pertama.',
        condition: (s) => s.completedLessons >= 1
    },
    {
        id: 'streak-3',
        icon: '🔥',
        title: 'Api Membara',
        desc: 'Raih streak 3 hari berturut-turut.',
        condition: (s) => s.streak >= 3
    },
    {
        id: 'streak-7',
        icon: '💥',
        title: 'Satu Minggu Penuh!',
        desc: 'Raih streak 7 hari berturut-turut.',
        condition: (s) => s.streak >= 7
    },
    {
        id: 'html-complete',
        icon: '🧱',
        title: 'HTML Master',
        desc: 'Selesaikan semua pelajaran HTML.',
        condition: (s) => getCourseProgress('html') === 100
    },
    {
        id: 'css-complete',
        icon: '🎨',
        title: 'CSS Seniman',
        desc: 'Selesaikan semua pelajaran CSS.',
        condition: (s) => getCourseProgress('css') === 100
    },
    {
        id: 'js-complete',
        icon: '⚡',
        title: 'JS Wizard',
        desc: 'Selesaikan semua pelajaran JavaScript.',
        condition: (s) => getCourseProgress('javascript') === 100
    },
    {
        id: 'practice-master',
        icon: '💻',
        title: 'Si Praktek',
        desc: 'Selesaikan 3 challenge praktek.',
        condition: (s) => s.completedPractice.length >= 3
    },
    {
        id: 'practice-legend',
        icon: '🏅',
        title: 'Legenda Praktek',
        desc: 'Selesaikan 10 challenge praktek.',
        condition: (s) => s.completedPractice.length >= 10
    },
    {
        id: 'xp-500',
        icon: '💎',
        title: 'Setengah Ribu!',
        desc: 'Kumpulkan total 500 XP.',
        condition: (s) => s.totalXP >= 500
    },
    {
        id: 'all-complete',
        icon: '👑',
        title: 'Raja ZeroCode',
        desc: 'Selesaikan semua pelajaran!',
        condition: (s) => s.completedLessons >= 24
    }
];

// ===================================
// MOTIVATIONAL MESSAGES
// ===================================
const MOTIVATIONS = {
    tips: [
        {
            title: '💡 Tips Hari Ini',
            text: 'Konsistensi lebih penting dari intensitas. Belajar sedikit setiap hari lebih baik daripada marathon 1 hari lalu berhenti!'
        },
        {
            title: '🧠 Fun Fact',
            text: 'JavaScript awalnya dibuat hanya dalam 10 hari oleh Brendan Eich di tahun 1995. Sekarang jadi bahasa paling populer di dunia!'
        },
        {
            title: '🎯 Fokus',
            text: 'Jangan coba memahami semuanya sekaligus. Fokus satu konsep, praktikkan, baru lanjut ke yang berikutnya.'
        },
        {
            title: '💪 Semangat!',
            text: 'Setiap programmer handal pernah menjadi pemula. Yang membedakan adalah rajinnya mereka dalam ngoding (praktek)!'
        },
        {
            title: '🚀 Melesat!',
            text: 'HTML, CSS, dan JavaScript adalah trio dasar web development. Kuasai ketiganya dan kamu bisa membangun apapun!'
        },
        {
            title: '📚 Belajar Terus',
            text: 'Eror bukan musuh. Eror adalah guru terbaik yang mengajarkanmu apa yang perlu diperbaiki.'
        }
    ],
    streakMessages: {
        1: {
            title: 'Mulai yang Baik! 🌱',
            text: 'Hari pertama streak! Mari bangun kebiasaan belajar yang konsisten. Kamu bisa!'
        },
        2: {
            title: 'Hari Kedua! 🌿',
            text: 'Luar biasa! Kamu kembali lagi. Konsistensi adalah kunci sukses!'
        },
        3: {
            title: 'Streak 3 Hari! 🔥',
            text: 'Tiga hari berturut-turut! Kamu mulai membangun kebiasaan hebat!'
        },
        5: {
            title: 'Streak 5 Hari! 💪',
            text: 'Lima hari tanpa jeda! Kamu benar-benar berkomitmen. Bangga sama kamu!'
        },
        7: {
            title: 'SATU MINGGU! 🎉',
            text: 'Satu minggu penuh streak! Ini pencapaian luar biasa. Kamu sudah membuktikan kalau kamu serius!'
        }
    },
    correctAnswerMessages: [
        'Benar! Kamu memang jenius! 🧠✨',
        'Mantap! Jawaban sempurna! 💯',
        'YES! Nailed it! 🔥',
        'Hebat! Knowledge +1! 📈'
    ],
    wrongAnswerMessages: [
        'Hmm, belum tepat. Tapi jangan menyerah! 💪',
        'Hampir! Coba baca materinya lagi ya 📖',
        'Tidak apa-apa, salah itu bagian dari belajar! 🌱'
    ],
    lessonCompleteMessages: [
        'Kamu luar biasa! Satu langkah lagi menuju mastery! 🏆',
        'Lesson selesai! Otakmu semakin kuat! 🧠💪',
        'Yes! Satu lagi pelajaran ditaklukkan! 🎉'
    ],
    winStreakQuizMessages: [
        'COMBO x{count}! Kamu on fire! 🔥🔥',
        '{count} JAWABAN BENAR BERTURUT! Unstoppable! ⚡'
    ]
};

// ===================================
// STATE MANAGEMENT
// ===================================
const DEFAULT_STATE = {
    totalXP: 0,
    level: 1,
    streak: 0,
    lastVisitDate: null,
    joinDate: null,
    completedLessons: 0,
    correctAnswers: 0,
    perfectQuizzes: 0,
    completedLessonIds: [],
    unlockedAchievements: [],
    quizWinStreak: 0,
    savedCode: {},
    completedPractice: []
};

let state = { ...DEFAULT_STATE };
let currentPage = 'dashboard';
let currentCourse = null;
let currentLesson = null;
let currentTab = 'materi';

let currentQuizIndex = 0;
let currentQuizCorrect = 0;
let currentQuizTotal = 0;
let quizAnswered = false;

function loadState() {
    try {
        const saved = localStorage.getItem('zerocode-state-v2');
        if (saved) {
            state = { ...DEFAULT_STATE, ...JSON.parse(saved) };
            return;
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem('zerocode-state-v2', JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state:', e);
    }
}

// ===================================
// LEVEL SYSTEM
// ===================================
function getXPForLevel(level) {
    return level * 100;
}

function calculateLevel(totalXP) {
    let level = 1;
    let xpNeeded = getXPForLevel(level);
    let xpAccum = 0;
    while (xpAccum + xpNeeded <= totalXP) {
        xpAccum += xpNeeded;
        level++;
        xpNeeded = getXPForLevel(level);
    }
    return {
        level,
        currentXP: totalXP - xpAccum,
        xpNeeded: xpNeeded
    };
}

function getCourseProgress(courseKey) {
    const course = COURSES[courseKey];
    if (!course) return 0;
    const total = course.lessons.length;
    let completed = 0;
    course.lessons.forEach(l => {
        if (state.completedLessonIds.includes(l.id)) completed++;
    });
    return Math.round((completed / total) * 100);
}

// ===================================
// INITIALIZATION
// ===================================
function init() {
    loadState();
    
    if (!state.joinDate) {
        state.joinDate = new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
        saveState();
    }
    
    checkStreak();

    const savedName = localStorage.getItem('zerocode-username');
    if (!savedName) {
        window.location.href = 'home.html';
        return;
    }

    updateAllUI();

    const motivationCard = document.getElementById('motivation-card');
    if (motivationCard) {
        motivationCard.style.opacity = '0';
        setTimeout(() => {
            motivationCard.style.opacity = '1';
            motivationCard.style.transition = 'opacity 0.5s ease';
        }, 600);
    }
}

document.addEventListener('DOMContentLoaded', init);

// ===================================
// STREAK & ACHIEVEMENTS
// ===================================
function checkStreak() {
    const today = new Date().toDateString();
    const lastVisit = state.lastVisitDate;

    if (!lastVisit) {
        state.streak = 1;
        state.lastVisitDate = today;
        saveState();
        return;
    }

    if (lastVisit === today) return;

    const lastDate = new Date(lastVisit);
    const todayDate = new Date(today);
    const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
        state.streak++;
        state.lastVisitDate = today;
        saveState();
        showStreakPopup(state.streak);
    } else if (diffDays > 1) {
        state.streak = 1;
        state.lastVisitDate = today;
        saveState();
    }
}

function showStreakPopup(streak) {
    const popup = document.getElementById('streak-popup');
    const titleEl = document.getElementById('streak-popup-title');
    const msgEl = document.getElementById('streak-popup-msg');

    let msgData = null;
    const keys = Object.keys(MOTIVATIONS.streakMessages).map(Number).sort((a, b) => b - a);
    for (const k of keys) {
        if (streak >= k) {
            msgData = MOTIVATIONS.streakMessages[k];
            break;
        }
    }

    titleEl.textContent = msgData ? msgData.title : `Streak ${streak} Hari! 🔥`;
    msgEl.textContent = msgData ? msgData.text : 'Terus belajar tiap hari!';
    
    popup.classList.remove('hidden');
    launchConfetti();
}

function closeStreakPopup() {
    document.getElementById('streak-popup').classList.add('hidden');
}

function checkAchievements() {
    for (const ach of ACHIEVEMENTS) {
        if (state.unlockedAchievements.includes(ach.id)) continue;
        if (ach.condition(state)) {
            state.unlockedAchievements.push(ach.id);
            saveState();
            showAchievementPopup(ach);
            return; // 1 popup at a time
        }
    }
}

function showAchievementPopup(ach) {
    const popup = document.getElementById('achievement-popup');
    document.getElementById('achievement-icon').textContent = ach.icon;
    document.getElementById('achievement-title').textContent = ach.title;
    document.getElementById('achievement-desc').textContent = ach.desc;
    popup.classList.remove('hidden');
    launchConfetti();
}

function closeAchievementPopup() {
    document.getElementById('achievement-popup').classList.add('hidden');
    setTimeout(() => checkAchievements(), 500);
}

// ===================================
// NAVIGATION
// ===================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    const navBtn = document.querySelector(`[data-page="${page}"]`);
    if (navBtn) navBtn.classList.add('active');

    const target = document.getElementById(`page-${page}`);
    if (target) {
        target.classList.add('active');
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = 'fadeInUp 0.4s ease';
    }

    currentPage = page;

    if (['html', 'css', 'javascript', 'python'].includes(page)) {
        currentCourse = page;
        renderLessons(page);
    }

    if (page === 'achievements') renderAchievements();
    if (page === 'dashboard') updateDashboard();
    
    closeSidebar();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('show');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
}

// ===================================
// COURSE & LESSON RENDER
// ===================================
function renderLessons(courseKey) {
    const course = COURSES[courseKey];
    if (!course) return;

    const container = document.getElementById(`${courseKey}-lessons`);
    container.innerHTML = '';

    const bosses = BOSS_DATA[courseKey]?.bosses || [];
    const bossPositions = {};
    bosses.forEach((boss, idx) => {
        bossPositions[boss.triggerAfter] = { boss, idx };
    });

    // Check if there's a pending boss (blocks further lessons)
    let blockedByBoss = false;
    let blockAfter = Infinity;

    for (const boss of bosses) {
        const bossKey = `boss-${courseKey}-${bosses.indexOf(boss)}`;
        const allLessonsDone = course.lessons.slice(0, boss.triggerAfter).every(l => state.completedLessonIds.includes(l.id));
        if (allLessonsDone && !state.completedLessonIds.includes(bossKey)) {
            blockAfter = boss.triggerAfter;
            break;
        }
    }

    course.lessons.forEach((lesson, index) => {
        // Insert boss item BEFORE this lesson if position matches
        if (bossPositions[index]) {
            const bp = bossPositions[index];
            const bossKey = `boss-${courseKey}-${bp.idx}`;
            const bossCompleted = state.completedLessonIds.includes(bossKey);
            const allPrevDone = course.lessons.slice(0, bp.boss.triggerAfter).every(l => state.completedLessonIds.includes(l.id));
            
            const bossItem = document.createElement('div');
            bossItem.className = `lesson-item boss-item${bossCompleted ? ' completed' : ''}${!allPrevDone ? ' locked' : ''}`;
            bossItem.innerHTML = `
                <div class="lesson-number">${bossCompleted ? '✓' : '⚔️'}</div>
                <div class="lesson-meta">
                    <h3>${bp.boss.name}</h3>
                    <p>${bossCompleted ? 'Boss sudah dikalahkan!' : 'Ujian Boss — Kalahkan untuk lanjut!'}</p>
                </div>
                <div class="lesson-status">${bossCompleted ? '✅' : allPrevDone ? '⚔️' : '🔒'}</div>
            `;
            
            if (allPrevDone && !bossCompleted) {
                bossItem.addEventListener('click', () => startBossBattle(courseKey, bp.idx));
                bossItem.style.cursor = 'pointer';
            } else if (!allPrevDone) {
                bossItem.addEventListener('click', () => {
                    alert('Lengkapi semua materi sebelumnya untuk membuka tantangan Boss ini! ⚔️');
                });
                bossItem.style.cursor = 'help';
            }
            container.appendChild(bossItem);
        }

        const isCompleted = state.completedLessonIds.includes(lesson.id);
        const prevDone = index === 0 || state.completedLessonIds.includes(course.lessons[index - 1].id);
        const isLocked = !isCompleted && (!prevDone || index >= blockAfter);

        const item = document.createElement('div');
        item.className = `lesson-item${isCompleted ? ' completed' : ''}${isLocked ? ' locked' : ''}`;
        item.innerHTML = `
            <div class="lesson-number">${isCompleted ? '✓' : index + 1}</div>
            <div class="lesson-meta">
                <h3>${lesson.title}</h3>
                <p>${lesson.desc}</p>
            </div>
            <div class="lesson-status">${isCompleted ? '✅' : isLocked ? '🔒' : '→'}</div>
        `;

        if (!isLocked) {
            item.addEventListener('click', () => openLesson(courseKey, lesson));
        }
        container.appendChild(item);
    });

    // Final check for boss after all lessons (triggerAfter === course.lessons.length)
    const finalIndex = course.lessons.length;
    if (bossPositions[finalIndex]) {
        const bp = bossPositions[finalIndex];
        const bossKey = `boss-${courseKey}-${bp.idx}`;
        const bossCompleted = state.completedLessonIds.includes(bossKey);
        const allPrevDone = course.lessons.every(l => state.completedLessonIds.includes(l.id));
        
        const bossItem = document.createElement('div');
        bossItem.className = `lesson-item boss-item${bossCompleted ? ' completed' : ''}${!allPrevDone ? ' locked' : ''}`;
        bossItem.innerHTML = `
            <div class="lesson-number">${bossCompleted ? '✓' : '⚔️'}</div>
            <div class="lesson-meta">
                <h3>${bp.boss.name}</h3>
                <p>${bossCompleted ? 'Boss sudah dikalahkan!' : 'Ujian Akhir Course — Kalahkan untuk lulus!'}</p>
            </div>
            <div class="lesson-status">${bossCompleted ? '✅' : allPrevDone ? '⚔️' : '🔒'}</div>
        `;
        
        if (allPrevDone && !bossCompleted) {
            bossItem.addEventListener('click', () => startBossBattle(courseKey, bp.idx));
            bossItem.style.cursor = 'pointer';
        } else if (!allPrevDone) {
            bossItem.addEventListener('click', () => {
                alert('Tuntaskan seluruh materi di course ini untuk menghadapi Boss Terakhir! 🏆');
            });
            bossItem.style.cursor = 'help';
        }
        container.appendChild(bossItem);
    }
}

function openLesson(courseKey, lesson) {
    currentCourse = courseKey;
    currentLesson = lesson;
    
    // Hide all pages, show lesson
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-lesson').classList.add('active');
    
    // Set Header
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-xp').textContent = `+${lesson.xp} XP`;
    document.getElementById('lesson-content').innerHTML = lesson.content;

    // Reset Quiz
    currentQuizIndex = 0;
    currentQuizCorrect = 0;
    currentQuizTotal = lesson.quiz ? lesson.quiz.length : 0;
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('lesson-complete').classList.add('hidden');
    renderQuizQuestion();

    window.scrollTo(0, 0);
    switchTab('materi');
}

function goBackFromLesson() {
    const courseToReturn = currentCourse || 'dashboard';
    navigateTo(courseToReturn);
    
    // Check if a boss should trigger
    if (currentCourse && ['html','css','javascript','python'].includes(currentCourse)) {
        setTimeout(() => checkForBoss(currentCourse), 500);
    }
}

// ===================================
// TAB SYSTEM
// ===================================
function switchTab(tab) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.step-dot').forEach(d => d.classList.remove('active'));
    
    document.getElementById(`panel-${tab}`).classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
    
    const dotSelected = document.querySelector(`.step-dot[data-step="${tab}"]`);
    if(dotSelected) dotSelected.classList.add('active');
    
    currentTab = tab;
    
    if (tab === 'practice') {
        initEditor();
        setTimeout(syncScroll, 100); 
    }
}

// ===================================
// EDITOR & SHELL SYSTEM
// ===================================
function initEditor() {
    if (!currentLesson || !currentLesson.challenge) return;
    
    const chal = currentLesson.challenge;
    let savedCode = state.savedCode[currentLesson.id];
    if (savedCode === undefined) {
        savedCode = chal.initialCode;
    }
    
    const editor = document.getElementById('code-editor');
    editor.value = savedCode;
    onEditorInput(); // update line numbers
    
    document.getElementById('challenge-title').textContent = chal.title;
    document.getElementById('challenge-desc').textContent = chal.desc;
    
    let ext, badge;
    if (currentCourse === 'javascript') { badge = 'JS'; ext = 'script.js'; }
    else if (currentCourse === 'python') { badge = 'PY'; ext = 'script.py'; }
    else if (currentCourse === 'css') { badge = 'CSS'; ext = 'style.css'; }
    else { badge = 'HTML'; ext = 'index.html'; }
    
    document.getElementById('editor-lang-badge').textContent = badge;
    document.getElementById('editor-filename').textContent = ext;
    
    // Reset checker UI
    document.getElementById('challenge-result').classList.add('hidden');
    document.getElementById('challenge-checker').classList.remove('hidden');
    document.getElementById('practice-skip-footer').classList.remove('hidden');
    document.getElementById('checker-hints').innerHTML = '';
    
    // Tandai jika sudah komplit
    if (state.completedPractice.includes(currentLesson.id)) {
        document.getElementById('challenge-result').classList.remove('hidden');
        document.getElementById('challenge-checker').classList.add('hidden');
        document.getElementById('practice-skip-footer').classList.add('hidden');
        document.getElementById('result-title').textContent = "Progress Tersimpan!";
        document.getElementById('result-message').textContent = "Kamu sudah menyelesaikan challenge ini sebelumnya.";
    }

    runCode();
}

function onEditorInput() {
    const editor = document.getElementById('code-editor');
    const lines = editor.value.split('\n').length;
    let nums = '';
    for (let i = 1; i <= lines; i++) nums += i + '\n';
    document.getElementById('line-numbers').textContent = nums;
    saveCodeStateDebounced();
}

let codeSaveTimeout;
function saveCodeStateDebounced() {
    clearTimeout(codeSaveTimeout);
    codeSaveTimeout = setTimeout(() => {
        if (!currentLesson) return;
        state.savedCode[currentLesson.id] = document.getElementById('code-editor').value;
        saveState();
    }, 1000); // save after 1 second of inactivity
}

function handleEditorKeydown(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const editor = e.target;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
        onEditorInput();
    }
}

function syncScroll() {
    document.getElementById('line-numbers').scrollTop = document.getElementById('code-editor').scrollTop;
}

function resetEditor() {
    if (confirm('Apakah kamu yakin ingin mengulang dari awal kode ini?')) {
        const editor = document.getElementById('code-editor');
        editor.value = currentLesson.challenge.initialCode;
        onEditorInput();
        runCode();
        state.savedCode[currentLesson.id] = editor.value;
        saveState();
    }
}

function clearOutput() {
    document.getElementById('preview-frame').srcdoc = '';
    document.getElementById('console-output').innerHTML = '';
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const preview = document.getElementById('preview-frame');
    const cons = document.getElementById('console-output');
    
    if (currentCourse === 'javascript') {
        preview.classList.add('hidden');
        cons.classList.remove('hidden');
        cons.innerHTML = '';
        
        const sandboxCode = `
            let output = [];
            const console = {
                log: (...args) => { 
                    output.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')); 
                }
            };
            try {
                ${code}
            } catch(e) {
                output.push('Error: ' + e.message);
            }
            return output;
        `;
        
        try {
            const result = new Function(sandboxCode)();
            if (result && result.length) {
                result.forEach(r => {
                    const line = document.createElement('div');
                    line.className = r.startsWith('Error:') ? 'console-line error' : 'console-line log';
                    line.textContent = r;
                    cons.appendChild(line);
                });
            } else {
                cons.innerHTML = '<div class="console-line comment">Kode dieksekusi. Tidak ada yang diprint (kosong).</div>';
            }
        } catch(e) {
            cons.innerHTML = `<div class="console-line error">Syntax Error: ${e.message}</div>`;
        }
    } 
    else if (currentCourse === 'python') {
        preview.classList.add('hidden');
        cons.classList.remove('hidden');
        cons.innerHTML = '';
        
        let output = [];
        let codeLines = code.split('\n');
        codeLines.forEach(line => {
            let pMatch = line.match(/print\((.*)\)/);
            if (pMatch) {
                let val = pMatch[1].trim();
                if (val.startsWith('"') || val.startsWith("'")) {
                    output.push(val.slice(1, -1));
                } else {
                    output.push("[Ekspresi/Variabel: " + val + "]");
                }
            }
        });
        
        if (output.length) {
            output.forEach(r => {
                const ln = document.createElement('div');
                ln.className = 'console-line log';
                ln.textContent = r;
                cons.appendChild(ln);
            });
        } else {
            cons.innerHTML = '<div class="console-line comment">Kode Python dieksekusi.</div>';
        }
    }
    else {
        // HTML / CSS Preview
        preview.classList.remove('hidden');
        cons.classList.add('hidden');
        
        let htmlStr = code;
        if (currentLesson.challenge && currentLesson.challenge.htmlTemplate) {
            htmlStr = currentLesson.challenge.htmlTemplate.replace('$CODE', code);
        }
        
        // Wrap basic styling so it's readable in the preview iframe
        const finalHtml = `
            <!DOCTYPE html>
            <html>
            <head><style>body{font-family:sans-serif;color:#333;margin:0;padding:15px;}</style></head>
            <body>${htmlStr}</body>
            </html>
        `;
        preview.srcdoc = finalHtml;
    }
}

let hintIndex = 0;
function showHint() {
    if (!currentLesson || !currentLesson.challenge) return;
    const hints = currentLesson.challenge.hints;
    if (hints.length === 0) return;
    
    document.getElementById('checker-hints').innerHTML = `<div class="hint-text">💡 Hint: ${hints[hintIndex]}</div>`;
    hintIndex = (hintIndex + 1) % hints.length;
}

function checkChallenge() {
    const code = document.getElementById('code-editor').value;
    const chal = currentLesson.challenge;
    
    if (chal.checkFn(code)) {
        // LULUS Challenge
        playSfxSuccess();
        document.getElementById('challenge-result').classList.remove('hidden');
        document.getElementById('challenge-result').className = 'challenge-result pass';
        document.getElementById('result-icon').textContent = '✅';
        document.getElementById('result-title').textContent = 'Benar Sekali!';
        document.getElementById('result-message').textContent = 'Kodemu berjalan dengan baik sesuai skenario instruksi.';
        
        document.getElementById('challenge-checker').classList.add('hidden');
        document.getElementById('practice-skip-footer').classList.add('hidden');
        
        if (!state.completedPractice.includes(currentLesson.id)) {
            state.completedPractice.push(currentLesson.id);
            state.totalXP += 10;
            saveState();
            showXPToast(10);
            updateAllUI();
            
            // Re-check achievements for generic practice counts
            setTimeout(checkAchievements, 1000);
        }
    } else {
        // GAGAL Challenge
        document.getElementById('challenge-result').classList.remove('hidden');
        document.getElementById('challenge-result').className = 'challenge-result fail';
        document.getElementById('result-icon').textContent = '❌';
        document.getElementById('result-title').textContent = 'Belum Tepat T_T';
        document.getElementById('result-message').textContent = 'Kode kamu masih ada yang keliru/kurang dari instruksi. Coba tekan "Hint" !';
        
        setTimeout(() => {
            document.getElementById('challenge-result').classList.add('hidden');
        }, 3500);
    }
}

function skipPractice() {
    switchTab('quiz');
}

function playSfxSuccess() {
    // optional stub
}

// ===================================
// QUIZ SYSTEM
// ===================================
function renderQuizQuestion() {
    if (!currentLesson.quiz || currentLesson.quiz.length === 0) {
        completeLesson();
        return;
    }
    
    if (currentQuizIndex >= currentQuizTotal) return;

    // Set Progress Bar
    const progPrc = ((currentQuizIndex) / currentQuizTotal) * 100;
    document.getElementById('quiz-progress-fill').style.width = progPrc + "%";

    const q = currentLesson.quiz[currentQuizIndex];
    document.getElementById('quiz-question').textContent = `${currentQuizIndex + 1}/${currentQuizTotal}. ${q.question}`;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(i, q.correct));
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');
    quizAnswered = false;
}

function handleQuizAnswer(selected, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');

    options.forEach(o => o.classList.add('disabled'));
    options[correct].classList.add('correct');
    
    if (selected !== correct) {
        options[selected].classList.add('wrong');
    }

    feedbackEl.classList.remove('hidden');
    if (selected === correct) {
        state.correctAnswers++;
        state.quizWinStreak++;
        currentQuizCorrect++;

        const msgs = MOTIVATIONS.correctAnswerMessages;
        let pTxt = msgs[Math.floor(Math.random() * msgs.length)];
        
        if (state.quizWinStreak >= 3) {
            pTxt += ` COMBO x${state.quizWinStreak}! 🔥`;
        }

        feedbackEl.textContent = pTxt;
        feedbackEl.className = 'quiz-feedback correct';
    } else {
        state.quizWinStreak = 0;
        const wMsgs = MOTIVATIONS.wrongAnswerMessages;
        feedbackEl.textContent = wMsgs[Math.floor(Math.random() * wMsgs.length)] + ` Jawaban yg benar: ${options[correct].textContent}`;
        feedbackEl.className = 'quiz-feedback wrong';
    }

    saveState();

    nextBtn.classList.remove('hidden');
    if (currentQuizIndex >= currentQuizTotal - 1) {
        nextBtn.textContent = 'Lihat Rekap 🎉';
    } else {
        nextBtn.textContent = 'Soal Berikutnya →';
    }
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex >= currentQuizTotal) {
        document.getElementById('quiz-progress-fill').style.width = "100%";
        completeLesson();
    } else {
        renderQuizQuestion();
    }
}

// ===================================
// COMPLETE LESSON
// ===================================
function completeLesson() {
    if (!currentLesson) return;

    const alreadyCompleted = state.completedLessonIds.includes(currentLesson.id);

    if (!alreadyCompleted) {
        state.completedLessonIds.push(currentLesson.id);
        state.completedLessons++;
        state.totalXP += currentLesson.xp;

        // Bonus perfect quiz
        if (currentQuizCorrect === currentQuizTotal && currentQuizTotal > 0) {
            state.perfectQuizzes++;
            state.totalXP += 10;
        }

        const prevLevel = state.level;
        state.level = calculateLevel(state.totalXP).level;
        saveState();

        const xpGained = currentLesson.xp + (currentQuizCorrect === currentQuizTotal ? 10 : 0);
        showXPToast(xpGained);

        if (state.level > prevLevel) {
            setTimeout(launchConfetti, 800);
        }
        setTimeout(checkAchievements, 1200);
    }

    document.getElementById('quiz-section').classList.add('hidden');
    const completeSection = document.getElementById('lesson-complete');
    completeSection.classList.remove('hidden');

    const rndMsg = MOTIVATIONS.lessonCompleteMessages;
    document.getElementById('complete-message').textContent = rndMsg[Math.floor(Math.random() * rndMsg.length)];

    const totalEarned = alreadyCompleted ? 0 : currentLesson.xp + (currentQuizCorrect === currentQuizTotal ? 10 : 0);
    document.getElementById('earned-xp').textContent = totalEarned;
    
    // Fill stats text briefly
    const completeStats = document.getElementById('complete-stats');
    completeStats.innerHTML = `
        <div class="complete-stat-item">
            <span class="complete-stat-value">${currentQuizCorrect}/${currentQuizTotal}</span>
            <span class="complete-stat-label">Terjawab Benar</span>
        </div>
    `;

    if (alreadyCompleted) {
        document.getElementById('complete-message').textContent = 'Lesson ini sudah pernah dituntaskan (Review mode) 📖';
    }

    launchConfetti();
    updateAllUI();
}

// ===================================
// UI UPDATERS
// ===================================
function showXPToast(amount) {
    const toast = document.getElementById('xp-toast');
    document.getElementById('xp-toast-text').textContent = `+${amount} XP`;
    toast.classList.remove('hidden');
    toast.style.animation = 'none';
    toast.offsetHeight;
    toast.style.animation = 'toastIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => { toast.classList.add('hidden'); }, 2500);
}

function updateDashboard() {
    const h = new Date().getHours();
    let gretingPrefix = 'Halo';
    if(h < 11) gretingPrefix = 'Semangat Pagi';
    else if(h < 15) gretingPrefix = 'Selamat Siang';
    else if(h < 19) gretingPrefix = 'Selamat Sore';
    else gretingPrefix = 'Selamat Malam';

    const savedName = localStorage.getItem('zerocode-username');

    // Avatar
    const avatarEl = document.getElementById('dash-avatar');
    if (avatarEl && savedName) {
        const avatarUrl = localStorage.getItem('zerocode-avatar');
        if (avatarUrl) {
            avatarEl.style.backgroundImage = `url(${avatarUrl})`;
            avatarEl.style.backgroundSize = 'cover';
            avatarEl.style.backgroundPosition = 'center';
            avatarEl.textContent = '';
        } else {
            avatarEl.style.backgroundImage = '';
            avatarEl.textContent = savedName.charAt(0).toUpperCase();
        }
    }

    // Greeting
    if (savedName) {
        document.getElementById('greeting').innerHTML = `${gretingPrefix}, <span style="color:var(--accent-primary)">${savedName}</span>! 👋`;
        const subEl = document.querySelector('.dash-subtitle');
        if (subEl) subEl.textContent = 'Senang melihatmu kembali, mari lanjutkan belajar programming hari ini.';
    } else {
        document.getElementById('greeting').textContent = `${gretingPrefix}! 👋`;
    }

    document.getElementById('total-xp').textContent = state.totalXP.toLocaleString();
    document.getElementById('completed-lessons').textContent = state.completedLessons;
    document.getElementById('correct-answers').textContent = state.correctAnswers;
    document.getElementById('total-achievements').textContent = state.unlockedAchievements.length;
    document.getElementById('streak-count').textContent = state.streak;
    document.getElementById('mobile-streak-count').textContent = state.streak;

    ['html', 'css', 'javascript', 'python'].forEach(key => {
        const prg = getCourseProgress(key);
        const pvx = key === 'javascript' ? 'js' : key;
        
        // New dashboard progress bars
        const fillEl = document.getElementById(`${pvx}-progress-fill`);
        if (fillEl) fillEl.style.width = `${prg}%`;
        
        // New dashboard progress badges
        const badge2El = document.getElementById(`${pvx}-progress-badge2`);
        if (badge2El) badge2El.textContent = `${prg}%`;
        
        // Sidebar nav badges
        const badgeEl = document.getElementById(`${key}-progress-badge`);
        if (badgeEl) badgeEl.textContent = `${prg}%`;
    });

    const tips = MOTIVATIONS.tips;
    const t = tips[Math.floor(new Date().getDate() % tips.length)];
    document.getElementById('motivation-title').textContent = t.title;
    document.getElementById('motivation-text').textContent = t.text;
}

function updateAllUI() {
    updateDashboard();
    updateProfilePage();
    
    // Level UI
    const lvlInfo = calculateLevel(state.totalXP);
    document.getElementById('level-badge').textContent = lvlInfo.level;
    document.getElementById('level-num').textContent = lvlInfo.level;
    document.getElementById('level-bar-fill').style.width = `${(lvlInfo.currentXP / lvlInfo.xpNeeded) * 100}%`;
}

// ===================================
// BOSS BATTLE SYSTEM
// ===================================
const BOSS_INTERVAL = 5; // Every 5 lessons

const BOSS_DATA = {
    html: {
        bosses: [
            {
                name: '🐺 Serigala Tag',
                subtitle: 'Buktikan kamu menguasai dasar-dasar HTML!',
                triggerAfter: 5,
                questions: [
                    { question: 'Tag HTML mana yang digunakan untuk membuat paragraf?', options: ['<div>', '<p>', '<span>', '<br>'], correct: 1 },
                    { question: 'Atribut mana yang digunakan untuk memberi link / alamat pada tag <a>?', options: ['src', 'link', 'href', 'url'], correct: 2 },
                    { question: 'Tag mana yang digunakan untuk membuat judul terbesar?', options: ['<h6>', '<h1>', '<title>', '<header>'], correct: 1 },
                    { question: 'Tag <img> termasuk jenis tag apa?', options: ['Block Element', 'Self-closing', 'Inline yang butuh closing', 'Table Element'], correct: 1 },
                    { question: 'Apa fungsi atribut "alt" pada tag <img>?', options: ['Mengatur ukuran gambar', 'Memberi warna', 'Teks alternatif jika gambar gagal', 'Memberi link'], correct: 2 }
                ]
            },
            {
                name: '🐉 Naga Struktur',
                subtitle: 'Ujian akhir HTML! Buktikan kamu layak disebut HTML Master!',
                triggerAfter: 10,
                questions: [
                    { question: 'Tag mana yang digunakan untuk membuat baris tabel?', options: ['<td>', '<table>', '<tr>', '<th>'], correct: 2 },
                    { question: 'Apa perbedaan <div> dan <span>?', options: ['Keduanya sama', 'div=block, span=inline', 'div=inline, span=block', 'span tidak ada di HTML'], correct: 1 },
                    { question: 'Tag semantic HTML5 untuk area navigasi adalah?', options: ['<menu>', '<nav>', '<sidebar>', '<links>'], correct: 1 },
                    { question: 'Tag mana untuk menyematkan video?', options: ['<media>', '<movie>', '<video>', '<embed>'], correct: 2 },
                    { question: 'Komentar HTML ditulis dengan format?', options: ['// komentar', '/* komentar */', '<!-- komentar -->', '# komentar'], correct: 2 }
                ]
            },
            {
                name: '👑 Raja HTML',
                subtitle: 'Ujian terakhir! Kamu sudah hampir selesai menguasai HTML!',
                triggerAfter: 15,
                questions: [
                    { question: 'Apa fungsi dari tag <form>?', options: ['Membuat tabel', 'Menampung input pengguna', 'Membuat navigasi', 'Mengatur layout'], correct: 1 },
                    { question: 'Atribut "type" pada <input> menentukan apa?', options: ['Warna input', 'Jenis input (text/password/dll)', 'Ukuran input', 'Posisi input'], correct: 1 },
                    { question: 'Tag <iframe> digunakan untuk?', options: ['Membuat frame gambar', 'Menyematkan website lain', 'Membuat border', 'Menampilkan kode'], correct: 1 },
                    { question: 'Tag <audio> memerlukan atribut apa agar ada kontrol play?', options: ['play', 'autoplay', 'controls', 'controller'], correct: 2 },
                    { question: 'Mana yang BUKAN tag semantic HTML5?', options: ['<article>', '<section>', '<div>', '<footer>'], correct: 2 }
                ]
            },
            {
                name: '🦍 Kong Multimedia',
                subtitle: 'Ujian elemen media dan grafis lanjut!',
                triggerAfter: 20,
                questions: [
                    { question: 'Tag mana untuk menyematkan video mp4?', options: ['<media>', '<movie>', '<mp4>', '<video>'], correct: 3 },
                    { question: 'Atribut iframe apa untuk alamat URL sumber?', options: ['href', 'src', 'link', 'url'], correct: 1 }
                ]
            },
            {
                name: '🦅 Elang Modern',
                subtitle: 'Ujian fitur HTML5 canggih!',
                triggerAfter: 25,
                questions: [
                    { question: 'Atribut tipe input untuk memilih tanggal?', options: ['date', 'time', 'calendar', 'day'], correct: 0 },
                    { question: 'Elemen HTML untuk grafik vektor scalable?', options: ['<canvas>', '<image>', '<svg>', '<vector>'], correct: 2 }
                ]
            },
            {
                name: '🦖 T-Rex Master HTML',
                subtitle: 'Boss pamungkas HTML! Kalahkan untuk menamatkan course HTML!',
                triggerAfter: 30,
                questions: [
                    { question: 'Atribut untuk membuat elemen dapat diseret?', options: ['moveable="true"', 'drag="yes"', 'draggable="true"', 'drop="ok"'], correct: 2 },
                    { question: 'Tag yang digunakan untuk optimasi SEO di head?', options: ['<title>', '<seo>', '<meta>', '<link>'], correct: 2 }
                ]
            }
        ]
    },
    css: {
        bosses: [
            {
                name: '🌊 Gelombang Warna',
                subtitle: 'Buktikan kamu menguasai styling dasar CSS!',
                triggerAfter: 5,
                questions: [
                    { question: 'Property CSS mana yang mengubah warna teks?', options: ['text-color', 'font-color', 'color', 'foreground'], correct: 2 },
                    { question: 'Bagaimana menambahkan background merah pada elemen?', options: ['bg-color: red', 'background-color: red', 'back: red', 'color-bg: red'], correct: 1 },
                    { question: 'Property mana untuk mengatur ukuran font?', options: ['text-size', 'font-size', 'size', 'font'], correct: 1 },
                    { question: 'Padding mengatur jarak...?', options: ['Antar elemen luar', 'Dalam elemen (konten ke border)', 'Teks ke teks', 'Halaman ke halaman'], correct: 1 },
                    { question: 'Selector CSS yang menarget ID menggunakan simbol?', options: ['.', '#', '@', '&'], correct: 1 }
                ]
            },
            {
                name: '⚡ Badai Flexbox',
                subtitle: 'Ujian layout CSS! Buktikan kamu bisa menata halaman!',
                triggerAfter: 10,
                questions: [
                    { question: 'Property mana yang mengaktifkan Flexbox?', options: ['display: block', 'display: flex', 'display: grid', 'flex: 1'], correct: 1 },
                    { question: 'justify-content mengatur posisi di sumbu...?', options: ['Vertikal', 'Horizontal (main axis)', 'Diagonal', 'Z-index'], correct: 1 },
                    { question: 'Border-radius: 50% membuat bentuk?', options: ['Kotak', 'Segitiga', 'Lingkaran', 'Oval'], correct: 2 },
                    { question: 'Media query digunakan untuk?', options: ['Animasi', 'Responsive design', 'Database', 'JavaScript'], correct: 1 },
                    { question: 'Z-index mengatur apa?', options: ['Ukuran elemen', 'Warna elemen', 'Tumpukan/lapisan elemen', 'Jarak elemen'], correct: 2 }
                ]
            },
            {
                name: '🌪️ Angin Topan Posisi',
                subtitle: 'Ujian koordinat web!',
                triggerAfter: 15,
                questions: [
                    { question: 'Apa perbedaan relative dan absolute?', options: ['Tidak ada beda', 'Absolute lepas dari flow normal', 'Relative lebih kuat', 'Hanya untuk teks'], correct: 1 },
                    { question: 'z-index berfungsi kalau properti position adalah?', options: ['Selalu', 'Hanya kalau color red', 'Selain static', 'Hanya float'], correct: 2 }
                ]
            },
            {
                name: '🦄 Kuda Poni Transisi',
                subtitle: 'Ujian interaksi dan warna!',
                triggerAfter: 20,
                questions: [
                    { question: 'Pseudo-class saat elemen dilewati mouse?', options: [':click', ':hover', ':mouse', ':enter'], correct: 1 },
                    { question: 'Bagaimana mendeklarasikan variabel CSS?', options: ['$var:', '@var:', '--var:', '#var:'], correct: 2 }
                ]
            },
            {
                name: '☄️ Komet Animasi',
                subtitle: 'Ujian pergerakan obyek CSS!',
                triggerAfter: 25,
                questions: [
                    { question: 'Perintah untuk membuat langkah animasi mandiri?', options: ['@animation', '@keyframes', '@animate', '@frame'], correct: 1 },
                    { question: 'Nilai dari animation agar terus berputar?', options: ['infinite', 'forever', 'loop', 'nonstop'], correct: 0 }
                ]
            },
            {
                name: '🌋 Gunung Berapi Grid',
                subtitle: 'Boss Terakhir CSS! Buktikan skill layout modernmu!',
                triggerAfter: 30,
                questions: [
                    { question: 'Properti pemisah blok pada CSS Grid?', options: ['padding', 'margin', 'gap', 'space'], correct: 2 },
                    { question: 'Media query digunakan pada skenario?', options: ['Mengubah warna saja', 'Responsivitas layar HP/PC', 'Menyimpan data', 'Menjalankan animasi klik'], correct: 1 }
                ]
            }
        ]
    },
    javascript: {
        bosses: [
            {
                name: '🤖 Robot Variabel',
                subtitle: 'Buktikan kamu menguasai dasar JavaScript!',
                triggerAfter: 5,
                questions: [
                    { question: 'Kata kunci mana untuk mendeklarasikan variabel yang bisa diubah nilainya?', options: ['const', 'let', 'var (lama)', 'Semua benar'], correct: 1 },
                    { question: 'Fungsi console.log() digunakan untuk?', options: ['Menampilkan di layar pengguna', 'Menampilkan di console debug', 'Menyimpan data', 'Membuat variabel'], correct: 1 },
                    { question: 'Operator === di JavaScript artinya?', options: ['Assignment', 'Sama tipe & nilai', 'Sama nilai saja', 'Tidak sama'], correct: 1 },
                    { question: 'Tipe data "true" dan "false" disebut?', options: ['String', 'Number', 'Boolean', 'Object'], correct: 2 },
                    { question: 'Bagaimana menulis komentar satu baris di JS?', options: ['<!-- -->', '/* */', '//', '#'], correct: 2 }
                ]
            },
            {
                name: '🧙‍♂️ Penyihir Fungsi',
                subtitle: 'Ujian tingkat lanjut JavaScript!',
                triggerAfter: 10,
                questions: [
                    { question: 'Apa itu function di JavaScript?', options: ['Variabel khusus', 'Kumpulan kode yang bisa dipanggil ulang', 'Style CSS', 'Tag HTML'], correct: 1 },
                    { question: 'Array di JavaScript dimulai dari index ke-?', options: ['1', '0', '-1', '2'], correct: 1 },
                    { question: 'Method untuk menambah item ke akhir array?', options: ['add()', 'push()', 'append()', 'insert()'], correct: 1 },
                    { question: 'Loop "for" digunakan untuk?', options: ['Membuat variabel', 'Mengulang kode', 'Menghapus data', 'Styling'], correct: 1 },
                    { question: 'Event "click" termasuk bagian apa?', options: ['CSS', 'HTML Attribute', 'DOM Events', 'Database'], correct: 2 }
                ]
            },
            {
                name: '🐱 Kucing DOM',
                subtitle: 'Ujian interaksi HTML dengan Javascript!',
                triggerAfter: 15,
                questions: [
                    { question: 'Metode menangkap elemen berdasar ID?', options: ['getElementById', 'catchId', 'findId', 'selectId'], correct: 0 },
                    { question: 'Apa singkatan dari DOM?', options: ['Data Object Mode', 'Document Object Model', 'Draw Over My', 'Document Orient Module'], correct: 1 }
                ]
            },
            {
                name: '🐯 Macan Timer',
                subtitle: 'Ujian jeda eksekusi asinkron dasar!',
                triggerAfter: 20,
                questions: [
                    { question: 'Fungsi untuk menjalankan setelah sekian milisekon?', options: ['wait()', 'setTimeout()', 'delay()', 'pause()'], correct: 1 },
                    { question: 'Blok untuk menahan aplikasi dari crash karena error?', options: ['if-else', 'for-while', 'try-catch', 'do-does'], correct: 2 }
                ]
            },
            {
                name: '🐻 Beruang Sinkron',
                subtitle: 'Ujian ES6 modern!',
                triggerAfter: 25,
                questions: [
                    { question: 'Bentuk fungsi panah (Arrow Function)?', options: ['=>', '->', '~>', '>>'], correct: 0 },
                    { question: 'Pewarisan sifat dan pembuatan objek disebut?', options: ['Class', 'Function', 'Variable', 'Loop'], correct: 0 }
                ]
            },
            {
                name: '🐅 Harimau Async',
                subtitle: 'Boss Terakhir JavaScript! Ujian Asynchronous API!',
                triggerAfter: 30,
                questions: [
                    { question: 'Mengubah Objek JS menjadi format teko JSON?', options: ['JSON.parse()', 'JSON.toString()', 'JSON.stringify()', 'JSON.make()'], correct: 2 },
                    { question: 'Metode populer mengambil data dari API Web eksternal?', options: ['XMLHttpRequest()', 'fetch()', 'getURL()', 'callAPI()'], correct: 1 }
                ]
            }
        ]
    },
    python: {
        bosses: [
            {
                name: '🐍 Ular Piton',
                subtitle: 'Buktikan kamu menguasai dasar Python!',
                triggerAfter: 5,
                questions: [
                    { question: 'Fungsi print() digunakan untuk?', options: ['Input data', 'Menampilkan output', 'Menghapus variabel', 'Membuat file'], correct: 1 },
                    { question: 'Python menggunakan apa untuk menentukan blok kode?', options: ['Kurung kurawal {}', 'Indentasi (spasi)', 'Semicolon ;', 'Tanda kurung ()'], correct: 1 },
                    { question: 'Tipe data untuk bilangan bulat di Python?', options: ['float', 'str', 'int', 'bool'], correct: 2 },
                    { question: 'Bagaimana membuat komentar di Python?', options: ['// komentar', '# komentar', '<!-- komentar -->', '/* komentar */'], correct: 1 },
                    { question: 'Operator + pada string Python berfungsi untuk?', options: ['Penjumlahan', 'Penggabungan (concatenation)', 'Pengurangan', 'Error'], correct: 1 }
                ]
            },
            {
                name: '🐸 Katak Logika',
                subtitle: 'Ujian kontrol alur percabangan!',
                triggerAfter: 10,
                questions: [
                    { question: 'Tipe data untuk Array yang bisa diubah di Python disebut?', options: ['Tuple', 'Map', 'List', 'Array'], correct: 2 },
                    { question: 'Sintaks if cabangan kedua?', options: ['else if', 'elseif', 'elif', 'if else'], correct: 2 }
                ]
            },
            {
                name: '🦉 Burung Hantu Fungsi',
                subtitle: 'Ujian memori dan tugas sistematis!',
                triggerAfter: 15,
                questions: [
                    { question: 'Definisi fungsi menggunakan kata kunci?', options: ['function', 'fun', 'func', 'def'], correct: 3 },
                    { question: 'Data di Python yang berbasis pasangan Kunci dan Nilai?', options: ['List', 'Tuple', 'Set', 'Dictionary'], correct: 3 }
                ]
            },
            {
                name: '🦊 Rubah Eksternal',
                subtitle: 'Ujian memuat data dari luar!',
                triggerAfter: 20,
                questions: [
                    { question: 'F-Strings ditandai dengan huruf f diikuti dengan?', options: ['Kurung ()', 'Kutipan ""', 'Kurawal {}', 'Spasi'], correct: 1 },
                    { question: 'Metode impor paket luar?', options: ['include', 'require', 'import', 'load'], correct: 2 }
                ]
            },
            {
                name: '🐺 Serigala OOP',
                subtitle: 'Ujian paradigma berorientasi objek!',
                triggerAfter: 25,
                questions: [
                    { question: 'Kata kunci mendefinisikan kelas di Python?', options: ['object', 'create', 'class', 'struct'], correct: 2 },
                    { question: 'Fungsi awal konstruktor saat membuat Kelas?', options: ['__start__', '__setup__', 'init()', '__init__'], correct: 3 }
                ]
            },
            {
                name: '🦁 Singa Pythonic',
                subtitle: 'Boss Terakhir Python! Kalahkan untuk lulus kursus Data Science!',
                triggerAfter: 30,
                questions: [
                    { question: 'Singkatan sintaks singkat untuk inisialisasi dan loop pembuat List baru?', options: ['List Compressing', 'List Comprehension', 'Array Mapping', 'For In Array'], correct: 1 },
                    { question: 'Modul bawaan Python untuk mengolah JSON?', options: ['jsondata', 'json', 'pyjson', 'object'], correct: 1 }
                ]
            }
        ]
    }
};

let bossState = {
    active: false,
    courseKey: null,
    bossIndex: 0,
    questionIndex: 0,
    correctCount: 0,
    totalQuestions: 0,
    answered: false
};

function checkForBoss(courseKey) {
    const course = COURSES[courseKey];
    if (!course) return false;
    
    const bosses = BOSS_DATA[courseKey]?.bosses;
    if (!bosses) return false;
    
    const completedCount = course.lessons.filter(l => state.completedLessonIds.includes(l.id)).length;
    
    for (let i = 0; i < bosses.length; i++) {
        const boss = bosses[i];
        const bossKey = `boss-${courseKey}-${i}`;
        
        if (completedCount >= boss.triggerAfter && !state.completedLessonIds.includes(bossKey)) {
            // Check if all lessons up to triggerAfter are done
            const allDone = course.lessons.slice(0, boss.triggerAfter).every(l => state.completedLessonIds.includes(l.id));
            if (allDone) {
                startBossBattle(courseKey, i);
                return true;
            }
        }
    }
    return false;
}

function startBossBattle(courseKey, bossIndex) {
    const boss = BOSS_DATA[courseKey].bosses[bossIndex];
    
    bossState = {
        active: true,
        courseKey,
        bossIndex,
        questionIndex: 0,
        correctCount: 0,
        totalQuestions: boss.questions.length,
        answered: false
    };
    
    document.getElementById('boss-icon').textContent = boss.name.split(' ')[0];
    document.getElementById('boss-title').textContent = boss.name;
    document.getElementById('boss-subtitle').textContent = boss.subtitle;
    document.getElementById('boss-hp-fill').style.width = '100%';
    document.getElementById('boss-question-area').classList.remove('hidden');
    document.getElementById('boss-result').classList.add('hidden');
    
    document.getElementById('boss-battle-overlay').classList.remove('hidden');
    renderBossQuestion();
}

function renderBossQuestion() {
    const boss = BOSS_DATA[bossState.courseKey].bosses[bossState.bossIndex];
    const q = boss.questions[bossState.questionIndex];
    
    document.getElementById('boss-q-num').textContent = `Soal ${bossState.questionIndex + 1} / ${bossState.totalQuestions}`;
    document.getElementById('boss-q-text').textContent = q.question;
    
    const optionsEl = document.getElementById('boss-options');
    optionsEl.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'boss-opt';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleBossAnswer(i, q.correct));
        optionsEl.appendChild(btn);
    });
    
    document.getElementById('boss-feedback').classList.add('hidden');
    document.getElementById('boss-next-btn').classList.add('hidden');
    bossState.answered = false;
}

function handleBossAnswer(selected, correct) {
    if (bossState.answered) return;
    bossState.answered = true;
    
    const options = document.querySelectorAll('.boss-opt');
    const feedbackEl = document.getElementById('boss-feedback');
    const nextBtn = document.getElementById('boss-next-btn');
    
    options.forEach(o => o.classList.add('disabled'));
    options[correct].classList.add('correct');
    
    if (selected === correct) {
        bossState.correctCount++;
        feedbackEl.textContent = '✅ Serangan berhasil! Boss terkena damage!';
        feedbackEl.className = 'boss-feedback correct';
    } else {
        options[selected].classList.add('wrong');
        feedbackEl.textContent = `❌ Meleset! Jawaban benar: ${options[correct].textContent}`;
        feedbackEl.className = 'boss-feedback wrong';
    }
    
    feedbackEl.classList.remove('hidden');
    
    // Update HP bar
    const hpPercent = Math.max(0, 100 - ((bossState.correctCount / bossState.totalQuestions) * 100));
    document.getElementById('boss-hp-fill').style.width = hpPercent + '%';
    
    nextBtn.classList.remove('hidden');
    if (bossState.questionIndex >= bossState.totalQuestions - 1) {
        nextBtn.textContent = 'Lihat Hasil ⚔️';
    } else {
        nextBtn.textContent = 'Lanjut →';
    }
}

function nextBossQuestion() {
    bossState.questionIndex++;
    
    if (bossState.questionIndex >= bossState.totalQuestions) {
        finishBossBattle();
    } else {
        renderBossQuestion();
    }
}

function finishBossBattle() {
    const passed = bossState.correctCount >= Math.ceil(bossState.totalQuestions * 0.6); // 60% to pass
    
    document.getElementById('boss-question-area').classList.add('hidden');
    const resultEl = document.getElementById('boss-result');
    resultEl.classList.remove('hidden');
    
    if (passed) {
        document.getElementById('boss-result-icon').textContent = '🎉';
        document.getElementById('boss-result-title').textContent = 'Boss Dikalahkan!';
        document.getElementById('boss-result-msg').textContent = `Score: ${bossState.correctCount}/${bossState.totalQuestions}. Kamu berhasil! Materi berikutnya sudah terbuka!`;
        
        const bossKey = `boss-${bossState.courseKey}-${bossState.bossIndex}`;
        if (!state.completedLessonIds.includes(bossKey)) {
            state.completedLessonIds.push(bossKey);
            state.totalXP += 50;
            saveState();
            showXPToast(50);
        }
        
        launchConfetti();
    } else {
        document.getElementById('boss-result-icon').textContent = '💀';
        document.getElementById('boss-result-title').textContent = 'Boss Menang...';
        document.getElementById('boss-result-msg').textContent = `Score: ${bossState.correctCount}/${bossState.totalQuestions}. Kamu butuh minimal ${Math.ceil(bossState.totalQuestions * 0.6)} jawaban benar. Review materinya dan coba lagi!`;
    }
}

function closeBossBattle() {
    document.getElementById('boss-battle-overlay').classList.add('hidden');
    bossState.active = false;
    updateAllUI();
    if (currentCourse) renderLessons(currentCourse);
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';

    ACHIEVEMENTS.forEach(ach => {
        const unlk = state.unlockedAchievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${unlk ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-card-icon">${ach.icon}</div>
            <div class="achievement-card-info">
                <h3>${unlk ? ach.title : '??? (Terkunci)'}</h3>
                <p>${ach.desc}</p>
                ${unlk ? '<div class="unlocked-date">✅ Diselesaikan!</div>' : ''}
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===================================
// CONFETTI FUN!
// ===================================
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const parts = [];
    const colors = ['#7c5cfc', '#9b7cfc', '#f0db4f', '#34d399', '#f87171', '#fbbf24', '#e44d26', '#2965f1'];

    for (let i = 0; i < 100; i++) {
        parts.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height * 0.5,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            col: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 3,
            rot: Math.random() * 360,
            rots: (Math.random() - 0.5) * 10,
            op: 1,
        });
    }

    let frt = 0;
    function ani() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        frt++;
        for (const p of parts) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rot += p.rots;
            if (frt > 50) p.op -= 0.015;
            if (p.op <= 0) continue;

            ctx.save();
            ctx.globalAlpha = p.op;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.fillStyle = p.col;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        if (parts.some(p => p.op > 0) && frt < 180) {
            requestAnimationFrame(ani);
        } else {
            ctx.clearRect(0,0, canvas.width, canvas.height);
        }
    }
    ani();
}

window.addEventListener('resize', () => {
    const c = document.getElementById('confetti-canvas');
    if (c) {
        c.width = window.innerWidth; c.height = window.innerHeight;
    }
});

function toggleTheme() {
    const root = document.documentElement;
    const isLight = root.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    
    if (newTheme === 'light') {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('zerocode-theme', 'light');
    } else {
        root.removeAttribute('data-theme');
        localStorage.setItem('zerocode-theme', 'dark');
    }
    
    // Sync all toggle buttons
    const btns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    btns.forEach(btn => {
        if (btn) btn.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('zerocode-theme');
    const root = document.documentElement;
    const btns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    
    if (savedTheme === 'light') {
        root.setAttribute('data-theme', 'light');
        btns.forEach(btn => { if (btn) btn.textContent = '🌙'; });
    } else {
        btns.forEach(btn => { if (btn) btn.textContent = '☀️'; });
    }
});

// ===================================
// PROFILE SIDEBAR
// ===================================
function toggleProfileSidebar() {
    const sidebar = document.getElementById('profile-sidebar');
    const overlay = document.getElementById('profile-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        updateProfilePage();
    }
}

function updateProfilePage() {
    const savedName = localStorage.getItem('zerocode-username') || 'Pengguna';
    document.getElementById('profile-name').textContent = savedName;
    
    const initial = savedName.charAt(0).toUpperCase();
    const avatarUrl = localStorage.getItem('zerocode-avatar');
    
    const pLarge = document.getElementById('profile-avatar-large');
    const fBtn = document.getElementById('floating-profile-btn');
    const fAvatar = document.getElementById('floating-avatar');
    
    if (avatarUrl) {
        pLarge.style.backgroundImage = `url(${avatarUrl})`;
        pLarge.style.backgroundSize = 'cover';
        pLarge.style.backgroundPosition = 'center';
        pLarge.textContent = '';
        
        if (fBtn) {
            fBtn.style.backgroundImage = `url(${avatarUrl})`;
            fBtn.style.backgroundSize = 'cover';
            fBtn.style.backgroundPosition = 'center';
        }
        if (fAvatar) fAvatar.style.display = 'none';
    } else {
        pLarge.style.backgroundImage = '';
        pLarge.textContent = initial;
        
        if (fBtn) fBtn.style.backgroundImage = '';
        if (fAvatar) {
            fAvatar.style.display = '';
            fAvatar.textContent = initial;
        }
    }

    document.getElementById('profile-join-date-txt').textContent = 'Bergabung sejak: ' + (state.joinDate || '-');
    
    // Populate stats
    document.getElementById('profile-level').textContent = state.level;
    document.getElementById('profile-xp').textContent = state.totalXP.toLocaleString();
    document.getElementById('profile-streak-val').textContent = state.streak;
    document.getElementById('profile-achievements-val').textContent = state.unlockedAchievements.length;
}

function editProfileName() {
    const currentName = localStorage.getItem('zerocode-username') || '';
    const newName = prompt('Masukkan nama baru:', currentName);
    if (newName && newName.trim() !== '') {
        localStorage.setItem('zerocode-username', newName.trim());
        updateAllUI();
    }
}

function resetProgress() {
    if (confirm('PERINGATAN: Kamu akan menghapus SELURUH progress belajarmu selamanya. Apakah kamu yakin ingin mengulang dari nol?')) {
        const jd = state.joinDate;
        state = { ...DEFAULT_STATE, joinDate: jd };
        saveState();
        updateAllUI();
        alert('Progress belajar telah di-reset.');
    }
}

function handleProfileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) { // Max 2MB
        alert("Zonk! Ukuran gambarmu terlalu besar. Maksimal 2MB ya!");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Img = e.target.result;
        localStorage.setItem('zerocode-avatar', base64Img);
        updateAllUI();
    };
    reader.readAsDataURL(file);
}
