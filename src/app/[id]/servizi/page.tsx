import { SmartLink } from "@/components/smart-link";
import { getTenantData } from "@/lib/dal";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Servizi | Lumina Psicologo" };

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ServiziPage(props: Props) {
  const { id } = await props.params;
  const tenantData = await getTenantData(id);

  if (!tenantData) {
    notFound();
  }

  const { title, content } = tenantData;
  const { servizi_page } = content;

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Servizi e Trattamenti
        </h1>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16 text-lg">
          Un percorso su misura per aiutarti a ritrovare il benessere. Come {title}, offro un approccio basato sull'ascolto e sulle tue esigenze specifiche.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servizi_page.map((servizio, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
                {servizio.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {servizio.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/10 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">
            Non sai quale percorso fa per te?
          </h3>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Ogni situazione è unica. Durante il primo colloquio analizzeremo insieme le tue necessità per individuare l'approccio più adatto a te.
          </p>
          <SmartLink
            href={\`/\${id}/contatti\`}
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md"
          >
            Contattami per parlarne
            <ArrowRight className="ml-2 w-5 h-5" />
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
