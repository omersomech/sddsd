import React from "react";
import Grid from "../_components/grid";
import { api } from "~/trpc/server";

const Infinity = async () => {
  const environments = await api.environment.getAll.query();
  console.log(environments);

  return (
    <div className="flex flex-1 flex-col items-center  gap-28">
      <div className=""></div>
      <Grid environments={environments} />
    </div>
  );
};

export default Infinity;
