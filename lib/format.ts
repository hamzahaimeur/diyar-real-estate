export function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPhone(phone: string) {
  return phone.startsWith("+") ? phone : `+${phone}`;
}
