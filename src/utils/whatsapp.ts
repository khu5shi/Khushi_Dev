/**
 * WhatsApp Direct Link Generator (Zero Database Required)
 * Generates an encoded URL to launch WhatsApp or WhatsApp Web with pre-formatted context.
 */

export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  // Clean phone number: remove any +, -, spaces, or parenthesis
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function formatWhatsAppMessage(params: {
  senderName?: string;
  senderEmail?: string;
  inquiryType?: string;
  customMessage: string;
}): string {
  const { senderName, senderEmail, inquiryType, customMessage } = params;
  
  let formatted = `Hello Khushi 👋\n`;
  
  if (inquiryType) {
    formatted += `📌 *Purpose:* ${inquiryType}\n`;
  }
  
  if (senderName && senderName.trim()) {
    formatted += `👤 *From:* ${senderName.trim()}`;
    if (senderEmail && senderEmail.trim()) {
      formatted += ` (${senderEmail.trim()})`;
    }
    formatted += `\n`;
  }
  
  formatted += `\n💬 *Message:*\n${customMessage.trim()}\n\n— Sent via your Portfolio Direct Connect`;
  return formatted;
}
