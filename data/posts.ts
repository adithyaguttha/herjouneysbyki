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
        <img src="/images/coonoor/IMG_6187.jpeg" alt="Misty Nilgiri mountains at dawn" />
        <figcaption>The Nilgiris, veiled in mist</figcaption>
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
        <figcaption>Chloe Cottage - our home in Nilgiris</figcaption>
      </figure>

      <p>Chloe Cottage, tucked away in the Nilgiris mountains near Coonoor town, was our home for the trip. The property is charming, calm, and ideal for a family of three. The interiors carry vintage English vibes with tasteful décor, while the lush, well-maintained garden is perfect for slow outdoor moments. The compact kitchen is fully equipped, making it convenient to prepare quick meals—especially for a baby.</p>

      <p><em>Book Chloe Cottage on <a href="https://luxunlock.com/chloe-cottage" target="_blank" rel="noopener noreferrer">Luxunlock</a> – the only platform where this property is available.</em></p>

      <p>We were welcomed warmly by the staff with local Varkey biscuits, a flaky Coonoor delicacy resembling puff pastries with a mildly sweet flavour.</p>

      <p>The property also offers an in-house chef and helper. Since we were tired from travel, we rested for the evening. Dinner was simple South Indian food prepared by the chef—homely, comforting, and absolutely delicious. It instantly made the stay feel warm and familiar, just like home.</p>

      <figure class="image-center">
        <img src="/images/coonoor/food1.jpg" alt="Homely South Indian dinner at Chloe Cottage" />
        <figcaption>Home-style comfort food at the cottage</figcaption>
      </figure>

      <h2>Day 2 – Foggy Mornings, Local Finds & Cozy Evenings</h2>
      <p>We woke up to misty valley views and spent our morning sipping hot drinks on the balcony. Foggy December mornings in the Nilgiris are truly unmatched.</p>

      <figure class="image-full">
        <img src="/images/coonoor/cottage10.jpg" alt="Misty morning view from Chloe Cottage balcony" />
        <figcaption>Waking up to this view</figcaption>
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
        <figcaption>Mornings...</figcaption>
      </figure>

      <p>For lunch, we visited Cherrie Berry, and every dish we ordered impressed us. My personal favourites were the avocado fries (yes, avocado in that form!), beetroot edamame salad, and the Cherrie Berry special Sicilian lasagne. We ended the meal with their incredible Kahwah tea, made from a secret blend.</p>

      <p>What makes this place special is that all ingredients are sourced directly from their own farm. They also have a lovely play area, which kept our toddler engaged while we enjoyed our meal. After lunch, we took a short stroll through their avocado farm. Since the afternoon was quite sunny, we chose not to stay outdoors for long.</p>

      <p>In the evening, we visited La Belle Vie @ 180 McIver, made famous by the movie Kapoor & Sons. It's a stunning property and a must-visit spot for sunset. We enjoyed hot chocolate while watching the sky turn golden—a truly serene experience.</p>

      <figure class="image-full">
        <img src="/images/coonoor/IMG_6188.jpeg" alt="Golden sunset at La Belle Vie" />
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
    title: "6 Days in Chiang Mai with a Toddler: Culture, Markets & Mountain Calm",
    excerpt:
      "Our first international trip with a baby — covering cafés, markets, temples, elephant sanctuary, and a mountain stay. A detailed slow travel guide for families.",
    coverImage: "/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/39-DSC06386.jpg",
    date: "2026-01-15",
    readingTime: "12 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Nature", "Culture", "Food", "Relaxation"],
    highlightWord: "Chiang Mai",
    content: `
      <p>This was our very first international trip with our little one, and we consciously kept it short and slow. <span class="pencil-circle-dark">Chiang Mai</span> felt like the right choice—quiet, cultural, scenic, and far less chaotic than Thailand's southern tourist hubs.</p>

      <p>Since there are no direct flights from Bangalore to Chiang Mai, we flew via Bangkok on a midnight flight. The journey felt surprisingly easy, largely because our little one slept through most of it. By the time we landed in Chiang Mai, it still felt unreal how smooth everything had been.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <h2>Day 1: First Day in Chiang Mai — Nimman Vibes, Food Finds & Slow Travel Begins</h2>
      <p>We reached our hotel in Nimman by late morning. The neighborhood immediately stood out—lively yet relaxed, with everything within walking distance.</p>

      <p>After a slow start to the day, we headed to One Nimman for lunch at Ginger Farm Kitchen, a Michelin-recognized restaurant known for its traditional Northern Thai recipes made with organic, farm-grown ingredients. While the presentation was beautiful, the flavors didn't entirely align with our palate.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/15-ginger_farm_kitchen(1).jpg" alt="Interior of Ginger Farm Kitchen in Chiang Mai" />
        <figcaption>Ginger Farm Kitchen</figcaption>
      </figure>

      <p>The afternoon was intentionally unhurried, allowing us time to rest and settle in.</p>

      <p>By evening, we stepped out to explore Maya Mall and the surrounding area. The space felt vibrant, especially the ground floor, which was packed with food options. Later, we wandered back into One Nimman and discovered the White Market—a Japanese-inspired weekend market filled with handmade, thoughtfully designed products. These markets run only on weekends, and we had planned our itinerary specifically to experience them.</p>

      <p>Dinner was from the food stalls within the complex, offering everything from local desserts to international dishes. Kanom Krok was unforgettable.</p>

      <p>The evening unfolded slowly, with street food, music, and a relaxed crowd setting the tone for the days ahead.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/7-one_nimman_cropped.jpg" alt="One Nimman walkway in Chiang Mai" />
        <figcaption>One Nimman, Chiang Mai</figcaption>
      </figure>

      <h2>Day 2: Sustainable Finds & Sunset Views — Jing Jai Market to Doi Suthep</h2>
      <p>The day started with breakfast at Sun Rays Café, a quaint and charming spot with beautiful table settings.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/3-food_sun_rays(French Toast).jpg" alt="French Toast with tropical fruits at Sun Rays Café" />
        <figcaption>French toast at Sun Rays Café</figcaption>
      </figure>

      <p>We eased into the morning before heading to Jing Jai Weekend Market. Like the White Market, this too is held only on weekends, and planning around it turned out to be one of the best decisions of the trip.</p>

      <p>The market went far beyond expectations. Rooted in sustainability, it brings together local artisans, organic produce, handmade goods, and thoughtfully created products—without the usual tourist clutter. Everything felt intentional, minimal, and deeply connected to local culture.</p>

      <figure class="polaroid-collage">
        <div class="polaroid-collage-grid polaroid-collage-grid--natural" style="align-items: stretch;">
          <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_4617.jpeg" alt="Jing Jai Market stalls in Chiang Mai" style="width: 100%; height: 100%; object-fit: cover;" />
          <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_4618.jpeg" alt="Handmade goods at Jing Jai Market" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <figcaption style="font-family: var(--font-caveat); font-size: 1.1rem; color: var(--warm-brown); margin-top: 0.75rem; text-align: center;">Jing Jai Market — sustainable shopping at its best</figcaption>
      </figure>

      <p>We spent hours simply walking through it, taking in the textures, colors, and craftsmanship. It didn't feel like a market to rush through, but one to experience slowly.</p>

      <p>By evening, we made our way up to Wat Phra That Doi Suthep. Set high above the city, the temple overlooks Chiang Mai in a way that instantly shifts the pace. The climb, the breeze, and the golden structures catching the last light of the day all felt calm and grounding.</p>

      <p>As the sun set, the city below slowly transitioned into evening, while the temple remained quiet and still.</p>

      <p><em>Read more about <a href="/thailand/chiang-mai-best-cafes-food-guide">cafés and food spots we loved in Chiang Mai</a>.</em></p>

      <h2>Day 3: A Birthday to Remember — Ethical Elephant Sanctuary Experience</h2>
      <p>This day marked our little one's first birthday, and we chose to spend it at an ethical elephant sanctuary—Chai Lai Orchid, located away from the city.</p>

      <p>The experience was simple, raw, and deeply moving. We spent time with the elephants—feeding them, walking alongside them, and watching them interact within their natural environment.</p>

      <div class="polaroid-collage">
        <div class="polaroid-collage-grid polaroid-collage-grid--natural" style="align-items: stretch;">
          <img src="/images/elephant images/DSC06232.jpg" alt="Baby meeting an elephant at Chai Lai Orchid Sanctuary" style="width: 100%; height: 100%; object-fit: cover;" />
          <img src="/images/elephant images/DSC06569.jpg" alt="Feeding an elephant at Chai Lai Orchid Sanctuary" style="width: 100%; height: auto; object-fit: contain;" />
        </div>
      </div>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/33-DSC06173.jpg" alt="Family with elephants at Chai Lai Orchid Sanctuary" />
        <figcaption>Moments at the Elephant Sanctuary</figcaption>
      </figure>

      <p>The sanctuary focuses on rescue and rehabilitation while also supporting local communities, which made the visit even more meaningful.</p>

      <p>After feeding, we walked alongside the elephants through their habitat and visited the river where they bathe. We met locals who have protected these animals and lands for generations.</p>

      <p>After the tour, we had lunch at the Chai Lai café, which was decent. While my husband went for an ATV ride, our little one and I rested in the shade and played with friendly dogs on the property.</p>

      <p>By evening, we returned to the city and went to Khao Soi Nimman for dinner. While it's Michelin-recognized, I personally preferred the Khao Soi I had earlier at the airport food court. We walked back to the hotel, enjoying the pleasant Nimman neighborhood.</p>

      <h2>Day 4: Into the Mountains — Luxury Onsen Stay in Mae Rim</h2>
      <p>This day marked a shift—from the city into the mountains.</p>

      <p>We drove out to Mae Rim, where the landscape slowly changed—denser greens, cooler air, and a noticeable stillness. A short stop along the way offered expansive mountain views, setting the tone for what was to come.</p>

      <p>Our stay at Onsen@Moncham, a Japanese-inspired resort, felt like stepping into a different world. By the time we arrived, a light drizzle had settled over the property, making everything feel softer and more atmospheric.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/75-onsen@moncham.jpg" alt="Onsen @ Moncham staff welcoming with baby" />
        <figcaption>Mountain retreat at Onsen @ Moncham</figcaption>
      </figure>

      <p>The highlight was the private onsen—set against the mountains, with mist rising and rain gently falling. Time seemed to slow down completely here.</p>

      <p>The rest of the evening carried that same sense of quiet luxury, allowing us to fully settle into the stillness of the mountains.</p>

      <p><em>This stay deserves its own post — read our detailed <a href="/thailand/chiang-mai-onsen-moncham-luxury-stay">Onsen @ Moncham review</a>.</em></p>

      <h2>Day 5: Slow Mountain Day — Farms, Flowers & Hidden Gems of Mae Rim</h2>
      <p>The morning began unhurried, matching the pace of the mountains.</p>

      <p>We explored the surrounding areas of Mae Rim—open spaces, small farms, and stretches of landscape that felt untouched and calm.</p>

      <p>One of our stops was Mae Khee Sheep Farm, originally planned for our little one, but it turned out to be enjoyable for all of us.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/68-mae_kee_sheep_house.jpg" alt="Maekee Sheep House in Mae Rim" />
        <figcaption>Maekee Sheep House</figcaption>
      </figure>

      <p>From there, we visited Jin Ju Orange Farm. While it looked beautiful in pictures, it felt underwhelming in reality—especially since it was off-season, with no oranges to pick. The costumes available for rent were worn out, and while the drinks were decent, there wasn't much to do. Hiring their in-house photographer requires prior booking, which we couldn't arrange on the spot.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_6140.jpeg" alt="Jin Ju Orange Farm in Mae Rim" />
        <figcaption>Jin Ju Orange Farm</figcaption>
      </figure>

      <p>Along the way, we also stopped at nearby flower gardens, including the Yin Yang Flower Garden. These added bursts of color against the greens, making the entire region feel scenic and layered.</p>

      <p>By evening, we were back at the resort, walking through its quiet corners. A small lake, animals moving freely, and the stillness of the surroundings made the entire setting feel quietly surreal. Rabbits hopped around an island at the center, while black swans moved slowly across the water, adding to the calm atmosphere.</p>

      <p>Later that night, we returned to Chiang Mai city and checked back in for our final stay.</p>

      <h2>Day 6: Last Moments in Chiang Mai — Shopping, Souvenirs & Goodbye</h2>
      <p>The final day felt shorter than it should have.</p>

      <p>Before heading to the airport, we spent some time at Maya Mall—trying to take in just a little more of the city before leaving. It felt like the kind of place you could return to and still discover something new.</p>

      <p>As we left Chiang Mai, the trip felt exactly how we had hoped it would—slow, grounding, and quietly memorable. A first international journey with our little one that felt less about ticking places off a list, and more about experiencing them at our own pace.</p>

      <h2>Final Thoughts</h2>
      <p>Chiang Mai turned out to be an ideal destination for our first international trip with a baby — slow-paced, welcoming, and easy to navigate. With thoughtful planning and a flexible itinerary, travelling with a toddler felt manageable and enjoyable.</p>

      <p>If you're planning your own Chiang Mai trip, you may also find these helpful:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-best-cafes-food-guide">Cafés and food we loved in Chiang Mai</a></li>
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
    coverImage: "/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/15-ginger_farm_kitchen(1).jpg",
    date: "2026-01-14",
    readingTime: "6 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Food"],
    content: `
      <p>Chiang Mai has one of the most relaxed and enjoyable food scenes in Thailand. From thoughtfully designed cafés to vibrant local markets and Michelin-listed restaurants, the city offers something for every kind of traveller.</p>

      <p>This blog shares the cafés, bakeries, food markets, and restaurants we personally tried during our stay, including baby-friendly and casual dining options.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/53-sun_rays_cafe.jpg" alt="Sun Rays Café outdoor seating with baby in stroller" />
        <figcaption>Sun Rays Café — a charming breakfast spot in Chiang Mai</figcaption>
      </figure>

      <p><span class="cafe-lead">Sun Rays Café</span> was our breakfast stop—a small, charming café with beautiful food presentation. While the French toast looked great, it felt slightly dry. However, the overall vibe made it worth visiting.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/3-food_sun_rays(French Toast).jpg" alt="French Toast with tropical fruits at Sun Rays Café" />
        <figcaption>French toast</figcaption>
      </figure>

      <p><span class="cafe-lead">Ginger Farm Kitchen</span> at One Nimman is Michelin-listed and focuses on Northern Thai food made without MSG or artificial ingredients. The ingredients are farm-fresh and carefully selected.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/5-ginger_farm_kitchen_landscape.jpg" alt="Pad Thai at Ginger Farm Kitchen" />
        <figcaption>Pad Thai</figcaption>
      </figure>

      <p><span class="cafe-lead">Chom Café</span> is one of the most Instagrammable cafés in Chiang Mai, and the food here is decent as well. The place feels like something out of a mystery land, with mist all around—giving you a main-character moment while clicking pictures.</p>

      <p><span class="cafe-lead">Early Owls Café</span> is a lovely spot for a family picnic. They provide a nice seating setup where you can choose a spot on the lawn and create your own picnic-style arrangement. We visited in the evening just for coffee and to relax, while our child enjoyed the large green space to walk and crawl around.</p>

      <p><span class="cafe-lead">Rimping Supermarket</span> is where you can find a wide variety of Thailand snacks and fresh groceries—even the cut fruit here looks too cute to eat. The ground floor of Maya Lifestyle Shopping Center is a food destination by itself—it truly feels like you can taste all of Thailand in one place. The Saint Etoile Bakery inside is a must-visit, especially for their sweet potato bread.</p>

      <div class="polaroid-collage">
        <div class="polaroid-collage-grid polaroid-collage-grid--natural" style="align-items: stretch;">
          <figure style="margin: 0; text-align: center;">
            <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/30-food(Sweet_potato_bread).jpg" alt="Sweet potato bread at Saint Etoile bakery" style="width: 100%; height: 100%; object-fit: cover;" />
            <figcaption style="font-family: var(--font-caveat); font-size: 1.1rem; color: var(--warm-brown); margin-top: 0.75rem;">Sweet potato bread</figcaption>
          </figure>
          <figure style="margin: 0; text-align: center;">
            <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_4602.jpeg" alt="Beautifully cut fruit platter at Rimping Supermarket" style="width: 100%; height: 100%; object-fit: cover;" />
            <figcaption style="font-family: var(--font-caveat); font-size: 1.1rem; color: var(--warm-brown); margin-top: 0.75rem;">Cut fruit @ Rimping Supermarket</figcaption>
          </figure>
        </div>
      </div>

      <p><span class="cafe-lead">Jing Jai Market</span> is excellent for local food, especially phat kaphrao at Tops Green. On special request, the chef prepared a vegan version with tofu for us, and it was delicious.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/27-jing_jai_market.jpg" alt="Coconut dessert at a Jing Jai Market food stall" />
        <figcaption>At Jing Jai Market</figcaption>
      </figure>

      <p><span class="cafe-lead">Khao Soi Nimman</span> is a popular stop for Northern Thai specialties, especially khao soi (curry noodle soup). Honestly, I found the khao soi I had at the airport more enjoyable—but that's just my personal opinion, as many people recommend this place for its popularity and Michelin recognition.</p>

      <p>The food courts at One Nimman and Maya Lifestyle Shopping Center are great for families, with plenty of dessert and kid-friendly options like crepes, dim sum, local desserts, continental food, and fresh fruit.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/11-food_one_nimman(Kanom_krok).jpg" alt="Kanom Krok at One Nimman" />
        <figcaption>Kanom Krok</figcaption>
      </figure>

      <h2>Final Thoughts</h2>
      <p>Food in Chiang Mai is best enjoyed slowly — whether it's a quiet café breakfast, a market lunch, or a simple local dish at the end of the day. The variety makes it easy to balance exploration with comfort, especially when travelling with family.</p>

      <p>If you're planning a food-focused Chiang Mai trip, you may also want to read:</p>
      <ul>
        <li><a href="/thailand/chiang-mai-6-day-itinerary-with-baby">Our complete 6-day Chiang Mai itinerary</a></li>
      </ul>

      <h2>FAQs – Cafés & Food in Chiang Mai</h2>
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

  // Blog 5: Baby Travel Tips
  {
    slug: "chiang-mai-baby-travel-tips",
    title: "Travelling to Chiang Mai with a Baby: Tips, Essentials & What Made It Easy",
    excerpt:
      "Travelling to Chiang Mai with a baby? These are the practical tips and products that made our trip easier and stress-free.",
    coverImage: "/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/67-baby-sheep garden cropped.jpg",
    date: "2026-01-11",
    readingTime: "10 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Nature"],
    content: `
      <p>Travelling with a baby requires thoughtful planning—but the right destination makes all the difference. Chiang Mai turned out to be one of the most family-friendly places we've visited in Thailand.</p>

      <p>From smooth pavements in Nimman to spacious malls and baby-friendly cafés, getting around with a toddler felt surprisingly easy.</p>

      <p>This post shares practical tips, travel essentials, and real experiences that helped us manage flights, food, and daily outings with our one-year-old.</p>

      <div class="blog-instagram-cta">
        <p class="cta-tagline">Follow along on</p>
        <p class="cta-title">Instagram</p>
        <p class="cta-description">For more travel moments, behind-the-scenes, and daily wanderlust</p>
        <a href="https://www.instagram.com/herjourneysbyki/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @herjourneysbyki
        </a>
      </div>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/73-onsen-toddler_cropped.jpg" alt="Toddler looking out at mountain views from Onsen @ Moncham" />
      </figure>

      <h2>What Made This Trip Easier with a Baby</h2>
      <p>A few simple, thoughtful choices made a huge difference:</p>
      <ul>
        <li>A <strong>stroller worked perfectly</strong> in Nimman and inside malls</li>
        <li>Plenty of <strong>kid-friendly food options</strong> were easily available across cafés, markets, and shopping centres</li>
      </ul>

      <h3>Flight Hack That Changed Everything</h3>
      <p>On long flights, an <strong><a href="https://www.amazon.in/HASTHIP%C2%AE-Airplane-Footrest-Anti-Slip-Accessories/dp/B0CFWYKSDM?th=1" target="_blank" rel="noopener noreferrer">airplane hammock</a></strong> was a complete game-changer for us. It helped our baby sleep comfortably, making the journey smoother for everyone.</p>

      <p>Unlike inflatable footrests, this doesn't require airline approval—so you can travel stress-free. It's compact and fits easily into a diaper bag.</p>

      <p><strong>Insider tip:</strong><br/>Once boarding is complete, check for an empty row. We placed the hammock in the middle seat and sat on either side—our baby had a bed-like setup, and we actually managed to sleep without discomfort.</p>

      <h2>International Travel Checklist for a 1-Year-Old</h2>
      <p>These are the baby travel essentials that genuinely helped us during our trip to Thailand.</p>

      <h3>Feeding & Cooking Essentials</h3>

      <h4>Travel Kettle (Must-Have)</h4>
      <p>The portable kettle we used was compact and very useful—you can heat water and even cook rice. Since rice is a staple for my baby, this became my holy grail travel item.</p>
      <ul>
        <li><a href="https://www.amazon.in/InstaCuppa-Temperature-Control-Automatic-Black/dp/B0D375QJ27" target="_blank" rel="noopener noreferrer">Portable travel kettle</a></li>
        <li><a href="https://www.amazon.in/InstaCuppa-Kettle-Adjustable-Temperature-Settings/dp/B0C26NH1C7" target="_blank" rel="noopener noreferrer">Multifunctional kettle</a> (can steam vegetables and make porridge)</li>
      </ul>

      <h4>Cutlery & Food Storage</h4>
      <ul>
        <li><a href="https://www.amazon.in/DHULI-Functional-Stainless-Kitchen-Peeler/dp/B0F7B12DWQ" target="_blank" rel="noopener noreferrer">2-in-1 knife and peeler</a> (extremely useful while travelling)</li>
        <li>Baby spoons</li>
        <li>Storage/tiffin boxes for day trips</li>
        <li>Water sipper</li>
        <li>Extra water bottle (to store boiled water and avoid reheating)</li>
      </ul>

      <h4><a href="https://www.amazon.in/RANUR-Butter-Parchment-Sandwich-Glassine/dp/B0831JNKYG" target="_blank" rel="noopener noreferrer">Paper Bags</a> (Highly Recommended)</h4>
      <p>You can't imagine how much mess a baby can create during meals—especially while travelling. Paper bags are lightweight, easy to pack, and perfect for quick clean-ups anywhere.</p>

      <h3>Hygiene & Mealtime Helpers (Lifesavers)</h3>
      <ul>
        <li>
          <strong><a href="https://www.amazon.in/Sirona-Sanitary-Napkin-Intimate-Disposable/dp/B07SNHQFH8" target="_blank" rel="noopener noreferrer">Disposable diaper disposal covers</a></strong>
          <p>Great for locking in smell—you can carry used diapers for hours without worrying</p>
        </li>
        <li>
          <strong><a href="https://www.amazon.in/LITTLE-LOOKERS%C2%AE-Disposable-Feeding-Eco-Friendly/dp/B08521FQ2V" target="_blank" rel="noopener noreferrer">Disposable bibs</a></strong>
          <p>Absolute saviours. No washing, no carrying used bibs—just use and throw</p>
          <p>(Tip: carry 40–50, they're very lightweight)</p>
        </li>
      </ul>

      <h3>Baby Food We Carried</h3>

      <h4>Porridge Mixes (India-Friendly)</h4>
      <p>These worked really well for us:</p>
      <ul>
        <li>Sprouted ragi from Slurrp Farm</li>
        <li>Toor dal & moong dal khichdi from Little Moppet</li>
      </ul>
      <p>They're made with clean ingredients, easy to prepare, and removed the constant stress of feeding.</p>

      <h4>Ready-to-Eat Options</h4>
      <ul>
        <li>Ella's Kitchen food pouches</li>
      </ul>
      <p>Perfect for flights, airports, and situations where cooking isn't possible—very convenient and mess-free.</p>

      <h4>Fresh Food Availability</h4>
      <p>Fresh yogurt, fruits, and vegetables were easily available across Chiang Mai.</p>
      <p>For more food options, I've shared detailed recommendations in my blog: <a href="/thailand/chiang-mai-best-cafes-food-guide"><strong>"Best Cafés & Food to Try in Chiang Mai."</strong></a></p>

      <h3>Travel Bottles & Cleaning Essentials</h3>
      <ul>
        <li><a href="https://www.amazon.in/SKYWORK-Toiletries-Containers-Leak-Proof-Conditioner/dp/B0DTDTGB9H" target="_blank" rel="noopener noreferrer">Travel-friendly squeeze bottles</a> (for body wash & dishwashing liquid)</li>
        <li><a href="https://mothersparsh.com/products/crayon-hand-wash" target="_blank" rel="noopener noreferrer">Handwash</a> (a must when travelling with a baby)</li>
      </ul>

      <h3>Medicines: Don't Skip This</h3>
      <p>Always carry all essential medicines, including:</p>
      <ul>
        <li>Fever</li>
        <li>Cold</li>
        <li>Tummy issues</li>
        <li>Vomiting</li>
        <li>Motion sickness</li>
      </ul>
      <p>Medicine compositions vary across countries, so it's best to be fully prepared.</p>
      <ul>
        <li><a href="https://www.firstcry.com/fancy-fluff/fancy-fluff-organic-medicine-kit-cuddle-bear/19403184/product-detail" target="_blank" rel="noopener noreferrer">Kids medicine storage kit</a></li>
      </ul>

      <h3>Toys: A Must for Travel</h3>
      <p>Carry a few toys to keep your baby engaged during:</p>
      <ul>
        <li>Flights</li>
        <li>Road trips</li>
        <li>Hotel downtime</li>
      </ul>
      <p>If you're a parent, you already know how important this is 😊</p>

      <h3>Clothing Essentials for Chiang Mai</h3>
      <ul>
        <li>Sweater (barely used in September)</li>
        <li>Socks</li>
        <li>Caps & beanies</li>
        <li>Shorts, pants, shirts</li>
        <li>Extra pairs of clothes (always!)</li>
        <li>Washcloths</li>
      </ul>
      <p>You can never overpack clothes for a toddler—trust me.</p>

      <h3>Diapering Essentials</h3>
      <ul>
        <li>Diapers</li>
        <li>Wet wipes</li>
        <li>Fully packed diaper bag</li>
      </ul>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/37-DSC06281.jpg" alt="Mother holding baby with elephant at Chai Lai Sanctuary" />
        <figcaption>Even elephant sanctuaries in Chiang Mai are baby-friendly</figcaption>
      </figure>

      <h2>A Note on Milk & Feeding</h2>
      <p>You might notice I haven't mentioned milk or bottles. I'm a breastfeeding mom, and I found direct breastfeeding much more convenient while travelling compared to pumping.</p>

      <p>It saved luggage space, reduced effort, and made feeding much more peaceful during the trip.</p>
    `,
  },

  // Blog 7: Onsen @ Moncham Luxury Stay
  {
    slug: "chiang-mai-onsen-moncham-luxury-stay",
    title: "Luxury Stays in Chiang Mai: A Slow Mountain Retreat at Onsen @ Moncham",
    excerpt:
      "Looking for a luxury stay in Chiang Mai? Our experience at Onsen @ Moncham in Mae Rim offers a Japanese-inspired mountain retreat with private onsens, thoughtful service, and true slow-travel comfort.",
    coverImage: "/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_6194-cropped.jpeg",
    date: "2026-01-09",
    readingTime: "10 min read",
    destination: "Chiang Mai",
    country: "thailand",
    tripTypes: ["Relaxation", "Wellness"],
    content: `
      <p>After spending the first half of our Chiang Mai trip in the city, we decided to slow things down and head into the mountains. For two nights, we stayed at <strong>Onsen @ Moncham</strong>, a Japanese-inspired luxury hotel located in Mae Raem, Mae Rim District, about an hour from Chiang Mai city.</p>

      <p>This stay was not budget-friendly by any means, but it turned out to be the highlight of our entire trip. From service to food to thoughtful details, it stood out as one of the best luxury stays we've experienced—not just in Thailand, but overall.</p>

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
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/75-onsen@moncham.jpg" alt="Onsen @ Moncham staff welcoming with baby" />
      </figure>

      <h2>The Journey to Mae Rim</h2>
      <p>We started early after breakfast at Novotel Chiang Mai and drove toward Mae Rim. The drive itself felt like a transition—from city energy to misty mountains and greenery. On the way, we made a short stop at Rroon Café for a light lunch. The café is tucked away in the hills and offers beautiful views. Food options are limited, but the setting makes it worth stopping, especially for photos and a quiet break.</p>

      <p>By the time we reached Onsen @ Moncham, it had started drizzling. The light rain made the property look even more beautiful and added to the calm, mountain atmosphere.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/9-onsen.jpg" alt="Walking through Onsen @ Moncham property at night in the rain" />
      </figure>

      <h2>First Impressions & Room Experience</h2>
      <p>The property is inspired by old Japanese architecture, and everything—from the pathways to the interiors—reflects that aesthetic. The staff welcomed us warmly and personally showed us to our room.</p>

      <p>We stayed in the <strong>Grand Terrace Suite with Outdoor Onsen</strong>, which was the best decision we made on this trip. The room was spacious, extremely comfortable, and very kid-friendly. The private terrace opened to uninterrupted mountain views, and the outdoor onsen overlooked the hills—perfect for slow mornings and quiet evenings.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_6194-cropped.jpeg" alt="Onsen @ Moncham property view" />
      </figure>

      <p>The welcome snacks were traditional Japanese sweets, beautifully packed in a bento-style box wrapped with furoshiki cloth. Small details like these made the stay feel thoughtful and intentional.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/IMG_6193.jpeg" alt="Japanese-style welcome detail at Onsen @ Moncham" />
      </figure>

      <p>We had also requested a small birthday decoration for our one-year-old, and the team went above and beyond to make it special. Nothing felt rushed or generic.</p>

      <figure class="image-full">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/57-onsen_room_arjun_birthday_decoration.jpg" alt="Birthday decoration in the room at Onsen @ Moncham" />
      </figure>

      <p>Even the bathroom experience felt luxurious—yes, including the warm toilet seat, which made us joke that we were living our royal Japanese life in the middle of Chiang Mai's mountains.</p>

      <h2>Onsen Experience: The Highlight</h2>
      <p>The hotel has separate public onsens for men and women, along with a <strong>private couple onsen</strong>, which we opted for in the evening. It was cold and drizzling that day, and soaking in hot mineral water while mist rose around us felt unreal.</p>

      <p>The private onsen experience was calm, intimate, and deeply relaxing. With the dark sky, gentle rain, fog from the hot springs, and absolute silence around us, it felt like time slowed down completely. This was slow travel at its best.</p>

      <h2>Dinner at the In-House Restaurant</h2>
      <p>After the onsen, hunger kicked in—as expected. We had dinner at the hotel's restaurant and ordered a fairly long list, including:</p>
      <ul>
        <li>Garden salad with ginger sesame dressing</li>
        <li>Oyako don</li>
        <li>Saba teriyaki</li>
        <li>Chicken and bacon spaghetti</li>
        <li>Braised lamb shank</li>
        <li>Tenzaru soba</li>
      </ul>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/71-food-onsen(Miso_glazed_egg_plant)_rotated.jpg" alt="Miso glazed eggplant at Onsen @ Moncham" />
        <figcaption>Miso glazed eggplant</figcaption>
      </figure>

      <p>Every dish was thoughtfully prepared and tasted excellent. It was one of those meals where you don't rush, don't check your phone, and just enjoy the food and the moment.</p>

      <p>We ended the day with full hearts, full stomachs, and one of the best night's sleep of the trip.</p>

      <figure class="image-center">
        <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/2-food_onsen.jpg" alt="Tenzaru soba with tempura at Onsen @ Moncham" />
        <figcaption>Tenzaru soba with tempura</figcaption>
      </figure>

      <h2>Breakfast & Attention to Detail</h2>
      <p>Breakfast at Onsen @ Moncham deserves its own mention. Instead of a buffet, everything is ordered fresh from a set menu. We had fish congee, grilled mackerel set, muesli, and taiyaki (Japanese fish-shaped pancake).</p>

      <p>The congee was surprisingly elegant for such a simple dish—it became my personal favorite. Even the fruit plates were beautifully cut and arranged. The attention to detail here is consistent and intentional, and it shows in every experience.</p>

      <div class="polaroid-collage">
        <div class="polaroid-collage-grid polaroid-collage-grid--natural" style="align-items: stretch;">
          <figure style="margin: 0; text-align: center;">
            <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/8-onsen(1).jpg" alt="Pancakes with berries at Onsen @ Moncham" style="width: 100%; height: 100%; object-fit: cover;" />
            <figcaption style="font-family: var(--font-caveat); font-size: 1.1rem; color: var(--warm-brown); margin-top: 0.75rem;">Pancakes with fresh berries</figcaption>
          </figure>
          <figure style="margin: 0; text-align: center;">
            <img src="/images/chiangmai/lightroom-download-2026-02-19T05_27_55Z/10-onsen(2).jpg" alt="Japanese breakfast set at Onsen @ Moncham" style="width: 100%; height: 100%; object-fit: cover;" />
            <figcaption style="font-family: var(--font-caveat); font-size: 1.1rem; color: var(--warm-brown); margin-top: 0.75rem;">Grilled mackerel breakfast set</figcaption>
          </figure>
        </div>
      </div>

      <h2>Why Onsen @ Moncham Is Worth It</h2>
      <p>This stay wasn't about sightseeing or ticking places off a list. It was about slowing down, resting, and enjoying the space. The property itself felt like a destination.</p>

      <p>From private onsens and mountain views to thoughtful service and exceptional food, Onsen @ Moncham is ideal for couples, families with young kids, and anyone looking for a luxury escape away from the city.</p>

      <p>If you're planning a Chiang Mai trip and want to experience the quieter, more refined side of Northern Thailand, spending a couple of nights in Mae Rim—especially here—is absolutely worth it.</p>

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
