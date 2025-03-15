import Link from "next/link";
import { Play, MessageCircle, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/theme-toggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">TellMeIndia</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/delete-account"
              className="text-sm font-medium hover:text-primary"
            >
              Delete Account
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.kaustubh010.tellmeindia&pcampaignid=web_share"
              }
            >
              <Button className="hidden md:flex gap-2">
                <Play className="h-4 w-4 fill-current" />
                Get App
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <Play className="h-4 w-4 fill-current" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">TellMeIndia</span>
                  <span className="block text-2xl sm:text-3xl mt-2 text-muted-foreground font-normal">
                    Information for the Misinformed
                  </span>
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground text-lg">
                  Connect with people across India, share your thoughts, and
                  stay informed with the latest news and trends.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.kaustubh010.tellmeindia&pcampaignid=web_share"
                  }
                >
                  <Button size="lg" className="gap-2">
                    <Play className="h-5 w-5 fill-current" />
                    Get it on Google Play
                  </Button>
                </Link>
                <Link href={"/privacy-policy"}>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[400px] h-[400px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1735893092894.jpg-LtmXPicYBIymSAtB8OiBATRpbRSH37.jpeg"
                  alt="TellMeIndia Logo"
                  className="w-full h-full object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Core Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to stay connected and informed
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Posts & Comments</h3>
                <p className="text-muted-foreground">
                  Share your thoughts and engage with others through posts and
                  comments
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Likes & Shares</h3>
                <p className="text-muted-foreground">
                  Show appreciation for content and share it with your network
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">User Profiles</h3>
                <p className="text-muted-foreground">
                  Customize your profile and connect with friends and family
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join TellMeIndia Today
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Download our app and start connecting with people across India
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.kaustubh010.tellmeindia&pcampaignid=web_share"
                }
              >
                <Button
                  size="lg"
                  className="w-full bg-background text-primary hover:bg-background/90"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Get it on Google Play
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">TellMeIndia</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-sm hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm hover:text-primary">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Account</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/delete-account"
                    className="text-sm hover:text-primary"
                  >
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Connect</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 TellMeIndia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
