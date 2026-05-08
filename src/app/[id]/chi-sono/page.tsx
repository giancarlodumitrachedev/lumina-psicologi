import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getTenantData } from "@/lib/dal";
import { notFound } from "next/navigation";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ChiSonoPage(props: Props) {
  const { id } = await props.params;
  const tenantData = await getTenantData(id);

  if (!tenantData) {
    notFound();
  }

  const { name, title, content } = tenantData;
  const { bio, quote } = content.chi_sono;

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={`/Assets/${content.hero.img}`}
              alt={`Ritratto di ${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {name} <span className="text-foreground/50 font-normal">| {title}</span>
            </h2>
            
            {bio.map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}

            {quote && (
              <blockquote className="border-l-4 border-primary pl-4 py-2 mt-8 mb-8 italic text-foreground/70">
                "{quote}"
              </blockquote>
            )}
            
            <SmartLink
              href={`/${id}/contatti`}
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md mt-4 no-underline"
            >
              Prenota un primo colloquio
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
