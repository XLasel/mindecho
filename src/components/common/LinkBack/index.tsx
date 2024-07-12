import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { cn } from "@/lib/utils";
import { useBackNavigation } from "@/hook/useBackNavigation";

import { buttonVariants } from "@/components/common/Button";

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
