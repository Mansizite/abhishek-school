"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function LoginPage() {
  const { toast } = useToast()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [forgotData, setForgotData] = useState({
    email: "",
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForgotData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", loginData)
    toast({
      title: "Login Successful",
      description: "Welcome back to Abhishek International School portal.",
    })
  }

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Forgot password submitted:", forgotData)
    toast({
      title: "Password Reset Email Sent",
      description: "Please check your email for instructions to reset your password.",
    })
    setForgotData({ email: "" })
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12">
      <div className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign in to your account</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to access the school portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLoginSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-medium">
                          Password
                        </label>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700"
                    >
                      Sign In
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-gray-500">Choose user type:</div>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    Student
                  </Button>
                  <Button variant="outline" size="sm">
                    Parent
                  </Button>
                  <Button variant="outline" size="sm">
                    Teacher
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="forgot">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Forgot your password?</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and we'll send you a reset link
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="forgot-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="forgot-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={forgotData.email}
                        onChange={handleForgotChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700"
                    >
                      Send Reset Link
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-center w-full">
                  Remember your password?{" "}
                  <Link
                    href="#"
                    className="text-sky-600 hover:text-sky-800 font-medium"
                    onClick={() => document.querySelector('[data-value="login"]')?.click()}
                  >
                    Back to login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

