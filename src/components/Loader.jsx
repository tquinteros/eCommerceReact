import React from "react";
import { Ring } from "@uiball/loaders";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Ring size={80} lineWeight={5} speed={2} color="black" />
    </div>
  );
}
