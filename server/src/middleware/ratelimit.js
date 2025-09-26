import rateLimit from 'express-rate-limit'

// Limit contact form submissions to 5 per 10 minutes per IP
export const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many messages from this IP, please try again later.' },
})
