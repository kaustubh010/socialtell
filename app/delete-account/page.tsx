'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ThemeToggle from "@/components/theme-toggle";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmText !== "DELETE") {
      setModalMessage("You must type DELETE to confirm.");
      setIsModalOpen(true);
      return;
    }
  
    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to request deletion");
  
      if (data.alreadyRequested) {
        setModalMessage("Your account deletion request is already in process.");
      } else {
        setModalMessage("Your account has been scheduled for deletion. You will receive a confirmation email.");
      }
  
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
    }
  };  

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">TellMeIndia</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary">Privacy Policy</Link>
            <Link href="/delete-account" className="text-sm font-medium hover:text-primary">Delete Account</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:flex">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Delete Account</CardTitle>
              <CardDescription>Request to delete your account and all associated data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
                <Textarea
                  id="reason"
                  placeholder="Why are you deleting your account?"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Type "DELETE" to confirm</Label>
                <Input
                  id="confirm"
                  placeholder="DELETE"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={handleDeleteAccount}
              >
                Request Account Deletion
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Modal for displaying messages */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <DialogTitle className="text-xl font-bold text-primary">Notice</DialogTitle>
          <p className="text-md text-gray-700 mt-2">{modalMessage}</p>
          <Button
            className="mt-4 w-full bg-primary text-white hover:bg-primary/90"
            onClick={() => setIsModalOpen(false)}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>

      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">TellMeIndia</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-sm hover:text-primary">Home</Link></li>
                <li><Link href="/#features" className="text-sm hover:text-primary">Features</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Legal</h3>
              <ul className="space-y-1">
                <li><Link href="/privacy-policy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Account</h3>
              <ul className="space-y-1">
                <li><Link href="/delete-account" className="text-sm hover:text-primary">Delete Account</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Connect</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="text-sm hover:text-primary">Contact Us</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 TellMeIndia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
