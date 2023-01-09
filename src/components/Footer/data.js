export const ourCompany = {
  heading: "our company",
  links: ["how we work", "why insure?", "check price", "reviews"],
};

export const helpMe = {
  heading: "help me",
  links: ["faq", "terms of use", "privacy policy", "cookies"],
};

export const contact = {
  heading: "contact",
  links: ["sales", "support", "live chat"],
};

export const others = {
  heading: "others",
  links: ["careers", "press", "licenses"],
};

import facebookImgUrl from "/src/assets/icon-facebook.svg";
import twitterImgUrl from "/src/assets/icon-twitter.svg";
import pinterestImgUrl from "/src/assets/icon-pinterest.svg";
import instaImgUrl from "/src/assets/icon-instagram.svg";

export const socialIcons = [
  { imgUrl: facebookImgUrl },
  { imgUrl: twitterImgUrl },
  { imgUrl: pinterestImgUrl },
  { imgUrl: instaImgUrl },
];

const data = [ourCompany, helpMe, contact, others];

export default data;
