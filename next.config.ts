import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent browsers from guessing MIME types
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Block clickjacking — stops your site being embedded in iframes on other domains
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Force HTTPS for 2 years, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Control referrer info sent to other sites
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable access to sensitive browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs inline scripts; Google Fonts needs googleapis
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Inline styles + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Font files
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs + common free photo hosts (for Padelr court art)
      "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://source.unsplash.com",
      // Fetch/XHR — self only
      "connect-src 'self'",
      // Allow Google Calendar booking to open
      "frame-src https://calendar.google.com",
      // Media
      "media-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
