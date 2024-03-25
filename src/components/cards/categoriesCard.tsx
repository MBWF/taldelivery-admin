import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Text } from "../ui/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";

type CategoriesCardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
};

export function CategoriesCard({
  name,
  imageSrc,
  imageAlt,
}: CategoriesCardProps) {
  return (
    <Card className="w-60 flex flex-col dark:border-primary">
      <CardHeader className="p-0">
        <CardTitle>
          <div className="relative w-full h-40">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between w-full px-2 py-4">
        <Text>{name}</Text>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <Edit className="h-4 w-4" />
              <span className="sr-only">Abrir Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
}
