import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CategoriesCardProps = {
  title: string;
  value: string;
  description: string;
};

export function StatsCard({ title, value, description }: CategoriesCardProps) {
  return (
    <Card className="flex-1 dark:border-primary">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md  font-medium">{title}</CardTitle>
        <DollarSign size={16} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">R${value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
