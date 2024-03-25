import {
  BarChart2,
  Grid2X2,
  PackagePlus,
  Pizza,
  Settings,
  ShoppingCart,
} from "lucide-react";

const ICON_SIZE = 24;

const HomeIcon = () => {
  return <BarChart2 size={ICON_SIZE} />;
};

const SettingsIcon = () => {
  return <Settings size={ICON_SIZE} />;
};

const ShoppingCartIcon = () => {
  return <ShoppingCart size={ICON_SIZE} />;
};

const PizzaIcon = () => {
  return <Pizza size={ICON_SIZE} />;
};

const GridIcon = () => {
  return <Grid2X2 size={ICON_SIZE} />;
};
const PackagePlusIcon = () => {
  return <PackagePlus size={ICON_SIZE} />;
};

export const sidebarContent = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    href: "/dashboard",
  },
  {
    title: "Pedidos",
    icon: <ShoppingCartIcon />,
    href: "/pedidos",
  },
  {
    title: "Categorias",
    icon: <GridIcon />,
    href: "/categorias",
  },
  {
    title: "Pratos",
    icon: <PizzaIcon />,
    href: "/pratos",
  },
  {
    title: "Adicionais",
    icon: <PackagePlusIcon />,
    href: "/adicionais",
  },
];
