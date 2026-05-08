import { ContactForm } from "@/components/contact-form";
import { getTenantData } from "@/lib/dal";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contatti | Lumina Psicologo" };

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ContattiPage(props: Props) {
  const { id } = await props.params;
  const tenantData = await getTenantData(id);

  if (!tenantData) {
    notFound();
  }

  const { name, contact_info } = tenantData;

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Contatti
        </h1>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16 text-lg">
          Hai domande o desideri prenotare una seduta? Compila il modulo sottostante o utilizza i miei recapiti diretti. Ti risponderò il prima possibile.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ContactForm tenantId={id} />
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-6">Recapiti</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">Email</p>
                    <a href={`mailto:${contact_info.email}`} className="text-primary hover:underline">
                      {contact_info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">Telefono</p>
                    <a href={`tel:${contact_info.phone.replace(/\\s/g, '')}`} className="text-primary hover:underline">
                      {contact_info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">Studio ({contact_info.city})</p>
                    <p className="text-foreground/70">{contact_info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 p-8 rounded-2xl border border-border/50">
              <h3 className="font-semibold text-secondary-foreground mb-3">Informazioni Utili</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Le sedute si svolgono su appuntamento. È possibile concordare sessioni anche in modalità online. In caso di disdetta, si prega di avvisare con almeno 24 ore di anticipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
