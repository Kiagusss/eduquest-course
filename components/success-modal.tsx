'use client';

import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

export default function SuccessModal({ isOpen, onClose, amount }: SuccessModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  // Saat modal pertama kali terbuka
  useEffect(() => {
    if (!isOpen) return;

    setShowConfetti(true);
    setCountdown(5);

    const confettiTimer = setTimeout(() => setShowConfetti(false), 2000);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(confettiTimer);
      clearInterval(countdownInterval);
    };
  }, [isOpen]);

  // Redirect setelah countdown selesai
  useEffect(() => {
    if (isOpen && countdown === 0) {
      router.push('/course');
    }
  }, [countdown, isOpen, router]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 space-y-6 pointer-events-auto animate-in zoom-in-50 duration-500 slide-in-from-bottom-8">

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-in bounce duration-700">
                <CheckCircle className="w-10 h-10 text-white animate-in scale-in-75 duration-500" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Pembayaran Berhasil!
            </h2>
            <p className="text-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              Terima kasih atas pembelian Anda
            </p>
          </div>

          {/* Amount */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <p className="text-sm text-foreground/70 mb-1">Total Pembayaran</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rp {amount.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Detail */}
          <div className="space-y-2 text-sm text-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <div className="flex items-center justify-between p-3 bg-background rounded-lg">
              <span>Status Pesanan</span>
              <span className="font-semibold text-primary">Dikonfirmasi</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-background rounded-lg">
              <span>Email Konfirmasi</span>
              <span className="font-semibold text-foreground">Dikirim</span>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <Button
              onClick={() => router.push('/course')}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 h-11 rounded-lg text-white font-semibold"
            >
              Ke Menu Course ({countdown}s)
            </Button>
          </div>

          <p className="text-xs text-foreground/50 text-center animate-in fade-in duration-500 delay-1000">
            Akan dialihkan ke menu course dalam {countdown} detik...
          </p>
        </div>
      </div>

      {/* Confetti (aman) */}
      {showConfetti && (
        <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-in fade-out duration-2000"
              style={{
                left: Math.random() * 100 + '%',
                top: -10,
                backgroundColor: ['#8B5CF6', '#06B6D4', '#0F172A'][Math.floor(Math.random() * 3)],
                animation: `confetti-fall ${2 + Math.random()}s ease-in forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
