type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 5;

const store = new Map<string, RateLimitRecord>();

export function getClientIP(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

export function rateLimit(ip: string) {
  const now = Date.now();
  const record = store.get(ip);

  // Cleanup old records occasionally
  if (store.size > 1000) {
    for (const [key, value] of store.entries()) {
      if (now > value.resetAt) store.delete(key);
    }
  }

  // If no record or expired, create new window
  if (!record || now > record.resetAt) {
    store.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX - 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    };
  }

  // If limit reached
  if (record.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  // Increment count
  record.count += 1;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - record.count,
    resetAt: record.resetAt,
  };
}
