import { Header } from "@/components/layout/header";
import { Siderbar } from "@/components/layout/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Siderbar />

        <div className="p-8 w-full">{children}</div>
      </div>
    </div>
  );
}
