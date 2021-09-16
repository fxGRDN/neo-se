export default interface NEObject {
  links: Links;
  id: string;
  neo_reference_id: string;
  name: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: Estimateddiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Closeapproachdatum[];
  orbital_data: Orbitaldata;
  is_sentry_object: boolean;
}

interface Orbitaldata {
  orbit_id: string;
  orbit_determination_date: string;
  first_observation_date: string;
  last_observation_date: string;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: string;
  orbit_class: Orbitclass;
}

interface Orbitclass {
  orbit_class_type: string;
  orbit_class_description: string;
  orbit_class_range: string;
}

interface Closeapproachdatum {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: Relativevelocity;
  miss_distance: Missdistance;
  orbiting_body: string;
}

interface Missdistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

interface Relativevelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

interface Estimateddiameter {
  kilometers: Kilometers;
  meters: Kilometers;
  miles: Kilometers;
  feet: Kilometers;
}

interface Kilometers {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Links {
  self: string;
}