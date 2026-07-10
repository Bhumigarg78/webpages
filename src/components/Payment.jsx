import { FaQrcode } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";
import qr from "../assets/qr-beangate.png";
import {
  FaCheck,
  FaShieldAlt,
  FaCreditCard,
  FaMoneyBill,
  FaCopy,
} from "react-icons/fa";

function Payment() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showInstallment, setShowInstallment] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(1);
  // ✅ COPY FUNCTION (toast effect added)
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);

    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };
 const selectePlan = {
  title: "MERN Stack Master Program",
  total: "₹6,000",
};

  
  const bankData = [
    { label: "Account Holder", value: "BEANGATE IT SOLUTIONS PVT. LTD." },
    { label: "Bank Name", value: "IDFC FIRST BANK" },
    { label: "Account Number", value: "10126070211" },
    { label: "IFSC Code", value: "IDFB0041382" },
    { label: "Branch Code", value: "41382" },
    { label: "Branch", value: "BHOPAL ARERA COLONY" },
  ];

  return (
    <div>
      {/* PRICING */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`relative rounded-3xl p-8 bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl ${
                plan.highlight ? "scale-105 border-yellow-400" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-sm">
                  ⭐ MOST POPULAR
                </div>
              )}
              <div className="flex justify-center items-center flex-col">
                <div className="text-3xl mb-4">{plan.icon}</div>

                <h2 className="text-xl font-bold mb-3">{plan.title}</h2>

                {plan.old && (
                  <p className="line-through text-gray-400">{plan.old}</p>
                )}

                <h1 className="text-4xl font-extrabold">{plan.price}</h1>

                <p className="text-green-400 mt-2">Total: {plan.total}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-400" /> {f}
                  </li>
                ))}
              </ul>

             <button
  onClick={() => {
    setSelectedPlan(plan);

    if (plan.btn === "View Installment Plans") {
      setShowQR(false);            // ❌ QR band
      setShowInstallment(true);    // ✅ Installment open
    } else {
      setShowInstallment(false);   // ❌ Installment band
      setShowQR(true);             // ✅ QR open
    }
  }}
  className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${
    plan.color || "from-green-500 to-teal-500"
  }`}
>
  {plan.btn}
</button>
            </motion.div>
          ))}
        </div>
      </section> */}
      {/* HEADING */}
      <section
        className="py-16 bg-gradient-to-r from-blue-950 to-indigo-900 text-center"
        id="plans"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Complete Your{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Payment Process
          </span>
        </h1>

        <p className="mt-4 text-gray-300">
          Choose your preferred payment method and submit your details after
          completing the payment
        </p>
      </section>

      {/* BANK DETAILS */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-950 to-indigo-900 text-center">
        <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg">
          {/* 🔥 QR ICON + TITLE */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 shadow-lg">
              <FaQrcode className="text-2xl text-white" />
            </div>

            <button
             onClick={() => {
  if (!selectedPlan) {
    setSelectedPlan({
      title: "Custom Payment",
      total: "As per plan",
    });
  }
  setShowQR(true);
}}
              className="px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition active:scale-95"
            >
              Scan QR Code to Pay
            </button>
          </div>

          {/* HEADING */}
          <h2 className="text-2xl font-bold mb-8 text-white">
            Bank Account Details for Deposit
          </h2>

          {/* BANK DETAILS */}
          <div className="grid md:grid-cols-2 gap-4 text-white">
            {bankData.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white/10 p-4 rounded-xl"
              >
                <div className="text-left">
                  <p className="text-sm text-gray-300">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>

                <FaCopy
                  onClick={() => handleCopy(item.value)}
                  className="cursor-pointer"
                />

                {/* ✅ COPY FEEDBACK */}
                {copied === item.value && (
                  <span className="text-green-400 text-xs">Copied!</span>
                )}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
           onClick={() => {
  if (!selectedPlan) {
    setSelectedPlan({
      title: "Custom Payment",
      total: "Manual Entry",
    });
  }
  setShowForm(true);
}}
            className="mt-8 px-6 py-3 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700 transition"
          >
            Already Made Payment? Submit Details
          </button>
        </div>
      </section>
      {/* 🔥 QR MODAL */}
      {showQR && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-3">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0b0233] to-[#0f2a44] p-4 sm:p-6 rounded-2xl w-full max-w-md text-white relative"
          >
            {/* Close */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            {/* QR ICON + TITLE */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <FaQrcode className="text-xl sm:text-2xl text-white" />
              </div>

              <h2 className="font-bold text-base sm:text-lg">
                Scan QR Code to Pay
              </h2>
            </div>

            {/* QR IMAGE */}
            <div className="bg-white w-full max-w-[220px] sm:max-w-[250px] mx-auto rounded-xl flex justify-center">
              <img
                src={qr}
                alt="qr"
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="mt-5 bg-white/10 p-3 sm:p-4 rounded-xl text-xs sm:text-sm">
              <p className="flex justify-between">
                <span>Plan:</span>
                <span className="font-semibold">{selectePlan.title}</span>
              </p>

              <p className="flex justify-between mt-2">
                <span>Amount:</span>
                <span className="text-green-400 font-bold">
                  {selectePlan.total}
                </span>
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button
                onClick={() => setShowQR(false)}
                className="w-full py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setShowQR(false);
                  setShowForm(true);
                }}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
              >
                I've Paid
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* 🔥 INSTALLMENT MODAL */}
    
      {showForm && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0b0233] to-[#0f2a44] p-6 md:p-8 rounded-2xl w-[90%] max-w-md text-white relative max-h-[90vh] overflow-y-auto"
          >
            {/* CLOSE */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="text-center mb-4">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                ✔
              </div>
              <h2 className="text-xl font-bold">Confirm Your Payment</h2>
            </div>

            {/* PLAN INFO */}
            <div className="bg-white/10 p-4 rounded-xl text-sm mb-4">
              <p className="flex justify-between">
                <span>Plan:</span>
                <span>{selectePlan.title}</span>
              </p>
              <p className="flex justify-between mt-2">
                <span>Amount Paid:</span>
                <span className="text-green-400 font-bold">
                  {selectePlan.total}
                </span>
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="UPI ID (Optional)"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <button className="w-full py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600">
                Submit Payment Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Payment;