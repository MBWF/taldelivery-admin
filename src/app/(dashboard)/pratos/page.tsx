import { PlatesModal } from "@/components/dialogs/plates";
import { PlatesTable } from "@/components/tables/plates";
import { H2 } from "@/components/ui/typography";

export default function Plates() {
  return (
    <>
      <div className="flex justify-between gap-8">
        <H2 className="mb-4">Pratos</H2>
        <PlatesModal />
      </div>

      <section>
        <PlatesTable data={[]} />
      </section>
    </>
  );
}
