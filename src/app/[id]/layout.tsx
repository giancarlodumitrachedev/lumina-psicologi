import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function TenantLayout(props: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  return (
    <>
      <Header tenantId={id} />
      <div className="pt-16 md:pt-24">{props.children}</div>
      <Footer tenantId={id} />
    </>
  );
}
