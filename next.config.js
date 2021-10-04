const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.netlify.com *.googletagmanager.com analytics.google.com um.ac.id *.um.ac.id;
  img-src 'self' blob: data: https:;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' www.google-analytics.com analytics.google.com stats.g.doubleclick.net um.ac.id *.um.ac.id https://rss-rengga.vercel.app/ rss-rengga.vercel.app;
  object-src 'none';
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
];

module.exports = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },
};
