// ── Lake Norman House Listings ─────────────────────────────────────────────
//
// Add entries to this array to add listings to the map.
//
// Required fields:
//   id            - unique string, also used as photos subfolder name
//   title         - display name
//   lat / lng     - coordinates (right-click any spot on Google Maps → "What's here?")
//   url           - full VRBO / Airbnb / Vacasa URL
//
// Optional fields:
//   pricePerPerson - number (dollars)
//   bedrooms       - number
//   bathrooms      - number (decimals ok, e.g. 2.5)
//   boat           - true/false, whether a rental boat is included
//   vrboRating     - number (e.g. 4.8)
//   reviewCount    - number
//   notes          - string, shown as a callout in the sidebar
//   photos        - array of paths, e.g. ["photos/house-a/01.jpg", ...]
//                   Leave empty array [] if you haven't pulled photos yet.

// ── Points of Interest ─────────────────────────────────────────────────────
const POIS = [
  { name: 'Trump Cove', lat: 35.530341, lng: -80.919658 },
  { name: 'Uncle Milfs', lat: 35.5575718289024, lng: -80.9217448507503 },
  { name: 'Lake Lunch', lat: 35.6082032096076, lng: -80.938068314194 },
  { name: 'Taco Bell', lat: 35.6698478725909, lng:-80.85277766 },
  { name: 'Harris Teeter', lat: 35.6030517561649, lng:-80.89504137582 },
  { name: 'Food Lion', lat: 35.7117889469875, lng:-80.894176491 },
  { name: 'Hello Sailor gay bar', lat: 35.48760833011383, lng: -80.88821834556445}
];

// ── Listings ───────────────────────────────────────────────────────────────
const LISTINGS = [
  {
    id: 'lux',
    title: 'Luxurious & Private',
    lat: 35.610714,
    lng: -80.90273,
    pricePerPerson: 485,
    bedrooms: 5,
    bathrooms: 3,
    boat: true,
    vrboRating: 10,
    reviewCount: 28,
    url: 'https://www.vrbo.com/2917276?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/lux/1.avif',
      'photos/lux/3.avif',
      'photos/lux/4.avif',
      'photos/lux/7.avif',
      'photos/lux/8.avif',
      'photos/lux/6.avif',
      'photos/lux/2.webp',
      'photos/lux/5.webp',
      'photos/lux/9.webp'
      // 'photos/house-a/02.jpg',
    ],
  },
  {
    id: 'rust',
    title: 'Rustic Lakefront',
    lat: 35.660583,
    lng: -80.906805,
    pricePerPerson: 484,
    bedrooms: 5,
    bathrooms: 3,
    boat: true,
    vrboRating: 10,
    reviewCount: 14,
    url: 'https://www.vrbo.com/3532591?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/rust/1.avif',
      'photos/rust/2.avif',
      'photos/rust/3.webp',
      'photos/rust/4.avif',
      'photos/rust/5.avif',
      'photos/rust/6.avif',
      'photos/rust/7.avif',
      'photos/rust/8.avif',
      'photos/rust/9.avif',
      'photos/rust/10.avif',
      // 'photos/house-a01.jpg',
    ],
  },
  {
    id: 'heat',
    title: 'Heated Pool',
    lat: 35.622335,
    lng: -80.934883,
    pricePerPerson: 524,
    bedrooms: 4,
    bathrooms: 3,
    boat: false,
    vrboRating: 8,
    reviewCount: 6,
    url: 'https://www.vrbo.com/4873678?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/heat/1.webp',
      'photos/heat/2.webp',
      'photos/heat/3.avif',
      'photos/heat/4.avif',
      'photos/heat/5.avif',
    ],
  },
  {
    id: 'space',
    title: 'Spacey Boi',
    lat: 35.637093647847,
    lng: -80.9019807311984,
    pricePerPerson: 321,
    bedrooms: 4,
    bathrooms: 3,
    boat: false,
    vrboRating: 10,
    reviewCount: 23,
    url: 'https://www.vrbo.com/4950686?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/space/1.avif',
      'photos/space/2.avif',
      'photos/space/3.avif',
      'photos/space/4.avif'
    ],
  },
  {
    id: 'new',
    title: 'new Boi',
    lat: 35.5943812273032,
    lng: -80.9213972958422,
    pricePerPerson: 559,
    bedrooms: 4,
    bathrooms: 3,
    boat: false,
    vrboRating: 10,
    reviewCount: 1,
    url: 'https://www.vrbo.com/3764851?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/new/1.avif',
      'photos/new/2.avif',
      'photos/new/3.avif',
      'photos/new/4.webp',
      'photos/new/5.avif'
    ],
  },
  {
    id: 'frame',
    title: 'Frame of Mind',
    lat: 35.6398218956267,
    lng: -80.9567775133676,
    pricePerPerson: 468,
    bedrooms: 4,
    bathrooms: 3,
    boat: false,
    vrboRating: 10,
    reviewCount: 12,
    url: 'https://www.vrbo.com/3753142?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: '',
    photos: [
      'photos/frame/1.avif',
      'photos/frame/2.avif',
      'photos/frame/3.webp',
      'photos/frame/5.webp'
    ],
  },
  {
    id: 'lake',
    title: 'Lake Front Retreat',
    lat: 35.5886522026477,
    lng: -80.954385490594,
    pricePerPerson: 550,
    bedrooms: 6,
    bathrooms: 3,
    boat: true,
    vrboRating: 10,
    reviewCount: 41,
    url: 'https://www.vrbo.com/1607710?regionId=6187666&chkin=2026-05-21&chkout=2026-05-24&useRewards=false&adults=7',
    notes: 'not sure about boat!',
    photos: [
      'photos/lake/1.avif',
      'photos/lake/2.avif',
      'photos/lake/3.webp',
      'photos/lake/4.avif'
    ],
  }
];
