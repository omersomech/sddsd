import { Environment } from "@prisma/client";
import Link from "next/link";
import React from "react";
import systemTypes from "../utils/systemTypes";
import SystemBadge from "./systemBadge";
interface GridProps {
  environments: Environment[];
}
const Grid = ({ environments }: GridProps) => {
  return (
    <div className="max-h-full w-full max-w-4xl   overflow-x-auto rounded-xl bg-primary-content">
      <table className="table text-right ">
        {/* head */}
        <thead>
          <tr>
            <th>Environment Type</th>
            <th>Mapal</th>
            <th>GateWay</th>
            <th>שם סביבה</th>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {environments.map((env) => {
            return (
              <tr key={env.id} className="transition-colors   hover:bg-neutral">
                <th>
                  <SystemBadge envName={env.name} />
                </th>
                <td>
                  <Link href={env.rights_ui} target="blank">
                    <button className="btn">Mapal</button>
                  </Link>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {env.rights_server}
                  </span>
                </td>
                <td>
                  <Link href={env.gw_ui} target="blank">
                    <button className="btn">GateWay</button>
                  </Link>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {env.gw_ui}
                  </span>
                </td>
                <td className="font-bold">{env.name}</td>

                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
              </tr>
            );
          })}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>מערכת זכויות</th>
            <th>מערכת הגייטווי</th>
            <th>שם</th>
            <th>סוג סביבה</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Grid;
