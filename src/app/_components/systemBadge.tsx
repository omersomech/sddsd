import React from "react";
import systemTypes from "../utils/systemTypes";

interface GridProps {
  envName: string;
}
const SystemBadge = ({ envName }: GridProps) => {
  console.log(systemTypes);

  let badgeStyle = "";
  if (envName.split("-").length > 0) {
    envName = envName.split("-")[1];
  }
  console.log(envName);
  if (envName === "CP") badgeStyle = "badge-warning";
  if (envName === "PROD") badgeStyle = "badge-error";
  if (systemTypes[envName]) console.log(systemTypes[envName].badgeType);

  return (
    <div className={`badge text-xs ${systemTypes[envName].badgeType}   `}>
      cdxcsd
    </div>
  );
};

export default SystemBadge;
