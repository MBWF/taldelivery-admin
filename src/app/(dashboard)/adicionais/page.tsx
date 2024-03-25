import { AditionalsTable } from "@/components/tables/aditionals";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";

export default function AditionalsPage() {
  return (
    <div>
      <div className="flex justify-between gap-8">
        <H2 className="mb-4">Adicionais</H2>
        <Button>Novo Adicional</Button>
      </div>

      <section>
        <AditionalsTable data={[]} />
      </section>
    </div>
  );
}
