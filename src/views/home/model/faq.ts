/** FAQ content for the home page, shared by the UI section and FAQPage JSON-LD. */
export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Nomzodlar uchun bepulmi?",
    a: "Ha, toʻliq bepul. Toʻlovni faqat startuplar amalga oshiradi.",
  },
  {
    q: "Ulush (equity) nima va u qanday koʻrsatiladi?",
    a: "Ulush — startup kompaniyasidagi egalik hissasi. Har bir oʻrinda taklif etilgan ulush foizi ochiq koʻrsatiladi.",
  },
  {
    q: "Startuplar qanday tekshiriladi?",
    a: "Har bir startup va eʼlon moderatsiyadan oʻtadi; tasdiqlangan startup belgisi beriladi.",
  },
  {
    q: "Asoschi bilan qanday bogʻlanaman?",
    a: "Ariza maʼqullangach, ikkala tomon bir-birining kontaktini (Telegram yoki telefon) koʻradi.",
  },
  {
    q: "Oʻrin joylash qancha vaqt oladi?",
    a: "Eʼlon moderatsiyadan oʻtgach chop etiladi, odatda bir necha soat ichida.",
  },
];
