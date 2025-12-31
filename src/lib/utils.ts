import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
    // Format: 905-555-1234 -> (905) 555-1234
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

export function createPhoneLink(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    return `tel:+1${cleaned}`;
}

export function createEmailLink(email: string): string {
    return `mailto:${email}`;
}
