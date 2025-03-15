import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">TellMeIndia</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/delete-account" className="text-sm font-medium hover:text-primary">
              Delete Account
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:flex">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">Last updated: March 15, 2025</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Introduction</h2>
                <p>
                  TellMeIndia ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our mobile
                  application and website.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                  please do not access the application.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
                <p>
                  We may collect information about you in various ways. The information we may collect via the
                  Application includes:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Personal Data: Name, email address, phone number, and profile information.</li>
                  <li>
                    Derivative Data: Information our servers automatically collect when you access the Application.
                  </li>
                  <li>Financial Data: Information related to your payment methods used to make purchases.</li>
                  <li>
                    Facebook Permissions: If you connect your account to Facebook, we may have access to certain
                    information.
                  </li>
                  <li>
                    Data From Social Networks: User information from social networking sites if you connect your
                    account.
                  </li>
                  <li>Geo-Location Information: We may request access to your location if you consent.</li>
                  <li>Mobile Device Access: We may request access to certain features from your mobile device.</li>
                  <li>Mobile Device Data: Device information such as your mobile device ID number and model.</li>
                  <li>Push Notifications: We may request to send you push notifications.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Use of Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and
                  customized experience. Specifically, we may use information collected about you via the Application
                  to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create and manage your account.</li>
                  <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                  <li>Deliver targeted advertising, newsletters, and other information regarding promotions.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Enable user-to-user communications.</li>
                  <li>
                    Generate a personal profile about you to make future visits to the Application more personalized.
                  </li>
                  <li>Increase the efficiency and operation of the Application.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
                  <li>Notify you of updates to the Application.</li>
                  <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
                  <li>Perform other business activities as needed.</li>
                  <li>Request feedback and contact you about your use of the Application.</li>
                  <li>Resolve disputes and troubleshoot problems.</li>
                  <li>Respond to product and customer service requests.</li>
                  <li>Send you a newsletter.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Disclosure of Your Information</h2>
                <p>
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By Law or to Protect Rights: If we believe the release of information is required by law.</li>
                  <li>
                    Third-Party Service Providers: We may share your information with third parties that perform
                    services for us.
                  </li>
                  <li>
                    Marketing Communications: With your consent, we may share your information with third parties for
                    marketing purposes.
                  </li>
                  <li>
                    Interactions with Other Users: If you interact with other users of the Application, they may see
                    your profile.
                  </li>
                  <li>Online Postings: When you post comments, your posts may be viewed by all users.</li>
                  <li>Third-Party Advertisers: We may use third-party advertising companies to serve ads.</li>
                  <li>Affiliates: We may share your information with our affiliates.</li>
                  <li>Business Partners: We may share your information with our business partners.</li>
                  <li>Other Third Parties: We may share your information with advertisers and investors.</li>
                  <li>
                    Sale or Bankruptcy: If we reorganize or sell all or a portion of our assets, your information may be
                    transferred.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p>
                  TellMeIndia
                  <br />
                  Email: social@tellmeindia.com
                  <br />
                  Phone: +91 9119295094
                </p>
              </div>
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
                  <Link href="/#features" className="text-sm hover:text-primary">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-primary">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy-policy" className="text-sm hover:text-primary">
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
                  <Link href="/delete-account" className="text-sm hover:text-primary">
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
            <p className="text-sm text-muted-foreground">© 2025 TellMeIndia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

