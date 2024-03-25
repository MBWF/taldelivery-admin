import { H2 } from "@/components/ui/typography";

import { CategoriesCard } from "@/components/cards/categoriesCard";
import { CreateNewCategoryModal } from "@/components/dialogs/categories";

export default function Categories() {
  return (
    <>
      <div className="flex justify-between gap-8">
        <H2 className="mb-4">Categorias</H2>
        <CreateNewCategoryModal />
      </div>

      <section className="flex flex-wrap gap-8">
        <CategoriesCard
          name="Pizzas Salgadas"
          imageSrc="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Image generica de pizza"
        />
        <CategoriesCard
          name="Pizzas Doces"
          imageSrc="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Image generica de pizza"
        />
        <CategoriesCard
          name="Bebidas"
          imageSrc="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Image generica de pizza"
        />
      </section>
    </>
  );
}
