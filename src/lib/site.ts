// Număr WhatsApp în format internațional, fără + sau spații.
export const WHATSAPP_NUMBER = "40700000000";
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
