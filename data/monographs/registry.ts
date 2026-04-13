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
};

export function hasSpeciesMonograph(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(MONOGRAPH_BUILDERS, id);
}

export function getMonographContent(species: QuarrySpecies): MonographDefinition | null {
  const build = MONOGRAPH_BUILDERS[species.id];
  return build ? build(species) : null;
}
