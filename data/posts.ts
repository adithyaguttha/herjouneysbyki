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
  highlightWord?: string; // Word to circle/highlight in title
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
    coverImage: "/images/coonoor/cottage10.jpg",
    date: "2025-12-15",
    readingTime: "8 min read",
    destination: "Coonoor",
    country: "india",
    tripTypes: ["Nature", "Relaxation", "Food"],
    highlightWord: "Toddler",
    content: `
      <p>Some trips are about ticking places off a list, and some are about slowing down and truly being present. Our 4-day Coonoor trip with our <span class="pencil-circle-dark">toddler</span> was exactly that—a calm, cozy escape into the Nilgiris, filled with misty mornings, soulful food, charming cafes, and unhurried family moments. Here's our relaxed Coonoor itinerary, perfect for families traveling with young kids.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/coonoor/mystic_morning.jpg" alt="Misty Nilgiri mountains at dawn" />
        <figcaption>The magical misty mornings of the Nilgiris</figcaption>
      </figure>

      <h2>Day 1 – The Drive, Ooty Lunch & Settling into Chloe Cottage</h2>
      <p>We started our journey to Coonoor early in the morning—leaving Bangalore around 4 AM. Early starts work best when traveling with a toddler, as he comfortably slept through most of the drive.</p>

      <p>Our first stop was Ooty, where we paused for lunch at the popular Chinese restaurant Shinkows. We ordered familiar dishes like starters, fried rice, and noodles. While the food didn't quite suit our palate, the stir-fried vegetables stood out as the best of the lot.</p>

      <figure class="image-center">
        <img src="/images/coonoor/shinkows.jpg" alt="Shinkows Chinese Restaurant in Ooty" />
        <figcaption>Lunch stop at Shinkows, Ooty</figcaption>
      </figure>

      <p>Post lunch, we continued towards Coonoor and reached our stay, Chloe Cottage, around 3 PM.</p>

      <p>December in the Nilgiris is magical. The weather was cool, pleasant, and perfectly balanced. Not freezing cold, but just enough to make you want to layer up. Colourful flowers were in full bloom everywhere making the landscape a visual treat.</p>

      <figure class="image-full">
        <img src="/images/coonoor/cottage14.jpg" alt="Chloe Cottage garden with flowers in bloom" />
        <figcaption>Chloe Cottage - our cozy home in the Nilgiris</figcaption>
      </figure>

      <p>Chloe Cottage, tucked away in the Nilgiris mountains near Coonoor town, was our home for the trip. The property is charming, calm, and ideal for a family of three. The interiors carry vintage English vibes with tasteful décor, while the lush, well-maintained garden is perfect for slow outdoor moments. The compact kitchen is fully equipped, making it convenient to prepare quick meals—especially for a baby.</p>

      <p><em>Book Chloe Cottage on <a href="https://luxunlock.com/chloe-cottage" target="_blank" rel="noopener noreferrer">Luxunlock</a> – the only platform where this property is available.</em></p>

      <p>We were welcomed warmly by the staff with local Varkey biscuits, a flaky Coonoor delicacy resembling puff pastries with a mildly sweet flavour.</p>

      <p>The property also offers an in-house chef and helper. Since we were tired from travel, we rested for the evening. Dinner was simple South Indian food prepared by the chef—homely, comforting, and absolutely delicious. It instantly made the stay feel warm and familiar, just like home.</p>

      <figure class="image-center">
        <img src="/images/coonoor/food1.jpg" alt="Homely South Indian dinner at Chloe Cottage" />
        <figcaption>Homely comfort food at the cottage</figcaption>
      </figure>

      <h2>Day 2 – Foggy Mornings, Local Finds & Cozy Evenings</h2>
      <p>We woke up to misty valley views and spent our morning sipping hot drinks on the balcony. Foggy December mornings in the Nilgiris are truly unmatched.</p>

      <figure class="image-full">
        <img src="/images/coonoor/cottage10.jpg" alt="Misty morning view from Chloe Cottage balcony" />
        <figcaption>Foggy mornings at Chloe Cottage</figcaption>
      </figure>

      <p>Being away from crowded areas, we enjoyed spotting bits of wildlife in the nearby woods. After a hearty breakfast prepared by the chef, we headed into Coonoor town to visit Sri Raghavendra Iyangar Bakery, famous for its chicken leg piece puff. It may sound unusual to visit a bakery early in the morning, but this item sells out by 10 AM—so getting there early is essential.</p>

      <p>Next, we visited a strawberry farm for strawberry picking, which our little one absolutely loved.</p>

      <p>We returned to the cottage for lunch and spent some time clicking pictures around the beautiful property.</p>

      <div class="polaroid-collage">
        <div class="polaroid-collage-grid">
          <div class="collage-item-full">
            <img src="/images/coonoor/arjun.jpg" alt="Family moments at Chloe Cottage" />
          </div>
          <img src="/images/coonoor/cottage12.jpg" alt="Beautiful cottage interiors" />
          <img src="/images/coonoor/cottage13.jpg" alt="Cottage garden views" />
        </div>
        <p class="polaroid-collage-caption">Moments at Chloe Cottage</p>
      </div>

      <p>In the evening, we headed back to Coonoor to shop for groceries—the cottage kitchen was too charming to ignore, and we planned to bake a cake that night.</p>

      <p>On the way, we made an impromptu stop at an Italian restaurant called Euphoria. With no expectations, we were pleasantly surprised—the calzones were really good.</p>

      <p>We then stopped at Moody's for hot chocolate—a must-visit in the Nilgiris. We even picked up a few packets of their hot chocolate premix to take home as souvenirs.</p>

      <p>Back at the cottage, after dinner, we baked a cake and enjoyed dessert in the chilly weather. The night ended perfectly—watching our favourite show together in the cozy living room.</p>

      <h2>Day 3 – Farm-to-Table Food & Golden Sunsets</h2>
      <p>The morning was slow and relaxed. We spent quality time at the cottage, soaking in the views while spending unhurried family time with our little one in the open garden.</p>

      <figure class="image-center">
        <img src="/images/coonoor/arjun2.jpg" alt="Family time in the cottage garden" />
        <figcaption>Unhurried family moments</figcaption>
      </figure>

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
  // ============================================
  // CHIANG MAI POSTS (7 posts with internal linking)
  // ============================================

  // Blog 1: Main Hub - 6-Day Itinerary
  {
    slug: "chiang-mai-6-day-itinerary-with-baby",
    title: "Our 6-Day Chiang Mai Itinerary with a One-Year-Old (Slow Travel Guide)",
    excerpt:
      "Our first international trip with a baby — covering cafés, markets, temples, elephant sanctuary, and a mountain stay. A detailed slow travel guide for families.",
    coverImage: "/images/chiangmai/cover.jpg",
    date: "2026-01-15",
    readingTime: "12 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Nature", "Culture", "Food", "Relaxation"],
    highlightWord: "Chiang Mai",
    content: `
      <p>Travelling internationally with a baby can feel overwhelming, especially for the first time. For our first overseas trip with our one-year-old, we chose <span class="pencil-circle-dark">Chiang Mai</span> — a quieter, culturally rich part of Thailand that felt perfect for slow travel.</p>

      <p>This was our first international trip with our one-year-old, and we wanted it to be calm, manageable, and meaningful.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <p>While most travellers visiting Thailand head to the southern destinations like Bangkok, Phuket, Krabi or Koh Samui, we chose Chiang Mai — the quieter, untouched part of Thailand known for its serene landscapes, Northern Thai culture, and incredible food.</p>

      <p>We planned a 6-day trip, keeping things slow since it was our first time travelling internationally with a baby.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/arrival.jpg" alt="Chiang Mai city views" />
        <figcaption>The calm, welcoming streets of Chiang Mai</figcaption>
      </figure>

      <h2>Getting There</h2>
      <p>There is no direct flight from Bangalore to Chiang Mai, so we flew via Bangkok. The total journey wasn't too long — five and a half hours. Since it was a midnight flight, our baby slept through most of it. We used an airplane footrest for kids, which worked really well and didn't require airline approval.</p>

      <p>We reached Bangkok, transferred quickly, and landed in Chiang Mai by 8:45 AM.</p>

      <p><em>For more details on flights and transport, read our <a href="/thailand/chiang-mai-flights-visa-transport-india">flights, visa & transport guide for Indians</a>.</em></p>

      <h2>Day 1: Arrival, One Nimman & White Market</h2>
      <p>From the airport we arrived at our hotel by 10:30 AM. We stayed at Novotel, which is budget-friendly, comfortable, and located close to One Nimman and Maya Mall. While my husband handled check-in, I fed our baby breakfast.</p>

      <p>Lunch was at Ginger Farm Kitchen in One Nimman. The presentation was beautiful, though the flavours weren't entirely to my taste. They kindly prepared steamed pumpkin for our baby. We rested in the afternoon.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/day1-onenimman.jpg" alt="One Nimman complex in Chiang Mai" />
        <figcaption>One Nimman — a hub for food and shopping</figcaption>
      </figure>

      <p>In the evening, we explored Rimping Supermarket at Maya Mall, grabbed bakery items from Saint Etoile, and later walked around One Nimman and the weekend White Market. Dinner was from the food stalls, and Kanom Krok was a highlight. We ended the night watching a live band.</p>

      <p><em>Explore more about <a href="/thailand/chiang-mai-shopping-markets-malls">the best shopping places in Chiang Mai</a>.</em></p>

      <h2>Day 2: Jing Jai Market & Doi Suthep Sunset</h2>
      <p>Breakfast was at Sun Rays Café — great vibe and presentation. We then spent most of the day at Jing Jai Market, a weekend market focused on sustainable, handmade local products. We ate Phat Kaphrao at Tops Green and continued shopping.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/day2-jingjaimarket.jpg" alt="Jing Jai Market Chiang Mai" />
        <figcaption>Jing Jai Market — sustainable shopping at its best</figcaption>
      </figure>

      <p>In the evening, we visited Wat Phra That Doi Suthep by cable car for sunset. The temple was calm, and the city views were beautiful. We managed our baby's meals using a portable kettle.</p>

      <p><em>Read more about <a href="/thailand/chiang-mai-best-cafes-food-guide">cafés and food spots we loved in Chiang Mai</a>.</em></p>

      <h2>Day 3: Elephant Sanctuary & Baby's First Birthday</h2>
      <p>We visited Chai Lai Orchid Elephant Sanctuary early in the morning to celebrate our baby's first birthday. We fed, walked with, and learned about rescued elephants. Lunch was at their café, followed by a relaxed afternoon.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/day3-elephant.jpg" alt="Chai Lai Orchid Elephant Sanctuary" />
        <figcaption>A meaningful morning at Chai Lai Orchid Elephant Sanctuary</figcaption>
      </figure>

      <p>Dinner back in the city was Khao Soi at Khao Soi Nimman — the must-try dish of Northern Thailand.</p>

      <h2>Day 4: Mountain Retreat at Onsen @ Moncham</h2>
      <p>We moved to Mae Rim for a mountain stay at Onsen @ Moncham, a Japanese-inspired luxury hotel. After stopping at Roon Café, we checked into our Grand Terrace Suite with a private outdoor onsen. The drizzle, cool weather, and hot springs made the experience unforgettable.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/day4-onsen.jpg" alt="Onsen @ Moncham Mae Rim" />
        <figcaption>Our mountain retreat at Onsen @ Moncham</figcaption>
      </figure>

      <p><em>This stay deserves its own post — read our detailed <a href="/thailand/chiang-mai-onsen-moncham-luxury-stay">Onsen @ Moncham review</a>.</em></p>

      <h2>Day 5: Farms, Gardens & Return to City</h2>
      <p>After a beautifully prepared breakfast, we explored Mae Khee Sheep Farm, Jin Ju Orange Farm, and nearby flower gardens. We returned to the hotel in the evening and later went back to Chiang Mai city for our final night.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/day5-farm.jpg" alt="Mae Khee Sheep Farm" />
        <figcaption>Exploring the farms around Mae Rim</figcaption>
      </figure>

      <h2>Day 6: Final Shopping & Departure</h2>
      <p>We spent our last few hours shopping at Maya Mall before heading to the airport.</p>

      <p><em>Curious what I brought home? Check out <a href="/thailand/thailand-souvenirs-chiang-mai-haul">things I bought in Thailand</a>.</em></p>

      <h2>Final Thoughts</h2>
      <p>Chiang Mai turned out to be an ideal destination for our first international trip with a baby — slow-paced, welcoming, and easy to navigate. With thoughtful planning and a flexible itinerary, travelling with a toddler felt manageable and enjoyable.</p>

      <p>If you're planning your own Chiang Mai trip, you may also find these helpful:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-best-cafes-food-guide">Cafés and food we loved in Chiang Mai</a></li>
        <li><a href="/thailand/chiang-mai-shopping-markets-malls">Best shopping places and markets</a></li>
        <li><a href="/thailand/chiang-mai-baby-travel-tips">Travel tips for visiting Chiang Mai with a baby</a></li>
      </ul>

      <h2>FAQs – Chiang Mai Family Trip</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">Is Chiang Mai suitable for travelling with a 1-year-old baby?</h3>
          <p class="faq-answer">Yes, Chiang Mai is very baby-friendly. The city is calm, walkable, has good hospitals, clean cafes, malls with nursing rooms, and many attractions that don't involve long travel or physical strain.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">How many days are enough for Chiang Mai?</h3>
          <p class="faq-answer">Six days are perfect for Chiang Mai, especially when travelling with a baby. It allows a slow pace, relaxed sightseeing, cafe hopping, shopping, and even a short mountain stay without rushing.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Is Chiang Mai better than Bangkok for family travel?</h3>
          <p class="faq-answer">For families with young children, Chiang Mai is often better than Bangkok. It's quieter, less crowded, easier to navigate, and ideal for slow travel compared to the fast-paced city life of Bangkok.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Can you travel around Chiang Mai without renting a car?</h3>
          <p class="faq-answer">Yes, taxis and Grab are easily available in Chiang Mai. For longer trips like Mae Rim or elephant sanctuaries, booking a private cab for the day is convenient and affordable.</p>
        </div>
      </div>
    `,
  },

  // Blog 2: Cafés & Food Guide
  {
    slug: "chiang-mai-best-cafes-food-guide",
    title: "Best Cafés & Food to Try in Chiang Mai (From Local Markets to Michelin Spots)",
    excerpt:
      "A simple food guide to Chiang Mai — cafés, bakeries, local markets, Michelin-listed restaurants, and kid-friendly food spots we personally tried.",
    coverImage: "/images/chiangmai/cafes-cover.jpg",
    date: "2026-01-14",
    readingTime: "6 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Food"],
    content: `
      <p>Chiang Mai has one of the most relaxed and enjoyable food scenes in Thailand. From thoughtfully designed cafés to vibrant local markets and Michelin-listed restaurants, the city offers something for every kind of traveller.</p>

      <p>This guide shares the cafés, bakeries, food markets, and restaurants we personally tried during our stay in Chiang Mai, including baby-friendly and casual dining options.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/cafe-sunrays.jpg" alt="Sun Rays Café Chiang Mai" />
        <figcaption>Beautiful breakfast at Sun Rays Café</figcaption>
      </figure>

      <h2>Cafés We Loved</h2>

      <h3>Sun Rays Café</h3>
      <p><strong>Sun Rays Café</strong> was our breakfast stop — a small, charming café with beautiful food presentation. While the French toast looked great but felt slightly dry, the overall vibe made it worth visiting.</p>

      <h3>Ginger Farm Kitchen</h3>
      <p><strong>Ginger Farm Kitchen</strong> at One Nimman is Michelin-listed and focuses on Northern Thai food made without MSG or artificial ingredients. The presentation was beautiful, though the flavours weren't entirely to my taste. They kindly prepared steamed pumpkin for our baby.</p>

      <h3>Chom Café</h3>
      <p><strong>Chom Café</strong> is one of the most Instagrammable cafés in Chiang Mai, and the food here is decent as well.</p>

      <h3>Early Owls Café</h3>
      <p><strong>Early Owls Café</strong> is a lovely spot for a family picnic. They provide a nice seating setup where you can choose a spot on the lawn and create your own picnic-style arrangement. In the evening, we visited just for coffee and to relax, while our kid enjoyed the large green space to walk and crawl around.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/cafe-earlyowls.jpg" alt="Early Owls Café outdoor seating" />
        <figcaption>Early Owls Café — perfect for families</figcaption>
      </figure>

      <h2>Markets & Local Food</h2>

      <h3>Rimping Supermarket</h3>
      <p><strong>Rimping Supermarket</strong> at Maya Mall is a food destination by itself — it truly feels like you can taste all of Thailand in one place. The Saint Etoile bakery inside is a must-visit, especially for their sweet potato bread.</p>

      <h3>Jing Jai Market</h3>
      <p><strong>Jing Jai Market</strong> is excellent for local food, especially Phat Kaphrao at Tops Green.</p>

      <h3>Khao Soi Nimman</h3>
      <p>For Northern Thai specialties, <strong>Khao Soi Nimman</strong> is a popular stop, though flavours are subjective. Khao Soi is the must-try dish of Chiang Mai — a rich, coconut-based curry noodle soup.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/food-khaosoi.jpg" alt="Khao Soi noodle soup" />
        <figcaption>Khao Soi — the iconic dish of Northern Thailand</figcaption>
      </figure>

      <h2>Family-Friendly Food Courts</h2>
      <p>The food courts at <strong>One Nimman</strong> and <strong>Maya Mall</strong> are great for families, with plenty of dessert and kid-friendly options like crepes, dim sums, local desserts, continental food, and fresh fruit.</p>

      <h2>Final Thoughts</h2>
      <p>Food in Chiang Mai is best enjoyed slowly — whether it's a quiet café breakfast, a market lunch, or a simple local dish at the end of the day. The variety makes it easy to balance exploration with comfort, especially when travelling with family.</p>

      <p>If you're planning a food-focused Chiang Mai trip, you may also want to read:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Our complete 6-day Chiang Mai itinerary</a></li>
        <li><a href="/thailand/chiang-mai-shopping-markets-malls">Best shopping markets in Chiang Mai</a></li>
        <li><a href="/thailand/thailand-souvenirs-chiang-mai-haul">Things we bought in Thailand</a></li>
      </ul>

      <h2>FAQs – Chiang Mai Food</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">Is Chiang Mai known for cafes?</h3>
          <p class="faq-answer">Yes, Chiang Mai is one of the best cafe cities in Thailand. It has a strong cafe culture with aesthetic spaces, great coffee, beautiful food presentation, and relaxed vibes.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Are cafes in Chiang Mai baby-friendly?</h3>
          <p class="faq-answer">Many cafes in Chiang Mai are stroller-friendly and welcoming to families. Outdoor seating, spacious layouts, and friendly staff make it easy to visit cafes with a baby.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">What is the must-try food in Chiang Mai?</h3>
          <p class="faq-answer">Khao Soi is the must-try dish in Chiang Mai. Other popular foods include Kanom Krok, Pad Krapow, mango sticky rice, and Northern Thai curries.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Are there vegetarian or vegan food options in Chiang Mai?</h3>
          <p class="faq-answer">Yes, Chiang Mai has plenty of vegetarian and vegan options. Many restaurants offer tofu-based dishes, vegan Pad Krapow, and plant-based versions of Thai classics.</p>
        </div>
      </div>
    `,
  },

  // Blog 3: Shopping Guide
  {
    slug: "chiang-mai-shopping-markets-malls",
    title: "Best Shopping Places in Chiang Mai: Markets, Malls & Hidden Finds",
    excerpt:
      "From weekend markets to malls, here's where to shop in Chiang Mai for handmade goods, souvenirs, clothing, and gourmet groceries.",
    coverImage: "/images/chiangmai/shopping-cover.jpg",
    date: "2026-01-13",
    readingTime: "4 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Culture"],
    content: `
      <p>Shopping in Chiang Mai is less about malls and more about discovering thoughtfully made, locally crafted products. From weekend markets to curated lifestyle spaces, the city offers a refreshing alternative to mass-produced souvenirs.</p>

      <p>This guide covers the best shopping places in Chiang Mai, including markets, malls, and specialty stores we explored during our trip.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/market-jingjaiwide.jpg" alt="Jing Jai Market overview" />
        <figcaption>Jing Jai Market — sustainable shopping in Chiang Mai</figcaption>
      </figure>

      <h2>Jing Jai Market</h2>
      <p>Chiang Mai is perfect for slow, thoughtful shopping. <strong>Jing Jai Market</strong> stands out for its focus on sustainable, handmade products by local artisans. You'll find organic goods, handmade jewellery, beeswax wraps, and eco-friendly items.</p>

      <h2>White Market at One Nimman</h2>
      <p><strong>White Market</strong> at One Nimman (weekends only) is smaller but beautifully curated with handmade and aesthetic items. It's perfect for an evening stroll after dinner.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/market-whitemarket.jpg" alt="White Market at One Nimman" />
        <figcaption>Weekend White Market at One Nimman</figcaption>
      </figure>

      <h2>Maya Mall</h2>
      <p><strong>Maya Mall</strong> is ideal for larger shopping runs, souvenirs, and essentials. It's air-conditioned and comfortable for families with kids.</p>

      <h2>Rimping Supermarket</h2>
      <p><strong>Rimping Supermarket</strong> is great for gourmet groceries and snacks. It's also home to Saint Etoile bakery — their sweet potato bread is worth trying.</p>

      <h2>Final Thoughts</h2>
      <p>Each place offers something different, and you could easily spend a full day shopping in Chiang Mai. Whether you enjoy browsing handmade markets or prefer air-conditioned malls, Chiang Mai offers a balanced shopping experience. Taking time to explore these spaces is part of the slow travel charm of the city.</p>

      <p>You may also enjoy reading:</p>
      <ul>
        <li><a href="/thailand/thailand-souvenirs-chiang-mai-haul">Things I bought in Thailand (Chiang Mai edition)</a></li>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Our Chiang Mai itinerary with a baby</a></li>
        <li><a href="/thailand/chiang-mai-best-cafes-food-guide">Cafés and food spots near popular shopping areas</a></li>
      </ul>

      <h2>FAQs – Shopping in Chiang Mai</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">What are the best places to shop in Chiang Mai?</h3>
          <p class="faq-answer">Some of the best shopping places in Chiang Mai are Jing Jai Market, One Nimman, Maya Mall, and weekend markets featuring handmade and local products.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">What is Jing Jai Market famous for?</h3>
          <p class="faq-answer">Jing Jai Market is known for sustainable, handmade products made by local artisans. You'll find organic goods, handmade jewellery, beeswax wraps, and eco-friendly items.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Is shopping in Chiang Mai expensive?</h3>
          <p class="faq-answer">Shopping in Chiang Mai is generally affordable. Handmade and artisanal products may cost slightly more, but the quality, craftsmanship, and uniqueness make them worth it.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Are Chiang Mai markets open every day?</h3>
          <p class="faq-answer">Some markets like Jing Jai Market and White Market operate mainly on weekends. Malls like Maya Mall and One Nimman are open daily.</p>
        </div>
      </div>
    `,
  },

  // Blog 4: Thailand Souvenirs
  {
    slug: "thailand-souvenirs-chiang-mai-haul",
    title: "Things I Bought in Thailand: Chiang Mai Souvenirs Worth Bringing Home",
    excerpt:
      "A list of thoughtful, handmade items I bought in Chiang Mai — from jewellery and beeswax wraps to bags and small souvenirs.",
    coverImage: "/images/chiangmai/souvenirs-cover.jpg",
    date: "2026-01-12",
    readingTime: "3 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Culture"],
    content: `
      <p>Instead of buying generic souvenirs, I wanted items that felt thoughtful, locally made, and useful. Chiang Mai is perfect for this kind of shopping, especially if you enjoy handmade and sustainable products.</p>

      <p>This post shares exactly what I bought in Chiang Mai — from jewellery to small everyday items — and why they made meaningful souvenirs.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/souvenirs-haul.jpg" alt="Chiang Mai shopping haul" />
        <figcaption>My Chiang Mai shopping haul</figcaption>
      </figure>

      <h2>What I Bought</h2>
      <p>Most of my shopping happened at Jing Jai Market and White Market. I bought:</p>
      <ul>
        <li><strong>Handmade jewellery</strong> made with real flowers</li>
        <li><strong>Colourful beeswax wraps</strong> — eco-friendly and practical</li>
        <li><strong>Charm bracelets</strong></li>
        <li><strong>Bags and pouches</strong></li>
        <li><strong>Rubber bands and small accessories</strong></li>
      </ul>

      <figure class="image-center">
        <img src="/images/chiangmai/souvenirs-jewellery.jpg" alt="Handmade flower jewellery" />
        <figcaption>Handmade jewellery with real flowers</figcaption>
      </figure>

      <p>These items felt more meaningful than mass-produced souvenirs and were easy to pack and gift.</p>

      <h2>Final Thoughts</h2>
      <p>The best souvenirs from Chiang Mai are often small, handmade, and full of character. These purchases felt more personal and reminded me of the slow, creative energy of the city.</p>

      <p>If you're planning your own shopping list, check out:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-shopping-markets-malls">Best shopping places in Chiang Mai</a></li>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Our Chiang Mai itinerary</a></li>
        <li><a href="/thailand/chiang-mai-baby-travel-tips">Budget travel tips and useful products</a></li>
      </ul>

      <h2>FAQs – Thailand Souvenirs</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">What are the best souvenirs to buy in Thailand?</h3>
          <p class="faq-answer">Some of the best souvenirs from Thailand include handmade jewellery, beeswax wraps, local handicrafts, fabric accessories, ceramic mugs, and eco-friendly products.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Are handmade products in Chiang Mai authentic?</h3>
          <p class="faq-answer">Yes, many handmade products in Chiang Mai are locally made by artisans using traditional techniques, especially in markets like Jing Jai and One Nimman.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Is Chiang Mai good for sustainable shopping?</h3>
          <p class="faq-answer">Chiang Mai is one of the best places in Thailand for sustainable shopping. Many markets focus on organic, recycled, and locally sourced products.</p>
        </div>
      </div>
    `,
  },

  // Blog 5: Baby Travel Tips
  {
    slug: "chiang-mai-baby-travel-tips",
    title: "Chiang Mai with a Baby: Travel Tips & Products That Helped Us",
    excerpt:
      "Travelling to Chiang Mai with a baby? These are the practical tips and products that made our trip easier and stress-free.",
    coverImage: "/images/chiangmai/baby-travel-cover.jpg",
    date: "2026-01-11",
    readingTime: "4 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Nature"],
    content: `
      <p>Travelling with a baby requires extra planning, but the right destination makes all the difference. Chiang Mai felt surprisingly easy to navigate with a toddler, thanks to its relaxed pace and family-friendly spaces.</p>

      <p>This post shares practical tips and travel products that helped us manage flights, food, and daily outings while travelling with our one-year-old.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/baby-travel-family.jpg" alt="Family travel in Chiang Mai" />
        <figcaption>Exploring Chiang Mai with our little one</figcaption>
      </figure>

      <h2>Products That Helped</h2>

      <h3>Lightweight Stroller</h3>
      <p>A <strong>lightweight stroller</strong> worked well in Nimman and malls. The sidewalks in the main areas are stroller-friendly, and malls have ramps and elevators.</p>

      <h3>Airplane Footrest</h3>
      <p>An <strong>airplane footrest for kids</strong> helped our baby sleep comfortably on long flights. It didn't require airline approval and was easy to set up.</p>

      <h3>Portable Kettle</h3>
      <p>We carried a <strong>portable kettle</strong> to cook simple meals like rice and porridge, which made feeding easy throughout the trip. This was especially useful at the hotel and even at the mountain stay.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/baby-travel-products.jpg" alt="Travel products for baby" />
        <figcaption>Essential travel products for our trip</figcaption>
      </figure>

      <h2>Food for Baby</h2>
      <p>Markets, cafés, and malls had plenty of kid-friendly food options. Many restaurants were willing to prepare simple steamed vegetables or plain rice for our baby when we asked.</p>

      <h2>Final Thoughts</h2>
      <p>With simple preparation and realistic expectations, travelling with a baby doesn't have to be stressful. Chiang Mai proved to be a destination where slow travel and family travel fit naturally together.</p>

      <p>You may also find these useful:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-flights-visa-transport-india">Flights and visa tips for Indians visiting Chiang Mai</a></li>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Our complete Chiang Mai itinerary</a></li>
        <li><a href="/thailand/chiang-mai-best-cafes-food-guide">Cafés and food options suitable for families</a></li>
      </ul>
    `,
  },

  // Blog 6: Flights, Visa & Transport
  {
    slug: "chiang-mai-flights-visa-transport-india",
    title: "Flights, Visa & Transport Tips for Indians Visiting Chiang Mai",
    excerpt:
      "Everything Indian travellers need to know before visiting Chiang Mai — flights, visa basics, airport transfers, and local transport tips.",
    coverImage: "/images/chiangmai/flights-cover.jpg",
    date: "2026-01-10",
    readingTime: "4 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Culture"],
    content: `
      <p>Before planning a trip to Chiang Mai from India, it helps to understand flight routes, visa basics, and local transport options. With no direct flights, a little planning goes a long way.</p>

      <p>This guide shares practical information on flights, visas, airport transfers, and getting around Chiang Mai based on our personal experience.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/flights-airport.jpg" alt="Chiang Mai International Airport" />
        <figcaption>Arriving at Chiang Mai International Airport</figcaption>
      </figure>

      <h2>Flights from India</h2>
      <p>There are no direct flights from India to Chiang Mai. Most routes go via Bangkok. We flew with <strong>Thai Airways</strong>, which was comfortable and reliable.</p>

      <p>The total journey from Bangalore was about five and a half hours including the layover. Since we took a midnight flight, our baby slept through most of it.</p>

      <h2>Visa for Indians</h2>
      <p>Indian passport holders require a visa for Thailand. Depending on current rules, this can be visa-free entry, visa on arrival, or e-visa. <strong>Always check the latest official guidelines before travelling.</strong></p>

      <h2>Getting Around Chiang Mai</h2>

      <h3>Within the City</h3>
      <p>Within the city, <strong>Grab</strong> worked well for short distances. It's reliable, affordable, and convenient with a baby.</p>

      <h3>Longer Trips</h3>
      <p>For longer trips like Mae Rim, we hired a local driver through Google, which was convenient and flexible. This worked well for the elephant sanctuary visit and the mountain hotel transfer.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/transport-grab.jpg" alt="Grab taxi in Chiang Mai" />
        <figcaption>Grab is reliable for getting around Chiang Mai</figcaption>
      </figure>

      <h2>Final Thoughts</h2>
      <p>Once the logistics are sorted, travelling to Chiang Mai from India is fairly straightforward. With reliable flights, easy transport, and a relaxed city layout, it's a comfortable destination even for first-time international travellers.</p>

      <p>You may also want to read:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Chiang Mai itinerary for first-time visitors</a></li>
        <li><a href="/thailand/chiang-mai-baby-travel-tips">Travel tips for visiting Chiang Mai with a baby</a></li>
        <li><a href="/thailand/chiang-mai-shopping-markets-malls">Best places to shop and eat in Chiang Mai</a></li>
      </ul>

      <h2>FAQs – Flights & Visa</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">Do Indians need a visa to travel to Thailand?</h3>
          <p class="faq-answer">Indian passport holders require a visa for Thailand. Depending on current rules, this can be visa-free entry, visa on arrival, or e-visa. Always check the latest official guidelines before travelling.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Are there direct flights from India to Chiang Mai?</h3>
          <p class="faq-answer">Currently, there are no direct flights from India to Chiang Mai. Most flights connect via Bangkok.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Which airlines are best for travelling to Thailand with a baby?</h3>
          <p class="faq-answer">Full-service airlines like Thai Airways are comfortable for travelling with a baby, offering better seating comfort and smoother transit experiences.</p>
        </div>
        <div class="faq-item">
          <h3 class="faq-question">Is Chiang Mai a budget-friendly destination?</h3>
          <p class="faq-answer">Yes, Chiang Mai is budget-friendly. Accommodation, food, transport, and shopping are reasonably priced, making it ideal for both budget and luxury slow travellers.</p>
        </div>
      </div>
    `,
  },

  // Blog 7: Onsen @ Moncham Luxury Stay
  {
    slug: "chiang-mai-onsen-moncham-luxury-stay",
    title: "Luxury Stays in Chiang Mai: A Slow Mountain Retreat at Onsen @ Moncham",
    excerpt:
      "Looking for a luxury stay in Chiang Mai? Our experience at Onsen @ Moncham in Mae Rim — a Japanese-inspired mountain retreat with private onsens and exceptional service.",
    coverImage: "/images/chiangmai/onsen-cover.jpg",
    date: "2026-01-09",
    readingTime: "8 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Relaxation", "Wellness"],
    content: `
      <p>After spending the first half of our Chiang Mai trip in the city, we decided to slow things down and head into the mountains. For two nights, we stayed at <strong>Onsen @ Moncham</strong>, a Japanese-inspired luxury hotel located in Mae Raem, Mae Rim District, about an hour from Chiang Mai city.</p>

      <p>This stay was not budget-friendly by any means, but it turned out to be the highlight of our entire trip. From service to food to thoughtful details, it stood out as one of the best luxury stays we've experienced — not just in Thailand, but overall.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-full">
        <img src="/images/chiangmai/onsen-exterior.jpg" alt="Onsen @ Moncham exterior" />
        <figcaption>The stunning Japanese-inspired architecture of Onsen @ Moncham</figcaption>
      </figure>

      <h2>The Journey to Mae Rim</h2>
      <p>We started early after breakfast at Novotel Chiang Mai and drove toward Mae Rim. The drive itself felt like a transition — from city energy to misty mountains and greenery. On the way, we made a short stop at <strong>Rroon Café</strong> for a light lunch. The café is tucked away in the hills and offers beautiful views. Food options are limited, but the setting makes it worth stopping, especially for photos and a quiet break.</p>

      <p>By the time we reached Onsen @ Moncham, it had started drizzling. The light rain made the property look even more beautiful and added to the calm, mountain atmosphere.</p>

      <h2>First Impressions & Room Experience</h2>
      <p>The property is inspired by old Japanese architecture, and everything — from the pathways to the interiors — reflects that aesthetic. The staff welcomed us warmly and personally showed us to our room.</p>

      <p>We stayed in the <strong>Grand Terrace Suite with Outdoor Onsen</strong>, which was the best decision we made on this trip. The room was spacious, extremely comfortable, and very kid-friendly. The private terrace opened to uninterrupted mountain views, and the outdoor onsen overlooked the hills — perfect for slow mornings and quiet evenings.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/onsen-room.jpg" alt="Grand Terrace Suite at Onsen @ Moncham" />
        <figcaption>Our Grand Terrace Suite with private outdoor onsen</figcaption>
      </figure>

      <p>The welcome snacks were traditional Japanese sweets, beautifully packed in a bento-style box wrapped with furoshiki cloth. Small details like these made the stay feel thoughtful and intentional.</p>

      <p>We had also requested a small birthday decoration for our one-year-old, and the team went above and beyond to make it special. Nothing felt rushed or generic.</p>

      <p>Even the bathroom experience felt luxurious — yes, including the warm toilet seat, which made us joke that we were living our royal Japanese life in the middle of Chiang Mai's mountains.</p>

      <h2>Onsen Experience: The Highlight</h2>
      <p>The hotel has separate public onsens for men and women, along with a <strong>private couple onsen</strong>, which we opted for in the evening. It was cold and drizzling that day, and soaking in hot mineral water while mist rose around us felt unreal.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/onsen-bath.jpg" alt="Private onsen experience" />
        <figcaption>The private onsen experience was unforgettable</figcaption>
      </figure>

      <p>The private onsen experience was calm, intimate, and deeply relaxing. With the dark sky, gentle rain, fog from the hot springs, and absolute silence around us, it felt like time slowed down completely. This was slow travel at its best.</p>

      <h2>Dinner at the In-House Restaurant</h2>
      <p>After the onsen, hunger kicked in — as expected. We had dinner at the hotel's restaurant and ordered a fairly long list, including:</p>
      <ul>
        <li>Garden salad with ginger sesame dressing</li>
        <li>Oyako don</li>
        <li>Saba teriyaki</li>
        <li>Chicken and bacon spaghetti</li>
        <li>Braised lamb shank</li>
        <li>Tenzaru soba</li>
      </ul>

      <p>Every dish was thoughtfully prepared and tasted excellent. It was one of those meals where you don't rush, don't check your phone, and just enjoy the food and the moment.</p>

      <p>We ended the day with full hearts, full stomachs, and one of the best night's sleep of the trip.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/onsen-food.jpg" alt="Dinner at Onsen @ Moncham" />
        <figcaption>Thoughtfully prepared dinner at the in-house restaurant</figcaption>
      </figure>

      <h2>Breakfast & Attention to Detail</h2>
      <p>Breakfast at Onsen @ Moncham deserves its own mention. Instead of a buffet, everything is ordered fresh from a set menu. We had fish congee, grilled mackerel set, muesli, and taiyaki (Japanese fish-shaped pancake).</p>

      <p>The congee was surprisingly elegant for such a simple dish — it became my personal favorite. Even the fruit plates were beautifully cut and arranged. The attention to detail here is consistent and intentional, and it shows in every experience.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/onsen-breakfast.jpg" alt="Breakfast at Onsen @ Moncham" />
        <figcaption>Fresh, beautifully prepared breakfast</figcaption>
      </figure>

      <h2>Why Onsen @ Moncham Is Worth It</h2>
      <p>This stay wasn't about sightseeing or ticking places off a list. It was about slowing down, resting, and enjoying the space. The property itself felt like a destination.</p>

      <p>From private onsens and mountain views to thoughtful service and exceptional food, Onsen @ Moncham is ideal for couples, families with young kids, and anyone looking for a luxury escape away from the city.</p>

      <p>If you're planning a Chiang Mai trip and want to experience the quieter, more refined side of Northern Thailand, spending a couple of nights in Mae Rim — especially here — is absolutely worth it.</p>

      <p><em>Read our full <a href="/thailand/chiang-mai-6-day-itinerary-with-baby">6-day Chiang Mai itinerary</a> to see how we planned the trip.</em></p>

      <h2>FAQs – Onsen @ Moncham</h2>
      <div class="faq-section">
        <div class="faq-item">
          <h3 class="faq-question">Is Onsen @ Moncham suitable for families with kids?</h3>
          <p class="faq-answer">Yes. The rooms are spacious, staff are accommodating, and the overall environment is calm and safe for families traveling with young children.</p>
        </div>
      </div>
    `,
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
