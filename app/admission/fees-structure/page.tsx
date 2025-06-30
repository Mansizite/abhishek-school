'use client'

import React from 'react'
import { motion } from 'framer-motion'

const feeData = [
  { class: 'Nursery', new: 33000, old: 0 },
  { class: 'LKG', new: 36000, old: 30400 },
  { class: 'UKG', new: 46000, old: 39600 },
  { class: 'Std-I', new: 66400, old: 55500 },
  { class: 'Std-II', new: 68000, old: 56800 },
  { class: 'Std-III', new: 69500, old: 58100 },
  { class: 'Std-IV', new: 69500, old: 58100 },
  { class: 'Std-V', new: 69500, old: 58100 },
  { class: 'Std-VI', new: 69500, old: 58100 },
  { class: 'Std-VII', new: 69500, old: 58100 },
  { class: 'Std-VIII', new: 69500, old: 58100 },
  { class: 'Std-IX', new: 73000, old: 61600 },
  { class: 'Std-X', new: 73000, old: 61600 },
]

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7fc] to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Fee Structure for 2025–2026</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-400 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg">Applicable for New & Existing Students</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <table className="w-full border border-purple-300 rounded-lg overflow-hidden text-center table-fixed">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="p-3 text-base font-semibold border border-purple-200">Class</th>
              <th className="p-3 text-base font-semibold border border-purple-200">New Student (₹)</th>
              <th className="p-3 text-base font-semibold border border-purple-200">Old Student (₹)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {feeData.map((item, index) => (
              <tr key={index} className="hover:bg-purple-50 transition">
                <td className="p-3 border border-purple-100 font-medium text-gray-800">{item.class}</td>
                <td className="p-3 border border-purple-100 text-gray-700">
                  {item.new.toLocaleString()}
                </td>
                <td className="p-3 border border-purple-100 text-gray-700">
                  {item.old > 0 ? item.old.toLocaleString() : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Important Notes Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold text-purple-700 mb-2">Important Notes</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Fee includes academic and activity charges.</li>
          <li>Books, transport, and uniforms are charged separately.</li>
          <li>New admissions include a one-time registration fee.</li>
          <li>Fee payment is term-wise or annually as per policy.</li>
        </ul>
      </motion.div>

      {/* School Timings Section */}
    {/* School Timings Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-purple-50 to-sky-50 p-8 rounded-xl shadow-md"
>
  <h3 className="text-2xl font-bold text-center text-purple-700 mb-6">School Timings</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Student Timings */}
    <div className="bg-white rounded-lg p-6 border border-purple-200 shadow">
      <h4 className="text-xl font-semibold text-purple-600 mb-3">Student Timings</h4>
      <ul className="text-gray-700 space-y-2">
        <li>
          <strong>Monday to Friday:</strong> 8:45 AM – 3:00 PM
        </li>
        <li>
          <strong>Saturday:</strong> 8:45 AM – 12:00 Noon
        </li>
      </ul>
    </div>

    {/* Office Timings */}
    <div className="bg-white rounded-lg p-6 border border-sky-200 shadow">
      <h4 className="text-xl font-semibold text-sky-600 mb-3">School Office Timings</h4>
      <ul className="text-gray-700 space-y-2">
        <li>
          <strong>Monday to Friday:</strong> 8:30 AM – 3:00 PM
        </li>
        <li>
          <strong>Saturday:</strong> 8:30 AM – 1:00 PM
        </li>
      </ul>
    </div>
  </div>
</motion.div>

    </div>
  )
}
