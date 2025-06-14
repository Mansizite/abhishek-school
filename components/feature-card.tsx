import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="bg-gradient-to-r from-sky-500 to-purple-500 pb-2 pt-6 text-white">
        <div className="mb-2 flex justify-center">
          <Icon className="h-10 w-10" />
        </div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <CardDescription className="text-center text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

