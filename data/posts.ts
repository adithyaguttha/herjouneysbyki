export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readingTime: string;
  destination: string; // Specific place (e.g., "Coonoor", "Chiang Mai")
  country: string; // Country slug (e.g., "india", "thailand")
  tripTypes: string[];
  content: string;
  images?: string[];
}

export const tripTypes = [
  "Adventure",
  "Relaxation",
  "Culture",
  "Food",
  "Nature",
  "Wellness",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "coonoor-december-nilgiris-family-trip",
    title: "December in the Nilgiris: A 4-Day Coonoor Itinerary with a Toddler",
    excerpt:
      "Misty mornings, soulful food, charming cafes, and unhurried family moments. Our calm, cozy escape into the Nilgiris was exactly what we needed.",
    coverImage: "/images/coonoor/coonoor1.jpg",
    date: "2025-12-15",
    readingTime: "8 min read",
    destination: "Coonoor",
    country: "india",
    tripTypes: ["Nature", "Relaxation", "Food"],
    content: `
      <p>Some trips are about ticking places off a list, and some are about slowing down and truly being present. Our 4-day Coonoor trip with our toddler was exactly that—a calm, cozy escape into the Nilgiris, filled with misty mornings, soulful food, charming cafes, and unhurried family moments. Here's our relaxed Coonoor itinerary, perfect for families traveling with young kids.</p>

      <figure class="image-full">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Misty Nilgiri mountains at dawn" />
        <figcaption>The magical misty mornings of the Nilgiris</figcaption>
      </figure>

      <h2>Day 1 – The Drive, Ooty Lunch & Settling into Chloe Cottage</h2>
      <p>We started our journey to Coonoor early in the morning—leaving Bangalore around 4 AM. Early starts work best when traveling with a toddler, as he comfortably slept through most of the drive.</p>

      <p>Our first stop was Ooty, where we paused for lunch at the popular Chinese restaurant Shinkows. We ordered familiar dishes like starters, fried rice, and noodles. While the food didn't quite suit our palate, the stir-fried vegetables stood out as the best of the lot.</p>

      <p>Post lunch, we continued towards Coonoor and reached our stay, Chloe Cottage, around 3 PM.</p>

      <p>December in the Nilgiris is magical. The weather was cool, pleasant, and perfectly balanced. Not freezing cold, but just enough to make you want to layer up. Colourful flowers were in full bloom everywhere making the landscape a visual treat.</p>

      <p>Chloe Cottage, tucked away in the Nilgiris mountains near Coonoor town, was our home for the trip. The property is charming, calm, and ideal for a family of three. The interiors carry vintage English vibes with tasteful décor, while the lush, well-maintained garden is perfect for slow outdoor moments. The compact kitchen is fully equipped, making it convenient to prepare quick meals—especially for a baby.</p>

      <p>We were welcomed warmly by the staff with local Varkey biscuits, a flaky Coonoor delicacy resembling puff pastries with a mildly sweet flavour.</p>

      <p>The property also offers an in-house chef and helper. Since we were tired from travel, we rested for the evening. Dinner was simple South Indian food prepared by the chef—homely, comforting, and absolutely delicious. It instantly made the stay feel warm and familiar, just like home.</p>

      <h2>Day 2 – Foggy Mornings, Local Finds & Cozy Evenings</h2>
      <p>We woke up to misty valley views and spent our morning sipping hot drinks on the balcony. Foggy December mornings in the Nilgiris are truly unmatched.</p>

      <p>Being away from crowded areas, we enjoyed spotting bits of wildlife in the nearby woods. After a hearty breakfast prepared by the chef, we headed into Coonoor town to visit Sri Raghavendra Iyangar Bakery, famous for its chicken leg piece puff. It may sound unusual to visit a bakery early in the morning, but this item sells out by 10 AM—so getting there early is essential.</p>

      <p>Next, we visited a strawberry farm for strawberry picking, which our little one absolutely loved.</p>

      <p>We returned to the cottage for lunch and spent some time clicking pictures around the beautiful property. In the evening, we headed back to Coonoor to shop for groceries—the cottage kitchen was too charming to ignore, and we planned to bake a cake that night.</p>

      <p>On the way, we made an impromptu stop at an Italian restaurant called Euphoria. With no expectations, we were pleasantly surprised—the calzones were really good.</p>

      <p>We then stopped at Moody's for hot chocolate—a must-visit in the Nilgiris. We even picked up a few packets of their hot chocolate premix to take home as souvenirs.</p>

      <p>Back at the cottage, after dinner, we baked a cake and enjoyed dessert in the chilly weather. The night ended perfectly—watching our favourite show together in the cozy living room.</p>

      <h2>Day 3 – Farm-to-Table Food & Golden Sunsets</h2>
      <p>The morning was slow and relaxed. We spent quality time at the cottage, soaking in the views while spending unhurried family time with our little one in the open garden.</p>

      <p>For lunch, we visited Cherrie Berry, and every dish we ordered impressed us. My personal favourites were the avocado fries (yes, avocado in that form!), beetroot edamame salad, and the Cherrie Berry special Sicilian lasagne. We ended the meal with their incredible Kahwah tea, made from a secret blend.</p>

      <p>What makes this place special is that all ingredients are sourced directly from their own farm. They also have a lovely play area, which kept our toddler engaged while we enjoyed our meal. After lunch, we took a short stroll through their avocado farm. Since the afternoon was quite sunny, we chose not to stay outdoors for long.</p>

      <p>In the evening, we visited La Belle Vie @ 180 McIver, made famous by the movie Kapoor & Sons. It's a stunning property and a must-visit spot for sunset. We enjoyed hot chocolate while watching the sky turn golden—a truly serene experience.</p>

      <figure class="image-full">
        <img src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1200&q=80" alt="Golden sunset at La Belle Vie" />
        <figcaption>Golden hour at La Belle Vie @ 180 McIver</figcaption>
      </figure>

      <p>For dinner, we headed to a quaint café called Birdhouse. With beautiful Christmas décor all around, the place felt warm and festive. The food was decent; we ordered pasta and enjoyed the cozy holiday vibe.</p>

      <h2>Day 4 – One Last Meal & Heading Home</h2>
      <p>With heavy hearts, we packed our bags and had breakfast at the cottage before starting our journey back to Bangalore.</p>

      <p>For our final stop, we visited Gateway Coonoor for lunch. We opted for a light meal—salad and rice—paired with the local Badaga delicacy Kappu Koi Udhakka (chicken curry). It was so flavourful that we finished every last grain of rice.</p>

      <p>With happy hearts and fuller bellies, we began our drive back home.</p>

      <h2>Final Thoughts</h2>
      <p>This Coonoor trip was exactly what we needed—slow, peaceful, and deeply comforting. From misty mornings and soulful food to cozy evenings and unhurried moments, everything felt just right. It reminded us that the best trips aren't about ticking places off a list, but about slowing down, soaking in the present, and making memories—especially with family.</p>

      <p>Until next time, Nilgiris. You were gentle, warm, and unforgettable.</p>

      <figure class="image-full">
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80" alt="Nilgiri hills landscape" />
        <figcaption>Until we meet again, Nilgiris</figcaption>
      </figure>

      <p>Planning a Coonoor trip with a toddler? I hope this 4-day Coonoor itinerary helps you plan a relaxed and family-friendly Nilgiris getaway. Feel free to leave a comment or reach out if you have questions—I'd be happy to help you plan your mountain escape.</p>

      <h2>FAQs – Coonoor Family Trip</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">Is Coonoor good for toddlers?</h3>
          <p class="faq-answer">Yes, Coonoor is calm, scenic, and less crowded than Ooty, making it ideal for families with young kids.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">How many days are enough for Coonoor?</h3>
          <p class="faq-answer">3–4 days are perfect for a relaxed trip.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Best time to visit Coonoor?</h3>
          <p class="faq-answer">October to February offers the best weather and views. I would personally say December is the best if you are okay with a bit of cold.</p>
        </div>
      </div>
    `,
  },
  {
    slug: "chiang-mai-temples-culture",
    title: "Chiang Mai: Temples, Night Markets & Mountain Magic",
    excerpt:
      "Golden spires piercing the sky, aromatic street food sizzling at night markets, and the gentle pace of northern Thai life. Chiang Mai is Thailand's soulful heart.",
    coverImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    date: "2024-12-20",
    readingTime: "7 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Culture", "Food", "Adventure"],
    content: `
      <p>The moment I stepped off the plane in Chiang Mai, I felt the difference from Bangkok's frenetic energy. Here, life moves at the pace of incense smoke curling toward temple ceilings. The old city, still encircled by ancient moats and fragments of medieval walls, holds over 300 temples – each one a masterpiece of Lanna architecture.</p>

      <h2>Temple Hopping at Dawn</h2>
      <p>I started my days early, when the temples are quiet and the monks are chanting. Wat Phra Singh, with its gleaming golden chedi, glowed in the soft morning light. Inside, murals depicting scenes from Buddha's life covered every wall – artwork that has been carefully preserved for centuries.</p>

      <p>But it was Wat Chedi Luang that stopped me in my tracks. This massive ruined temple, partially destroyed by an earthquake in 1545, still radiates power. Standing at its base, craning my neck toward the weathered bricks, I felt the weight of history pressing down.</p>

      <h2>The Night Market Dance</h2>
      <p>When the sun sets, Chiang Mai transforms. The Sunday Walking Street market stretches for nearly a kilometer through the old city, vendors selling everything from handmade soap to intricate silver jewelry. The air fills with the sizzle of pad thai, the sweet aroma of mango sticky rice, and the gentle sounds of traditional Lanna music.</p>

      <p>I ate my way through the market – khao soi (the iconic northern Thai curry noodle soup), sai oua (herbed sausages), and more fruit than I thought humanly possible. Every vendor had a story, every dish had a history.</p>

      <h2>Into the Mountains</h2>
      <p>A day trip to Doi Inthanon, Thailand's highest peak, revealed another side of the north. Cloud forests draped in moss, waterfalls cascading through jungle, and at the summit, twin chedis built to honor the King and Queen. The temperature dropped, a welcome respite from the tropical heat below.</p>

      <p>On the way down, I stopped at a Karen hill tribe village, where women in traditional dress wove intricate textiles on backstrap looms. Their way of life, so different from the modern world, felt both fragile and resilient.</p>

      <h2>Finding Peace</h2>
      <p>My last morning, I joined a meditation session at a small temple outside the old city. No other tourists, just monks and locals sitting in silence as the sun rose. The head monk, speaking softly in English, reminded us that travel isn't just about seeing new places – it's about seeing ourselves differently.</p>

      <p>Chiang Mai taught me that lesson well. In its temples and markets, its mountains and quiet moments, I found not just a beautiful destination, but a new perspective on what it means to be present.</p>
    `,
    images: [
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    ],
  },
  {
    slug: "swiss-alps-adventure",
    title: "Swiss Alps: A Journey Through Alpine Paradise",
    excerpt:
      "Snow-capped peaks touching the heavens, charming villages nestled in valleys, and adventures that take your breath away. The Swiss Alps are nature's masterpiece.",
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
    date: "2024-11-15",
    readingTime: "7 min read",
    destination: "Swiss Alps",
    country: "switzerland",
    tripTypes: ["Adventure", "Nature"],
    content: `
      <p>The train from Zurich wound through valleys so impossibly green they seemed digitally enhanced. But this was Switzerland – a country that looks like someone turned up the saturation on reality itself. As the altitude climbed, green gave way to white, and the famous peaks began to reveal themselves like old friends.</p>

      <h2>Zermatt and the Mighty Matterhorn</h2>
      <p>There's a reason the Matterhorn is the world's most photographed mountain. Its distinctive pyramid shape dominates the skyline of car-free Zermatt, appearing and disappearing as clouds play hide and seek around its summit. I could have watched it for hours – and I did.</p>

      <p>I took the Gornergrat railway to 3,089 meters, where the viewing platform offers a 360-degree Alpine panorama that defies description. Twenty-nine peaks over 4,000 meters stretched before me, a frozen ocean of rock and ice. The air was thin and cold, but I couldn't stop smiling.</p>

      <h2>Hiking Through Flower-Filled Meadows</h2>
      <p>Switzerland in summer is wildflower heaven. I hiked from Mürren to Gimmelwald, a trail that locals say is the most beautiful in the Alps. They weren't exaggerating. Alpine roses, gentians, and edelweiss dotted the path, while cowbells provided a constant, cheerful soundtrack.</p>

      <p>The villages themselves felt like stepping into a storybook. Wooden chalets with overflowing flower boxes, cheese shops that had been family-run for generations, and cafes where you could sit for hours watching paragliders drift overhead like colorful butterflies.</p>

      <h2>The Art of Doing Nothing</h2>
      <p>Perhaps the greatest luxury of Switzerland is the permission it gives you to slow down. I spent entire afternoons just sitting on sunny terraces, a glass of local wine in hand, watching the mountains change color with the light. No pressure to fill every moment with activity.</p>

      <p>The mountains themselves are enough – a reminder of how small we are, how ancient these peaks, and how precious therefore is every moment of peace and beauty we're granted.</p>

      <h2>Practical Magic</h2>
      <p>Swiss efficiency extends to tourism. Trains run on time (to the minute), hiking trails are immaculately marked, and even the most remote mountain hut serves excellent coffee. It's expensive, yes, but every franc feels worth it when you're standing on a peak watching the sunrise paint the Alps in shades of pink and gold.</p>
    `,
    images: [
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    ],
  },
  {
    slug: "bali-spiritual-journey",
    title: "Bali: Temples, Rice Terraces & Island Soul",
    excerpt:
      "Where spirituality infuses daily life, emerald rice terraces cascade down hillsides, and ancient temples hold secrets of a thousand years. Bali is Indonesia's beating heart.",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    date: "2024-10-20",
    readingTime: "6 min read",
    destination: "Bali",
    country: "indonesia",
    tripTypes: ["Culture", "Nature", "Wellness"],
    content: `
      <p>There's something magical about Bali that transcends its Instagram fame. Beyond the beach clubs and tourist hotspots lies an island where spirituality weaves through every aspect of daily life. From dawn offerings to temple ceremonies, the Balinese live their beliefs with a devotion that's both humbling and inspiring.</p>

      <h2>The Journey Begins at Sunrise</h2>
      <p>My alarm rang at 4:30 AM, but I didn't mind. The promise of watching the sun rise over Ulun Danu Beratan Temple was worth every lost minute of sleep. As I arrived at the lake temple, mist still clung to the water's surface, making the pagodas appear to float between worlds.</p>

      <p>The temple complex, dedicated to Dewi Danu, the goddess of waters, lakes, and rivers, is one of Bali's most iconic landmarks. But in the early morning hours, before the crowds arrive, it feels like a secret shared only between you and the mountain gods.</p>

      <h2>Tegallalang: Stairway to Green</h2>
      <p>The rice terraces of Tegallalang are a testament to the Balinese subak system – an ancient irrigation method recognized by UNESCO. Walking along the narrow paths between paddies, I watched farmers work with the same techniques their ancestors used a thousand years ago.</p>

      <p>The green here isn't just green – it's a hundred shades of emerald, jade, and lime, shifting with the sunlight. Dragonflies darted between rice stalks, and somewhere below, a gamelan orchestra practiced, their metallic melodies floating up the hillside.</p>

      <h2>Sacred Ceremonies</h2>
      <p>I was fortunate to witness a temple ceremony during my stay. Villagers in ceremonial dress carried towers of fruit and flowers on their heads, offerings to the gods. The air filled with incense and the hypnotic sounds of traditional music.</p>

      <p>A local guide explained the meaning behind each ritual – the prayers for good harvests, protection from evil spirits, and blessings for the community. In Bali, the sacred isn't separate from daily life; it's woven into everything.</p>

      <h2>Finding Balance in Ubud</h2>
      <p>Ubud, the cultural heart of Bali, offered a different kind of magic. Morning yoga with views of the jungle, afternoons spent exploring art galleries and craft villages, evenings watching traditional dance performances under the stars.</p>

      <p>At a small warung (local restaurant) near the monkey forest, I shared a table with a Balinese priest. Over plates of nasi campur, he spoke about the Balinese concept of Tri Hita Karana – the three causes of well-being: harmony with God, with other people, and with nature. Simple wisdom, but profound.</p>
    `,
    images: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&q=80",
    ],
  },
];

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

// Helper function to get posts by country
export function getPostsByCountry(countrySlug: string): BlogPost[] {
  return posts.filter((post) => post.country === countrySlug);
}

// Helper function to get all unique destinations
export function getAllDestinations(): string[] {
  return [...new Set(posts.map((post) => post.destination))];
}

// Helper function to get all unique trip types
export function getAllTripTypes(): string[] {
  return [...new Set(posts.flatMap((post) => post.tripTypes))];
}

// Helper function to sort posts
export function sortPosts(
  postsToSort: BlogPost[],
  sortBy: "newest" | "oldest"
): BlogPost[] {
  return [...postsToSort].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortBy === "newest" ? dateB - dateA : dateA - dateB;
  });
}

// Helper function to filter posts
export function filterPosts(
  postsToFilter: BlogPost[],
  filters: {
    search?: string;
    destination?: string;
    tripType?: string;
    country?: string;
  }
): BlogPost[] {
  return postsToFilter.filter((post) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.destination.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Destination filter
    if (filters.destination && post.destination !== filters.destination) {
      return false;
    }

    // Trip type filter
    if (filters.tripType && !post.tripTypes.includes(filters.tripType)) {
      return false;
    }

    // Country filter
    if (filters.country && post.country !== filters.country) {
      return false;
    }

    return true;
  });
}
