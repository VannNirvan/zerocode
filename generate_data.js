const fs = require('fs');

const courses = {
  html: {
    title: 'HTML',
    icon: '🧱',
    color: '#e44d26',
    lessons: []
  },
  css: {
    title: 'CSS',
    icon: '🎨',
    color: '#2965f1',
    lessons: []
  },
  javascript: {
    title: 'JavaScript',
    icon: '⚡',
    color: '#f0db4f',
    lessons: []
  },
  python: {
    title: 'Python',
    icon: '🐍',
    color: '#306998',
    lessons: []
  }
};

function cl(id, title, desc, xp, content, chalTitle, chalDesc, initial, checkStr, hintsArr) {
  let hintStr = hintsArr[0] || "";
  let rawHint = hintStr.replace(/Ketik huruf /ig, "").replace(/Gunakan kata /ig, "").replace(/Gunakan /ig, "").replace(/Pakai /ig, "").replace(/Tulis /ig, "").replace(/Buka /ig, "").replace(/Ubah jadi /ig, "");
  
  let formattedExample = rawHint.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let newContent = content + `
<div class="materi-example" style="margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);">
  <h4 style="margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">💡 Contoh Penulisan Kode</h4>
  <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;">${formattedExample}</code></pre>
</div>
<div style="margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);">
  <p style="margin: 0; color: #a7f3d0; font-size: 0.95rem;"><strong>🎯 Misi Praktek:</strong> ${chalDesc}</p>
</div>`;

  return {
    id, title, desc, xp,
    content: newContent,
    challenge: {
      title: chalTitle,
      desc: chalDesc,
      initialCode: initial,
      htmlTemplate: "$CODE",
      hints: hintsArr,
      checkFn: "___FUNCSUB___" + checkStr + "___FUNCSUB___",
    },
    quiz: [
      { question: "Menurut Anda, materi ini mudah dipahami?", options: ["Sangat Mudah", "Biasa Saja", "Sulit"], correct: 0 },
      { question: "Siap untuk tantangan quiz ini?", options: ["Belum", "Mungkin Nanti", "Sudah Siap"], correct: 2 }
    ]
  };
}

let hLessons = [];
// 1-15: Same as before
hLessons.push(cl("html-1", "Pengenalan HTML", "Apa itu HTML?", 25, `<h2>Apa itu HTML?</h2><p>HTML (HyperText Markup Language) adalah bahasa markup yang memberitahu browser cara menyusun konten.</p>`, "Tulis Halo", "Tulis kata Halo di antara <body>", "<body>\n  \n</body>", "code => clean(code).includes('halo')", ["Ketik huruf halo"]));
hLessons.push(cl("html-2", "Sintaks & Struktur Basic", "Memahami Tag HTML", 30, `<h2>Sintaks Tag HTML</h2><p>Di HTML, kita menggunakan <strong>Tag</strong> yang diapit tanda <code>&lt; &gt;</code>.</p>`, "Tag h1", "Buat tag <h1>Judul Web</h1> di body", "<body>\n\n</body>", "code => clean(code).includes('<h1>judulweb</h1>')", ["Gunakan <h1>Judul Web</h1>"]));
hLessons.push(cl("html-3", "Atribut HTML", "Informasi tambahan di dalam tag.", 30, `<h2>Atribut HTML</h2><p>Atribut memberi info ekstra dan diletakkan di tag pembuka. Contoh: <span class="highlight">id</span> atau <span class="highlight">lang</span>.</p>`, "Atribut ID", "Beri atribut id='info' pada p", "<body>\n  <p>Hai</p>\n</body>", "code => code.includes('id=\"info\"') || code.includes('id=\\'info\\'')", ["Taruh id='info' di tab <p>"]));
hLessons.push(cl("html-4", "Heading & Paragraf", "Judul besar hingga kecil", 25, `<h2>Heading</h2><p>H1 sampai H6. H1 paling besar.</p><h2>Paragraf</h2><p>Diapit oleh tag &lt;p&gt;</p>`, "Paragraf Pertamaku", "Buat 1 <p> dengan isi 'Belajar HTML'", "<body>\n\n</body>", "code => clean(code).includes('<p>belajarhtml</p>')", ["Ketik <p>Belajar HTML</p>"]));
hLessons.push(cl("html-5", "Pemformatan Teks", "Bold, Italic, Underline", 25, `<h2>Memformat Teks</h2><p>&lt;b&gt; untuk tebal, &lt;i&gt; miring.</p>`, "Teks Tebal", "Gunakan tag <b> atau <strong> untuk membuat teks 'Penting'", "<body>\n\n</body>", "code => clean(code).includes('<b>penting</b>') || clean(code).includes('<strong>penting</strong>')", ["Gunakan <b>Penting</b>"]));
hLessons.push(cl("html-6", "Link (Anchor)", "Berpindah antar halaman", 30, `<h2>Link Browser</h2><p>Gunakan tag &lt;a&gt; dengan atribut href.</p>`, "Buat Link", "Arahkan link 'Bing' ke 'https://bing.com'", "<body>\n\n</body>", "code => clean(code).includes('href=\"https://bing.com\"') || clean(code).includes('href=\\'https://bing.com\\'')", ["<a href='https://bing.com'>Bing</a>"]));
hLessons.push(cl("html-7", "Menambahkan Gambar", "Sisipkan foto di webmu", 35, `<h2>Tag Img</h2><p>Gunakan tag &lt;img&gt; tanpa tag penutup.</p>`, "Pasang Gambar", "Tambahkan gambar dengan src 'logo.png' dan alt 'Logo'", "<body>\n\n</body>", "code => clean(code).includes('src=\"logo.png\"') || clean(code).includes('src=\\'logo.png\\'')", ["Gunakan <img src='logo.png' alt='Logo'>"]));
hLessons.push(cl("html-8", "List Berpoin (Unordered)", "Daftar belanja atau list item", 30, `<h2>Unordered List</h2><p>Berupa bullet. Menggunakan &lt;ul&gt; lalu item dalamnya &lt;li&gt;</p>`, "Daftar ul", "Buat ul dengan satu li berisi 'Buku'", "<body>\n\n</body>", "code => clean(code).includes('<ul>') && clean(code).includes('<li>buku</li>')", ["Gunakan <ul> <li>Buku</li> </ul>"]));
hLessons.push(cl("html-9", "List Bernomor (Ordered)", "Daftar bernomor berurut", 30, `<h2>Ordered List</h2><p>Berurutan 1, 2, 3.. Menggunakan &lt;ol&gt; dan &lt;li&gt;</p>`, "Daftar ol", "Buat ol dengan satu li berisi 'Juara'", "<body>\n\n</body>", "code => clean(code).includes('<ol>') && clean(code).includes('<li>juara</li>')", ["Gunakan <ol> <li>Juara</li> </ol>"]));
hLessons.push(cl("html-10", "Tabel Dasar", "Menyusun data ke tabel", 35, `<h2>Tabel (Table)</h2><p>&lt;table&gt; membungkus. &lt;tr&gt; baris. &lt;td&gt; data.</p>`, "Tabel Simple", "Buat table berisi 1 tr dan 1 td berbunyi 'Data'", "<body>\n\n</body>", "code => clean(code).includes('<table>') && clean(code).includes('<td>data</td>')", ["Buka <table>, lalu <tr>, lalu <td>Data</td>"]));
hLessons.push(cl("html-11", "Tabel Lanjutan", "Header tabel (th)", 35, `<h2>Table Header</h2><p>Gunakan &lt;th&gt; untuk menebalkan judul kolom.</p>`, "Header Tabel", "Buat tabel 1 baris, 1 buah th berisi 'No'", "<body>\n\n</body>", "code => clean(code).includes('<th>no</th>')", ["Tulis <th>No</th> dalam tr"]));
hLessons.push(cl("html-12", "Form Sederhana", "Menangkap input dari user", 40, `<h2>Tag Form</h2><p>&lt;form&gt; menampung input pengguna.</p>`, "Buat Form", "Buat tag <form> yang berisi 1 <input type=\"text\">", "<body>\n\n</body>", "code => clean(code).includes('<form>') && clean(code).includes('type=\"text\"')", ["Gunakan <form> dan <input type=\"text\">"]));
hLessons.push(cl("html-13", "Input Modern", "Password, Email, Number", 35, `<h2>Tipe Input Khusus</h2><p>HTML5 punya tipe email, password, number.</p>`, "Input Password", "Ganti tipe input menjadi password", "<body>\n  <input type=\"text\">\n</body>", "code => clean(code).includes('type=\"password\"')", ["Ubah jadi type=\"password\""]));
hLessons.push(cl("html-14", "Tombol (Button)", "Tombol untuk di-klik", 30, `<h2>Button</h2><p>Gunakan tag &lt;button&gt;.</p>`, "Menambah Button", "Beri tombol bertuliskan 'Kirim'", "<body>\n\n</body>", "code => clean(code).includes('<button>kirim</button>')", ["Gunakan <button>Kirim</button>"]));
hLessons.push(cl("html-15", "Komentar HTML", "Meninggalkan catatan", 25, `<h2>Komentar</h2><p>Tidak terlihat di browser.</p>`, "Abaikan Baris Ini", "Buat komentar HTML berisi 'Test'", "<body>\n\n</body>", "code => clean(code).includes('<!--test-->')", ["Gunakan <!-- Test -->"]));

hLessons.push(cl("html-16", "Div & Span", "Grouping elemen gampang", 25, `<h2>DIV vs SPAN</h2><p>&lt;div&gt; sebagai kotak (block) dan &lt;span&gt; sebagai teks dalam baris (inline).</p>`, "Kotakan Aku", "Buat satu div yg isinya 'Kotak'", "<body>\n\n</body>", "code => clean(code).includes('<div>kotak</div>')", ["Gunakan <div>Kotak</div>"]));
hLessons.push(cl("html-17", "Semantic Dasar", "Main, Header, Footer", 30, `<h2>HTML5 Semantic</h2><p>Gunakan tag &lt;header&gt;, &lt;main&gt;, &lt;footer&gt; untuk aksesibilitas dan SEO.</p>`, "Header Web", "Tulis tag <header> yang isinya 'Atas'", "<body>\n\n</body>", "code => clean(code).includes('<header>atas</header>')", ["Gunakan <header>Atas</header>"]));
hLessons.push(cl("html-18", "Video HTML5", "Menyematkan video mp4", 35, `<h2>Tag Video</h2><p>&lt;video src=\"a.mp4\" controls&gt;&lt;/video&gt;</p>`, "Muter Video", "Gunakan tag video dengan src 'v.mp4' beserta kata controls", "<body>\n\n</body>", "code => clean(code).includes('<video') && clean(code).includes('src=\"v.mp4\"') && clean(code).includes('controls')", ["<video src=\"v.mp4\" controls></video>"]));
hLessons.push(cl("html-19", "Audio HTML5", "Mendengarkan Lagu mp3", 35, `<h2>Tag Audio</h2><p>&lt;audio src=\"a.mp3\" controls&gt;&lt;/audio&gt;</p>`, "Muter Lagu", "Tambahkan audio dengan src 'song.mp3' dan controls", "<body>\n\n</body>", "code => clean(code).includes('<audio') && clean(code).includes('src=\"song.mp3\"') && clean(code).includes('controls')", ["<audio src=\"song.mp3\" controls></audio>"]));
hLessons.push(cl("html-20", "iFrame", "Sematan Web dalam Web", 40, `<h2>Iframe</h2><p>Memasukan website lain kedalam web anda misalnya Peta Google Maps lewat atribut src.</p>`, "Sisip Web", "Buat iframe dgn src 'x.com'", "<body>\n\n</body>", "code => clean(code).includes('<iframe') && clean(code).includes('src=\"x.com\"')", ["<iframe src=\"x.com\"></iframe>"]));
hLessons.push(cl("html-21", "Tag Details & Summary", "Accordion bawaan", 30, `<h2>Details</h2><p>&lt;details&gt;&lt;summary&gt;Judul&lt;/summary&gt;Isi&lt;/details&gt;</p>`, "Bikin Accordion", "Buat tag details dan summary", "<body>\n\n</body>", "code => clean(code).includes('<details>') && clean(code).includes('<summary>')", ["Pakai <details><summary></summary></details>"]));
hLessons.push(cl("html-22", "Input Date & Color", "Input canggih", 30, `<h2>Date Color</h2><p>type="date" dan type="color".</p>`, "Warna", "Minta input type color", "<body>\n\n</body>", "code => clean(code).includes('type=\"color\"')", ["<input type=\"color\">"]));
hLessons.push(cl("html-23", "Canvas Dasar", "Menggambar di web", 35, `<h2>Canvas</h2><p>&lt;canvas id=\"cv\"&gt;&lt;/canvas&gt;</p>`, "Buat Canvas", "Tambahkan canvas dgn id", "<body>\n\n</body>", "code => clean(code).includes('<canvas')", ["<canvas></canvas>"]));
hLessons.push(cl("html-24", "SVG Dasar", "Grafik Vektor", 35, `<h2>SVG</h2><p>Tag &lt;svg&gt; berskala tanpa pecah.</p>`, "Bikin SVG", "Tulis tag svg", "<body>\n\n</body>", "code => clean(code).includes('<svg>')", ["<svg></svg>"]));
hLessons.push(cl("html-25", "Atribut Media", "Autoplay Loop", 35, `<h2>Atribut Lanjut</h2><p>autoplay, loop, muted.</p>`, "Video Muted", "Buat video ber-atribut muted", "<body>\n\n</body>", "code => clean(code).includes('muted')", ["Gunakan kata muted"]));
hLessons.push(cl("html-26", "HTML Geolocation", "Situs Lacak", 40, `<h2>Geolokasi API</h2><p>Mendapatkan lokasi via JS navigator.geolocation.</p>`, "Bikin Tombol Lokasi", "Buat button id='lokasi'", "<body>\n\n</body>", "code => clean(code).includes('id=\"lokasi\"')", ["<button id=\"lokasi\">"]));
hLessons.push(cl("html-27", "Drag & Drop", "Atribut Draggable", 35, `<h2>Bisa diseret</h2><p>Tambahkan draggable="true".</p>`, "Teks Seret", "Bikin p draggable=true", "<body>\n\n</body>", "code => clean(code).includes('draggable=\"true\"')", ["<p draggable=\"true\">"]));
hLessons.push(cl("html-28", "Web Storage", "Simpan info user", 40, `<h2>Storage API</h2><p>Local & Session storage. Seringkali digabung dgn input hidden HTML.</p>`, "Tag Tersembunyi", "Bikin input type hidden", "<body>\n\n</body>", "code => clean(code).includes('type=\"hidden\"')", ["<input type=\"hidden\">"]));
hLessons.push(cl("html-29", "Web Workers", "Skrip Latar Belakang", 45, `<h2>JS Paralel</h2><p>Web worker membebaskan UI dari nge-lag.</p>`, "Info Latar", "Buat paragraph dgn text Loading", "<body>\n\n</body>", "code => clean(code).includes('loading')", ["Tulis loading"]));
hLessons.push(cl("html-30", "SEO & Meta", "Atur title meta", 45, `<h2>Meta Tag</h2><p>Penting utk Google search.</p>`, "Deskripsi Web", "Buat tag <meta name=\"description\">", "<head>\n\n</head>", "code => clean(code).includes('name=\"description\"')", ["<meta name=\"description\">"]));

courses.html.lessons = hLessons;
let cLessons = [];
cLessons.push(cl("css-1", "Apa itu CSS?", "Pengenalan CSS", 25, `<h2>Mengenal CSS</h2><p>CSS memberi warna dan gaya.</p>`, "Warna Biru", "Beri warna text p menjadi 'blue'", "p {\n  \n}", "code => clean(code).includes('color:blue')", ["color: blue;"]));
cLessons.push(cl("css-2", "Background & Warna", "Dasar styling", 30, `<h2>Background Color</h2><p>Menggunakan background-color.</p>`, "Ganti Background", "Ubah background div menjadi 'red'", "div {\n  \n}", "code => clean(code).includes('background-color:red') || clean(code).includes('background:red')", ["background-color: red;"]));
cLessons.push(cl("css-3", "Class & ID Selectors", "Selector target", 35, `<h2>Class vs ID</h2><p>. untuk Class, # untuk ID.</p>`, "Target Class", "Target class .btn dan beri color white", "/* target .btn */\n", "code => clean(code).includes('.btn{') && clean(code).includes('color:white')", [".btn { color: white; }"]));
cLessons.push(cl("css-4", "Font & Tipografi", "Menyetel ukuran", 30, `<h2>Tipografi</h2><p>font-family, font-size, font-weight.</p>`, "Bemperbesar Teks", "Buat ukuran teks p jadi 18px", "p {\n  \n}", "code => clean(code).includes('font-size:18px')", ["font-size: 18px;"]));
cLessons.push(cl("css-5", "Box Width & Height", "Mengatur dimensi", 30, `<h2>Dimensi</h2><p>width dan height pada elemen kotak.</p>`, "Set Ukuran", "Atur width 200px dan height 100px di .kotak", ".kotak {\n  \n}", "code => clean(code).includes('width:200px') && clean(code).includes('height:100px')", ["width: 200px;", "height: 100px;"]));
cLessons.push(cl("css-6", "Box Padding", "Ruang dalam", 30, `<h2>Padding</h2><p>Ruang di dalam kotak.</p>`, "Beri Padding", "Tambahkan padding 15px pada div", "div {\n  \n}", "code => clean(code).includes('padding:15px')", ["padding: 15px;"]));
cLessons.push(cl("css-7", "Box Margin", "Jarak luar", 30, `<h2>Margin</h2><p>Jarak luar kotak.</p>`, "Spasi Bawah", "Berikan margin-bottom 30px di h2", "h2 {\n  \n}", "code => clean(code).includes('margin-bottom:30px')", ["margin-bottom: 30px;"]));
cLessons.push(cl("css-8", "Box Border", "Garis tepi", 35, `<h2>Garis Tepi</h2><p>border dan border-radius.</p>`, "Border Melengkung", "Berikan border-radius 10px pada img", "img {\n  \n}", "code => clean(code).includes('border-radius:10px')", ["border-radius: 10px;"]));
cLessons.push(cl("css-9", "Text Styling", "Merata teks", 25, `<h2>Teks Lanjutan</h2><p>text-align (center, left), text-decoration.</p>`, "Tengah", "Buat h3 rata tengah dengan text-align", "h3 {\n  \n}", "code => clean(code).includes('text-align:center')", ["text-align: center;"]));
cLessons.push(cl("css-10", "Display Elements", "Block, Inline, None", 35, `<h2>Display</h2><p>display: none menyembunyikan elemen.</p>`, "Sembunyikan", "Gunakan display: none; untuk menghapus div", "div {\n  \n}", "code => clean(code).includes('display:none')", ["display: none;"]));
cLessons.push(cl("css-11", "Flexbox Dasar", "Tata letak flex", 40, `<h2>Flex</h2><p>display: flex merapatkan elemen.</p>`, "Aktifkan Flex", "Tambahkan display: flex; pada .container", ".container {\n  \n}", "code => clean(code).includes('display:flex')", ["display: flex;"]));
cLessons.push(cl("css-12", "Flexbox Align", "Merapikan flex", 40, `<h2>Flex Center</h2><p>justify-content dan align-items.</p>`, "Justify Center", "Tambahkan justify-content: space-between; di .nav", ".nav {\n  \n}", "code => clean(code).includes('justify-content:space-between')", ["justify-content: space-between;"]));
cLessons.push(cl("css-13", "Pseudo-Classes", "Efek sentuh", 35, `<h2>Hover Effect</h2><p>:hover digunakan saat dsentuh mouse.</p>`, "Tombol Hover", "Buat .tombol:hover mengubah background 'blue'", "/* Tulis class pseudo */\n", "code => clean(code).includes('.tombol:hover') && clean(code).includes('background:blue') || clean(code).includes('background-color:blue')", [".tombol:hover { background: blue; }"]));
cLessons.push(cl("css-14", "Transisi", "Halus", 35, `<h2>Transition</h2><p>Menentukan laju perpindahan, cth: transition: 0.3s</p>`, "Transisi All", "Tambahkan properti transition: 0.5s; ke dalam p", "p {\n  color: black;\n  \n}\np:hover { color: orange; }", "code => clean(code).includes('transition:0.5s')", ["transition: 0.5s;"]));
cLessons.push(cl("css-15", "Bayangan", "Shadows", 30, `<h2>Shadow</h2><p>box-shadow dan text-shadow.</p>`, "Beri Bayangan", "Berikan text-shadow: 1px 1px 2px black; pada h2", "h2 {\n  \n}", "code => clean(code).includes('text-shadow:1px1px2pxblack')", ["text-shadow: 1px 1px 2px black;"]));

cLessons.push(cl("css-16", "Position Relative", "Posisi Mandiri", 35, `<h2>Position</h2><p>position: relative membuat elemen memindah titik kordinatnya.</p>`, "Pindah Kiri", "Ubah position jadi relative dan left 10px;", "div {\n  \n}", "code => clean(code).includes('position:relative') && clean(code).includes('left:10px')", ["position: relative; left: 10px;"]));
cLessons.push(cl("css-17", "Position Absolute", "Posisi Angkasa", 35, `<h2>Absolute</h2><p>Bisa ditaruh mengambang keluar angkasa lepas dari web flow normal.</p>`, "Melayang", "Beri position: absolute dan top 0;", "h1 {\n  \n}", "code => clean(code).includes('position:absolute') && clean(code).includes('top:0')", ["position: absolute; top:0;"]));
cLessons.push(cl("css-18", "Z-Index Layering", "Tumpuk-tumpukan", 35, `<h2>Layer</h2><p>z-index menentukan tingkatan layer kedepan/belakang.</p>`, "Ke Depan", "Tambahkan z-index: 99; di header", "header {\n  \n}", "code => clean(code).includes('z-index:99')", ["z-index: 99;"]));
cLessons.push(cl("css-19", "Transform CSS", "Memutar Elemen", 35, `<h2>Transform</h2><p>Membesar/memutar elemen dengan transform: scale() atau rotate().</p>`, "Memutar", "Berikan transform: rotate(45deg);", "img {\n  \n}", "code => clean(code).includes('transform:rotate(45deg)')", ["transform: rotate(45deg);"]));
cLessons.push(cl("css-20", "CSS Variables", "Variabel Warna", 40, `<h2>Var() Dasar</h2><p>Mendefinisikan warna pada --variabel untuk di reuse, root { --warna: red; }</p>`, "Pake Warna", "Gunakan color: var(--main);", "p {\n  \n}", "code => clean(code).includes('color:var(--main)')", ["color: var(--main);"]));
cLessons.push(cl("css-21", "Grid Dasar", "Layout modern", 35, `<h2>Display Grid</h2><p>display: grid; gabungan baris & kolom.</p>`, "Set Grid", "Bikin .wadah jd grid", ".wadah {\n  \n}", "code => clean(code).includes('display:grid')", ["display: grid;"]));
cLessons.push(cl("css-22", "Grid Kolom", "Membagi layar", 40, `<h2>Grid Columns</h2><p>grid-template-columns: auto auto auto;</p>`, "Dua Kolom", "Set template-columns ke 50% 50%;", ".wadah {\n  \n}", "code => clean(code).includes('grid-template-columns:') && clean(code).includes('50%')", ["grid-template-columns: 50% 50%;"]));
cLessons.push(cl("css-23", "Grid Gap", "Jarak Grid", 35, `<h2>Gap</h2><p>gap: 10px; memberi jarak blok flex/grid.</p>`, "Jarak 15px", "Berikan gap 15px", ".wadah {\n  \n}", "code => clean(code).includes('gap:15px')", ["gap: 15px;"]));
cLessons.push(cl("css-24", "Animation Dasar", "Gerak Sendiri", 40, `<h2>Animasi</h2><p>@keyframes untuk pergerakan mandiri.</p>`, "Keyframes", "Buat @keyframes slide { 100% { left: 10px; } }", "/* bikin disini */", "code => clean(code).includes('@keyframes')", ["@keyframes ..."]));
cLessons.push(cl("css-25", "Animation Play", "Memutar slide", 40, `<h2>Animation</h2><p>animation: slide 2s infinite;</p>`, "Putar Anim", "Beri properti animation pada div: go 2s", "div {\n  \n}", "code => clean(code).includes('animation:')", ["animation: go 2s;"]));
cLessons.push(cl("css-26", "Media Queries", "Responsif Web HP", 50, `<h2>@media</h2><p>Ubah tampilan saat layar mengecil.</p>`, "Max Width", "Buat @media(max-width: 600px)", "/* tulis di sini */\n", "code => clean(code).includes('@media') && clean(code).includes('max-width')", ["@media (max-width: 600px) { }"]));
cLessons.push(cl("css-27", "Filter CSS", "Efek Foto", 40, `<h2>Visual Filter</h2><p>filter: blur(5px) atau grayscale(100%)</p>`, "Bikin Blur", "Beri filter: blur(2px); pada img", "img {\n  \n}", "code => clean(code).includes('filter:blur(2px)')", ["filter: blur(2px);"]));
cLessons.push(cl("css-28", "Object Fit", "Potong Gambar", 35, `<h2>Fit Gambar</h2><p>object-fit: cover; mencegah gepeng.</p>`, "Agar Cover", "Pasang object-fit: cover", "img {\n  \n}", "code => clean(code).includes('object-fit:cover')", ["object-fit: cover;"]));
cLessons.push(cl("css-29", "Multi Column", "Koran Digital", 35, `<h2>column-count</h2><p>Membagi isi p menjadi dua baris.</p>`, "2 Kolom Paragraf", "Beri p column-count: 2", "p {\n  \n}", "code => clean(code).includes('column-count:2')", ["column-count: 2;"]));
cLessons.push(cl("css-30", "Scroll Behavior", "Scroll Mulus", 40, `<h2>Smooth</h2><p>scroll-behavior: smooth;</p>`, "Ke Halus", "Tambah di html scroll-behavior", "html {\n  \n}", "code => clean(code).includes('scroll-behavior:smooth')", ["scroll-behavior: smooth;"]));

courses.css.lessons = cLessons;
let jLessons = [];
jLessons.push(cl("js-1", "Console.log", "Melihat output", 25, `<h2>Console</h2><p>Output ke layar debugger.</p>`, "Ucapkan Hai", "Gunakan console.log untuk memunculkan teks 'Hello'", "// ketik di sini\n", "code => clean(code).includes('console.log(\\'hello\\')') || clean(code).includes('console.log(\"hello\")')", ["console.log('Hello');"]));
jLessons.push(cl("js-2", "Variabel", "Mengingat dengan let", 30, `<h2>Memori</h2><p>let dan const.</p>`, "Variabel", "Buat let x = 5", "// ketik di sini\n", "code => clean(code).includes('letx=5')", ["let x = 5;"]));
jLessons.push(cl("js-3", "Tipe Data", "String vs Number", 35, `<h2>Tipe JS</h2><p>String, Number, dan Boolean.</p>`, "Keluarkan Angka", "Deklarasikan let hitung = 50;", "// \n", "code => clean(code).includes('lethitung=50')", ["let hitung = 50;"]));
jLessons.push(cl("js-4", "Operator + - * /", "Matematika", 30, `<h2>Matematika JS</h2><p>Tambah, Bagi, Kali.</p>`, "Terkali", "let hasil = 10 * 5;", "// \n", "code => clean(code).includes('lethasil=10*5') || (clean(code).includes('lethasil=50'))", ["let hasil = 10 * 5;"]));
jLessons.push(cl("js-5", "Perbandingan", "==", 35, `<h2>Mencocokkan</h2><p>Cek Kesamaan dengan ===.</p>`, "Benar/Salah", "console.log(10 < 20);", "// \n", "code => clean(code).includes('console.log(10<20)')", ["console.log(10 < 20);"]));
jLessons.push(cl("js-6", "If...Else", "Kondisional", 35, `<h2>IF Bercabang</h2><p>Eksekusi berdasar logika.</p>`, "If Biasa", "if(poin > 70) console.log('Lulus')", "let poin = 80;\n// \n", "code => clean(code).includes('if(poin>70)') && clean(code).includes('lulus')", ["if (poin > 70) { console.log('Lulus'); }"]));
jLessons.push(cl("js-7", "Else If", "Banyak pilihan", 35, `<h2>Else If</h2><p>Menangani jika pilihan pertama jatuh.</p>`, "Rangkai", "if(j === 1) cetak 'A', else if(j === 2) cetak 'B'", "let j = 2;\n", "code => clean(code).includes('if(j===1)') && clean(code).includes('elseif(j===2)')", ["else if (j === 2) { console.log('B'); }"]));
jLessons.push(cl("js-8", "Array", "List item", 40, `<h2>Array</h2><p>Menampung banyak list dalam [].</p>`, "List", "let daftar = [10, 20]; console.log(daftar[0]);", "// \n", "code => clean(code).includes('letdaftar=[10,20]') && clean(code).includes('console.log(daftar[0])')", ["let daftar = [10, 20]; console.log(daftar[0]);"]));
jLessons.push(cl("js-9", "Array Push Pop", "Ubah array", 40, `<h2>Manipulasi</h2><p>push untuk tambah ke ujung.</p>`, "Push", "l.push(3);", "let l = [1];\n// \n", "code => clean(code).includes('l.push(3)')", ["l.push(3);"]));
jLessons.push(cl("js-10", "For Loops", "Mengulangi", 40, `<h2>For</h2><p>Mengulang sesuai hitungan.</p>`, "Loop 5", "for (let i = 0; i < 5; i++) console.log(i);", "// \n", "code => clean(code).includes('for(leti=0;i<5;i++)') && clean(code).includes('console.log(i)')", ["for (let i = 0; i < 5; i++) { console.log(i); }"]));
jLessons.push(cl("js-11", "While Loops", "Mengulang kondisi true", 35, `<h2>While</h2><p>Bekerja selagi true.</p>`, "While", "let i=0; while(i < 2){ console.log(i); i++; }", "let i = 0;\n", "code => clean(code).includes('while(i<2)') && clean(code).includes('i++')", ["while (i < 2) { console.log(i); i++; }"]));
jLessons.push(cl("js-12", "Fungsi (Basic)", "Blok Kode", 45, `<h2>Function</h2><p>Blok untuk reusability.</p>`, "Panggil", "function lari() { console.log('lari'); } lari();", "//\n", "code => clean(code).includes('functionlari()') && clean(code).match(/lari\\(\\)/g)?.length >= 1", ["function lari() { console.log('lari'); } lari();"]));
jLessons.push(cl("js-13", "Fungsi Return", "Hasil", 45, `<h2>Return</h2><p>Mendapat balasan fungsi.</p>`, "Return", "Buat fungsi kali(a, b) yg me-return a * b;", "//\n", "code => clean(code).includes('functionkali(a,b)') && clean(code).includes('returna*b')", ["function kali(a,b) { return a*b; }"]));
jLessons.push(cl("js-14", "Awal DOM", "Akses HTML", 50, `<h2>DOM Get</h2><p>document.getElementById</p>`, "DOM", "Tangkap dg id 'x' let el = document.getElementById('x');", "// \n", "code => clean(code).includes('document.getelementbyid(\\'x\\')') || clean(code).includes('document.getelementbyid(\"x\")')", ["document.getElementById('x');"]));
jLessons.push(cl("js-15", "DOM Events", "Klik", 55, `<h2>Events</h2><p>addEventListener('click')</p>`, "Klik Menu", "el.addEventListener('click', () => console.log('ya'));", "//\n", "code => clean(code).includes('addeventlistener(\\'click\\',')", ["e.addEventListener('click', () => {});"]));

jLessons.push(cl("js-16", "Javascript Objects", "Data Kompleks Mapan", 45, `<h2>Objek Dasar</h2><p>Dideklarasi dengan {} ada key dan value.</p>`, "Buat Objek", "Buat let user = { nama: 'Budi' };", "//\n", "code => clean(code).includes('letuser={nama:\\'budi\\'}') || clean(code).includes('letuser={nama:\"budi\"}')", ["let user = { nama: 'Budi' };"]));
jLessons.push(cl("js-17", "Akses Properti Objek", "Titik dot", 40, `<h2>Titik Dot</h2><p>user.nama</p>`, "Panggil Objek", "Gunakan console.log() u memanggil isi dari user.hobi;", "let user = { hobi: 'Coding' };\n", "code => clean(code).includes('console.log(user.hobi)')", ["console.log(user.hobi);"]));
jLessons.push(cl("js-18", "Template Literals", "Backticks Mantap", 35, `<h2>Kutip Miring Terbalik</h2><p>Gunakan backtick dan \${} untuk mudah mencampur String dan Variable</p>`, "Pake Backticks", "let say = \`Hai \${nama}\`;", "let nama = 'Eka';\n", "code => clean(code).includes('hai${nama}')", ["\`Hai \${nama}\`"]));
jLessons.push(cl("js-19", "Error Handling", "Try & Catch", 40, `<h2>Try Catch</h2><p>Gunakan block try{} untuk tes bahaya dan tangkap error di catch(err){}</p>`, "Coba Tangkap", "Gunakan try { fake() } catch(e) { console.log(e) }", "//\n", "code => clean(code).includes('try{') && clean(code).includes('catch(') && clean(code).includes('console.log')", ["try { } catch (e) { }"]));
jLessons.push(cl("js-20", "SetTimeout", "Timer Detik Tertunda", 40, `<h2>Timeout</h2><p>Menjalankan kode setelah sekian ms.</p>`, "Tunda Sekejap", "setTimeout(()=> console.log('wut'), 1000);", "//\n", "code => clean(code).includes('settimeout(') && clean(code).includes('1000')", ["setTimeout(() => { }, 1000);"]));
jLessons.push(cl("js-21", "Arrow Function", "Lebih Pendek", 35, `<h2>() => {}</h2><p>Pengganti kata function.</p>`, "Lambda", "const say = () => 'hai';", "// \n", "code => clean(code).includes('()=>{') || clean(code).includes('()=>\\'hai\\';')", ["() => 'hai';"]));
jLessons.push(cl("js-22", "Class & Object", "OOP JS", 45, `<h2>class X {}</h2><p>Kerangka Objek.</p>`, "Bikin Class", "class Hewan {}", "// \n", "code => clean(code).includes('classhewan{}') || clean(code).includes('classhewan{')", ["class Hewan {}"]));
jLessons.push(cl("js-23", "Callback", "Fungsi sbg parameter", 45, `<h2>Callback</h2><p>Mengirim fungsi.</p>`, "Kirim", "sayHi( ()=>{} );", "// \n", "code => clean(code).includes('sayhi(()=>')", ["sayHi(()=>{});"]));
jLessons.push(cl("js-24", "Promises Dasar", "Janji Dieksekusi", 50, `<h2>new Promise</h2><p>Menangani asinkron.</p>`, "Bikin Promis", "let p = new Promise(res=>res(1));", "// \n", "code => clean(code).includes('newpromise')", ["new Promise(res => ...)"]));
jLessons.push(cl("js-25", "Async Await", "Clean Asinkron", 50, `<h2>async / await</h2><p>Menunggu janji terpenuhi tanpa .then().</p>`, "Tunggu Await", "async function f(){ await p; }", "// \n", "code => clean(code).includes('asyncfunction') && clean(code).includes('await')", ["async function.. await.."]));
jLessons.push(cl("js-26", "JSON", "String Objek", 40, `<h2>JSON.stringify</h2><p>Objek ke String</p>`, "Ke JSON", "JSON.stringify({a:1});", "// \n", "code => clean(code).includes('json.stringify')", ["JSON.stringify()"]));
jLessons.push(cl("js-27", "Fetch API", "Panggil API Web", 55, `<h2>Fetch</h2><p>fetch('url')</p>`, "Panggil URL", "fetch('x.com');", "// \n", "code => clean(code).includes('fetch(\\'x.com\\')') || clean(code).includes('fetch(\"x.com\")')", ["fetch('x.com')"]));
jLessons.push(cl("js-28", "Map Array", "Loop dan Kembalikan", 45, `<h2>Array.map()</h2><p>Modifikasi array.</p>`, "Kali 2", "a.map(x => x*2)", "let a = [1];\n", "code => clean(code).includes('.map(')", [".map(x => x*2)"]));
jLessons.push(cl("js-29", "Destructuring", "Pecah Objek", 40, `<h2>{ nama } = user</h2><p>Ambil spesifik.</p>`, "Ambil id", "let {id} = obj;", "let obj = {id: 1};\n", "code => clean(code).includes('{id}=obj')", ["let {id} = obj;"]));
jLessons.push(cl("js-30", "Spread Operator", "Keluarkan Isi", 45, `<h2>...</h2><p>...array menyalin isinya.</p>`, "Salin Array", "let b = [...a];", "let a = [1];\n", "code => clean(code).includes('[...a]')", ["let b = [...a]"]));

courses.javascript.lessons = jLessons;
let pLessons = [];
pLessons.push(cl("py-1", "Pengenalan Print", "Menampilkan Teks", 25, `<h2>Python Print</h2><p>Semudah menulis print(\"Teks\")</p>`, "Tulis Halo", "Gunakan print untuk 'Hello World'", "# Ketik kode Python disini\n", "code => clean(code).includes('print(\\'helloworld\\')') || clean(code).includes('print(\"helloworld\")')", ["print('Hello World')"]));
pLessons.push(cl("py-2", "Variabel Dasar", "Bebas Deklarasi", 30, `<h2>Tanpa Let</h2><p>Langsung tempel: nama = 'Budi'</p>`, "Variab", "Buat x = 10", "# \n", "code => clean(code).includes('x=10')", ["x = 10"]));
pLessons.push(cl("py-3", "Matematika", "Kurung kurawal tak perlu", 30, `<h2>Tambahan</h2><p>a = 5 + 5</p>`, "Berhitung", "a = 2 * 5", "#\n", "code => clean(code).includes('a=2*5')", ["a = 2 * 5"]));
pLessons.push(cl("py-4", "List (Array)", "Data bersusun", 35, `<h2>Mirip Array</h2><p>Hanya dinamakan List. a = [1, 2]</p>`, "Buat List", "lst = [1, 2, 3]", "# \n", "code => clean(code).includes('lst=[1,2,3]')", ["lst = [1, 2, 3]"]));
pLessons.push(cl("py-5", "Manipulasi List", "Append & Pop", 35, `<h2>Append</h2><p>Menambah list di Python: lst.append(4)</p>`, "Append Data", "l = [1]; l.append(2)", "l = [1]\n", "code => clean(code).includes('l.append(2)')", ["l.append(2)"]));
pLessons.push(cl("py-6", "Slicing List", "Iris Roti", 40, `<h2>Slice :</h2><p>l[0:2] = ambil item 0 hingga 2.</p>`, "Iris", "x = l[0:2]", "l = [1,2,3,4]\n", "code => clean(code).includes('x=l[0:2]') || clean(code).includes('x=l[:2]')", ["x = l[0:2]"]));
pLessons.push(cl("py-7", "Tuple Python", "List Anti Rubah", 30, `<h2>Imutable</h2><p>Gunakan () untuk data list abadi yg dilarang diubah isinya tup=(1, 2).</p>`, "Buat Tuple", "t = (1, 2)", "# \n", "code => clean(code).includes('t=(1,2)')", ["t = (1, 2)"]));
pLessons.push(cl("py-8", "If Else Dasar", "Tidak ber-Kurung", 35, `<h2>Indentasi</h2><p>Python menggunakan tab (indentasi) untuk membatasi block code dan titik dua (:).</p>`, "If Ku", "if x > 5: print('Hai')", "x = 10\n", "code => clean(code).includes('ifx>5:') && clean(code).includes('print(\\')')", ["if x > 5:\n  print('Hai')"]));
pLessons.push(cl("py-9", "Elif (Else If)", "Bercabang Pythonic", 35, `<h2>Bukan Else if</h2><p>Menggunakan sintaks elif.</p>`, "Elif", "elif x == 5:", "#\n", "code => clean(code).includes('elifx==5:')", ["elif x == 5:"]));
pLessons.push(cl("py-10", "Operator Logika", "Mudah dibaca", 35, `<h2>And, Or, Not</h2><p>Gunakan kata inggris: if x and y:</p>`, "Dua Syarat", "if a > 0 and b > 0:", "a=1\nb=1\n", "code => clean(code).includes('ifa>0andb>0:')", ["if a > 0 and b > 0:"]));
pLessons.push(cl("py-11", "For Loops", "Mengulangi tiap elemen", 40, `<h2>For in</h2><p>for i in range(5): ...</p>`, "Loop 5", "for i in range(5): print(i)", "#\n", "code => clean(code).includes('foriinrange(5):') && clean(code).includes('print(i)')", ["for i in range(5):\n  print(i)"]));
pLessons.push(cl("py-12", "While Loops", "Mengulang semaunya", 35, `<h2>Selama True</h2><p>while x < 5: x += 1</p>`, "While", "while x < 2: print(x)", "x=0\n", "code => clean(code).includes('whilex<2:')", ["while x < 2:\n  print(x)"]));
pLessons.push(cl("py-13", "Fungsi Def", "Bungkus Blok Kode", 45, `<h2>def myFunc():</h2><p>Definisi fungsi dgn kata def.</p>`, "Def", "def sapa(): print('hai')", "# \n", "code => clean(code).includes('defsapa():') && clean(code).includes('print')", ["def sapa():\n  print('hai')"]));
pLessons.push(cl("py-14", "Fungsi Arg & Ret", "Kereta Berbalik", 45, `<h2>Return Func</h2><p>Sama saja dengan return x.</p>`, "Return Ganda", "def kali(a,b): return a*b", "# \n", "code => clean(code).includes('defkali(a,b):') && clean(code).includes('returna*b')", ["def kali(a, b):\n  return a * b"]));
pLessons.push(cl("py-15", "Dictionary", "Mirip JSON Object", 40, `<h2>Key Value Pair</h2><p>d = {'n': 'B'}. Dicto Python itu asik.</p>`, "Dict", "d = {'id': 1}", "# \n", "code => clean(code).includes('d={\\'id\\':1}') || clean(code).includes('d={\"id\":1}')", ["d = {'id': 1}"]));
pLessons.push(cl("py-16", "Dict Access", "Mengakses Nilai", 35, `<h2>Akses Kurung Siku</h2><p>d['id']</p>`, "Memanggil", "print(d['id'])", "d = {'id': 1}\n", "code => clean(code).includes('print(d[\\'id\\'])') || clean(code).includes('print(d[\"id\"])')", ["print(d['id'])"]));
pLessons.push(cl("py-17", "String Manip", "Upper Lower", 40, `<h2>Bungkus String</h2><p>s.upper()</p>`, "Cetak Huruf Besar", "print('hai'.upper())", "# \n", "code => clean(code).includes('print(\\'hai\\'.upper())')", ["print('hai'.upper())"]));
pLessons.push(cl("py-18", "Format String", "F-strings Super Cepat", 40, `<h2>Sisipkan dgn f</h2><p>f"Saya {name}" sangat modern semenjak Py3.6.</p>`, "Gunakan F", "msg = f\"Aku {x}\"", "x=1\n", "code => clean(code).includes('msg=f\"aku{x}\"') || clean(code).includes('msg=f\\'aku{x}\\')')", ["msg = f\"Aku {x}\""]));
pLessons.push(cl("py-19", "Input User", "Bertanya", 35, `<h2>Baca keyboard</h2><p>ans = input('apa namamu?')</p>`, "Input", "nama = input('Siapa?')", "# \n", "code => clean(code).includes('nama=input(')", ["nama = input('Siapa?')"]));
pLessons.push(cl("py-20", "Import Modul", "Alat Bantu Ekstra", 40, `<h2>Library</h2><p>import math; print(math.pi)</p>`, "Import Math", "import math", "# \n", "code => clean(code).includes('importmath')", ["import math"]));
pLessons.push(cl("py-21", "Try Except", "Menjinakkan Error", 45, `<h2>Try Except</h2><p>Alih-alih mati, tangkap errornya.</p>`, "Coba", "try: x() except: pass", "# \n", "code => clean(code).includes('try:') && clean(code).includes('except:')", ["try:\nexcept:"]));
pLessons.push(cl("py-22", "File Read", "Buka File", 50, `<h2>open()</h2><p>f = open('a.txt', 'r')</p>`, "Buka Read", "open('x.txt', 'r')", "# \n", "code => clean(code).includes('open(\\'x.txt\\',\\'r\\')')", ["open('x.txt', 'r')"]));
pLessons.push(cl("py-23", "File Write", "Tulis File", 50, `<h2>Write mode</h2><p>f = open('a.txt', 'w')</p>`, "Buka W", "open('x.txt', 'w')", "# \n", "code => clean(code).includes('open(\\'x.txt\\',\\'w\\')')", ["open('x.txt', 'w')"]));
pLessons.push(cl("py-24", "Lambda", "Fungsi Sebaris", 40, `<h2>lambda x: x</h2><p>Singkat.</p>`, "Bikin lmb", "l = lambda x: x", "# \n", "code => clean(code).includes('lambda')", ["lambda x: x"]));
pLessons.push(cl("py-25", "Class & OOP", "Objek Python", 45, `<h2>class X:</h2><p>Kerangka dasar.</p>`, "Kelas", "class Mobil: pass", "# \n", "code => clean(code).includes('classmobil:')", ["class Mobil: pass"]));
pLessons.push(cl("py-26", "Init Class", "Konstruktor", 50, `<h2>__init__</h2><p>Berjalan saat objek dibuat.</p>`, "Ketik Init", "def __init__(self):", "# \n", "code => clean(code).includes('def__init__(self):')", ["def __init__(self):"]));
pLessons.push(cl("py-27", "Inheritance", "Pewarisan", 45, `<h2>class B(A):</h2><p>Keturunan.</p>`, "Turun", "class B(A): pass", "# \n", "code => clean(code).includes('classb(a):')", ["class B(A):"]));
pLessons.push(cl("py-28", "Pip Modules", "Pihak Ketiga", 40, `<h2>pip install</h2><p>Ambil dari PyPI.</p>`, "Import", "import requests", "# \n", "code => clean(code).includes('importrequests')", ["import requests"]));
pLessons.push(cl("py-29", "List Comprehension", "Filter Keren", 45, `<h2>[x for x in l]</h2><p>Filter dan map ringkas.</p>`, "Bikin LC", "ans = [x for x in l]", "l = [1,2]\n", "code => clean(code).includes('[xforxinl]')", ["[x for x in l]"]));
pLessons.push(cl("py-30", "Modul JSON", "Data Pertukaran", 45, `<h2>import json</h2><p>json.dumps() json.loads()</p>`, "Tulis json", "import json", "# \n", "code => clean(code).includes('importjson')", ["import json"]));

courses.python.lessons = pLessons;
let outStr = "const COURSES = " + JSON.stringify(courses, null, 4) + ";";

outStr = outStr.replace(/"___FUNCSUB___(.*?)___FUNCSUB___"/g, (match, p1) => {
    return p1.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\").replace(/\\n/g, "\\n").replace(/\\t/g, "\\t");
});

outStr = outStr.replace(/clean\(code\)/g, "code.replace(/\\s+/g, '').toLowerCase()");

fs.writeFileSync('courses_data.js', outStr, 'utf8');
console.log("Generated courses_data.js with python!");
