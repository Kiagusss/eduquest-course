'use client';

import { ChevronRight, ShoppingCart, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import SuccessModal from './success-modal';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

interface OrderSummary {
  subtotal: number;
  tax: number;
  total: number;
}

const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const cartItems: CartItem[] = [
    {
      id: 'prof-plan',
      name: 'Paket Profesional',
      price: 990000,
      quantity: 1,
      description: 'Langganan bulanan dengan akses unlimited',
    },
    {
      id: 'premium-addon',
      name: 'Sesi Coaching 1-on-1',
      price: 490000,
      quantity: 2,
      description: 'Add-on mentorship premium',
    },
  ];

  // Calculate order summary
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + tax;

  const orderSummary: OrderSummary = {
    subtotal,
    tax,
    total,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Link href="/">
                <Image src="/images/eduquest_logo.png" width={50} height={50} alt='Eduquest Logo'/>
              </Link>
           
            <span className="text-xl font-bold text-foreground">EduQuest</span>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/">Kembali ke Harga</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-12">
          <Link href="/" className="hover:text-foreground transition">
            Harga
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-semibold">Checkout</span>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Information */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Informasi Penagihan</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nama Depan</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nama Belakang</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    required
                  />
                </div>

                {/* Address Fields */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Alamat</label>
                  <input
                    type="text"
                    placeholder="Jalan Merpati No. 123"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Kota</label>
                    <input
                      type="text"
                      placeholder="Jakarta"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Provinsi</label>
                    <input
                      type="text"
                      placeholder="DKI Jakarta"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Kode Pos</label>
                    <input
                      type="text"
                      placeholder="12345"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="pt-6 border-t border-border space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Metode Pembayaran</h3>

                  <div className="space-y-3">
                    {/* Credit Card Option */}
                    <label className="flex items-center p-4 bg-background border border-border rounded-lg cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="ml-3 text-foreground font-medium">Kartu Kredit atau Debit</span>
                    </label>

                    {/* PayPal Option */}
                    <label className="flex items-center p-4 bg-background border border-border rounded-lg cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="ml-3 text-foreground font-medium">PayPal</span>
                    </label>
                  </div>

                  {/* Card Details */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Nomor Kartu</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Tanggal Berlaku</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Security Notice */}
                <div className="flex items-start gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <Lock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Pembayaran Anda aman</p>
                    <p className="text-xs text-foreground/60 mt-1">
                      Semua transaksi dienkripsi dan diproses dengan aman
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-primary to-secondary dark:to-slate-300 hover:shadow-lg hover:shadow-primary/30 text-white font-semibold h-12 rounded-lg transition-all disabled:opacity-50"
                >
                  {isProcessing ? 'Memproses...' : `Bayar ${formatRupiah(orderSummary.total)}`}
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-secondary" />
                  Ringkasan Pesanan
                </h3>

                {/* Cart Items */}
                <div className="space-y-4 pb-6 border-b border-border">
                  {cartItems.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-foreground/60">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/60">
                          {item.quantity}x {formatRupiah(item.price)}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {formatRupiah(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Totals */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-foreground/70">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">{formatRupiah(orderSummary.subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-foreground/70">
                    <span className="text-sm">Pajak (10%)</span>
                    <span className="text-sm">{formatRupiah(orderSummary.tax)}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary dark:to-slate-300 bg-clip-text text-transparent">
                      {formatRupiah(orderSummary.total)}
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-2 pt-3 border-t border-border">
                  <label className="text-xs font-medium text-foreground/70">Kode Promo</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Masukkan kode"
                      className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                    <Button
                      variant="outline"
                      className="text-xs px-3 h-10 border-border hover:border-primary"
                    >
                      Terapkan
                    </Button>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground/80">
                  <p className="font-medium mb-1">Jaminan uang kembali</p>
                  <p className="text-xs text-foreground/60">Tidak puas? Dapatkan uang kembali dalam 30 hari.</p>
                </div>
              </div>

              {/* Continue Shopping */}
              <Button
                variant="outline"
                asChild
                className="w-full border-border hover:border-primary text-foreground"
              >
                <Link href="/">Lanjutkan Berbelanja</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal with animation */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        amount={orderSummary.total}
      />
    </div>
  );
}
