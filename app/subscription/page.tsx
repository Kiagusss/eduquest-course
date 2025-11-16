'use client'

import { useState, useEffect } from 'react'
import { Check, Moon, Sun, Zap, Star, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface SubscriptionPlan {
  name: string
  price: number
  period: string
  description: string
  icon: React.ReactNode
  features: string[]
  benefits: Array<{
    title: string
    icon: React.ReactNode
    description: string
  }>
  highlighted: boolean
  buttonText: string
  buttonVariant: 'default' | 'outline'
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Free',
    price: 0,
    period: '/bulan',
    description: 'Mulai belajar dengan fitur dasar',
    icon: <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-2xl">📚</div>,
    benefits: [
      {
        title: 'Akses Terbatas',
        icon: <Star className="w-5 h-5" />,
        description: '5 kursus pilihan'
      },
      {
        title: 'Poin Bonus',
        icon: <Trophy className="w-5 h-5" />,
        description: '50 poin/bulan'
      },
      {
        title: 'Coaching',
        icon: <Zap className="w-5 h-5" />,
        description: 'Tidak tersedia'
      },
    ],
    features: [
      'Akses ke 5 kursus pilihan',
      '50 poin bonus setiap bulan',
      'Komunitas belajar online',
      'Sertifikat dasar',
      'Support email',
    ],
    highlighted: false,
    buttonText: 'Paket Gratis',
    buttonVariant: 'outline',
  },
  {
    name: 'Premium',
    price: 99000,
    period: '/bulan',
    description: 'Akses penuh untuk pembelajaran maksimal',
    icon: <Star className="w-14 h-14 text-yellow-400" />,
    benefits: [
      {
        title: 'Semua Course',
        icon: <Star className="w-5 h-5" />,
        description: 'Akses ke SEMUA kursus'
      },
      {
        title: 'Poin Bonus',
        icon: <Trophy className="w-5 h-5" />,
        description: '200 poin/bulan'
      },
      {
        title: 'Free Coaching',
        icon: <Zap className="w-5 h-5" />,
        description: '3 sesi gratis'
      },
    ],
    features: [
      'Akses ke SEMUA kursus',
      '200 poin bonus setiap bulan',
      'Prioritas dalam komunitas',
      'Sertifikat premium dengan badge',
      'Free coaching 3 sesi',
      'Support prioritas 24/7',
      'Download materi kursus',
      'Akses ke webinar eksklusif',
    ],
    highlighted: true,
    buttonText: 'Upgrade ke Premium',
    buttonVariant: 'default',
  },
  {
    name: 'Pro',
    price: 199000,
    period: '/bulan',
    description: 'Untuk profesional yang serius',
    icon: <Zap className="w-14 h-14 text-purple-400" />,
    benefits: [
      {
        title: 'Semua Course',
        icon: <Star className="w-5 h-5" />,
        description: 'Akses PREMIUM + eksklusif'
      },
      {
        title: 'Poin Bonus',
        icon: <Trophy className="w-5 h-5" />,
        description: '500 poin/bulan'
      },
      {
        title: 'Unlimited Coaching',
        icon: <Zap className="w-5 h-5" />,
        description: 'Sesi tanpa batas'
      },
    ],
    features: [
      'Akses ke SEMUA kursus & konten eksklusif',
      '500 poin bonus setiap bulan',
      'VIP dalam komunitas',
      'Sertifikat pro dengan prioritas',
      'Free coaching unlimited',
      'Support prioritas dengan dedicated mentor',
      'Download & export semua materi',
      'Akses beta fitur terbaru',
      'Networking premium event',
      'Personal learning dashboard',
    ],
    highlighted: false,
    buttonText: 'Upgrade ke Pro',
    buttonVariant: 'outline',
  },
]

export default function SubscriptionPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) return null

  const isDark = theme === 'dark'
  const themeButtonClass = isDark
    ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-cyan-500'
    : 'bg-slate-100 border-slate-300 hover:bg-slate-200 text-purple-600'

  const gradientBgClass = isDark
    ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950'
    : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'

  return (
    <div className={`flex-1 p-8 min-h-screen ${gradientBgClass}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 border mb-8 ${themeButtonClass}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Header */}
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Upgrade Sekarang untuk Mendapat Keuntungan Lebih</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Pilih Paket Subscription Anda
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Tingkatkan pembelajaran Anda dengan akses penuh ke semua kursus, poin bonus, dan sesi coaching gratis
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Tahunan <span className="text-xs ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded">Hemat 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {subscriptionPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted
                    ? 'border-2 border-blue-600 dark:border-blue-500 md:scale-105 shadow-lg'
                    : 'border border-gray-200 dark:border-gray-700'
                } ${plan.highlighted ? 'bg-white dark:bg-slate-800' : 'bg-white/50 dark:bg-slate-800/50'}`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      PALING POPULER
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Icon and Name */}
                  <div className="mb-6">
                    <div className="mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price === 0 ? (
                        <span className="text-4xl font-bold">Gratis</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">
                            Rp {(plan.price * (billingPeriod === 'yearly' ? 0.8 : 1)).toLocaleString('id-ID')}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                        </>
                      )}
                    </div>
                    {billingPeriod === 'yearly' && plan.price > 0 && (
                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">Hemat Rp {((plan.price * 12 * 0.2)).toLocaleString('id-ID')}/tahun</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        : ''
                    }`}
                    variant={plan.buttonVariant as any}
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Features */}
                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pertanyaan Umum</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Apa itu poin bonus?',
                a: 'Poin bonus dapat digunakan untuk membeli kursus tambahan, konten eksklusif, atau merchandise resmi Mentori.',
              },
              {
                q: 'Bagaimana coaching session bekerja?',
                a: 'Anda akan mendapatkan sesi 1-on-1 dengan mentor profesional melalui video call selama 30 menit per sesi.',
              },
              {
                q: 'Bisakah saya membatalkan subscription kapan saja?',
                a: 'Ya, Anda dapat membatalkan subscription kapan saja tanpa penalti. Akses akan berakhir pada akhir periode billing.',
              },
              {
                q: 'Apakah ada jaminan uang kembali?',
                a: 'Kami menawarkan garansi 30 hari uang kembali untuk semua paket berbayar jika Anda tidak puas.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Pembelajaran Anda?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelajar yang telah mengupgrade ke Premium atau Pro dan raih kesuksesan mereka
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
              Mulai Trial Gratis Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
