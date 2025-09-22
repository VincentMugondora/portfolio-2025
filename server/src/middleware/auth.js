import jwt from 'jsonwebtoken';

export function auth(required = true) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) {
      if (required) return res.status(401).json({ message: 'No token provided' });
      req.user = null;
      return next();
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return next();
    } catch (err) {
      if (required) return res.status(401).json({ message: 'Invalid token' });
      req.user = null;
      return next();
    }
  };
}

export function signToken(payload, options = {}) {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, { expiresIn: '7d', ...options });
}
