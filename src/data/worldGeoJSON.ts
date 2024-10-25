import { FeatureCollection } from 'geojson';

export const worldGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "United States",
        code: "US"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-125, 24],
          [-125, 49],
          [-66, 49],
          [-66, 24],
          [-125, 24]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "France",
        code: "FR"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-5, 42],
          [-5, 51],
          [8, 51],
          [8, 42],
          [-5, 42]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Japan",
        code: "JP"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [129, 30],
          [129, 46],
          [146, 46],
          [146, 30],
          [129, 30]
        ]]
      }
    }
    // Add more countries as needed
  ]
};