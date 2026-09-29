import { BookingRequest, ContactMessage } from '../types';

const BOOKINGS_KEY = 'aquaclean_bookings';
const CONTACTS_KEY = 'aquaclean_contacts';
const RECENT_BOOKING_KEY = 'aquaclean_recent_booking';

// Generate booking ID format: AC-YYYYMMDD-XXX
export function generateBookingId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const randomNum = Math.floor(100 + Math.random() * 900);
  return `AC-${year}${month}${day}-${randomNum}`;
}

// Bookings
export function getBookings(): BookingRequest[] {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read bookings from localStorage', err);
    return [];
  }
}

export function saveBooking(booking: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>): BookingRequest {
  const bookings = getBookings();
  const newBooking: BookingRequest = {
    ...booking,
    id: generateBookingId(),
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };

  const updated = [newBooking, ...bookings];
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
    localStorage.setItem(RECENT_BOOKING_KEY, JSON.stringify(newBooking));
  } catch (err) {
    console.error('Failed to save booking to localStorage', err);
  }

  return newBooking;
}

export function getRecentBooking(): BookingRequest | null {
  try {
    const raw = localStorage.getItem(RECENT_BOOKING_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getBookingById(id: string): BookingRequest | undefined {
  const bookings = getBookings();
  return bookings.find(b => b.id.toLowerCase() === id.toLowerCase());
}

export function clearBookings(): void {
  try {
    localStorage.removeItem(BOOKINGS_KEY);
    localStorage.removeItem(RECENT_BOOKING_KEY);
  } catch (err) {
    console.error('Failed to clear bookings', err);
  }
}

// Contacts
export function getContactMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(CONTACTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveContactMessage(msg: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage {
  const messages = getContactMessages();
  const newMessage: ContactMessage = {
    ...msg,
    id: `MSG-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify([newMessage, ...messages]));
  } catch (err) {
    console.error('Failed to save contact message', err);
  }
  return newMessage;
}
