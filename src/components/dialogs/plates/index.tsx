"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ModalLayout } from "@/components/ui/modal";
import { Switch } from "@/components/ui/switch";
import { PlusCircle } from "lucide-react";

import { ImagePreview } from "@/components/ui/image-preview";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SelectContainer } from "@/components/ui/select";

export function PlatesModal() {
  const { control, handleSubmit, register } = useForm<any>({
    mode: "onSubmit",
  });

  function submitCircleRegistration(value: any) {
    setTimeout(() => {
      toast.success("Prato criado.", {
        description: "Seu novo prato foi criado com sucesso!",
        position: "top-right",
        duration: 3000,
      });
      document.getElementById("closeDialog")?.click();
    }, 2000);
  }
  return (
    <ModalLayout
      modalTrigger={
        <Button data-testid="open-plates-modal-button">
          <PlusCircle className="mr-2" />
          Nova Prato
        </Button>
      }
      data-testid="plates-modal"
    >
      <DialogHeader data-testid="plates-modal">
        <DialogTitle>Novo Prato</DialogTitle>
        <DialogDescription>
          Crie aqui mais um prato para seu restaurante.
        </DialogDescription>
      </DialogHeader>
      <form
        className="flex flex-col gap-6 my-4"
        onSubmit={handleSubmit(submitCircleRegistration)}
      >
        <ImagePreview control={control} name="product_image" />
        <Input label="Nome" {...register("name")} />
        <Input label="Preço" {...register("price")} />
        <SelectContainer
          data-testid="category-select"
          label="Categoria"
          placeholder="Selecione uma categoria"
          onChangeCallback={(e) => console.log(e)}
          options={[
            { label: "Pizza salgada", value: "pizza-salgadas" },
            { label: "Pizza doce", value: "pizza-doce" },
            { label: "Bebidas", value: "bebidas" },
          ]}
        />

        <Switch
          defaultChecked
          label="Disponível"
          onCheckedChange={(e) => console.log(e)}
          {...register("isAvailable")}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" id="closeDialog" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Confirmar</Button>
        </DialogFooter>
      </form>
    </ModalLayout>
  );
}
