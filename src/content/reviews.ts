import rodolfo from "@/assets/review-rodolfo-facebook.png.asset.json";
import david from "@/assets/review-david-google.png.asset.json";
import sal from "@/assets/review-sal-google.png.asset.json";
import stone from "@/assets/review-stone-facebook.png.asset.json";
import imassage from "@/assets/review-imassage-facebook.png.asset.json";

// Transcribed from the supplied screenshots; no inferred businesses or ratings.
export const CLIENT_REVIEWS = [
  {
    name: "David Gresso", platform: "Google", stars: 5, screenshot: david.url,
    paragraphs: ["Charles made things so easy for me in building our website for our business. His creativity and ability to explain the steps so clearly really took away my anxiety in getting this done. He is very responsive and a great listener throughout the process. I would recommend him to anyone that is interested in building a website."],
  },
  {
    name: "Stone Massage", platform: "Facebook", stars: null, screenshot: stone.url,
    paragraphs: ["Bespoke Web Design helped us set up everything from our website to social media management. The whole process was stress-free and automated so we can focus on running our business. Their SEO work has helped us get more client bookings organically without paid ads and at fraction of the price. Highly recommend them to any business owner looking for a complete digital setup."],
  },
  {
    name: "Rodolfo Bejerano", platform: "Facebook", stars: null, screenshot: rodolfo.url,
    paragraphs: [
      "Bespoke webdesign Edmonton** does it all, and does it well. They built my website from scratch, handle my social media, and got my SEO sorted — I finally show up when people search for what I do. Everything looks professional and it all works together instead of feeling pieced together from different providers.",
      "What I appreciate most is dealing with one person for everything and understanding Your needs. No chasing down a web guy, then a social media person, then someone else for Google rankings. One call and it's handled. Communication was straightforward — no tech jargon, no disappearing for weeks.",
      "If you're a business owner who needs your online presence taken care of properly, I recommend them without hesitation. Well worth your time. He even made me cool looking business cards! Thank you, Kuya Charles.",
    ],
  },
  {
    name: "sal k", platform: "Google", stars: 5, screenshot: sal.url,
    paragraphs: ["I’m not even sure where to start with this review, because that is how spectacular Charles truly is. From the moment we had our initial meeting to when our new website was unveiled, Charles has gone above and beyond and has exceeded our expectations in every way. He is transparent, thorough and offers customized solutions and flexibility for your business. On top of that he will deliver an outstanding product. He is always available and ready to assist with questions and support. His professionalism is unmatched. I’ve worked with many website creators over the course of our 10 year business and without a doubt, Charles is the BEST. I am so happy with our decision to have Charles create our new website as we’ve found a long term partner in him and will continue to utilize his services. If you are thinking of elevating your business - you need Charles! 5 stars for service, 5 stars for an outstanding product - 5 stars for overall experience. I wish I could rate higher! Thank you so much Charles!!!!"],
  },
  {
    name: "iMassage Therapeutic Clinique", platform: "Facebook", stars: null, screenshot: imassage.url,
    paragraphs: ["Great experience working with this web design team. They created a clean, professional website that perfectly represents our business. Communication was smooth, and they delivered the project on time. Highly recommended!"],
  },
] as const;