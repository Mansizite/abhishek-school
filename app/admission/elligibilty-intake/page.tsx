'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function EligibilityIntakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#6a1b9a] mb-4">Eligibility & Intake</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We follow a child-centered and age-appropriate admission process with limited class strength to ensure quality learning.
          </p>
        </motion.div>

        {/* Class Intake */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-[#e1bee7] shadow-xl rounded-xl p-8 max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Class-wise Intake</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
            <li><strong>Nursery & Jr. KG:</strong> 25 students per class</li>
            <li><strong>Sr. KG to Grade II:</strong> 30 students per class</li>
            <li><strong>Grade III to Grade V:</strong> 35 students per class</li>
            <li><strong>Grade VI and above:</strong> 40 students per class</li>
          </ul>
        </motion.div>

        {/* Age Eligibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-[#e1bee7] shadow-xl rounded-xl p-8 max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Age Eligibility Criteria (As on 31st December)</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
            <li><strong>Nursery:</strong> 3+ years</li>
            <li><strong>Junior KG:</strong> 4+ years</li>
            <li><strong>Senior KG:</strong> 5+ years</li>
            <li><strong>Grade I:</strong> 6+ years</li>
          </ul>
          <p className="mt-4 text-gray-600 italic">
            <span className="text-purple-700 font-semibold">Note:</span> For Grade I admissions in 2025-26, the child should complete 7+ years by 31st December 2025.
          </p>
        </motion.div>

        {/* Instructions for Parents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-[#e1bee7] shadow-xl rounded-xl p-8 max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Important Instructions for Parents</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
            <li>Submit original Birth Certificate and Aadhar Card copy at the time of admission.</li>
            <li>Medical fitness certificate is mandatory.</li>
            <li>School uniform and book list will be shared post admission confirmation.</li>
            <li>Admission is strictly based on eligibility and availability of seats.</li>
          </ul>
        </motion.div>

        {/* Fair Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-[#ede7f6] to-[#f3e5f5] p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Transparent Admission Process</h2>
          <p className="text-gray-700 text-lg">
            Abhishek International School believes in an open and fair admission policy. Admissions are granted on a first-come, first-served basis after ensuring eligibility and interaction with the child (if applicable). No donations or recommendations are entertained. We encourage a partnership between school and home to nurture every child’s potential.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
