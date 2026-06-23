import { LEGAL_UPDATED, type LegalDoc } from "./types";

export const consentDoc: LegalDoc = {
  slug: "consent",
  title: "Maʼlumotlarga rozilik",
  description:
    "Hatch da shaxsiy maʼlumotlarni qayta ishlashga rozilik nimani anglatadi va uni qanday boshqarish yoki qaytarib olish mumkin.",
  updated: LEGAL_UPDATED,
  intro:
    "Shaxsiy maʼlumotlaringizni qayta ishlashga beradigan rozilik ixtiyoriy boʻlib, uni istalgan vaqtda qaytarib olishingiz mumkin.",
  sections: [
    {
      heading: "Rozilik nimani anglatadi",
      body: [
        "Hatch dan foydalanish uchun baʼzi shaxsiy maʼlumotlaringizni qayta ishlashga rozilik berasiz. Bu rozilik erkin, aniq va ongli ravishda beriladi.",
      ],
    },
    {
      heading: "Nimaga rozilik berasiz",
      body: ["Rozilik berib, quyidagilarga ruxsat berasiz:"],
      bullets: [
        "Profil maʼlumotlaringizni siz ariza bergan startuplarga koʻrsatish.",
        "Sizga mos ish oʻrinlari va takliflarni tanlash uchun maʼlumotlardan foydalanish.",
        "Platforma va imkoniyatlar haqida email xabarnomalar yuborish.",
      ],
    },
    {
      heading: "Rozilikni qaytarib olish",
      body: [
        "Rozilikni istalgan vaqtda hisob sozlamalari orqali yoki biz bilan bogʻlanib qaytarib olishingiz mumkin. Rozilik qaytarib olingach, tegishli maʼlumotlardan foydalanishni toʻxtatamiz; bu qadamgacha amalga oshirilgan ishlar qonuniy boʻlib qoladi.",
      ],
    },
    {
      heading: "Maʼlumotlaringizni boshqarish",
      body: [
        "Maʼlumotlaringizni koʻrish, tuzatish yoki oʻchirish huquqiga egasiz. Batafsil maʼlumot Maxfiylik siyosatida keltirilgan.",
      ],
    },
    {
      heading: "Biz bilan bogʻlanish",
      body: ["Rozilik yoki maʼlumotlaringiz boʻyicha savollar uchun biz bilan bogʻlaning."],
      contact: true,
    },
  ],
};
