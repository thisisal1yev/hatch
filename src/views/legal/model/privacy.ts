import { LEGAL_UPDATED, type LegalDoc } from "./types";

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Maxfiylik siyosati",
  description:
    "Hatch platformasi qanday shaxsiy maʼlumotlarni yigʻadi, ulardan qanday foydalanadi va sizning maxfiylik huquqlaringiz qanday himoyalanadi.",
  updated: LEGAL_UPDATED,
  intro:
    "Hatch sizning maxfiyligingizni jiddiy qabul qiladi. Ushbu siyosat platformadan foydalanganingizda qanday shaxsiy maʼlumotlarni yigʻishimizni, ulardan qanday foydalanishimizni va siz qanday nazoratga ega ekanligingizni tushuntiradi.",
  sections: [
    {
      heading: "Qaysi maʼlumotlarni yigʻamiz",
      body: [
        "Biz faqat platformani taqdim etish uchun zarur boʻlgan maʼlumotlarni yigʻamiz. Ular siz bergan va avtomatik toʻplanadigan turlarga boʻlinadi.",
      ],
      bullets: [
        "Hisob maʼlumotlari: ism, email manzil va telefon raqami.",
        "Profil maʼlumotlari: rezyume, koʻnikmalar, ish tajribasi va kutilayotgan maosh.",
        "Texnik maʼlumotlar: IP manzil, qurilma turi va cookie orqali toʻplanadigan foydalanish statistikasi.",
      ],
    },
    {
      heading: "Maʼlumotlardan qanday foydalanamiz",
      body: ["Maʼlumotlaringiz quyidagi maqsadlarda ishlatiladi:"],
      bullets: [
        "Nomzodlarni mos startuplar va ish oʻrinlari bilan bogʻlash.",
        "Platforma xizmatlarini taqdim etish va yaxshilash.",
        "Xavfsizlikni taʼminlash va firibgarlikning oldini olish.",
        "Siz rozilik bergan xabarnoma va yangiliklarni yuborish.",
      ],
    },
    {
      heading: "Maʼlumotlarni kim koʻradi",
      body: [
        "Profilingiz faqat siz ariza bergan va startup uni maʼqullaganidan keyin oʻsha startup uchun ochiladi. Shu paytgacha kontakt maʼlumotlaringiz yashirin qoladi.",
        "Biz shaxsiy maʼlumotlaringizni hech qachon uchinchi tomonlarga sotmaymiz. Ular faqat bizga xizmat koʻrsatuvchi ishonchli hamkorlar bilan yoki qonun talab qilganda ulashilishi mumkin.",
      ],
    },
    {
      heading: "Cookie va kuzatuv",
      body: [
        "Saytning toʻgʻri ishlashi va foydalanishni tahlil qilish uchun cookie fayllaridan foydalanamiz. Brauzeringiz sozlamalari orqali cookie larni cheklashingiz mumkin, biroq bu baʼzi funksiyalarga taʼsir qilishi mumkin.",
      ],
    },
    {
      heading: "Sizning huquqlaringiz",
      body: ["Shaxsiy maʼlumotlaringiz ustidan quyidagi huquqlarga egasiz:"],
      bullets: [
        "Maʼlumotlaringizni koʻrish va nusxasini olish.",
        "Notoʻgʻri maʼlumotlarni tuzatish.",
        "Hisobingiz va maʼlumotlaringizni oʻchirish.",
        "Maʼlumotlarni qayta ishlashga bergan rozilikni qaytarib olish.",
      ],
    },
    {
      heading: "Saqlash va xavfsizlik",
      body: [
        "Maʼlumotlaringizni faqat zarur boʻlgan muddat davomida saqlaymiz. Ularni himoya qilish uchun shifrlash va kirishni cheklash kabi texnik choralarni qoʻllaymiz. Hisobingizni oʻchirsangiz, maʼlumotlaringiz qonun talab qilgan holatlardan tashqari oʻchiriladi.",
      ],
    },
    {
      heading: "Biz bilan bogʻlanish",
      body: [
        "Maxfiylik bilan bogʻliq savollar yoki huquqlaringizdan foydalanish uchun biz bilan bogʻlaning.",
      ],
      contact: true,
    },
  ],
};
