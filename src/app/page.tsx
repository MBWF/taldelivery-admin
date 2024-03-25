"use client";

import { LightDarkButton } from "@/components/light-dark-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/typography";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AuthenticationPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin: SubmitHandler<any> = (data) => {
    console.log(data);
    router.push("/dashboard");
  };
  return (
    <>
      <LightDarkButton className="absolute right-8 top-8 z-10" />

      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <form
          className="w-full lg:max-w-lg rounded-x"
          onSubmit={handleSubmit(handleLogin)}
        >
          <Card className="dark:border-background">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Entre na sua conta
              </CardTitle>
              <CardDescription className="text-center">
                Insira seu email e senha para fazer login.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  label="Senha"
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>

              <Checkbox id="terms" label="Lembrar-me neste computador" />
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit">
                Entrar
              </Button>
              <Text className="mt-2 text-sm text-center text-foreground">
                {" "}
                Não tem conta?{" "}
                <span className="hover:underline hover:cursor-pointer text-primary">
                  Fale conosco
                </span>
              </Text>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
