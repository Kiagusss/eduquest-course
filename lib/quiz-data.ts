import type { Course, Episode, Quiz, QuizQuestion } from "./types"

// ... existing quiz questions code ...

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

const episode1: Episode = {
  id: "ep-1",
  courseId: "course-1",
  title: "Introduction to UI/UX Design",
  description:
    "Learn the fundamentals of UI and UX design, including user research, wireframing, and prototyping basics.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  duration: 1200,
  quizId: "quiz-1",
}

const episode2: Episode = {
  id: "ep-2",
  courseId: "course-1",
  title: "User Research & Analysis",
  description: "Deep dive into user research methodologies and how to analyze user behavior patterns.",
  videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
  duration: 1800,
  quizId: "quiz-2",
}

const episode3: Episode = {
  id: "ep-3",
  courseId: "course-1",
  title: "Wireframing & Prototyping",
  description: "Master wireframing techniques and create interactive prototypes using Figma.",
  videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  duration: 2400,
  quizId: "quiz-3",
}

export const sampleEpisode: Episode = episode1

export const sampleCourse: Course = {
  id: "course-1",
  title: "UI/UX Design Level Up with Prototyping",
  description:
    "In this intensive course, you will learn the complete UX/UI design process from start to finish. We cover user research methodologies, wireframing techniques, visual design principles, and advanced prototyping in Figma. By the end of the course, you will have built a complete design system and interactive prototype.",
  instructor: "Sarah Johnson",
  price: 1250,
  duration: "7 days",
  level: "Intermediate",
  episodes: [episode1, episode2, episode3],
  thumbnail: "/ui-ux-design-course.png",
  nextCourseId: "course-2",
}

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

export const sampleQuiz2: Quiz = {
  id: "quiz-2",
  episodeId: "ep-2",
  title: "User Research Quiz",
  questions: advancedQuizQuestions.slice(0, 3),
  pointsPerQuestion: 10,
}

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
