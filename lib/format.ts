export function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits === "9710000000") return "+971 0 000 0000";
  if (digits.startsWith("971") && digits.length >= 11) {
    return `+971 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return phone.startsWith("+") ? phone : `+${phone}`;
}
