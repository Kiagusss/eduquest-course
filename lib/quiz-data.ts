import type { Course, Episode, Quiz, QuizQuestion } from "./types"

// ... existing quiz questions code ...




// const episode3: Episode = {
//   id: "ep-3",
//   courseId: "course-1",
//   title: "Wireframing & Prototyping",
//   description: "Master wireframing techniques and create interactive prototypes using Figma.",
//   videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
//   duration: 2400,
//   quizId: "quiz-3",
// }


const advancedQuizQuestions: QuizQuestion[] = [
  {
    id: "adv-q1",
    question: "Apa itu Accessibility (a11y) dalam design?",
    options: [
      "Membuat design yang expensive",
      "Desain yang dapat diakses oleh semua orang termasuk penyandang disabilitas",
      "Hanya untuk website government",
      "Trend design terbaru",
    ],
    correctAnswer: 1,
    explanation:
      "Accessibility adalah prinsip untuk membuat design yang dapat digunakan oleh semua orang, terlepas dari kemampuan fisik atau kognitif mereka.",
  },
  {
    id: "adv-q2",
    question: "Apa yang dimaksud dengan Design Thinking?",
    options: [
      "Hanya membuat design yang cantik",
      "Proses problem-solving yang user-centric dan iteratif",
      "Menggunakan tool design terbaru",
      "Membaca banyak design guidelines",
    ],
    correctAnswer: 1,
    explanation:
      "Design Thinking adalah metodologi untuk memecahkan masalah dengan fokus pada kebutuhan user melalui proses empathize, define, ideate, prototype, dan test.",
  },
  {
    id: "adv-q3",
    question: "Apa itu User Journey Mapping?",
    options: [
      "Map dari lokasi user secara geografis",
      "Visualisasi alur interaksi user dengan produk dari awal hingga akhir",
      "Daftar semua fitur yang ada",
      "Dokumentasi developer",
    ],
    correctAnswer: 1,
    explanation:
      "User Journey Mapping adalah teknik visualization yang menunjukkan langkah-langkah user, touchpoint, dan emotional state mereka saat menggunakan produk.",
  },
  {
    id: "adv-q4",
    question: 'Apa itu "Micro-interactions"?',
    options: [
      "Interaksi dengan ukuran kecil",
      "Detail animasi atau feedback yang merespons aksi user kecil",
      "Tombol yang sangat kecil",
      "Loading bar yang cepat",
    ],
    correctAnswer: 1,
    explanation:
      "Micro-interactions adalah momen-momen kecil dimana produk berkomunikasi dengan user melalui animasi atau feedback visual.",
  },
  {
    id: "adv-q5",
    question: "Apa fungsi utama dari A/B Testing dalam design?",
    options: [
      "Mengurangi biaya development",
      "Membandingkan dua versi design untuk melihat mana yang lebih efektif",
      "Mengganti design secara acak",
      "Hanya untuk testing website speed",
    ],
    correctAnswer: 1,
    explanation:
      "A/B Testing adalah metode untuk membandingkan dua versi design atau fitur dengan user yang berbeda untuk menentukan mana yang lebih efektif.",
  },
  {
    id: "adv-q6",
    question: "Apa itu Information Architecture (IA)?",
    options: [
      "Arsitektur bangunan untuk kantor tech",
      "Cara mengorganisir dan struktur informasi dalam produk digital",
      "Database design saja",
      "Programming architecture",
    ],
    correctAnswer: 1,
    explanation:
      "Information Architecture adalah seni mengorganisir dan mengstruktur konten serta informasi dalam produk digital untuk user menemukan apa yang mereka cari dengan mudah.",
  },
  {
    id: "adv-q7",
    question: "Apa itu Dark Mode dan mengapa penting?",
    options: [
      "Mode untuk hacker",
      "Interface dengan background gelap yang lebih mudah di mata dan menghemat battery",
      "Hanya untuk gaming",
      "Trend yang akan hilang",
    ],
    correctAnswer: 1,
    explanation:
      "Dark Mode adalah interface dengan background gelap yang memberikan kenyamanan mata di lingkungan low-light dan menghemat baterai perangkat modern.",
  },
  {
    id: "adv-q8",
    question: 'Apa yang dimaksud dengan "Progressive Disclosure"?',
    options: [
      "Membuka fitur secara bertahap sesuai level user",
      "Menampilkan informasi kompleks secara bertahap sesuai kebutuhan user",
      "Hanya untuk e-commerce",
      "Strategi marketing",
    ],
    correctAnswer: 1,
    explanation:
      "Progressive Disclosure adalah teknik menampilkan informasi atau fitur secara bertahap untuk menghindari overwhelming user dengan terlalu banyak opsi.",
  },
  {
    id: "adv-q9",
    question: "Apa itu Gestalt Principles dalam design?",
    options: [
      "Prinsip untuk membuat design mewah",
      "Principles tentang bagaimana mata manusia mengorganisir visual elements",
      "Hanya untuk logo design",
      "Teori warna saja",
    ],
    correctAnswer: 1,
    explanation:
      "Gestalt Principles adalah teori tentang bagaimana manusia mempersepsikan dan mengorganisir elemen visual berdasarkan proximity, similarity, continuity, dan closure.",
  },
  {
    id: "adv-q10",
    question: "Apa itu Design Tokens?",
    options: [
      "Uang untuk designer",
      "Standardized design values (warna, typography, spacing) yang terdokumentasi",
      "Hanya untuk CSS",
      "Framework design baru",
    ],
    correctAnswer: 1,
    explanation:
      "Design Tokens adalah unit design terkecil yang terdokumentasi dan dapat digunakan kembali, seperti warna, typography, spacing, untuk memastikan konsistensi.",
  },
]



export const sampleCourse2: Course = {
  id: "course-2",
  title: "Advanced UI/UX Design & Accessibility",
  description:
    "Take your design skills to the next level. Learn advanced design patterns, accessibility best practices, and modern design trends. Master user research, design systems, and create inclusive experiences for all users.",
  instructor: "Sarah Johnson",
  price: 1500,
  duration: "10 days",
  level: "Advanced",
  episodes: [
    {
      id: "ep-4",
      courseId: "course-2",
      title: "Advanced Design Patterns",
      description: "Explore advanced design patterns and best practices used by leading companies.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: 1500,
      quizId: "quiz-4",
    },
    {
      id: "ep-5",
      courseId: "course-2",
      title: "Accessibility & Inclusive Design",
      description: "Learn how to design for everyone by implementing accessibility best practices.",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      duration: 1800,
      quizId: "quiz-5",
    },
  ],
  thumbnail: "/ui-ux-design-course.png",
}


const uiuxQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Apa yang dimaksud dengan UX (User Experience)?",
    options: [
      "Tampilan visual aplikasi",
      "Pengalaman pengguna saat berinteraksi dengan produk",
      "Kecepatan loading website",
      "Jumlah fitur yang ada",
    ],
    correctAnswer: 1,
    explanation: "UX adalah keseluruhan pengalaman pengguna ketika berinteraksi dengan produk digital.",
  },
  {
    id: "q2",
    question: "Dalam UI Design, apa yang paling penting untuk accessibility?",
    options: ["Warna yang cerah", "Kontras warna yang baik", "Font yang besar", "Animasi yang menarik"],
    correctAnswer: 1,
    explanation:
      "Kontras warna yang baik memastikan konten dapat dibaca oleh semua orang, termasuk yang memiliki gangguan penglihatan.",
  },
  {
    id: "q3",
    question: "Apa itu wireframe dalam design process?",
    options: [
      "Design final dengan warna dan typography",
      "Sketsa struktur layout tanpa detail visual",
      "Prototype yang sudah interactive",
      "Dokumentasi project",
    ],
    correctAnswer: 1,
    explanation:
      "Wireframe adalah kerangka dasar layout yang menunjukkan struktur dan aliran informasi tanpa elemen visual yang detail.",
  },
  {
    id: "q4",
    question: 'Apa prinsip design yang disebut "White Space"?',
    options: [
      "Ruang kosong yang pemborosan",
      "Area negatif untuk memberi napas pada design",
      "Bagian yang tidak terpakai",
      "Background yang berwarna putih",
    ],
    correctAnswer: 1,
    explanation:
      "White space atau negative space membantu meningkatkan readability dan fokus user pada elemen penting.",
  },
  {
    id: "q5",
    question: "Berapa waktu ideal untuk loading website agar user tidak frustasi?",
    options: ["5 detik atau lebih", "Dibawah 3 detik", "Tidak ada standar", "10 detik atau lebih"],
    correctAnswer: 1,
    explanation:
      "Studi menunjukkan user mulai frustasi jika loading lebih dari 3 detik. Target ideal adalah 1-2 detik.",
  },
  {
    id: "q6",
    question: 'Apa yang dimaksud dengan "Call to Action" (CTA)?',
    options: [
      "Pesan error di aplikasi",
      "Tombol atau elemen yang mendorong user melakukan aksi",
      "Notifikasi push",
      "Menu navigasi",
    ],
    correctAnswer: 1,
    explanation:
      "CTA adalah elemen design (biasanya tombol) yang dirancang untuk mendorong user melakukan tindakan spesifik.",
  },
  {
    id: "q7",
    question: "Prinsip mana yang paling penting dalam responsive design?",
    options: [
      "Banyak animasi di setiap halaman",
      "Konten menyesuaikan dengan ukuran layar",
      "Warna yang konsisten",
      "Font yang besar",
    ],
    correctAnswer: 1,
    explanation:
      "Responsive design memastikan aplikasi dapat beradaptasi dan berfungsi baik di berbagai ukuran layar (mobile, tablet, desktop).",
  },
  {
    id: "q8",
    question: 'Apa itu "Design System"?',
    options: [
      "Sistem operasi design tools",
      "Kumpulan komponen dan guidelines yang konsisten untuk UI yang coherent",
      "Aplikasi untuk membuat design",
      "Template design yang gratis",
    ],
    correctAnswer: 1,
    explanation:
      "Design System adalah kumpulan terstruktur dari komponen, patterns, dan guidelines yang memastikan konsistensi visual dan fungsional.",
  },
  {
    id: "q9",
    question: "Dalam prototyping, apa perbedaan antara low-fidelity dan high-fidelity?",
    options: [
      "Tidak ada perbedaan",
      "Low-fidelity lebih detail dari high-fidelity",
      "Low-fidelity adalah sketsa dasar, high-fidelity lebih mendekati final product",
      "High-fidelity tidak bisa interactive",
    ],
    correctAnswer: 2,
    explanation:
      "Low-fidelity adalah sketsa atau wireframe sederhana. High-fidelity adalah prototype detail yang mendekati produk akhir dengan interaksi.",
  },
  {
    id: "q10",
    question: "Apa tujuan utama melakukan user research?",
    options: [
      "Menghemat biaya produksi",
      "Membuat design yang cantik",
      "Memahami kebutuhan, perilaku, dan pain points user",
      "Mempercepat proses development",
    ],
    correctAnswer: 2,
    explanation:
      "User research membantu designer memahami siapa user mereka, apa yang mereka butuhkan, dan bagaimana mereka berperilaku.",
  },
]

export const sampleQuiz: Quiz = {
  id: "quiz-1",
  episodeId: "ep-1",
  title: "UI/UX Design Fundamentals Quiz",
  questions: uiuxQuizQuestions,
  pointsPerQuestion: 10,
}

const iconCreationQuizQuestions: QuizQuestion[] = [
  {
    id: "icon-q1",
    question: "Apa itu grid system dalam icon design?",
    options: [
      "Dekorasi visual pada icon",
      "Kerangka yang membantu konsistensi ukuran dan alignment icon",
      "Warna background icon",
      "Animasi icon",
    ],
    correctAnswer: 1,
    explanation:
      "Grid system memastikan semua icon memiliki ukuran dan proporsi yang konsisten saat digunakan di berbagai ukuran.",
  },
  {
    id: "icon-q2",
    question: "Berapa stroke width yang ideal untuk icon?",
    options: ["0.5px", "1px - 3px tergantung ukuran", "10px", "Tidak ada standar"],
    correctAnswer: 1,
    explanation:
      "Stroke width yang ideal tergantung ukuran icon. Icon kecil (16-24px) biasanya gunakan 1-1.5px, icon besar gunakan 2-3px.",
  },
  {
    id: "icon-q3",
    question: "Apa keuntungan menggunakan icon set yang konsisten?",
    options: [
      "Membuat design lebih mahal",
      "Meningkatkan recognizability dan brand consistency",
      "Mengurangi ukuran file",
      "Membuat design lebih kompleks",
    ],
    correctAnswer: 1,
    explanation:
      "Icon set yang konsisten meningkatkan user experience karena user dapat mengenali dan memahami fungsi icon dengan cepat.",
  },
  {
    id: "icon-q4",
    question: "Format file apa yang paling ideal untuk export icon dari Figma?",
    options: ["JPG", "SVG untuk web dan PNG untuk aplikasi mobile", "BMP", "TIFF"],
    correctAnswer: 1,
    explanation:
      "SVG ideal untuk web karena scalable tanpa kehilangan kualitas, sedangkan PNG untuk mobile karena lebih kompatibel.",
  },
  {
    id: "icon-q5",
    question: "Apa perbedaan antara filled dan outline icon?",
    options: [
      "Tidak ada perbedaan",
      "Filled adalah icon padat, outline adalah icon dengan stroke saja",
      "Outline lebih besar dari filled",
      "Filled hanya untuk tombol",
    ],
    correctAnswer: 1,
    explanation:
      "Filled icon adalah icon yang seluruhnya terisi dengan warna, sedangkan outline icon hanya garis tepi tanpa isi.",
  },
  {
    id: "icon-q6",
    question: "Apa yang dimaksud dengan icon padding dalam design?",
    options: [
      "Ukuran total icon",
      "Ruang kosong di sekitar icon untuk breathing room",
      "Berat stroke icon",
      "Jumlah icon dalam satu file",
    ],
    correctAnswer: 1,
    explanation:
      "Icon padding adalah ruang kosong di sekitar icon yang memastikan icon tidak bersentuhan dengan elemen lain dan tetap jelas.",
  },
  {
    id: "icon-q7",
    question: "Kapan sebaiknya menggunakan icon vs text label?",
    options: [
      "Icon selalu lebih baik",
      "Gunakan icon ketika jelas, kombinasikan dengan text untuk clarity",
      "Hanya gunakan text",
      "Tidak penting",
    ],
    correctAnswer: 1,
    explanation:
      "Icon paling efektif ketika memiliki makna yang jelas dan universal. Untuk clarity, lebih baik kombinasikan dengan text label.",
  },
  {
    id: "icon-q8",
    question: "Bagaimana cara membuat icon set yang scalable?",
    options: [
      "Gunakan raster format seperti JPG",
      "Gunakan vector dengan consistent stroke and sizing rules",
      "Buat icon dalam ukuran besar saja",
      "Tidak perlu consistent",
    ],
    correctAnswer: 1,
    explanation:
      "Icon set yang scalable dibuat dengan vector format dan mengikuti aturan stroke, padding, dan sizing yang konsisten.",
  },
  {
    id: "icon-q9",
    question: "Apa itu icon naming convention?",
    options: [
      "Nama icon sesuka hati",
      "Sistem penamaan yang konsisten untuk memudahkan identifikasi dan management icon",
      "Icon harus memiliki nama panjang",
      "Tidak penting",
    ],
    correctAnswer: 1,
    explanation:
      "Naming convention yang baik seperti 'icon-arrow-right-24px' memudahkan team dalam mencari, menggunakan, dan maintain icon.",
  },
  {
    id: "icon-q10",
    question: "Berapa x-height yang harus dipertimbangkan dalam icon design?",
    options: [
      "Tidak ada hubungannya",
      "X-height dari typography untuk alignment dan consistency",
      "Tinggi dari monitor",
      "Resolusi layar",
    ],
    correctAnswer: 1,
    explanation:
      "X-height typography harus jadi referensi untuk memastikan icon sejajar dan konsisten dengan body text di design.",
  },
]

export const sampleQuiz2: Quiz = {
  id: "quiz-2",
  episodeId: "ep-2",
  title: "Icon Creation Quiz",
  questions: iconCreationQuizQuestions,
  pointsPerQuestion: 10,
}

const advancedDesignQuizQuestions: QuizQuestion[] = [
  {
    id: "adv-q1",
    question: "Apa itu Accessibility (a11y) dalam design?",
    options: [
      "Membuat design yang expensive",
      "Desain yang dapat diakses oleh semua orang termasuk penyandang disabilitas",
      "Hanya untuk website government",
      "Trend design terbaru",
    ],
    correctAnswer: 1,
    explanation:
      "Accessibility adalah prinsip untuk membuat design yang dapat digunakan oleh semua orang, terlepas dari kemampuan fisik atau kognitif mereka.",
  },
  {
    id: "adv-q2",
    question: "Apa yang dimaksud dengan Design Thinking?",
    options: [
      "Hanya membuat design yang cantik",
      "Proses problem-solving yang user-centric dan iteratif",
      "Menggunakan tool design terbaru",
      "Membaca banyak design guidelines",
    ],
    correctAnswer: 1,
    explanation:
      "Design Thinking adalah metodologi untuk memecahkan masalah dengan fokus pada kebutuhan user melalui proses empathize, define, ideate, prototype, dan test.",
  },
  {
    id: "adv-q3",
    question: "Apa itu User Journey Mapping?",
    options: [
      "Map dari lokasi user secara geografis",
      "Visualisasi alur interaksi user dengan produk dari awal hingga akhir",
      "Daftar semua fitur yang ada",
      "Dokumentasi developer",
    ],
    correctAnswer: 1,
    explanation:
      "User Journey Mapping adalah teknik visualization yang menunjukkan langkah-langkah user, touchpoint, dan emotional state mereka saat menggunakan produk.",
  },
  {
    id: "adv-q4",
    question: "Apa yang dimaksud dengan WCAG guidelines?",
    options: [
      "Panduan untuk membuat website responsive",
      "Standar internasional untuk web accessibility dan inclusivity",
      "Tools untuk design",
      "Bahasa pemrograman",
    ],
    correctAnswer: 1,
    explanation:
      "WCAG (Web Content Accessibility Guidelines) adalah standar internasional dari W3C untuk membuat content web accessible untuk semua orang.",
  },
  {
    id: "adv-q5",
    question: "Berapa banyak tahapan dalam Design Thinking?",
    options: ["3 tahapan", "5 tahapan: Empathize, Define, Ideate, Prototype, Test", "7 tahapan", "Tidak ada tahapan"],
    correctAnswer: 1,
    explanation:
      "Design Thinking memiliki 5 tahapan utama: Empathize (mengerti user), Define (definisikan masalah), Ideate (brainstorm), Prototype, dan Test.",
  },
  {
    id: "adv-q6",
    question: "Apa itu interaction design dalam prototyping?",
    options: [
      "Hanya visual design",
      "Desain bagaimana user berinteraksi dengan elemen dan alur navigasi",
      "Pemrograman aplikasi",
      "Color selection",
    ],
    correctAnswer: 1,
    explanation:
      "Interaction design adalah desain dari alur interaksi, transisi, feedback, dan animasi yang membuat prototype terasa natural dan intuitif.",
  },
  {
    id: "adv-q7",
    question: "Apa tujuan melakukan usability testing?",
    options: [
      "Membuat design lebih mahal",
      "Mengidentifikasi masalah dan area improvement dalam design dengan real user",
      "Menambah fitur",
      "Mengubah brand identity",
    ],
    correctAnswer: 1,
    explanation:
      "Usability testing melibatkan real user untuk menemukan problem, confusion, dan improvement opportunities dalam design.",
  },
  {
    id: "adv-q8",
    question: "Apa itu persona dalam UX research?",
    options: [
      "Karakter fiktif dalam cerita",
      "Representasi fictional dari target user berdasarkan research data",
      "Nama user yang sesungguhnya",
      "Testing tool",
    ],
    correctAnswer: 1,
    explanation:
      "Persona adalah karakter semi-fictional yang merepresentasikan segmen target user, dibuat berdasarkan research dan data demografis.",
  },
  {
    id: "adv-q9",
    question: "Apa perbedaan antara prototype dan wireframe?",
    options: [
      "Tidak ada perbedaan",
      "Wireframe adalah struktur dasar, prototype adalah representasi interactive dari design",
      "Prototype tidak bisa interactive",
      "Wireframe lebih detail",
    ],
    correctAnswer: 1,
    explanation:
      "Wireframe adalah blueprint struktur dan layout. Prototype adalah representasi lebih detail dan interactive dari final product.",
  },
  {
    id: "adv-q10",
    question: "Bagaimana cara membuat design yang scalable dan maintainable?",
    options: [
      "Tidak perlu planning",
      "Gunakan design system, component library, dan documentation yang jelas",
      "Copy paste design terus",
      "Buat dari awal setiap kali",
    ],
    correctAnswer: 1,
    explanation:
      "Design yang scalable dibuat dengan design system yang konsisten, reusable components, dan dokumentasi yang jelas untuk team collaboration.",
  },
]

export const sampleQuiz3: Quiz = {
  id: "quiz-3",
  episodeId: "ep-3",
  title: "Advanced Design Principles Quiz",
  questions: advancedDesignQuizQuestions,
  pointsPerQuestion: 10,
}

const episode1: Episode = {
  id: "ep-1",
  courseId: "course-1",
  title: "Mengenal Figma Untuk Pemula",
  description:
    "Hai semuanya, video ini merupakan video pertama dari series belajar UI/UX Design menggunakan Figma. Di video pertama ini saya membahas mengenai cara menggunakan figma untuk membuat UI/UX Design bagi pemula, dimana materi yang disampaikan sangat dasar sekali seperti cara sign-up di figma hingga mengenal tools yang disediakan figma untuk membantu kita para designer ataupun developer mengembangkan project UI/UX Design.",
  videoUrl: "https://www.youtube.com/embed/qk3R3mYiuPA?si=mvUY-A8PFp0UPlM6",
  duration: 1200,
  quizId: "quiz-1",
}

const episode2: Episode = {
  id: "ep-2",
  courseId: "course-1",
  title: "Cara Membuat Icon di Figma",
  description: "Di sini kalian akan belajar bagaimana cara membuat icon di figma",
  videoUrl: "https://www.youtube.com/embed/mF-S3EqDWYA?si=xexvnS8pXSahaHm5",
  duration: 1800,
  quizId: "quiz-2",
}

const episode3: Episode = {
  id: "ep-3",
  courseId: "course-1",
  title: "Advanced Design Principles & Prototyping",
  description: "Pelajari prinsip-prinsip design lanjutan dan teknik prototyping interaktif di Figma untuk membuat pengalaman user yang luar biasa.",
  videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0?si=dQw4w9WgXcQ",
  duration: 2400,
  quizId: "quiz-3",
}

export const sampleEpisode: Episode = episode1

export const sampleCourse: Course = {
  id: "course-1",
  title: "UI/UX Design Level Up with Prototyping",
  description:
    "In this intensive course, you will learn the complete UX/UI design process from start to finish. We cover user research methodologies, wireframing techniques, visual design principles, and advanced prototyping in Figma. By the end of the course, you will have built a complete design system and interactive prototype.",
  instructor: "NodBeen",
  price: 1250,
  duration: "7 days",
  level: "Intermediate",
  episodes: [episode1, episode2, episode3],
  thumbnail: "/ui.jpg",
  nextCourseId: "course-2",
}
