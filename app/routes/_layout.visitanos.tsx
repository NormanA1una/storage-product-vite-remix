import { HeroVisitUs } from "~/layouts/visit-us/hero";
import { LocationLico } from "~/layouts/visit-us/location";
import { VisitMosaico } from "~/layouts/visit-us/mosaico";
import { PurchaseProcess } from "~/layouts/visit-us/process";
import { TitoVisitUs } from "~/layouts/visit-us/tito";

export default function Visitanos() {
  return (
    <div>
      <HeroVisitUs />
      <VisitMosaico />
      <LocationLico />
      <TitoVisitUs />
      <PurchaseProcess />
    </div>
  );
}
