import { HeroSection } from "@/components/home/hero";
import { IssuesGrid } from "@/components/home/issues";
import { ServicesSection } from "@/components/home/services";
import { ReviewsSection } from "@/components/home/reviews";
import { FaqSection } from "@/components/home/faq";
import { getTenantData } from "@/lib/dal";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HomePage(props: Props) {
  const { id } = await props.params;
  const tenantData = await getTenantData(id);

  if (!tenantData) {
    notFound();
  }

  const { content } = tenantData;

  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection 
        tag={content.hero.tag}
        title={content.hero.title}
        sub={content.hero.sub}
        img={content.hero.img}
      />
      <IssuesGrid issues={content.issues} />
      <ServicesSection services={content.services} />
      <ReviewsSection reviews={content.reviews} />
      <FaqSection faqs={content.faqs} />
    </div>
  );
}
