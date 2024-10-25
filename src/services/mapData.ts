import { Feature, FeatureCollection } from 'geojson';
import { countries } from 'countries-list';

// Generate GeoJSON from countries data
export const worldGeoJSON: FeatureCollection = {
  type: 'FeatureCollection',
  features: Object.entries(countries).map(([code, data]): Feature => ({
    type: 'Feature',
    properties: {
      name: data.name,
      code: code,
    },
    geometry: {
      type: 'Polygon',
      coordinates: getCountryCoordinates(code),
    },
  })),
};

function getCountryCoordinates(code: string): number[][][] {
  // This is a simplified version. In a real application, you would use actual country boundary data
  const baseCoords = {
    JP: [[130, 30], [145, 30], [145, 45], [130, 45]], // Japan
    FR: [[2, 42], [8, 42], [8, 51], [2, 51]], // France
    // Add more countries as needed
  };

  return [baseCoords[code as keyof typeof baseCoords] || [[0, 0], [1, 0], [1, 1], [0, 1]]];
}

export function getCountryBounds(feature: Feature): [[number, number], [number, number]] {
  if (!feature.geometry) {
    return [[0, 0], [0, 0]];
  }

  let minLat = 90;
  let maxLat = -90;
  let minLng = 180;
  let maxLng = -180;

  const coordinates = feature.geometry.type === 'Polygon' 
    ? feature.geometry.coordinates[0]
    : feature.geometry.type === 'MultiPolygon'
    ? feature.geometry.coordinates.flat(1)
    : [];

  coordinates.forEach(([lng, lat]) => {
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
  });

  return [[minLat, minLng], [maxLat, maxLng]];
}