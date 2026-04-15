import type { QuarrySpecies } from "@/data/species";
import type { MonographBuilder, MonographDefinition } from "./types";
import { blueWildebeestMonograph } from "./content/blue-wildebeest";
import { impalaMonograph } from "./content/impala";
import { gemsbokMonograph } from "./content/gemsbok";
import { warthogMonograph } from "./content/warthog";
import { blesbokMonograph } from "./content/blesbok";
import { bushbuckMonograph } from "./content/bushbuck";
import { capeBuffaloMonograph } from "./content/cape-buffalo";
import { dappleImpalaMonograph } from "./content/dapple-impala";
import { goldenWildebeestMonograph } from "./content/golden-wildebeest";
import { springbokMonograph } from "./content/springbok";
import { redHartebeestMonograph } from "./content/red-hartebeest";
import { lechweMonograph } from "./content/lechwe";
import { livingstoneElandMonograph } from "./content/livingstone-eland";
import { blackImpalaMonograph } from "./content/black-impala";
import { whiteBlesbokMonograph } from "./content/white-blesbok";
import { waterbuckMonograph } from "./content/waterbuck";
import { nyalaMonograph } from "./content/nyala";
import { plainsZebraMonograph } from "./content/plains-zebra";
import { giraffeMonograph } from "./content/giraffe";
import { sableAntelopeMonograph } from "./content/sable-antelope";
import { roanAntelopeMonograph } from "./content/roan-antelope";

const MONOGRAPH_BUILDERS: Partial<Record<string, MonographBuilder>> = {
  "blue-wildebeest": blueWildebeestMonograph,
  impala: impalaMonograph,
  gemsbok: gemsbokMonograph,
  warthog: warthogMonograph,
  blesbok: blesbokMonograph,
  bushbuck: bushbuckMonograph,
  "cape-buffalo": capeBuffaloMonograph,
  "dapple-impala": dappleImpalaMonograph,
  "golden-wildebeest": goldenWildebeestMonograph,
  springbok: springbokMonograph,
  "red-hartebeest": redHartebeestMonograph,
  lechwe: lechweMonograph,
  "livingstone-eland": livingstoneElandMonograph,
  "black-impala": blackImpalaMonograph,
  "white-blesbok": whiteBlesbokMonograph,
  waterbuck: waterbuckMonograph,
  nyala: nyalaMonograph,
  "plains-zebra": plainsZebraMonograph,
  giraffe: giraffeMonograph,
  "sable-antelope": sableAntelopeMonograph,
  "roan-antelope": roanAntelopeMonograph,
};

export function hasSpeciesMonograph(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(MONOGRAPH_BUILDERS, id);
}

export function getMonographContent(species: QuarrySpecies): MonographDefinition | null {
  const build = MONOGRAPH_BUILDERS[species.id];
  return build ? build(species) : null;
}
