"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  isBot: boolean
  typing?: boolean
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [waitingForInput, setWaitingForInput] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        const initialMessage = "Hi, How can I help you?"
        const messageId = `bot-${Date.now()}`
        setMessages([{ id: messageId, text: initialMessage, isBot: true }])
        setWaitingForInput(true)
      }, 500)
    }
  }

  const sendBotMessage = (text: string) => {
    const messageId = `bot-${Date.now()}`

    // Add the complete message immediately without typing effect
    setMessages((prev) => [...prev, { id: messageId, text, isBot: true }])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessageId = `user-${Date.now()}`
    setMessages((prev) => [...prev, { id: userMessageId, text: inputValue, isBot: false }])
    setInputValue("")
    setWaitingForInput(false)

    // Simulate bot response
    setTimeout(() => {
      sendBotMessage("Please Call Sweta Mam for more Enquiry: +91 98765 43210")

      setTimeout(() => {
        sendBotMessage(
          "We have 20% off offer now on admission fees for early registrations! Our school provides excellent academic programs, sports facilities, and extracurricular activities.",
        )

        setTimeout(() => {
          sendBotMessage("Thank You!")
          setWaitingForInput(true)
        }, 2000)
      }, 2000)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 z-50 flex items-center justify-center"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 sm:w-96 z-50 transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <Card className="shadow-xl border-t-4 border-t-sky-600 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-sky-600 to-purple-600 text-white p-4">
            <CardTitle className="text-lg flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Abhishek International School Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "mb-3 max-w-[80%] rounded-lg p-3",
                    message.isBot ? "bg-white text-gray-800 shadow-sm ml-0" : "bg-sky-600 text-white ml-auto",
                  )}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder={waitingForInput ? "Type your question..." : "Chat is responding..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={!waitingForInput}
                className="flex-1"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!waitingForInput || !inputValue.trim()}
                className="bg-sky-600 hover:bg-sky-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

