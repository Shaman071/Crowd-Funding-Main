import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Shield, Award, Mail } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
  reward: any;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, project, reward }) => {
  const [amount, setAmount] = useState(reward?.amount || 25);
  const [step, setStep] = useState(1); // 1: Payment, 2: Success
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handlePayment = () => {
    // Here you would integrate with Stripe
    // For now, we'll simulate a successful payment
    setTimeout(() => {
      setStep(2);
      // Generate receipt and certificate
      generateReceiptAndCertificate();
    }, 2000);
  };

  const generateReceiptAndCertificate = () => {
    // This would integrate with your email service
    console.log('Generating receipt and certificate...');
    console.log('Sending to email:', email);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {step === 1 ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Back This Project</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                    {reward.id > 0 && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-900">{reward.title}</h5>
                        <p className="text-sm text-blue-800 mt-1">{reward.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pledge Amount ($)
                    </label>
                    <input
                      type="number"
                      min={reward.amount || 1}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span>Pledge Amount:</span>
                        <span className="font-semibold">${amount}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Processing Fee:</span>
                        <span className="font-semibold">${Math.round(amount * 0.029 + 0.30)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between items-center font-bold">
                        <span>Total:</span>
                        <span>${amount + Math.round(amount * 0.029 + 0.30)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={!name || !email || amount < 1}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Complete Payment</span>
                  </button>

                  <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <Award className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your contribution has been successful</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Receipt sent to {email}</li>
                      <li>• Contribution certificate generated</li>
                      <li>• Project updates via email</li>
                      {reward.id > 0 && <li>• Reward delivery: {reward.delivery}</li>}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
                    <Mail className="h-4 w-4" />
                    <span>Check your email for receipt and certificate</span>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;