export function env(key: string): string {
  const value = Deno.env.get(key);
  if (value === undefined) throw new Error(`Environment key '${key}' must be specified.`);
  return value;
}
