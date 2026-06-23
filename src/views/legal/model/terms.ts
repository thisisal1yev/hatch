import { LEGAL_UPDATED, type LegalDoc } from "./types";

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Foydalanish shartlari",
  description:
    "Hatch platformasidan foydalanish shartlari: hisob ochish, eʼlonlar, maosh va equity koʻrsatish qoidalari hamda javobgarlik.",
  updated: LEGAL_UPDATED,
  intro:
    "Hatch platformasidan foydalanish orqali siz ushbu shartlarni qabul qilasiz. Iltimos, foydalanishni boshlashdan oldin ularni diqqat bilan oʻqing.",
  sections: [
    {
      heading: "Shartlarni qabul qilish",
      body: [
        "Platformada roʻyxatdan oʻtish yoki undan foydalanish orqali siz ushbu shartlarga va Maxfiylik siyosatiga rozilik bildirgan boʻlasiz. Agar shartlarga rozi boʻlmasangiz, platformadan foydalanmang.",
      ],
    },
    {
      heading: "Hisob va roʻyxatdan oʻtish",
      body: ["Hisob ochish uchun toʻgʻri va dolzarb maʼlumot berishingiz kerak."],
      bullets: [
        "Platformadan foydalanish uchun kamida 18 yoshda boʻlishingiz lozim.",
        "Hisobingiz xavfsizligi va parolingiz maxfiyligi uchun siz javobgarsiz.",
        "Bitta shaxs faqat bitta haqiqiy hisobga ega boʻlishi mumkin.",
      ],
    },
    {
      heading: "Foydalanish qoidalari",
      body: ["Platformadan foydalanganda quyidagilar taqiqlanadi:"],
      bullets: [
        "Soxta eʼlon, yolgʻon maʼlumot yoki boshqa shaxs nomidan ish koʻrish.",
        "Spam, reklama yoki tegishli boʻlmagan xabarlar tarqatish.",
        "Boshqa foydalanuvchilarning maʼlumotlarini suiisteʼmol qilish.",
        "Platforma xavfsizligini buzishga urinish yoki noqonuniy faoliyat.",
      ],
    },
    {
      heading: "Eʼlonlar, maosh va equity",
      body: [
        "Startuplar eʼlonlarida koʻrsatilgan maosh va equity maʼlumotlari aniq va halol boʻlishi shart — Hatch shaffoflikka asoslanadi.",
        "Biz qoidalarni buzgan yoki notoʻgʻri maʼlumot bergan eʼlon va hisoblarni oldindan ogohlantirishsiz oʻchirish huquqini saqlab qolamiz.",
      ],
    },
    {
      heading: "Intellektual mulk",
      body: [
        "Hatch nomi, logotipi va platforma dizayni bizga tegishli. Siz joylagan kontent (rezyume, eʼlon matni) sizniki boʻlib qoladi, ammo uni platformada koʻrsatishimizga ruxsat berasiz.",
      ],
    },
    {
      heading: "Javobgarlik cheklovi",
      body: [
        "Platformadagi baʼzi maʼlumotlar hozircha namuna sifatida koʻrsatilgan. Hatch ish yoki nomzod topilishiga kafolat bermaydi va foydalanuvchilar oʻrtasidagi kelishuvlar uchun javobgar emas.",
        "Xizmat “boricha” asosida taqdim etiladi. Shartlar vaqti-vaqti bilan yangilanishi mumkin; muhim oʻzgarishlar haqida xabar beramiz.",
      ],
    },
    {
      heading: "Biz bilan bogʻlanish",
      body: ["Shartlar yuzasidan savollaringiz boʻlsa, biz bilan bogʻlaning."],
      contact: true,
    },
  ],
};
