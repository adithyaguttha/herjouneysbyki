import { ComponentType, CSSProperties } from "react";
import AirplaneDoodle from "./AirplaneDoodle";
import CompassDoodle from "./CompassDoodle";
import DottedPath from "./DottedPath";
import StampDoodle from "./StampDoodle";
import WavesDoodle from "./WavesDoodle";
import MountainDoodle from "./MountainDoodle";
import MapPinDoodle from "./MapPinDoodle";
import SunDoodle from "./SunDoodle";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

const doodleMap: Record<string, ComponentType<DoodleProps>> = {
  airplane: AirplaneDoodle,
  compass: CompassDoodle,
  dottedPath: DottedPath,
  stamp: StampDoodle,
  waves: WavesDoodle,
  mountains: MountainDoodle,
  mapPin: MapPinDoodle,
  sun: SunDoodle,
};

export function getDoodleComponent(name: string): ComponentType<DoodleProps> {
  return doodleMap[name] || (() => null);
}

export {
  AirplaneDoodle,
  CompassDoodle,
  DottedPath,
  StampDoodle,
  WavesDoodle,
  MountainDoodle,
  MapPinDoodle,
  SunDoodle,
};

export default doodleMap;
