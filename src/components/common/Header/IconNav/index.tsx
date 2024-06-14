import FeatherIcon from "feather-icons-react";

const iconMap = new Map([
  ["Главная", "home"],
  ["Дневник эмоций", "book"],
]);

export const IconNav = ({ item }: { item: string }) => {
  const currentIconName = iconMap.get(item) || "alert-circle";
  return <FeatherIcon icon={currentIconName} size="24" />;
};
