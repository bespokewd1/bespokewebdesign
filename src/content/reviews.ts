import rodolfo from "@/assets/review-rodolfo-facebook.png.asset.json";
import stone from "@/assets/review-stone-facebook.png.asset.json";
import imassageFb from "@/assets/review-imassage-facebook.png.asset.json";
import david from "@/assets/review-david-google.png.asset.json";
import sal from "@/assets/review-sal-google.png.asset.json";
import imassage from "@/assets/review-imassage-google.png.asset.json";
import michelle from "@/assets/review-michelle-google.png.asset.json";
import amarie from "@/assets/review-amarie-google.png.asset.json";
import onnie from "@/assets/review-onnie-google.png.asset.json";
import tsyed from "@/assets/review-tsyed-google.png.asset.json";
import basia from "@/assets/review-basia-google.png.asset.json";
import jamesro from "@/assets/review-jamesro-google.png.asset.json";

export type ReviewPlatform = "Google" | "Facebook";

export type ClientReview = {
  name: string;
  platform: ReviewPlatform;
  /** Google reviews show a 1-5 star rating. Facebook recommendations carry no star rating. */
  stars: number | null;
  /** Public URL of the original screenshot, from a Lovable Assets pointer. */
  screenshot: string;
  paragraphs: string[];
};

/**
 * Transcribed from the screenshots supplied by the business owner — never invented.
 * Google reviews carry a star rating; Facebook recommendations do not.
 * Add new screenshots to src/assets and append a matching entry here.
 */
export const GOOGLE_REVIEWS: ClientReview[] = [
  {
    name: "iMassage Therapeutic Clinique", platform: "Google", stars: 5, screenshot: imassage.url,
    paragraphs: ["I highly recommend Bespoke for your website creation. The team made iMassage Therapeutic Clinique Website and Charles are very attentive to what I am requesting and needs on keeping my website upto date."],
  },
  {
    name: "Michelle Superales", platform: "Google", stars: 5, screenshot: michelle.url,
    paragraphs: ["My husband and I have been on the market for webdesign for quite awhile before knowing Charles of BeSpoke. We made the right choice in signing up with him! Our small business offers a variety of services and we wanted a website that will showcase it all in a straightforward yet sophisticated fashion. One more good thing to note is that, Charles is responsive and delivers on time. 5 stars all the way!"],
  },
  {
    name: "Amarie Zevahc", platform: "Google", stars: 5, screenshot: amarie.url,
    paragraphs: ["I had an amazing experience with Bespoke Webdesign Edmonton. From start to finish! Very approachable, professional and skilled. What I really liked the most is their ability to listen to what I want/need to better my website and always there to offer advise! Highly recommended! Top notch service!"],
  },
  {
    name: "Onnie Vendivel", platform: "Google", stars: 5, screenshot: onnie.url,
    paragraphs: ["Highly recommended! They handled our branding, website, and digital marketing all in one—professional, reliable, and easy to talk to."],
  },
  {
    name: "David Gresso", platform: "Google", stars: 5, screenshot: david.url,
    paragraphs: ["Charles made things so easy for me in building our website for our business. His creativity and ability to explain the steps so clearly really took away my anxiety in getting this done. He is very responsive and a great listener throughout the process. I would recommend him to anyone that is interested in building a website."],
  },
  {
    name: "T Syed", platform: "Google", stars: 5, screenshot: tsyed.url,
    paragraphs: ["Charles has been nothing short of incredible. From our very first meeting to the launch of our new website, he consistently went above and beyond, exceeding every expectation we had. If you're considering upgrading your business or online presence, don't hesitate—Charles is the person you need. Five stars for service."],
  },
  {
    name: "sal k", platform: "Google", stars: 5, screenshot: sal.url,
    paragraphs: ["I’m not even sure where to start with this review, because that is how spectacular Charles truly is. From the moment we had our initial meeting to when our new website was unveiled, Charles has gone above and beyond and has exceeded our expectations in every way. He is transparent, thorough and offers customized solutions and flexibility for your business. On top of that he will deliver an outstanding product. He is always available and ready to assist with questions and support. His professionalism is unmatched. I’ve worked with many website creators over the course of our 10 year business and without a doubt, Charles is the BEST. I am so happy with our decision to have Charles create our new website as we’ve found a long term partner in him and will continue to utilize his services. If you are thinking of elevating your business - you need Charles! 5 stars for service, 5 stars for an outstanding product - 5 stars for overall experience. I wish I could rate higher! Thank you so much Charles!!!!"],
  },
  {
    name: "Basia and Juanita", platform: "Google", stars: 5, screenshot: basia.url,
    paragraphs: [
      "Working with Charles on our business logo was an absolute pleasure from start to finish. He took the time to truly understand our brand vision and translated it into a logo that perfectly captures the essence of Passport to Paradise. His creativity, attention to detail, and professionalism exceeded our expectations. Charles was responsive, open to feedback, and always delivered updates on time. We couldn't be happier with the final result — it's vibrant, polished, and memorable.",
      "We highly recommend Charles to anyone looking for top-tier design work and a seamless creative experience.",
      "— Basia",
      "Passport to Paradise- Basia & Juanita",
    ],
  },
  {
    name: "James Ro", platform: "Google", stars: 5, screenshot: jamesro.url,
    paragraphs: ["Charles is awesome. I had 2 bad experience and 3rd time was lucky with Bespoke. He took the time to understand my business and also came up with ways on how to simplify the website journey process for our customers. He always listened but also gave some really good points on what customers really needed rather than what we thought just looked good. Wed definitely use him again the future for more work. Thanks Bespoke."],
  },
];

/** Facebook recommendations supplied by the business owner. No star rating is shown on Facebook. */
export const FACEBOOK_REVIEWS: ClientReview[] = [
  {
    name: "Rodolfo Bejerano", platform: "Facebook", stars: null, screenshot: rodolfo.url,
    paragraphs: [
      "Bespoke webdesign Edmonton does it all, and does it well. They built my website from scratch, handle my social media, and got my SEO sorted — I finally show up when people search for what I do. Everything looks professional and it all works together instead of feeling pieced together from different providers.",
      "What I appreciate most is dealing with one person for everything and understanding Your needs. No chasing down a web guy, then a social media person, then someone else for Google rankings. One call and it's handled. Communication was straightforward — no tech jargon, no disappearing for weeks.",
      "If you're a business owner who needs your online presence taken care of properly, I recommend them without hesitation. Well worth your time. He even made me cool looking business cards! Thank you, Kuya Charles.",
    ],
  },
  {
    name: "Stone Massage", platform: "Facebook", stars: null, screenshot: stone.url,
    paragraphs: ["Bespoke Web Design helped us set up everything from our website to social media management. The whole process was stress-free and automated so we can focus on running our business. Their SEO work has helped us get more client bookings organically without paid ads and at fraction of the price. Highly recommend them to any business owner looking for a complete digital setup."],
  },
  {
    name: "iMassage Therapeutic Clinique", platform: "Facebook", stars: null, screenshot: imassageFb.url,
    paragraphs: ["Great experience working with this web design team. They created a clean, professional website that perfectly represents our business. Communication was smooth, and they delivered the project on time. Highly recommended!"],
  },
];

/** Every review that has a real screenshot attached. Empty entries never reach the page. */
export const CLIENT_REVIEWS: ClientReview[] = [...GOOGLE_REVIEWS, ...FACEBOOK_REVIEWS].filter(r => r.screenshot.length > 0);
