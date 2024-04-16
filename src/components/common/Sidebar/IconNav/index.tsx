import FeatherIcon from "feather-icons-react";

const iconMap = new Map([
  ["Главная", "home"],
  ["Дневник эмоций", "book"],
]);

export const IconNav = ({ item }) => {
  const currentIconName = iconMap.get(item);
  return <FeatherIcon icon={currentIconName} size="24" />;
};
