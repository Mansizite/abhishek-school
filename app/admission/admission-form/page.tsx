'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaUserTie, FaHome } from 'react-icons/fa'

export default function AdmissionFormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    classSeeking: '',
    parentName: '',
    contact: '',
    email: '',
    address: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Admission form submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 to-sky-50 py-16 px-4 font-serif">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-[#e1bee7]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-[#6a1b9a] mb-10">Admission Form</h1>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Student Info */}
          <div>
            <div className="flex items-center gap-2 text-[#6a1b9a] text-xl font-semibold mb-4">
              <FaUserGraduate />
              Student Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Class Seeking Admission For</label>
                <input
                  name="classSeeking"
                  value={formData.classSeeking}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/* Parent Info */}
          <div>
            <div className="flex items-center gap-2 text-[#6a1b9a] text-xl font-semibold mb-4">
              <FaUserTie />
              Parent / Guardian Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Parent Name</label>
                <input
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/* Address & Notes */}
          <div>
            <div className="flex items-center gap-2 text-[#6a1b9a] text-xl font-semibold mb-4">
              <FaHome />
              Address & Additional Info
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block font-medium mb-1">Residential Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message / Note</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-[#6a1b9a] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#8e24aa] transition"
            >
              Submit Admission Form
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
