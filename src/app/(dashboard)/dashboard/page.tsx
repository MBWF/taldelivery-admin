import { StatsCard } from "@/components/cards/statsCard";
import { Overview } from "@/components/chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H2, Text } from "@/components/ui/typography";

export default function Dashboard() {
  return (
    <>
      <H2>Dashboard</H2>

      <section className="w-full flex gap-8 flex-wrap">
        <div className="flex w-full gap-8 justify-between h-32">
          <StatsCard
            title="Total do dia"
            value="1502,00"
            description="+20.1% do dia anterior"
          />
          <StatsCard
            title="Total do dia"
            value="1502,00"
            description="+20.1% do dia anterior"
          />
          <StatsCard
            title="Total do dia"
            value="1502,00"
            description="+20.1% do dia anterior"
          />
          <StatsCard
            title="Total do dia"
            value="1502,00"
            description="+20.1% do dia anterior"
          />
        </div>

        <div className="flex w-full gap-8">
          <Card className="flex-1 dark:border-primary">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Resumo da Semana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>

          <Card className="w-1/3 dark:border-primary">
            <CardHeader className="flex flex-row items-center justify-between pb-8">
              <CardTitle className="text-lg font-medium">
                Últimos Pedidos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <Text className="text-sm font-medium leading-none">
                    Olivia Martin
                  </Text>
                  <Text className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </Text>
                </div>
                <div className="ml-auto font-medium">R$54,70</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
