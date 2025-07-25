const requests = new Map()

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, timestamps] of requests.entries()) {
    const recent = timestamps.filter((time) => now - time < 300000) // 5 minutes
    if (recent.length === 0) {
      requests.delete(ip)
    } else {
      requests.set(ip, recent)
    }
  }
}, 300000)
/**
 * Basic rate limiter to use in the email form and etc. Still need to provide ip from headers.get('x-forwarded-for') || headers.get('x-real-ip') || headers.get(127.0.0.1) (nextjs)
 * @param {*} ip
 * @param {*} maxRequests default 3
 * @param {*} windowMs default 5 minutes/300000ms
 * @returns
 */
export function rateLimit(ip, maxRequests = 3, windowMs = 300000) {
  const now = Date.now()
  const windowStart = now - windowMs

  if (!requests.has(ip)) {
    requests.set(ip, [])
  }

  // Get recent requests for this IP
  const ipRequests = requests.get(ip).filter((time) => time > windowStart)

  if (ipRequests.length >= maxRequests) {
    return false
  }

  // Add this request
  ipRequests.push(now)
  requests.set(ip, ipRequests)
  return true
}
