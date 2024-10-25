// Previous code remains the same until the popularDestinations object
const popularDestinations: Record<string, City[]> = {
  // ... other countries remain the same ...

  GTM: [
    {
      id: 'guatemala-city',
      name: 'Guatemala City',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Modern capital with rich cultural heritage and museums',
      coordinates: { lat: '14.6349', lon: '-90.5069' },
      imageUrl: '',
      popularity: 85,
      type: 'city',
      highlights: ['National Palace', 'Central Market', 'Zone 1 Historic Center', 'Museums', 'Cultural Events']
    },
    {
      id: 'antigua',
      name: 'Antigua',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Colonial city surrounded by volcanoes',
      coordinates: { lat: '14.5586', lon: '-90.7295' },
      imageUrl: '',
      popularity: 95,
      type: 'city',
      highlights: ['Colonial Architecture', 'Volcano Views', 'Ruins', 'Coffee Tours', 'Cultural Activities']
    },
    {
      id: 'lake-atitlan',
      name: 'Lake Atitlán',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Stunning lake surrounded by volcanoes and Maya villages',
      coordinates: { lat: '14.6407', lon: '-91.1809' },
      imageUrl: '',
      popularity: 94,
      type: 'destination',
      highlights: ['Volcano Views', 'Maya Culture', 'Water Activities', 'Traditional Markets', 'Hiking']
    },
    {
      id: 'tikal',
      name: 'Tikal',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Ancient Maya city in the rainforest',
      coordinates: { lat: '17.2220', lon: '-89.6237' },
      imageUrl: '',
      popularity: 93,
      type: 'destination',
      highlights: ['Maya Ruins', 'Jungle Wildlife', 'Sunrise Tours', 'Archaeological Sites', 'Temple Climbing']
    },
    {
      id: 'flores',
      name: 'Flores',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Charming island town near Tikal',
      coordinates: { lat: '16.9303', lon: '-89.8922' },
      imageUrl: '',
      popularity: 88,
      type: 'city',
      highlights: ['Island Setting', 'Colonial Architecture', 'Lake Activities', 'Gateway to Tikal', 'Local Culture']
    },
    {
      id: 'quetzaltenango',
      name: 'Quetzaltenango',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Highland city known for culture and language schools',
      coordinates: { lat: '14.8445', lon: '-91.5219' },
      imageUrl: '',
      popularity: 86,
      type: 'city',
      highlights: ['Language Schools', 'Central Park', 'Hot Springs', 'Markets', 'Cultural Events']
    },
    {
      id: 'chichicastenango',
      name: 'Chichicastenango',
      country: 'Guatemala',
      countryCode: 'GTM',
      description: 'Town famous for its traditional Maya market',
      coordinates: { lat: '14.9433', lon: '-91.1107' },
      imageUrl: '',
      popularity: 89,
      type: 'destination',
      highlights: ['Traditional Market', 'Maya Culture', 'Church of Santo Tomás', 'Crafts', 'Local Ceremonies']
    }
  ],

  // ... rest of the countries remain the same ...
};

// Rest of the file remains the same