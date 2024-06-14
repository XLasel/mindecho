import { buttonVariants } from "../Button";
import { cn } from "@/lib/utils";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useBackNavigation } from "@/hook/useBackNavigation";

export const LinkBack = () => {
  const { href } = useBackNavigation();

  return (
    <Link
      to={href}
      preventScrollReset={false}
      className={cn(buttonVariants({ variant: "link" }), "self-start gap-1")}
    >
      <FeatherIcon icon="chevron-left" /> Назад
    </Link>
  );
};
