export type PropertyType = "Sale" | "Rent";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqm: number;
  type: PropertyType;
  image: string;
}

export const properties: Property[] = [
  {
    "id": 1,
    "title": "Seafront Villa in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "687,000 TND",
    "beds": 4,
    "baths": 2,
    "sqm": 351,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 2,
    "title": "Modern Apartment in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,518,000 TND",
    "beds": 3,
    "baths": 1,
    "sqm": 589,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 3,
    "title": "Modern Apartment in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "3,001,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 364,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 4,
    "title": "Penthouse Suite in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "1,585,000 TND",
    "beds": 6,
    "baths": 4,
    "sqm": 109,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 5,
    "title": "Seafront Villa in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "4,803,000 TND",
    "beds": 3,
    "baths": 3,
    "sqm": 318,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 6,
    "title": "Modern Apartment in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,173,000 TND",
    "beds": 4,
    "baths": 4,
    "sqm": 184,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 7,
    "title": "Seafront Villa in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,543,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 403,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 8,
    "title": "Hilltop Estate in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "1,881,000 TND",
    "beds": 4,
    "baths": 4,
    "sqm": 172,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 9,
    "title": "Golf Resort Villa in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "2,879,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 558,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 10,
    "title": "Cozy Duplex in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,972,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 436,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 11,
    "title": "Luxury Beachhouse in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,294,000 TND",
    "beds": 3,
    "baths": 1,
    "sqm": 137,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 12,
    "title": "Luxury Beachhouse in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "644,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 265,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 13,
    "title": "Cozy Duplex in Monastir",
    "location": "Monastir",
    "price": "1,654,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 539,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 14,
    "title": "Penthouse Suite in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "607,000 TND",
    "beds": 5,
    "baths": 4,
    "sqm": 127,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 15,
    "title": "Modern Apartment in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,898,000 TND",
    "beds": 5,
    "baths": 4,
    "sqm": 199,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 16,
    "title": "Penthouse Suite in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "668,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 295,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 17,
    "title": "Heritage Home in Sousse Coast",
    "location": "Sousse Coast",
    "price": "2,268,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 143,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 18,
    "title": "Modern Apartment in Sousse Coast",
    "location": "Sousse Coast",
    "price": "4,199,000 TND",
    "beds": 5,
    "baths": 5,
    "sqm": 528,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 19,
    "title": "Heritage Home in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "3,394,000 TND",
    "beds": 4,
    "baths": 3,
    "sqm": 275,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 20,
    "title": "Golf Resort Villa in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "4,141,000 TND",
    "beds": 4,
    "baths": 4,
    "sqm": 71,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 21,
    "title": "Seafront Villa in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,898,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 381,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 22,
    "title": "Luxury Beachhouse in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,586,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 317,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 23,
    "title": "Hilltop Estate in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,360,000 TND",
    "beds": 3,
    "baths": 2,
    "sqm": 389,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 24,
    "title": "Penthouse Suite in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "2,110,000 TND",
    "beds": 5,
    "baths": 5,
    "sqm": 267,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 25,
    "title": "Cozy Duplex in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,696,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 93,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 26,
    "title": "Luxury Beachhouse in Carthage",
    "location": "Carthage",
    "price": "1,906,000 TND",
    "beds": 3,
    "baths": 1,
    "sqm": 122,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 27,
    "title": "Cozy Duplex in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,925,000 TND",
    "beds": 2,
    "baths": 2,
    "sqm": 296,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 28,
    "title": "Golf Resort Villa in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,248,000 TND",
    "beds": 6,
    "baths": 6,
    "sqm": 136,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 29,
    "title": "Hilltop Estate in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "4,614,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 357,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 30,
    "title": "Seafront Villa in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,048,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 464,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 31,
    "title": "Seafront Villa in Sousse Coast",
    "location": "Sousse Coast",
    "price": "612,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 296,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 32,
    "title": "Hilltop Estate in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,523,000 TND",
    "beds": 6,
    "baths": 6,
    "sqm": 340,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 33,
    "title": "Hilltop Estate in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,643,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 106,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 34,
    "title": "Cozy Duplex in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "865,000 TND",
    "beds": 4,
    "baths": 4,
    "sqm": 129,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 35,
    "title": "Hilltop Estate in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "3,088,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 286,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 36,
    "title": "Golf Resort Villa in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "3,362,000 TND",
    "beds": 6,
    "baths": 4,
    "sqm": 172,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 37,
    "title": "Luxury Beachhouse in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "3,522,000 TND",
    "beds": 3,
    "baths": 3,
    "sqm": 200,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 38,
    "title": "Heritage Home in Monastir",
    "location": "Monastir",
    "price": "1,114,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 416,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 39,
    "title": "Heritage Home in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,748,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 196,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 40,
    "title": "Heritage Home in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "1,008,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 68,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 41,
    "title": "Hilltop Estate in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "3,870,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 559,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 42,
    "title": "Hilltop Estate in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "2,526,000 TND",
    "beds": 5,
    "baths": 5,
    "sqm": 311,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 43,
    "title": "Penthouse Suite in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "2,718,000 TND",
    "beds": 6,
    "baths": 5,
    "sqm": 518,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 44,
    "title": "Hilltop Estate in Carthage",
    "location": "Carthage",
    "price": "2,185,000 TND",
    "beds": 6,
    "baths": 4,
    "sqm": 373,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 45,
    "title": "Modern Apartment in Sousse Coast",
    "location": "Sousse Coast",
    "price": "2,914,000 TND",
    "beds": 6,
    "baths": 6,
    "sqm": 111,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 46,
    "title": "Heritage Home in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,876,000 TND",
    "beds": 4,
    "baths": 3,
    "sqm": 172,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 47,
    "title": "Hilltop Estate in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "2,808,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 560,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 48,
    "title": "Golf Resort Villa in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "579,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 456,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 49,
    "title": "Golf Resort Villa in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "1,408,000 TND",
    "beds": 6,
    "baths": 6,
    "sqm": 227,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 50,
    "title": "Heritage Home in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "3,303,000 TND",
    "beds": 2,
    "baths": 2,
    "sqm": 411,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 51,
    "title": "Seafront Villa in Monastir",
    "location": "Monastir",
    "price": "3,376,000 TND",
    "beds": 5,
    "baths": 4,
    "sqm": 405,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 52,
    "title": "Penthouse Suite in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "4,891,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 209,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 53,
    "title": "Modern Apartment in Monastir",
    "location": "Monastir",
    "price": "3,828,000 TND",
    "beds": 5,
    "baths": 4,
    "sqm": 93,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 54,
    "title": "Luxury Beachhouse in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "4,713,000 TND",
    "beds": 3,
    "baths": 1,
    "sqm": 588,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 55,
    "title": "Modern Apartment in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "4,396,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 499,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 56,
    "title": "Golf Resort Villa in Carthage",
    "location": "Carthage",
    "price": "3,101,000 TND",
    "beds": 4,
    "baths": 3,
    "sqm": 379,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 57,
    "title": "Penthouse Suite in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "3,621,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 229,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 58,
    "title": "Heritage Home in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,866,000 TND",
    "beds": 6,
    "baths": 4,
    "sqm": 172,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 59,
    "title": "Hilltop Estate in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "2,721,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 548,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 60,
    "title": "Luxury Beachhouse in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,274,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 230,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 61,
    "title": "Golf Resort Villa in Sousse Coast",
    "location": "Sousse Coast",
    "price": "2,549,000 TND",
    "beds": 4,
    "baths": 4,
    "sqm": 470,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 62,
    "title": "Seafront Villa in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,743,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 359,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 63,
    "title": "Luxury Beachhouse in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "2,216,000 TND",
    "beds": 4,
    "baths": 3,
    "sqm": 254,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 64,
    "title": "Cozy Duplex in Monastir",
    "location": "Monastir",
    "price": "3,560,000 TND",
    "beds": 2,
    "baths": 2,
    "sqm": 385,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 65,
    "title": "Hilltop Estate in Sousse Coast",
    "location": "Sousse Coast",
    "price": "1,153,000 TND",
    "beds": 4,
    "baths": 3,
    "sqm": 68,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 66,
    "title": "Heritage Home in Monastir",
    "location": "Monastir",
    "price": "4,190,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 502,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 67,
    "title": "Penthouse Suite in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "3,353,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 407,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 68,
    "title": "Heritage Home in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "2,200,000 TND",
    "beds": 1,
    "baths": 1,
    "sqm": 62,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 69,
    "title": "Heritage Home in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "1,339,000 TND",
    "beds": 6,
    "baths": 4,
    "sqm": 187,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 70,
    "title": "Hilltop Estate in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "3,815,000 TND",
    "beds": 5,
    "baths": 5,
    "sqm": 484,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 71,
    "title": "Modern Apartment in Monastir",
    "location": "Monastir",
    "price": "1,999,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 443,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 72,
    "title": "Hilltop Estate in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "3,580,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 460,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 73,
    "title": "Heritage Home in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "4,558,000 TND",
    "beds": 2,
    "baths": 1,
    "sqm": 447,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 74,
    "title": "Luxury Beachhouse in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "3,112,000 TND",
    "beds": 5,
    "baths": 4,
    "sqm": 93,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 75,
    "title": "Hilltop Estate in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "4,764,000 TND",
    "beds": 5,
    "baths": 3,
    "sqm": 299,
    "type": "Sale",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 76,
    "title": "Downtown Studio in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "2,700 TND / month",
    "beds": 6,
    "baths": 4,
    "sqm": 305,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 77,
    "title": "Summer House in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "1,800 TND / month",
    "beds": 5,
    "baths": 5,
    "sqm": 307,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 78,
    "title": "Summer House in Sousse Coast",
    "location": "Sousse Coast",
    "price": "2,000 TND / month",
    "beds": 3,
    "baths": 2,
    "sqm": 75,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 79,
    "title": "Urban Loft in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "5,000 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 324,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 80,
    "title": "Medina Style Courtyard in Carthage",
    "location": "Carthage",
    "price": "3,200 TND / month",
    "beds": 4,
    "baths": 3,
    "sqm": 403,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 81,
    "title": "Executive Apartment in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "2,400 TND / month",
    "beds": 4,
    "baths": 2,
    "sqm": 474,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 82,
    "title": "Urban Loft in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "2,700 TND / month",
    "beds": 2,
    "baths": 2,
    "sqm": 238,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 83,
    "title": "Summer House in Monastir",
    "location": "Monastir",
    "price": "1,300 TND / month",
    "beds": 6,
    "baths": 6,
    "sqm": 469,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 84,
    "title": "Summer House in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "1,700 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 78,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 85,
    "title": "Downtown Studio in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,400 TND / month",
    "beds": 6,
    "baths": 5,
    "sqm": 174,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 86,
    "title": "Executive Apartment in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "1,500 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 341,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 87,
    "title": "Executive Apartment in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,000 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 176,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 88,
    "title": "Medina Style Courtyard in Monastir",
    "location": "Monastir",
    "price": "2,900 TND / month",
    "beds": 6,
    "baths": 4,
    "sqm": 211,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 89,
    "title": "Summer House in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,400 TND / month",
    "beds": 4,
    "baths": 2,
    "sqm": 542,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 90,
    "title": "Urban Loft in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "1,200 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 348,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 91,
    "title": "Urban Loft in Sousse Coast",
    "location": "Sousse Coast",
    "price": "1,000 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 238,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 92,
    "title": "Downtown Studio in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "4,100 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 310,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 93,
    "title": "Summer House in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "3,200 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 184,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 94,
    "title": "Medina Style Courtyard in Monastir",
    "location": "Monastir",
    "price": "1,800 TND / month",
    "beds": 3,
    "baths": 3,
    "sqm": 395,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 95,
    "title": "Downtown Studio in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "3,700 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 189,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 96,
    "title": "Medina Style Courtyard in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,700 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 117,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 97,
    "title": "Summer House in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "3,800 TND / month",
    "beds": 4,
    "baths": 2,
    "sqm": 538,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 98,
    "title": "Executive Apartment in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "1,300 TND / month",
    "beds": 3,
    "baths": 2,
    "sqm": 538,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 99,
    "title": "Medina Style Courtyard in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "3,900 TND / month",
    "beds": 3,
    "baths": 2,
    "sqm": 481,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 100,
    "title": "Downtown Studio in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "2,700 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 187,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 101,
    "title": "Urban Loft in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "1,900 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 408,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 102,
    "title": "Downtown Studio in Sousse Coast",
    "location": "Sousse Coast",
    "price": "4,200 TND / month",
    "beds": 3,
    "baths": 3,
    "sqm": 380,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 103,
    "title": "Summer House in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "2,700 TND / month",
    "beds": 4,
    "baths": 3,
    "sqm": 188,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 104,
    "title": "Downtown Studio in Carthage",
    "location": "Carthage",
    "price": "3,000 TND / month",
    "beds": 5,
    "baths": 3,
    "sqm": 579,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 105,
    "title": "Medina Style Courtyard in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,100 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 300,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 106,
    "title": "Summer House in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,300 TND / month",
    "beds": 6,
    "baths": 5,
    "sqm": 126,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 107,
    "title": "Executive Apartment in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,900 TND / month",
    "beds": 5,
    "baths": 3,
    "sqm": 119,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 108,
    "title": "Downtown Studio in Sousse Coast",
    "location": "Sousse Coast",
    "price": "4,900 TND / month",
    "beds": 3,
    "baths": 2,
    "sqm": 539,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 109,
    "title": "Urban Loft in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "1,800 TND / month",
    "beds": 3,
    "baths": 3,
    "sqm": 134,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 110,
    "title": "Downtown Studio in Monastir",
    "location": "Monastir",
    "price": "1,100 TND / month",
    "beds": 6,
    "baths": 5,
    "sqm": 81,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 111,
    "title": "Medina Style Courtyard in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "4,100 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 406,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 112,
    "title": "Medina Style Courtyard in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "2,700 TND / month",
    "beds": 2,
    "baths": 2,
    "sqm": 499,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 113,
    "title": "Medina Style Courtyard in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "1,600 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 66,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 114,
    "title": "Urban Loft in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,000 TND / month",
    "beds": 4,
    "baths": 3,
    "sqm": 284,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 115,
    "title": "Medina Style Courtyard in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "3,600 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 363,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 116,
    "title": "Urban Loft in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,400 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 251,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 117,
    "title": "Urban Loft in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,000 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 278,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 118,
    "title": "Urban Loft in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "1,400 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 100,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 119,
    "title": "Urban Loft in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,800 TND / month",
    "beds": 5,
    "baths": 3,
    "sqm": 152,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 120,
    "title": "Summer House in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "4,200 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 353,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 121,
    "title": "Downtown Studio in La Marsa",
    "location": "La Marsa, Tunis",
    "price": "5,000 TND / month",
    "beds": 5,
    "baths": 3,
    "sqm": 60,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 122,
    "title": "Executive Apartment in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "4,000 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 175,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 123,
    "title": "Urban Loft in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "2,400 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 115,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 124,
    "title": "Medina Style Courtyard in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "2,600 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 361,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 125,
    "title": "Urban Loft in Monastir",
    "location": "Monastir",
    "price": "1,900 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 302,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 126,
    "title": "Downtown Studio in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "1,000 TND / month",
    "beds": 2,
    "baths": 2,
    "sqm": 499,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 127,
    "title": "Urban Loft in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "3,200 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 164,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 128,
    "title": "Summer House in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "2,200 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 80,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 129,
    "title": "Urban Loft in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,300 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 464,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 130,
    "title": "Summer House in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "3,000 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 256,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 131,
    "title": "Executive Apartment in Sousse Coast",
    "location": "Sousse Coast",
    "price": "4,300 TND / month",
    "beds": 3,
    "baths": 1,
    "sqm": 221,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 132,
    "title": "Downtown Studio in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,500 TND / month",
    "beds": 4,
    "baths": 4,
    "sqm": 388,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 133,
    "title": "Executive Apartment in Sidi Bou Said",
    "location": "Sidi Bou Said",
    "price": "3,200 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 184,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 134,
    "title": "Medina Style Courtyard in Carthage",
    "location": "Carthage",
    "price": "2,600 TND / month",
    "beds": 6,
    "baths": 4,
    "sqm": 218,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 135,
    "title": "Downtown Studio in Avenue Habib Bourguiba",
    "location": "Avenue Habib Bourguiba",
    "price": "1,600 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 523,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 136,
    "title": "Downtown Studio in Sousse Coast",
    "location": "Sousse Coast",
    "price": "2,000 TND / month",
    "beds": 3,
    "baths": 3,
    "sqm": 522,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 137,
    "title": "Urban Loft in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "2,500 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 564,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 138,
    "title": "Summer House in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "4,400 TND / month",
    "beds": 3,
    "baths": 2,
    "sqm": 558,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 139,
    "title": "Executive Apartment in Yasmine Hammamet",
    "location": "Yasmine Hammamet",
    "price": "1,800 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 388,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 140,
    "title": "Summer House in Monastir",
    "location": "Monastir",
    "price": "3,000 TND / month",
    "beds": 2,
    "baths": 1,
    "sqm": 129,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 141,
    "title": "Medina Style Courtyard in Gammarth",
    "location": "Gammarth, Tunis",
    "price": "2,000 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 415,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 142,
    "title": "Executive Apartment in Carthage",
    "location": "Carthage",
    "price": "2,900 TND / month",
    "beds": 5,
    "baths": 5,
    "sqm": 528,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 143,
    "title": "Medina Style Courtyard in Monastir",
    "location": "Monastir",
    "price": "1,700 TND / month",
    "beds": 2,
    "baths": 2,
    "sqm": 424,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 144,
    "title": "Urban Loft in Carthage",
    "location": "Carthage",
    "price": "1,800 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 171,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 145,
    "title": "Summer House in Monastir",
    "location": "Monastir",
    "price": "3,000 TND / month",
    "beds": 6,
    "baths": 6,
    "sqm": 80,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 146,
    "title": "Summer House in Sousse Coast",
    "location": "Sousse Coast",
    "price": "3,300 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 387,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 147,
    "title": "Downtown Studio in Hammamet Sud",
    "location": "Hammamet Sud",
    "price": "4,300 TND / month",
    "beds": 3,
    "baths": 1,
    "sqm": 168,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 148,
    "title": "Executive Apartment in Monastir",
    "location": "Monastir",
    "price": "4,200 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 94,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 149,
    "title": "Urban Loft in Les Berges du Lac II",
    "location": "Les Berges du Lac II",
    "price": "1,900 TND / month",
    "beds": 5,
    "baths": 4,
    "sqm": 456,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": 150,
    "title": "Executive Apartment in Carthage",
    "location": "Carthage",
    "price": "4,100 TND / month",
    "beds": 1,
    "baths": 1,
    "sqm": 315,
    "type": "Rent",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];

export const featuredProperties = properties.slice(0, 6); // Just grab 6 for home page

export interface Agent {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  languages: string[];
  image: string;
}

export const agents: Agent[] = [
  {
    id: 1,
    name: "Amina Khemiri",
    role: "Senior Luxury Agent",
    phone: "+216 23 456 789",
    email: "amina.k@dartounes.tn",
    languages: ["Arabic", "French", "English"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Youssef Ben Ali",
    role: "Commercial Real Estate",
    phone: "+216 55 123 456",
    email: "youssef.b@dartounes.tn",
    languages: ["Arabic", "French", "Italian"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Selima Mansour",
    role: "Residential Specialist",
    phone: "+216 98 765 432",
    email: "selima.m@dartounes.tn",
    languages: ["Arabic", "French", "German"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  }
];

export interface Project {
  id: number;
  name: string;
  developer: string;
  location: string;
  status: "Planning" | "Under Construction" | "Completed";
  completionDate: string;
  priceRange: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Azure Residences Lac 2",
    developer: "Immobiliere Horizon",
    location: "Les Berges du Lac II",
    status: "Under Construction",
    completionDate: "Q4 2026",
    priceRange: "800k - 2.5M TND",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Carthage Heritage Villas",
    developer: "Dar Elyssa Dev",
    location: "Carthage",
    status: "Planning",
    completionDate: "Q2 2027",
    priceRange: "3.5M - 5M TND",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Marina Towers Sousse",
    developer: "Coastal Build",
    location: "Sousse",
    status: "Completed",
    completionDate: "Q1 2026",
    priceRange: "600k - 1.2M TND",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Oasis Mall & Apartments",
    developer: "Sfax Premiere",
    location: "Sfax",
    status: "Under Construction",
    completionDate: "Q3 2025",
    priceRange: "300k - 900k TND",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Belvedere Green Views",
    developer: "Immobiliere Horizon",
    location: "Belvedere, Tunis",
    status: "Under Construction",
    completionDate: "Q2 2026",
    priceRange: "450k - 1.1M TND",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
  }
];
