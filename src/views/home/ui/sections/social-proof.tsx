import { Avatar, Badge, Container, Reveal, Section } from "@/shared/ui";
import { cn } from "@/shared/lib";

const U = "?auto=format&fit=crop&w=256&h=256&q=80";

type Quote = {
  quote: string;
  name: string;
  role: string;
  /** Verified Unsplash portrait ID (resolves to HTTP 200). */
  photoId: string;
  /** In-voice alt text. */
  alt: string;
};

const quotes: Quote[] = [
  {
    quote:
      "Hatch orqali ikki haftada ikkita senior muhandis yolladik. Maosh va equity ochiq boʻlgani uchun suhbatlar tez va halol oʻtdi.",
    name: "Dilshod Karimov",
    role: "Sarbon Labs asoschisi",
    photoId: "photo-1507003211169-0a1dd7228f2d",
    alt: "Sarbon Labs asoschisi, Toshkent",
  },
  {
    quote:
      "Nomzodlar allaqachon equity nima ekanini tushunib kelishadi. Bu ishimizni ancha osonlashtirdi.",
    name: "Nigora Yusupova",
    role: "Qatra asoschisi",
    photoId: "photo-1438761681033-6461ffad8d80",
    alt: "Qatra asoschisi, Toshkent",
  },
  {
    quote:
      "Tasdiqlangan startup belgisi ishonch berdi — jiddiy nomzodlar oʻzlari murojaat qila boshladi.",
    name: "Aziz Rahimov",
    role: "Bilim Cloud asoschisi",
    photoId: "photo-1472099645785-5658abf4ff4e",
    alt: "Bilim Cloud asoschisi, Samarqand",
  },
];

function QuoteCard({ data, lead = false }: { data: Quote; lead?: boolean }) {
  return (
    <figure
      className={cn(
        "border-line bg-surface flex h-full flex-col rounded-2xl border p-7 sm:p-8",
        lead && "bg-surface-2",
      )}
    >
      <Badge tone="accent" className="w-fit">
        Tasdiqlangan startup
      </Badge>
      <blockquote
        className={cn(
          "text-ink mt-5 flex-1 text-pretty",
          lead ? "text-xl leading-relaxed font-medium sm:text-2xl" : "text-base leading-relaxed",
        )}
      >
        “{data.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar
          name={data.name}
          alt={data.alt}
          src={`https://images.unsplash.com/${data.photoId}${U}`}
          size={lead ? 52 : 44}
        />
        <div>
          <div className="text-ink text-sm font-semibold">{data.name}</div>
          <div className="text-muted text-xs">{data.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function SocialProof() {
  const [lead, ...rest] = quotes;
  return (
    <Section>
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-ink font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Asoschilar nima deydi
          </h2>
          <p className="text-muted mt-4 text-pretty">
            Oʻzbekistonning oʻsayotgan startuplari Hatch orqali jamoasini kuchaytirmoqda.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {lead && (
            <Reveal>
              <QuoteCard data={lead} lead />
            </Reveal>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((q, index) => (
              <Reveal key={q.name} delay={index * 0.06} className="h-full">
                <QuoteCard data={q} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
