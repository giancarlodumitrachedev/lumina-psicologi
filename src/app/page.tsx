import { notFound } from "next/navigation";

export default function RootPage() {
  // Se non c'è un [id] nell'URL (es: nomesito.com/), mostriamo un 404.
  notFound();
}
