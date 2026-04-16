const COURSES = {
    "html": {
        "title": "HTML",
        "icon": "🧱",
        "color": "#e44d26",
        "lessons": [
            {
                "id": "html-1",
                "title": "Pengenalan HTML",
                "desc": "Apa itu HTML?",
                "xp": 25,
                "content": "<h2>Apa itu HTML?</h2><p>HTML (HyperText Markup Language) adalah bahasa markup yang memberitahu browser cara menyusun konten.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">halo</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tulis kata Halo di antara <body></p>\n</div>",
                "challenge": {
                    "title": "Tulis Halo",
                    "desc": "Tulis kata Halo di antara <body>",
                    "initialCode": "<body>\n  \n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Ketik huruf halo"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('halo')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-2",
                "title": "Sintaks & Struktur Basic",
                "desc": "Memahami Tag HTML",
                "xp": 30,
                "content": "<h2>Sintaks Tag HTML</h2><p>Di HTML, kita menggunakan <strong>Tag</strong> yang diapit tanda <code>&lt; &gt;</code>.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;h1&gt;Judul Web&lt;/h1&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat tag <h1>Judul Web</h1> di body</p>\n</div>",
                "challenge": {
                    "title": "Tag h1",
                    "desc": "Buat tag <h1>Judul Web</h1> di body",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <h1>Judul Web</h1>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<h1>judulweb</h1>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-3",
                "title": "Atribut HTML",
                "desc": "Informasi tambahan di dalam tag.",
                "xp": 30,
                "content": "<h2>Atribut HTML</h2><p>Atribut memberi info ekstra dan diletakkan di tag pembuka. Contoh: <span class=\"highlight\">id</span> atau <span class=\"highlight\">lang</span>.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">Taruh id='info' di tab &lt;p&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri atribut id='info' pada p</p>\n</div>",
                "challenge": {
                    "title": "Atribut ID",
                    "desc": "Beri atribut id='info' pada p",
                    "initialCode": "<body>\n  <p>Hai</p>\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Taruh id='info' di tab <p>"
                    ],
                    "checkFn": code => code.includes('id="info"') || code.includes('id=\'info\'')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-4",
                "title": "Heading & Paragraf",
                "desc": "Judul besar hingga kecil",
                "xp": 25,
                "content": "<h2>Heading</h2><p>H1 sampai H6. H1 paling besar.</p><h2>Paragraf</h2><p>Diapit oleh tag &lt;p&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">Ketik &lt;p&gt;Belajar HTML&lt;/p&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat 1 <p> dengan isi 'Belajar HTML'</p>\n</div>",
                "challenge": {
                    "title": "Paragraf Pertamaku",
                    "desc": "Buat 1 <p> dengan isi 'Belajar HTML'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Ketik <p>Belajar HTML</p>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<p>belajarhtml</p>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-5",
                "title": "Pemformatan Teks",
                "desc": "Bold, Italic, Underline",
                "xp": 25,
                "content": "<h2>Memformat Teks</h2><p>&lt;b&gt; untuk tebal, &lt;i&gt; miring.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;b&gt;Penting&lt;/b&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan tag <b> atau <strong> untuk membuat teks 'Penting'</p>\n</div>",
                "challenge": {
                    "title": "Teks Tebal",
                    "desc": "Gunakan tag <b> atau <strong> untuk membuat teks 'Penting'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <b>Penting</b>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<b>penting</b>') || code.replace(/\s+/g, '').toLowerCase().includes('<strong>penting</strong>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-6",
                "title": "Link (Anchor)",
                "desc": "Berpindah antar halaman",
                "xp": 30,
                "content": "<h2>Link Browser</h2><p>Gunakan tag &lt;a&gt; dengan atribut href.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;a href='https://bing.com'&gt;Bing&lt;/a&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Arahkan link 'Bing' ke 'https://bing.com'</p>\n</div>",
                "challenge": {
                    "title": "Buat Link",
                    "desc": "Arahkan link 'Bing' ke 'https://bing.com'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<a href='https://bing.com'>Bing</a>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('href="https://bing.com"') || code.replace(/\s+/g, '').toLowerCase().includes('href=\'https://bing.com\'')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-7",
                "title": "Menambahkan Gambar",
                "desc": "Sisipkan foto di webmu",
                "xp": 35,
                "content": "<h2>Tag Img</h2><p>Gunakan tag &lt;img&gt; tanpa tag penutup.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;img src='logo.png' alt='Logo'&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan gambar dengan src 'logo.png' dan alt 'Logo'</p>\n</div>",
                "challenge": {
                    "title": "Pasang Gambar",
                    "desc": "Tambahkan gambar dengan src 'logo.png' dan alt 'Logo'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <img src='logo.png' alt='Logo'>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('src="logo.png"') || code.replace(/\s+/g, '').toLowerCase().includes('src=\'logo.png\'')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-8",
                "title": "List Berpoin (Unordered)",
                "desc": "Daftar belanja atau list item",
                "xp": 30,
                "content": "<h2>Unordered List</h2><p>Berupa bullet. Menggunakan &lt;ul&gt; lalu item dalamnya &lt;li&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;ul&gt; &lt;li&gt;Buku&lt;/li&gt; &lt;/ul&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat ul dengan satu li berisi 'Buku'</p>\n</div>",
                "challenge": {
                    "title": "Daftar ul",
                    "desc": "Buat ul dengan satu li berisi 'Buku'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <ul> <li>Buku</li> </ul>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<ul>') && code.replace(/\s+/g, '').toLowerCase().includes('<li>buku</li>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-9",
                "title": "List Bernomor (Ordered)",
                "desc": "Daftar bernomor berurut",
                "xp": 30,
                "content": "<h2>Ordered List</h2><p>Berurutan 1, 2, 3.. Menggunakan &lt;ol&gt; dan &lt;li&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;ol&gt; &lt;li&gt;Juara&lt;/li&gt; &lt;/ol&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat ol dengan satu li berisi 'Juara'</p>\n</div>",
                "challenge": {
                    "title": "Daftar ol",
                    "desc": "Buat ol dengan satu li berisi 'Juara'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <ol> <li>Juara</li> </ol>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<ol>') && code.replace(/\s+/g, '').toLowerCase().includes('<li>juara</li>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-10",
                "title": "Tabel Dasar",
                "desc": "Menyusun data ke tabel",
                "xp": 35,
                "content": "<h2>Tabel (Table)</h2><p>&lt;table&gt; membungkus. &lt;tr&gt; baris. &lt;td&gt; data.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;table&gt;, lalu &lt;tr&gt;, lalu &lt;td&gt;Data&lt;/td&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat table berisi 1 tr dan 1 td berbunyi 'Data'</p>\n</div>",
                "challenge": {
                    "title": "Tabel Simple",
                    "desc": "Buat table berisi 1 tr dan 1 td berbunyi 'Data'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Buka <table>, lalu <tr>, lalu <td>Data</td>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<table>') && code.replace(/\s+/g, '').toLowerCase().includes('<td>data</td>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-11",
                "title": "Tabel Lanjutan",
                "desc": "Header tabel (th)",
                "xp": 35,
                "content": "<h2>Table Header</h2><p>Gunakan &lt;th&gt; untuk menebalkan judul kolom.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;th&gt;No&lt;/th&gt; dalam tr</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat tabel 1 baris, 1 buah th berisi 'No'</p>\n</div>",
                "challenge": {
                    "title": "Header Tabel",
                    "desc": "Buat tabel 1 baris, 1 buah th berisi 'No'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Tulis <th>No</th> dalam tr"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<th>no</th>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-12",
                "title": "Form Sederhana",
                "desc": "Menangkap input dari user",
                "xp": 40,
                "content": "<h2>Tag Form</h2><p>&lt;form&gt; menampung input pengguna.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;form&gt; dan &lt;input type=\"text\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat tag <form> yang berisi 1 <input type=\"text\"></p>\n</div>",
                "challenge": {
                    "title": "Buat Form",
                    "desc": "Buat tag <form> yang berisi 1 <input type=\"text\">",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <form> dan <input type=\"text\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<form>') && code.replace(/\s+/g, '').toLowerCase().includes('type="text"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-13",
                "title": "Input Modern",
                "desc": "Password, Email, Number",
                "xp": 35,
                "content": "<h2>Tipe Input Khusus</h2><p>HTML5 punya tipe email, password, number.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">type=\"password\"</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Ganti tipe input menjadi password</p>\n</div>",
                "challenge": {
                    "title": "Input Password",
                    "desc": "Ganti tipe input menjadi password",
                    "initialCode": "<body>\n  <input type=\"text\">\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Ubah jadi type=\"password\""
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('type="password"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-14",
                "title": "Tombol (Button)",
                "desc": "Tombol untuk di-klik",
                "xp": 30,
                "content": "<h2>Button</h2><p>Gunakan tag &lt;button&gt;.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;button&gt;Kirim&lt;/button&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri tombol bertuliskan 'Kirim'</p>\n</div>",
                "challenge": {
                    "title": "Menambah Button",
                    "desc": "Beri tombol bertuliskan 'Kirim'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <button>Kirim</button>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<button>kirim</button>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-15",
                "title": "Komentar HTML",
                "desc": "Meninggalkan catatan",
                "xp": 25,
                "content": "<h2>Komentar</h2><p>Tidak terlihat di browser.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;!-- Test --&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat komentar HTML berisi 'Test'</p>\n</div>",
                "challenge": {
                    "title": "Abaikan Baris Ini",
                    "desc": "Buat komentar HTML berisi 'Test'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <!-- Test -->"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<!--test-->')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-16",
                "title": "Div & Span",
                "desc": "Grouping elemen gampang",
                "xp": 25,
                "content": "<h2>DIV vs SPAN</h2><p>&lt;div&gt; sebagai kotak (block) dan &lt;span&gt; sebagai teks dalam baris (inline).</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;div&gt;Kotak&lt;/div&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat satu div yg isinya 'Kotak'</p>\n</div>",
                "challenge": {
                    "title": "Kotakan Aku",
                    "desc": "Buat satu div yg isinya 'Kotak'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <div>Kotak</div>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<div>kotak</div>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-17",
                "title": "Semantic Dasar",
                "desc": "Main, Header, Footer",
                "xp": 30,
                "content": "<h2>HTML5 Semantic</h2><p>Gunakan tag &lt;header&gt;, &lt;main&gt;, &lt;footer&gt; untuk aksesibilitas dan SEO.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;header&gt;Atas&lt;/header&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tulis tag <header> yang isinya 'Atas'</p>\n</div>",
                "challenge": {
                    "title": "Header Web",
                    "desc": "Tulis tag <header> yang isinya 'Atas'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan <header>Atas</header>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<header>atas</header>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-18",
                "title": "Video HTML5",
                "desc": "Menyematkan video mp4",
                "xp": 35,
                "content": "<h2>Tag Video</h2><p>&lt;video src=\"a.mp4\" controls&gt;&lt;/video&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;video src=\"v.mp4\" controls&gt;&lt;/video&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan tag video dengan src 'v.mp4' beserta kata controls</p>\n</div>",
                "challenge": {
                    "title": "Muter Video",
                    "desc": "Gunakan tag video dengan src 'v.mp4' beserta kata controls",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<video src=\"v.mp4\" controls></video>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<video') && code.replace(/\s+/g, '').toLowerCase().includes('src="v.mp4"') && code.replace(/\s+/g, '').toLowerCase().includes('controls')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-19",
                "title": "Audio HTML5",
                "desc": "Mendengarkan Lagu mp3",
                "xp": 35,
                "content": "<h2>Tag Audio</h2><p>&lt;audio src=\"a.mp3\" controls&gt;&lt;/audio&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;audio src=\"song.mp3\" controls&gt;&lt;/audio&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan audio dengan src 'song.mp3' dan controls</p>\n</div>",
                "challenge": {
                    "title": "Muter Lagu",
                    "desc": "Tambahkan audio dengan src 'song.mp3' dan controls",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<audio src=\"song.mp3\" controls></audio>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<audio') && code.replace(/\s+/g, '').toLowerCase().includes('src="song.mp3"') && code.replace(/\s+/g, '').toLowerCase().includes('controls')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-20",
                "title": "iFrame",
                "desc": "Sematan Web dalam Web",
                "xp": 40,
                "content": "<h2>Iframe</h2><p>Memasukan website lain kedalam web anda misalnya Peta Google Maps lewat atribut src.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;iframe src=\"x.com\"&gt;&lt;/iframe&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat iframe dgn src 'x.com'</p>\n</div>",
                "challenge": {
                    "title": "Sisip Web",
                    "desc": "Buat iframe dgn src 'x.com'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<iframe src=\"x.com\"></iframe>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<iframe') && code.replace(/\s+/g, '').toLowerCase().includes('src="x.com"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-21",
                "title": "Tag Details & Summary",
                "desc": "Accordion bawaan",
                "xp": 30,
                "content": "<h2>Details</h2><p>&lt;details&gt;&lt;summary&gt;Judul&lt;/summary&gt;Isi&lt;/details&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;details&gt;&lt;summary&gt;&lt;/summary&gt;&lt;/details&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat tag details dan summary</p>\n</div>",
                "challenge": {
                    "title": "Bikin Accordion",
                    "desc": "Buat tag details dan summary",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Pakai <details><summary></summary></details>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<details>') && code.replace(/\s+/g, '').toLowerCase().includes('<summary>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-22",
                "title": "Input Date & Color",
                "desc": "Input canggih",
                "xp": 30,
                "content": "<h2>Date Color</h2><p>type=\"date\" dan type=\"color\".</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;input type=\"color\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Minta input type color</p>\n</div>",
                "challenge": {
                    "title": "Warna",
                    "desc": "Minta input type color",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<input type=\"color\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('type="color"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-23",
                "title": "Canvas Dasar",
                "desc": "Menggambar di web",
                "xp": 35,
                "content": "<h2>Canvas</h2><p>&lt;canvas id=\"cv\"&gt;&lt;/canvas&gt;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;canvas&gt;&lt;/canvas&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan canvas dgn id</p>\n</div>",
                "challenge": {
                    "title": "Buat Canvas",
                    "desc": "Tambahkan canvas dgn id",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<canvas></canvas>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<canvas')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-24",
                "title": "SVG Dasar",
                "desc": "Grafik Vektor",
                "xp": 35,
                "content": "<h2>SVG</h2><p>Tag &lt;svg&gt; berskala tanpa pecah.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;svg&gt;&lt;/svg&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tulis tag svg</p>\n</div>",
                "challenge": {
                    "title": "Bikin SVG",
                    "desc": "Tulis tag svg",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<svg></svg>"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('<svg>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-25",
                "title": "Atribut Media",
                "desc": "Autoplay Loop",
                "xp": 35,
                "content": "<h2>Atribut Lanjut</h2><p>autoplay, loop, muted.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">muted</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat video ber-atribut muted</p>\n</div>",
                "challenge": {
                    "title": "Video Muted",
                    "desc": "Buat video ber-atribut muted",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Gunakan kata muted"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('muted')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-26",
                "title": "HTML Geolocation",
                "desc": "Situs Lacak",
                "xp": 40,
                "content": "<h2>Geolokasi API</h2><p>Mendapatkan lokasi via JS navigator.geolocation.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;button id=\"lokasi\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat button id='lokasi'</p>\n</div>",
                "challenge": {
                    "title": "Bikin Tombol Lokasi",
                    "desc": "Buat button id='lokasi'",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<button id=\"lokasi\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('id="lokasi"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-27",
                "title": "Drag & Drop",
                "desc": "Atribut Draggable",
                "xp": 35,
                "content": "<h2>Bisa diseret</h2><p>Tambahkan draggable=\"true\".</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;p draggable=\"true\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Bikin p draggable=true</p>\n</div>",
                "challenge": {
                    "title": "Teks Seret",
                    "desc": "Bikin p draggable=true",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<p draggable=\"true\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('draggable="true"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-28",
                "title": "Web Storage",
                "desc": "Simpan info user",
                "xp": 40,
                "content": "<h2>Storage API</h2><p>Local & Session storage. Seringkali digabung dgn input hidden HTML.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;input type=\"hidden\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Bikin input type hidden</p>\n</div>",
                "challenge": {
                    "title": "Tag Tersembunyi",
                    "desc": "Bikin input type hidden",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<input type=\"hidden\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('type="hidden"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-29",
                "title": "Web Workers",
                "desc": "Skrip Latar Belakang",
                "xp": 45,
                "content": "<h2>JS Paralel</h2><p>Web worker membebaskan UI dari nge-lag.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">loading</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat paragraph dgn text Loading</p>\n</div>",
                "challenge": {
                    "title": "Info Latar",
                    "desc": "Buat paragraph dgn text Loading",
                    "initialCode": "<body>\n\n</body>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "Tulis loading"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('loading')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "html-30",
                "title": "SEO & Meta",
                "desc": "Atur title meta",
                "xp": 45,
                "content": "<h2>Meta Tag</h2><p>Penting utk Google search.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">&lt;meta name=\"description\"&gt;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat tag <meta name=\"description\"></p>\n</div>",
                "challenge": {
                    "title": "Deskripsi Web",
                    "desc": "Buat tag <meta name=\"description\">",
                    "initialCode": "<head>\n\n</head>",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "<meta name=\"description\">"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('name="description"')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            }
        ]
    },
    "css": {
        "title": "CSS",
        "icon": "🎨",
        "color": "#2965f1",
        "lessons": [
            {
                "id": "css-1",
                "title": "Apa itu CSS?",
                "desc": "Pengenalan CSS",
                "xp": 25,
                "content": "<h2>Mengenal CSS</h2><p>CSS memberi warna dan gaya.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">color: blue;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri warna text p menjadi 'blue'</p>\n</div>",
                "challenge": {
                    "title": "Warna Biru",
                    "desc": "Beri warna text p menjadi 'blue'",
                    "initialCode": "p {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "color: blue;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('color:blue')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-2",
                "title": "Background & Warna",
                "desc": "Dasar styling",
                "xp": 30,
                "content": "<h2>Background Color</h2><p>Menggunakan background-color.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">background-color: red;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Ubah background div menjadi 'red'</p>\n</div>",
                "challenge": {
                    "title": "Ganti Background",
                    "desc": "Ubah background div menjadi 'red'",
                    "initialCode": "div {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "background-color: red;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('background-color:red') || code.replace(/\s+/g, '').toLowerCase().includes('background:red')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-3",
                "title": "Class & ID Selectors",
                "desc": "Selector target",
                "xp": 35,
                "content": "<h2>Class vs ID</h2><p>. untuk Class, # untuk ID.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">.btn { color: white; }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Target class .btn dan beri color white</p>\n</div>",
                "challenge": {
                    "title": "Target Class",
                    "desc": "Target class .btn dan beri color white",
                    "initialCode": "/* target .btn */\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        ".btn { color: white; }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('.btn{') && code.replace(/\s+/g, '').toLowerCase().includes('color:white')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-4",
                "title": "Font & Tipografi",
                "desc": "Menyetel ukuran",
                "xp": 30,
                "content": "<h2>Tipografi</h2><p>font-family, font-size, font-weight.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">font-size: 18px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat ukuran teks p jadi 18px</p>\n</div>",
                "challenge": {
                    "title": "Bemperbesar Teks",
                    "desc": "Buat ukuran teks p jadi 18px",
                    "initialCode": "p {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "font-size: 18px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('font-size:18px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-5",
                "title": "Box Width & Height",
                "desc": "Mengatur dimensi",
                "xp": 30,
                "content": "<h2>Dimensi</h2><p>width dan height pada elemen kotak.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">width: 200px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Atur width 200px dan height 100px di .kotak</p>\n</div>",
                "challenge": {
                    "title": "Set Ukuran",
                    "desc": "Atur width 200px dan height 100px di .kotak",
                    "initialCode": ".kotak {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "width: 200px;",
                        "height: 100px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('width:200px') && code.replace(/\s+/g, '').toLowerCase().includes('height:100px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-6",
                "title": "Box Padding",
                "desc": "Ruang dalam",
                "xp": 30,
                "content": "<h2>Padding</h2><p>Ruang di dalam kotak.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">padding: 15px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan padding 15px pada div</p>\n</div>",
                "challenge": {
                    "title": "Beri Padding",
                    "desc": "Tambahkan padding 15px pada div",
                    "initialCode": "div {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "padding: 15px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('padding:15px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-7",
                "title": "Box Margin",
                "desc": "Jarak luar",
                "xp": 30,
                "content": "<h2>Margin</h2><p>Jarak luar kotak.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">margin-bottom: 30px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Berikan margin-bottom 30px di h2</p>\n</div>",
                "challenge": {
                    "title": "Spasi Bawah",
                    "desc": "Berikan margin-bottom 30px di h2",
                    "initialCode": "h2 {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "margin-bottom: 30px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('margin-bottom:30px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-8",
                "title": "Box Border",
                "desc": "Garis tepi",
                "xp": 35,
                "content": "<h2>Garis Tepi</h2><p>border dan border-radius.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">border-radius: 10px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Berikan border-radius 10px pada img</p>\n</div>",
                "challenge": {
                    "title": "Border Melengkung",
                    "desc": "Berikan border-radius 10px pada img",
                    "initialCode": "img {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "border-radius: 10px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('border-radius:10px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-9",
                "title": "Text Styling",
                "desc": "Merata teks",
                "xp": 25,
                "content": "<h2>Teks Lanjutan</h2><p>text-align (center, left), text-decoration.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">text-align: center;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat h3 rata tengah dengan text-align</p>\n</div>",
                "challenge": {
                    "title": "Tengah",
                    "desc": "Buat h3 rata tengah dengan text-align",
                    "initialCode": "h3 {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "text-align: center;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('text-align:center')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-10",
                "title": "Display Elements",
                "desc": "Block, Inline, None",
                "xp": 35,
                "content": "<h2>Display</h2><p>display: none menyembunyikan elemen.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">display: none;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan display: none; untuk menghapus div</p>\n</div>",
                "challenge": {
                    "title": "Sembunyikan",
                    "desc": "Gunakan display: none; untuk menghapus div",
                    "initialCode": "div {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "display: none;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('display:none')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-11",
                "title": "Flexbox Dasar",
                "desc": "Tata letak flex",
                "xp": 40,
                "content": "<h2>Flex</h2><p>display: flex merapatkan elemen.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">display: flex;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan display: flex; pada .container</p>\n</div>",
                "challenge": {
                    "title": "Aktifkan Flex",
                    "desc": "Tambahkan display: flex; pada .container",
                    "initialCode": ".container {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "display: flex;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('display:flex')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-12",
                "title": "Flexbox Align",
                "desc": "Merapikan flex",
                "xp": 40,
                "content": "<h2>Flex Center</h2><p>justify-content dan align-items.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">justify-content: space-between;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan justify-content: space-between; di .nav</p>\n</div>",
                "challenge": {
                    "title": "Justify Center",
                    "desc": "Tambahkan justify-content: space-between; di .nav",
                    "initialCode": ".nav {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "justify-content: space-between;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('justify-content:space-between')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-13",
                "title": "Pseudo-Classes",
                "desc": "Efek sentuh",
                "xp": 35,
                "content": "<h2>Hover Effect</h2><p>:hover digunakan saat dsentuh mouse.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">.tombol:hover { background: blue; }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat .tombol:hover mengubah background 'blue'</p>\n</div>",
                "challenge": {
                    "title": "Tombol Hover",
                    "desc": "Buat .tombol:hover mengubah background 'blue'",
                    "initialCode": "/* Tulis class pseudo */\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        ".tombol:hover { background: blue; }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('.tombol:hover') && code.replace(/\s+/g, '').toLowerCase().includes('background:blue') || code.replace(/\s+/g, '').toLowerCase().includes('background-color:blue')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-14",
                "title": "Transisi",
                "desc": "Halus",
                "xp": 35,
                "content": "<h2>Transition</h2><p>Menentukan laju perpindahan, cth: transition: 0.3s</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">transition: 0.5s;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan properti transition: 0.5s; ke dalam p</p>\n</div>",
                "challenge": {
                    "title": "Transisi All",
                    "desc": "Tambahkan properti transition: 0.5s; ke dalam p",
                    "initialCode": "p {\n  color: black;\n  \n}\np:hover { color: orange; }",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "transition: 0.5s;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('transition:0.5s')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-15",
                "title": "Bayangan",
                "desc": "Shadows",
                "xp": 30,
                "content": "<h2>Shadow</h2><p>box-shadow dan text-shadow.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">text-shadow: 1px 1px 2px black;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Berikan text-shadow: 1px 1px 2px black; pada h2</p>\n</div>",
                "challenge": {
                    "title": "Beri Bayangan",
                    "desc": "Berikan text-shadow: 1px 1px 2px black; pada h2",
                    "initialCode": "h2 {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "text-shadow: 1px 1px 2px black;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('text-shadow:1px1px2pxblack')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-16",
                "title": "Position Relative",
                "desc": "Posisi Mandiri",
                "xp": 35,
                "content": "<h2>Position</h2><p>position: relative membuat elemen memindah titik kordinatnya.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">position: relative; left: 10px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Ubah position jadi relative dan left 10px;</p>\n</div>",
                "challenge": {
                    "title": "Pindah Kiri",
                    "desc": "Ubah position jadi relative dan left 10px;",
                    "initialCode": "div {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "position: relative; left: 10px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('position:relative') && code.replace(/\s+/g, '').toLowerCase().includes('left:10px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-17",
                "title": "Position Absolute",
                "desc": "Posisi Angkasa",
                "xp": 35,
                "content": "<h2>Absolute</h2><p>Bisa ditaruh mengambang keluar angkasa lepas dari web flow normal.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">position: absolute; top:0;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri position: absolute dan top 0;</p>\n</div>",
                "challenge": {
                    "title": "Melayang",
                    "desc": "Beri position: absolute dan top 0;",
                    "initialCode": "h1 {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "position: absolute; top:0;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('position:absolute') && code.replace(/\s+/g, '').toLowerCase().includes('top:0')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-18",
                "title": "Z-Index Layering",
                "desc": "Tumpuk-tumpukan",
                "xp": 35,
                "content": "<h2>Layer</h2><p>z-index menentukan tingkatan layer kedepan/belakang.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">z-index: 99;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambahkan z-index: 99; di header</p>\n</div>",
                "challenge": {
                    "title": "Ke Depan",
                    "desc": "Tambahkan z-index: 99; di header",
                    "initialCode": "header {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "z-index: 99;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('z-index:99')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-19",
                "title": "Transform CSS",
                "desc": "Memutar Elemen",
                "xp": 35,
                "content": "<h2>Transform</h2><p>Membesar/memutar elemen dengan transform: scale() atau rotate().</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">transform: rotate(45deg);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Berikan transform: rotate(45deg);</p>\n</div>",
                "challenge": {
                    "title": "Memutar",
                    "desc": "Berikan transform: rotate(45deg);",
                    "initialCode": "img {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "transform: rotate(45deg);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('transform:rotate(45deg)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-20",
                "title": "CSS Variables",
                "desc": "Variabel Warna",
                "xp": 40,
                "content": "<h2>Var() Dasar</h2><p>Mendefinisikan warna pada --variabel untuk di reuse, root { --warna: red; }</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">color: var(--main);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan color: var(--main);</p>\n</div>",
                "challenge": {
                    "title": "Pake Warna",
                    "desc": "Gunakan color: var(--main);",
                    "initialCode": "p {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "color: var(--main);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('color:var(--main)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-21",
                "title": "Grid Dasar",
                "desc": "Layout modern",
                "xp": 35,
                "content": "<h2>Display Grid</h2><p>display: grid; gabungan baris & kolom.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">display: grid;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Bikin .wadah jd grid</p>\n</div>",
                "challenge": {
                    "title": "Set Grid",
                    "desc": "Bikin .wadah jd grid",
                    "initialCode": ".wadah {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "display: grid;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('display:grid')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-22",
                "title": "Grid Kolom",
                "desc": "Membagi layar",
                "xp": 40,
                "content": "<h2>Grid Columns</h2><p>grid-template-columns: auto auto auto;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">grid-template-columns: 50% 50%;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Set template-columns ke 50% 50%;</p>\n</div>",
                "challenge": {
                    "title": "Dua Kolom",
                    "desc": "Set template-columns ke 50% 50%;",
                    "initialCode": ".wadah {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "grid-template-columns: 50% 50%;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('grid-template-columns:') && code.replace(/\s+/g, '').toLowerCase().includes('50%')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-23",
                "title": "Grid Gap",
                "desc": "Jarak Grid",
                "xp": 35,
                "content": "<h2>Gap</h2><p>gap: 10px; memberi jarak blok flex/grid.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">gap: 15px;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Berikan gap 15px</p>\n</div>",
                "challenge": {
                    "title": "Jarak 15px",
                    "desc": "Berikan gap 15px",
                    "initialCode": ".wadah {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "gap: 15px;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('gap:15px')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-24",
                "title": "Animation Dasar",
                "desc": "Gerak Sendiri",
                "xp": 40,
                "content": "<h2>Animasi</h2><p>@keyframes untuk pergerakan mandiri.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">@keyframes ...</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat @keyframes slide { 100% { left: 10px; } }</p>\n</div>",
                "challenge": {
                    "title": "Keyframes",
                    "desc": "Buat @keyframes slide { 100% { left: 10px; } }",
                    "initialCode": "/* bikin disini */",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "@keyframes ..."
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('@keyframes')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-25",
                "title": "Animation Play",
                "desc": "Memutar slide",
                "xp": 40,
                "content": "<h2>Animation</h2><p>animation: slide 2s infinite;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">animation: go 2s;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri properti animation pada div: go 2s</p>\n</div>",
                "challenge": {
                    "title": "Putar Anim",
                    "desc": "Beri properti animation pada div: go 2s",
                    "initialCode": "div {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "animation: go 2s;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('animation:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-26",
                "title": "Media Queries",
                "desc": "Responsif Web HP",
                "xp": 50,
                "content": "<h2>@media</h2><p>Ubah tampilan saat layar mengecil.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">@media (max-width: 600px) { }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat @media(max-width: 600px)</p>\n</div>",
                "challenge": {
                    "title": "Max Width",
                    "desc": "Buat @media(max-width: 600px)",
                    "initialCode": "/* tulis di sini */\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "@media (max-width: 600px) { }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('@media') && code.replace(/\s+/g, '').toLowerCase().includes('max-width')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-27",
                "title": "Filter CSS",
                "desc": "Efek Foto",
                "xp": 40,
                "content": "<h2>Visual Filter</h2><p>filter: blur(5px) atau grayscale(100%)</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">filter: blur(2px);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri filter: blur(2px); pada img</p>\n</div>",
                "challenge": {
                    "title": "Bikin Blur",
                    "desc": "Beri filter: blur(2px); pada img",
                    "initialCode": "img {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "filter: blur(2px);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('filter:blur(2px)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-28",
                "title": "Object Fit",
                "desc": "Potong Gambar",
                "xp": 35,
                "content": "<h2>Fit Gambar</h2><p>object-fit: cover; mencegah gepeng.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">object-fit: cover;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Pasang object-fit: cover</p>\n</div>",
                "challenge": {
                    "title": "Agar Cover",
                    "desc": "Pasang object-fit: cover",
                    "initialCode": "img {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "object-fit: cover;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('object-fit:cover')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-29",
                "title": "Multi Column",
                "desc": "Koran Digital",
                "xp": 35,
                "content": "<h2>column-count</h2><p>Membagi isi p menjadi dua baris.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">column-count: 2;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Beri p column-count: 2</p>\n</div>",
                "challenge": {
                    "title": "2 Kolom Paragraf",
                    "desc": "Beri p column-count: 2",
                    "initialCode": "p {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "column-count: 2;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('column-count:2')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "css-30",
                "title": "Scroll Behavior",
                "desc": "Scroll Mulus",
                "xp": 40,
                "content": "<h2>Smooth</h2><p>scroll-behavior: smooth;</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">scroll-behavior: smooth;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tambah di html scroll-behavior</p>\n</div>",
                "challenge": {
                    "title": "Ke Halus",
                    "desc": "Tambah di html scroll-behavior",
                    "initialCode": "html {\n  \n}",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "scroll-behavior: smooth;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('scroll-behavior:smooth')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            }
        ]
    },
    "javascript": {
        "title": "JavaScript",
        "icon": "⚡",
        "color": "#f0db4f",
        "lessons": [
            {
                "id": "js-1",
                "title": "Console.log",
                "desc": "Melihat output",
                "xp": 25,
                "content": "<h2>Console</h2><p>Output ke layar debugger.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">console.log('Hello');</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan console.log untuk memunculkan teks 'Hello'</p>\n</div>",
                "challenge": {
                    "title": "Ucapkan Hai",
                    "desc": "Gunakan console.log untuk memunculkan teks 'Hello'",
                    "initialCode": "// ketik di sini\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "console.log('Hello');"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('console.log(\'hello\')') || code.replace(/\s+/g, '').toLowerCase().includes('console.log("hello")')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-2",
                "title": "Variabel",
                "desc": "Mengingat dengan let",
                "xp": 30,
                "content": "<h2>Memori</h2><p>let dan const.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let x = 5;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat let x = 5</p>\n</div>",
                "challenge": {
                    "title": "Variabel",
                    "desc": "Buat let x = 5",
                    "initialCode": "// ketik di sini\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let x = 5;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('letx=5')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-3",
                "title": "Tipe Data",
                "desc": "String vs Number",
                "xp": 35,
                "content": "<h2>Tipe JS</h2><p>String, Number, dan Boolean.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let hitung = 50;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Deklarasikan let hitung = 50;</p>\n</div>",
                "challenge": {
                    "title": "Keluarkan Angka",
                    "desc": "Deklarasikan let hitung = 50;",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let hitung = 50;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('lethitung=50')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-4",
                "title": "Operator + - * /",
                "desc": "Matematika",
                "xp": 30,
                "content": "<h2>Matematika JS</h2><p>Tambah, Bagi, Kali.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let hasil = 10 * 5;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let hasil = 10 * 5;</p>\n</div>",
                "challenge": {
                    "title": "Terkali",
                    "desc": "let hasil = 10 * 5;",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let hasil = 10 * 5;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('lethasil=10*5') || (code.replace(/\s+/g, '').toLowerCase().includes('lethasil=50'))
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-5",
                "title": "Perbandingan",
                "desc": "==",
                "xp": 35,
                "content": "<h2>Mencocokkan</h2><p>Cek Kesamaan dengan ===.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">console.log(10 &lt; 20);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> console.log(10 < 20);</p>\n</div>",
                "challenge": {
                    "title": "Benar/Salah",
                    "desc": "console.log(10 < 20);",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "console.log(10 < 20);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('console.log(10<20)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-6",
                "title": "If...Else",
                "desc": "Kondisional",
                "xp": 35,
                "content": "<h2>IF Bercabang</h2><p>Eksekusi berdasar logika.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">if (poin &gt; 70) { console.log('Lulus'); }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> if(poin > 70) console.log('Lulus')</p>\n</div>",
                "challenge": {
                    "title": "If Biasa",
                    "desc": "if(poin > 70) console.log('Lulus')",
                    "initialCode": "let poin = 80;\n// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "if (poin > 70) { console.log('Lulus'); }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('if(poin>70)') && code.replace(/\s+/g, '').toLowerCase().includes('lulus')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-7",
                "title": "Else If",
                "desc": "Banyak pilihan",
                "xp": 35,
                "content": "<h2>Else If</h2><p>Menangani jika pilihan pertama jatuh.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">else if (j === 2) { console.log('B'); }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> if(j === 1) cetak 'A', else if(j === 2) cetak 'B'</p>\n</div>",
                "challenge": {
                    "title": "Rangkai",
                    "desc": "if(j === 1) cetak 'A', else if(j === 2) cetak 'B'",
                    "initialCode": "let j = 2;\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "else if (j === 2) { console.log('B'); }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('if(j===1)') && code.replace(/\s+/g, '').toLowerCase().includes('elseif(j===2)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-8",
                "title": "Array",
                "desc": "List item",
                "xp": 40,
                "content": "<h2>Array</h2><p>Menampung banyak list dalam [].</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let daftar = [10, 20]; console.log(daftar[0]);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let daftar = [10, 20]; console.log(daftar[0]);</p>\n</div>",
                "challenge": {
                    "title": "List",
                    "desc": "let daftar = [10, 20]; console.log(daftar[0]);",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let daftar = [10, 20]; console.log(daftar[0]);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('letdaftar=[10,20]') && code.replace(/\s+/g, '').toLowerCase().includes('console.log(daftar[0])')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-9",
                "title": "Array Push Pop",
                "desc": "Ubah array",
                "xp": 40,
                "content": "<h2>Manipulasi</h2><p>push untuk tambah ke ujung.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">l.push(3);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> l.push(3);</p>\n</div>",
                "challenge": {
                    "title": "Push",
                    "desc": "l.push(3);",
                    "initialCode": "let l = [1];\n// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "l.push(3);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('l.push(3)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-10",
                "title": "For Loops",
                "desc": "Mengulangi",
                "xp": 40,
                "content": "<h2>For</h2><p>Mengulang sesuai hitungan.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">for (let i = 0; i &lt; 5; i++) { console.log(i); }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> for (let i = 0; i < 5; i++) console.log(i);</p>\n</div>",
                "challenge": {
                    "title": "Loop 5",
                    "desc": "for (let i = 0; i < 5; i++) console.log(i);",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "for (let i = 0; i < 5; i++) { console.log(i); }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('for(leti=0;i<5;i++)') && code.replace(/\s+/g, '').toLowerCase().includes('console.log(i)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-11",
                "title": "While Loops",
                "desc": "Mengulang kondisi true",
                "xp": 35,
                "content": "<h2>While</h2><p>Bekerja selagi true.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">while (i &lt; 2) { console.log(i); i++; }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let i=0; while(i < 2){ console.log(i); i++; }</p>\n</div>",
                "challenge": {
                    "title": "While",
                    "desc": "let i=0; while(i < 2){ console.log(i); i++; }",
                    "initialCode": "let i = 0;\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "while (i < 2) { console.log(i); i++; }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('while(i<2)') && code.replace(/\s+/g, '').toLowerCase().includes('i++')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-12",
                "title": "Fungsi (Basic)",
                "desc": "Blok Kode",
                "xp": 45,
                "content": "<h2>Function</h2><p>Blok untuk reusability.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">function lari() { console.log('lari'); } lari();</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> function lari() { console.log('lari'); } lari();</p>\n</div>",
                "challenge": {
                    "title": "Panggil",
                    "desc": "function lari() { console.log('lari'); } lari();",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "function lari() { console.log('lari'); } lari();"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('functionlari()') && code.replace(/\s+/g, '').toLowerCase().match(/lari\(\)/g)?.length >= 1
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-13",
                "title": "Fungsi Return",
                "desc": "Hasil",
                "xp": 45,
                "content": "<h2>Return</h2><p>Mendapat balasan fungsi.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">function kali(a,b) { return a*b; }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat fungsi kali(a, b) yg me-return a * b;</p>\n</div>",
                "challenge": {
                    "title": "Return",
                    "desc": "Buat fungsi kali(a, b) yg me-return a * b;",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "function kali(a,b) { return a*b; }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('functionkali(a,b)') && code.replace(/\s+/g, '').toLowerCase().includes('returna*b')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-14",
                "title": "Awal DOM",
                "desc": "Akses HTML",
                "xp": 50,
                "content": "<h2>DOM Get</h2><p>document.getElementById</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">document.getElementById('x');</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Tangkap dg id 'x' let el = document.getElementById('x');</p>\n</div>",
                "challenge": {
                    "title": "DOM",
                    "desc": "Tangkap dg id 'x' let el = document.getElementById('x');",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "document.getElementById('x');"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('document.getelementbyid(\'x\')') || code.replace(/\s+/g, '').toLowerCase().includes('document.getelementbyid("x")')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-15",
                "title": "DOM Events",
                "desc": "Klik",
                "xp": 55,
                "content": "<h2>Events</h2><p>addEventListener('click')</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">e.addEventListener('click', () =&gt; {});</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> el.addEventListener('click', () => console.log('ya'));</p>\n</div>",
                "challenge": {
                    "title": "Klik Menu",
                    "desc": "el.addEventListener('click', () => console.log('ya'));",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "e.addEventListener('click', () => {});"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('addeventlistener(\'click\',')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-16",
                "title": "Javascript Objects",
                "desc": "Data Kompleks Mapan",
                "xp": 45,
                "content": "<h2>Objek Dasar</h2><p>Dideklarasi dengan {} ada key dan value.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let user = { nama: 'Budi' };</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat let user = { nama: 'Budi' };</p>\n</div>",
                "challenge": {
                    "title": "Buat Objek",
                    "desc": "Buat let user = { nama: 'Budi' };",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let user = { nama: 'Budi' };"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('letuser={nama:\'budi\'}') || code.replace(/\s+/g, '').toLowerCase().includes('letuser={nama:"budi"}')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-17",
                "title": "Akses Properti Objek",
                "desc": "Titik dot",
                "xp": 40,
                "content": "<h2>Titik Dot</h2><p>user.nama</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">console.log(user.hobi);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan console.log() u memanggil isi dari user.hobi;</p>\n</div>",
                "challenge": {
                    "title": "Panggil Objek",
                    "desc": "Gunakan console.log() u memanggil isi dari user.hobi;",
                    "initialCode": "let user = { hobi: 'Coding' };\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "console.log(user.hobi);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('console.log(user.hobi)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-18",
                "title": "Template Literals",
                "desc": "Backticks Mantap",
                "xp": 35,
                "content": "<h2>Kutip Miring Terbalik</h2><p>Gunakan backtick dan ${} untuk mudah mencampur String dan Variable</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">`Hai ${nama}`</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let say = `Hai ${nama}`;</p>\n</div>",
                "challenge": {
                    "title": "Pake Backticks",
                    "desc": "let say = `Hai ${nama}`;",
                    "initialCode": "let nama = 'Eka';\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "`Hai ${nama}`"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('hai${nama}')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-19",
                "title": "Error Handling",
                "desc": "Try & Catch",
                "xp": 40,
                "content": "<h2>Try Catch</h2><p>Gunakan block try{} untuk tes bahaya dan tangkap error di catch(err){}</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">try { } catch (e) { }</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan try { fake() } catch(e) { console.log(e) }</p>\n</div>",
                "challenge": {
                    "title": "Coba Tangkap",
                    "desc": "Gunakan try { fake() } catch(e) { console.log(e) }",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "try { } catch (e) { }"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('try{') && code.replace(/\s+/g, '').toLowerCase().includes('catch(') && code.replace(/\s+/g, '').toLowerCase().includes('console.log')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-20",
                "title": "SetTimeout",
                "desc": "Timer Detik Tertunda",
                "xp": 40,
                "content": "<h2>Timeout</h2><p>Menjalankan kode setelah sekian ms.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">setTimeout(() =&gt; { }, 1000);</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> setTimeout(()=> console.log('wut'), 1000);</p>\n</div>",
                "challenge": {
                    "title": "Tunda Sekejap",
                    "desc": "setTimeout(()=> console.log('wut'), 1000);",
                    "initialCode": "//\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "setTimeout(() => { }, 1000);"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('settimeout(') && code.replace(/\s+/g, '').toLowerCase().includes('1000')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-21",
                "title": "Arrow Function",
                "desc": "Lebih Pendek",
                "xp": 35,
                "content": "<h2>() => {}</h2><p>Pengganti kata function.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">() =&gt; 'hai';</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> const say = () => 'hai';</p>\n</div>",
                "challenge": {
                    "title": "Lambda",
                    "desc": "const say = () => 'hai';",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "() => 'hai';"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('()=>{') || code.replace(/\s+/g, '').toLowerCase().includes('()=>\'hai\';')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-22",
                "title": "Class & Object",
                "desc": "OOP JS",
                "xp": 45,
                "content": "<h2>class X {}</h2><p>Kerangka Objek.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">class Hewan {}</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> class Hewan {}</p>\n</div>",
                "challenge": {
                    "title": "Bikin Class",
                    "desc": "class Hewan {}",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "class Hewan {}"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('classhewan{}') || code.replace(/\s+/g, '').toLowerCase().includes('classhewan{')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-23",
                "title": "Callback",
                "desc": "Fungsi sbg parameter",
                "xp": 45,
                "content": "<h2>Callback</h2><p>Mengirim fungsi.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">sayHi(()=&gt;{});</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> sayHi( ()=>{} );</p>\n</div>",
                "challenge": {
                    "title": "Kirim",
                    "desc": "sayHi( ()=>{} );",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "sayHi(()=>{});"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('sayhi(()=>')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-24",
                "title": "Promises Dasar",
                "desc": "Janji Dieksekusi",
                "xp": 50,
                "content": "<h2>new Promise</h2><p>Menangani asinkron.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">new Promise(res =&gt; ...)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let p = new Promise(res=>res(1));</p>\n</div>",
                "challenge": {
                    "title": "Bikin Promis",
                    "desc": "let p = new Promise(res=>res(1));",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "new Promise(res => ...)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('newpromise')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-25",
                "title": "Async Await",
                "desc": "Clean Asinkron",
                "xp": 50,
                "content": "<h2>async / await</h2><p>Menunggu janji terpenuhi tanpa .then().</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">async function.. await..</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> async function f(){ await p; }</p>\n</div>",
                "challenge": {
                    "title": "Tunggu Await",
                    "desc": "async function f(){ await p; }",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "async function.. await.."
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('asyncfunction') && code.replace(/\s+/g, '').toLowerCase().includes('await')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-26",
                "title": "JSON",
                "desc": "String Objek",
                "xp": 40,
                "content": "<h2>JSON.stringify</h2><p>Objek ke String</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">JSON.stringify()</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> JSON.stringify({a:1});</p>\n</div>",
                "challenge": {
                    "title": "Ke JSON",
                    "desc": "JSON.stringify({a:1});",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "JSON.stringify()"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('json.stringify')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-27",
                "title": "Fetch API",
                "desc": "Panggil API Web",
                "xp": 55,
                "content": "<h2>Fetch</h2><p>fetch('url')</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">fetch('x.com')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> fetch('x.com');</p>\n</div>",
                "challenge": {
                    "title": "Panggil URL",
                    "desc": "fetch('x.com');",
                    "initialCode": "// \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "fetch('x.com')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('fetch(\'x.com\')') || code.replace(/\s+/g, '').toLowerCase().includes('fetch("x.com")')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-28",
                "title": "Map Array",
                "desc": "Loop dan Kembalikan",
                "xp": 45,
                "content": "<h2>Array.map()</h2><p>Modifikasi array.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">.map(x =&gt; x*2)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> a.map(x => x*2)</p>\n</div>",
                "challenge": {
                    "title": "Kali 2",
                    "desc": "a.map(x => x*2)",
                    "initialCode": "let a = [1];\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        ".map(x => x*2)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('.map(')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-29",
                "title": "Destructuring",
                "desc": "Pecah Objek",
                "xp": 40,
                "content": "<h2>{ nama } = user</h2><p>Ambil spesifik.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let {id} = obj;</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let {id} = obj;</p>\n</div>",
                "challenge": {
                    "title": "Ambil id",
                    "desc": "let {id} = obj;",
                    "initialCode": "let obj = {id: 1};\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let {id} = obj;"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('{id}=obj')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "js-30",
                "title": "Spread Operator",
                "desc": "Keluarkan Isi",
                "xp": 45,
                "content": "<h2>...</h2><p>...array menyalin isinya.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">let b = [...a]</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> let b = [...a];</p>\n</div>",
                "challenge": {
                    "title": "Salin Array",
                    "desc": "let b = [...a];",
                    "initialCode": "let a = [1];\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "let b = [...a]"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('[...a]')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            }
        ]
    },
    "python": {
        "title": "Python",
        "icon": "🐍",
        "color": "#306998",
        "lessons": [
            {
                "id": "py-1",
                "title": "Pengenalan Print",
                "desc": "Menampilkan Teks",
                "xp": 25,
                "content": "<h2>Python Print</h2><p>Semudah menulis print(\"Teks\")</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">print('Hello World')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Gunakan print untuk 'Hello World'</p>\n</div>",
                "challenge": {
                    "title": "Tulis Halo",
                    "desc": "Gunakan print untuk 'Hello World'",
                    "initialCode": "# Ketik kode Python disini\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "print('Hello World')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('print(\'helloworld\')') || code.replace(/\s+/g, '').toLowerCase().includes('print("helloworld")')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-2",
                "title": "Variabel Dasar",
                "desc": "Bebas Deklarasi",
                "xp": 30,
                "content": "<h2>Tanpa Let</h2><p>Langsung tempel: nama = 'Budi'</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">x = 10</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> Buat x = 10</p>\n</div>",
                "challenge": {
                    "title": "Variab",
                    "desc": "Buat x = 10",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "x = 10"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('x=10')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-3",
                "title": "Matematika",
                "desc": "Kurung kurawal tak perlu",
                "xp": 30,
                "content": "<h2>Tambahan</h2><p>a = 5 + 5</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">a = 2 * 5</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> a = 2 * 5</p>\n</div>",
                "challenge": {
                    "title": "Berhitung",
                    "desc": "a = 2 * 5",
                    "initialCode": "#\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "a = 2 * 5"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('a=2*5')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-4",
                "title": "List (Array)",
                "desc": "Data bersusun",
                "xp": 35,
                "content": "<h2>Mirip Array</h2><p>Hanya dinamakan List. a = [1, 2]</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">lst = [1, 2, 3]</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> lst = [1, 2, 3]</p>\n</div>",
                "challenge": {
                    "title": "Buat List",
                    "desc": "lst = [1, 2, 3]",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "lst = [1, 2, 3]"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('lst=[1,2,3]')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-5",
                "title": "Manipulasi List",
                "desc": "Append & Pop",
                "xp": 35,
                "content": "<h2>Append</h2><p>Menambah list di Python: lst.append(4)</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">l.append(2)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> l = [1]; l.append(2)</p>\n</div>",
                "challenge": {
                    "title": "Append Data",
                    "desc": "l = [1]; l.append(2)",
                    "initialCode": "l = [1]\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "l.append(2)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('l.append(2)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-6",
                "title": "Slicing List",
                "desc": "Iris Roti",
                "xp": 40,
                "content": "<h2>Slice :</h2><p>l[0:2] = ambil item 0 hingga 2.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">x = l[0:2]</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> x = l[0:2]</p>\n</div>",
                "challenge": {
                    "title": "Iris",
                    "desc": "x = l[0:2]",
                    "initialCode": "l = [1,2,3,4]\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "x = l[0:2]"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('x=l[0:2]') || code.replace(/\s+/g, '').toLowerCase().includes('x=l[:2]')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-7",
                "title": "Tuple Python",
                "desc": "List Anti Rubah",
                "xp": 30,
                "content": "<h2>Imutable</h2><p>Gunakan () untuk data list abadi yg dilarang diubah isinya tup=(1, 2).</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">t = (1, 2)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> t = (1, 2)</p>\n</div>",
                "challenge": {
                    "title": "Buat Tuple",
                    "desc": "t = (1, 2)",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "t = (1, 2)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('t=(1,2)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-8",
                "title": "If Else Dasar",
                "desc": "Tidak ber-Kurung",
                "xp": 35,
                "content": "<h2>Indentasi</h2><p>Python menggunakan tab (indentasi) untuk membatasi block code dan titik dua (:).</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">if x &gt; 5:\n  print('Hai')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> if x > 5: print('Hai')</p>\n</div>",
                "challenge": {
                    "title": "If Ku",
                    "desc": "if x > 5: print('Hai')",
                    "initialCode": "x = 10\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "if x > 5:\n  print('Hai')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('ifx>5:') && code.replace(/\s+/g, '').toLowerCase().includes('print(\')')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-9",
                "title": "Elif (Else If)",
                "desc": "Bercabang Pythonic",
                "xp": 35,
                "content": "<h2>Bukan Else if</h2><p>Menggunakan sintaks elif.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">elif x == 5:</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> elif x == 5:</p>\n</div>",
                "challenge": {
                    "title": "Elif",
                    "desc": "elif x == 5:",
                    "initialCode": "#\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "elif x == 5:"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('elifx==5:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-10",
                "title": "Operator Logika",
                "desc": "Mudah dibaca",
                "xp": 35,
                "content": "<h2>And, Or, Not</h2><p>Gunakan kata inggris: if x and y:</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">if a &gt; 0 and b &gt; 0:</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> if a > 0 and b > 0:</p>\n</div>",
                "challenge": {
                    "title": "Dua Syarat",
                    "desc": "if a > 0 and b > 0:",
                    "initialCode": "a=1\nb=1\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "if a > 0 and b > 0:"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('ifa>0andb>0:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-11",
                "title": "For Loops",
                "desc": "Mengulangi tiap elemen",
                "xp": 40,
                "content": "<h2>For in</h2><p>for i in range(5): ...</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">for i in range(5):\n  print(i)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> for i in range(5): print(i)</p>\n</div>",
                "challenge": {
                    "title": "Loop 5",
                    "desc": "for i in range(5): print(i)",
                    "initialCode": "#\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "for i in range(5):\n  print(i)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('foriinrange(5):') && code.replace(/\s+/g, '').toLowerCase().includes('print(i)')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-12",
                "title": "While Loops",
                "desc": "Mengulang semaunya",
                "xp": 35,
                "content": "<h2>Selama True</h2><p>while x < 5: x += 1</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">while x &lt; 2:\n  print(x)</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> while x < 2: print(x)</p>\n</div>",
                "challenge": {
                    "title": "While",
                    "desc": "while x < 2: print(x)",
                    "initialCode": "x=0\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "while x < 2:\n  print(x)"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('whilex<2:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-13",
                "title": "Fungsi Def",
                "desc": "Bungkus Blok Kode",
                "xp": 45,
                "content": "<h2>def myFunc():</h2><p>Definisi fungsi dgn kata def.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">def sapa():\n  print('hai')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> def sapa(): print('hai')</p>\n</div>",
                "challenge": {
                    "title": "Def",
                    "desc": "def sapa(): print('hai')",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "def sapa():\n  print('hai')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('defsapa():') && code.replace(/\s+/g, '').toLowerCase().includes('print')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-14",
                "title": "Fungsi Arg & Ret",
                "desc": "Kereta Berbalik",
                "xp": 45,
                "content": "<h2>Return Func</h2><p>Sama saja dengan return x.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">def kali(a, b):\n  return a * b</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> def kali(a,b): return a*b</p>\n</div>",
                "challenge": {
                    "title": "Return Ganda",
                    "desc": "def kali(a,b): return a*b",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "def kali(a, b):\n  return a * b"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('defkali(a,b):') && code.replace(/\s+/g, '').toLowerCase().includes('returna*b')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-15",
                "title": "Dictionary",
                "desc": "Mirip JSON Object",
                "xp": 40,
                "content": "<h2>Key Value Pair</h2><p>d = {'n': 'B'}. Dicto Python itu asik.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">d = {'id': 1}</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> d = {'id': 1}</p>\n</div>",
                "challenge": {
                    "title": "Dict",
                    "desc": "d = {'id': 1}",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "d = {'id': 1}"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('d={\'id\':1}') || code.replace(/\s+/g, '').toLowerCase().includes('d={"id":1}')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-16",
                "title": "Dict Access",
                "desc": "Mengakses Nilai",
                "xp": 35,
                "content": "<h2>Akses Kurung Siku</h2><p>d['id']</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">print(d['id'])</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> print(d['id'])</p>\n</div>",
                "challenge": {
                    "title": "Memanggil",
                    "desc": "print(d['id'])",
                    "initialCode": "d = {'id': 1}\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "print(d['id'])"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('print(d[\'id\'])') || code.replace(/\s+/g, '').toLowerCase().includes('print(d["id"])')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-17",
                "title": "String Manip",
                "desc": "Upper Lower",
                "xp": 40,
                "content": "<h2>Bungkus String</h2><p>s.upper()</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">print('hai'.upper())</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> print('hai'.upper())</p>\n</div>",
                "challenge": {
                    "title": "Cetak Huruf Besar",
                    "desc": "print('hai'.upper())",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "print('hai'.upper())"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('print(\'hai\'.upper())')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-18",
                "title": "Format String",
                "desc": "F-strings Super Cepat",
                "xp": 40,
                "content": "<h2>Sisipkan dgn f</h2><p>f\"Saya {name}\" sangat modern semenjak Py3.6.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">msg = f\"Aku {x}\"</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> msg = f\"Aku {x}\"</p>\n</div>",
                "challenge": {
                    "title": "Gunakan F",
                    "desc": "msg = f\"Aku {x}\"",
                    "initialCode": "x=1\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "msg = f\"Aku {x}\""
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('msg=f"aku{x}"') || code.replace(/\s+/g, '').toLowerCase().includes('msg=f\'aku{x}\')')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-19",
                "title": "Input User",
                "desc": "Bertanya",
                "xp": 35,
                "content": "<h2>Baca keyboard</h2><p>ans = input('apa namamu?')</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">nama = input('Siapa?')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> nama = input('Siapa?')</p>\n</div>",
                "challenge": {
                    "title": "Input",
                    "desc": "nama = input('Siapa?')",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "nama = input('Siapa?')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('nama=input(')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-20",
                "title": "Import Modul",
                "desc": "Alat Bantu Ekstra",
                "xp": 40,
                "content": "<h2>Library</h2><p>import math; print(math.pi)</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">import math</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> import math</p>\n</div>",
                "challenge": {
                    "title": "Import Math",
                    "desc": "import math",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "import math"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('importmath')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-21",
                "title": "Try Except",
                "desc": "Menjinakkan Error",
                "xp": 45,
                "content": "<h2>Try Except</h2><p>Alih-alih mati, tangkap errornya.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">try:\nexcept:</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> try: x() except: pass</p>\n</div>",
                "challenge": {
                    "title": "Coba",
                    "desc": "try: x() except: pass",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "try:\nexcept:"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('try:') && code.replace(/\s+/g, '').toLowerCase().includes('except:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-22",
                "title": "File Read",
                "desc": "Buka File",
                "xp": 50,
                "content": "<h2>open()</h2><p>f = open('a.txt', 'r')</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">open('x.txt', 'r')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> open('x.txt', 'r')</p>\n</div>",
                "challenge": {
                    "title": "Buka Read",
                    "desc": "open('x.txt', 'r')",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "open('x.txt', 'r')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('open(\'x.txt\',\'r\')')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-23",
                "title": "File Write",
                "desc": "Tulis File",
                "xp": 50,
                "content": "<h2>Write mode</h2><p>f = open('a.txt', 'w')</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">open('x.txt', 'w')</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> open('x.txt', 'w')</p>\n</div>",
                "challenge": {
                    "title": "Buka W",
                    "desc": "open('x.txt', 'w')",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "open('x.txt', 'w')"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('open(\'x.txt\',\'w\')')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-24",
                "title": "Lambda",
                "desc": "Fungsi Sebaris",
                "xp": 40,
                "content": "<h2>lambda x: x</h2><p>Singkat.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">lambda x: x</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> l = lambda x: x</p>\n</div>",
                "challenge": {
                    "title": "Bikin lmb",
                    "desc": "l = lambda x: x",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "lambda x: x"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('lambda')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-25",
                "title": "Class & OOP",
                "desc": "Objek Python",
                "xp": 45,
                "content": "<h2>class X:</h2><p>Kerangka dasar.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">class Mobil: pass</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> class Mobil: pass</p>\n</div>",
                "challenge": {
                    "title": "Kelas",
                    "desc": "class Mobil: pass",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "class Mobil: pass"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('classmobil:')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-26",
                "title": "Init Class",
                "desc": "Konstruktor",
                "xp": 50,
                "content": "<h2>__init__</h2><p>Berjalan saat objek dibuat.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">def __init__(self):</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> def __init__(self):</p>\n</div>",
                "challenge": {
                    "title": "Ketik Init",
                    "desc": "def __init__(self):",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "def __init__(self):"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('def__init__(self):')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-27",
                "title": "Inheritance",
                "desc": "Pewarisan",
                "xp": 45,
                "content": "<h2>class B(A):</h2><p>Keturunan.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">class B(A):</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> class B(A): pass</p>\n</div>",
                "challenge": {
                    "title": "Turun",
                    "desc": "class B(A): pass",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "class B(A):"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('classb(a):')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-28",
                "title": "Pip Modules",
                "desc": "Pihak Ketiga",
                "xp": 40,
                "content": "<h2>pip install</h2><p>Ambil dari PyPI.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">import requests</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> import requests</p>\n</div>",
                "challenge": {
                    "title": "Import",
                    "desc": "import requests",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "import requests"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('importrequests')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-29",
                "title": "List Comprehension",
                "desc": "Filter Keren",
                "xp": 45,
                "content": "<h2>[x for x in l]</h2><p>Filter dan map ringkas.</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">[x for x in l]</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> ans = [x for x in l]</p>\n</div>",
                "challenge": {
                    "title": "Bikin LC",
                    "desc": "ans = [x for x in l]",
                    "initialCode": "l = [1,2]\n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "[x for x in l]"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('[xforxinl]')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "py-30",
                "title": "Modul JSON",
                "desc": "Data Pertukaran",
                "xp": 45,
                "content": "<h2>import json</h2><p>json.dumps() json.loads()</p>\n<div class=\"materi-example\" style=\"margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--accent-primary);\">\n  <h4 style=\"margin: 0 0 12px 0; font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;\">💡 Contoh Penulisan Kode</h4>\n  <pre style=\"margin: 0; white-space: pre-wrap;\"><code style=\"color: #a78bfa; font-family: monospace; font-size: 1.1rem; line-height: 1.5;\">import json</code></pre>\n</div>\n<div style=\"margin-top: 16px; padding: 12px 16px; border-radius: 12px; background: rgba(52,211,153,0.05); border: 1px solid rgba(52,211,153,0.2);\">\n  <p style=\"margin: 0; color: #a7f3d0; font-size: 0.95rem;\"><strong>🎯 Misi Praktek:</strong> import json</p>\n</div>",
                "challenge": {
                    "title": "Tulis json",
                    "desc": "import json",
                    "initialCode": "# \n",
                    "htmlTemplate": "$CODE",
                    "hints": [
                        "import json"
                    ],
                    "checkFn": code => code.replace(/\s+/g, '').toLowerCase().includes('importjson')
                },
                "quiz": [
                    {
                        "question": "Menurut Anda, materi ini mudah dipahami?",
                        "options": [
                            "Sangat Mudah",
                            "Biasa Saja",
                            "Sulit"
                        ],
                        "correct": 0
                    },
                    {
                        "question": "Siap untuk tantangan quiz ini?",
                        "options": [
                            "Belum",
                            "Mungkin Nanti",
                            "Sudah Siap"
                        ],
                        "correct": 2
                    }
                ]
            }
        ]
    }
};