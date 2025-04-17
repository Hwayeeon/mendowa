export const baseURL = "mendowa.kevintaswin.eu.org";

export const routes: { [key: string]: boolean } = {
  "/": true,
  "/benefit": true,
  "/features": true,
  "/services": true,
  "/testimonials": true,
  "/pricing": true,
  "/faqs": true,
  "/blog": true,
  "/contact": true,
};

export const protectedRoutes: { [key: string]: boolean } = {
  "/admin": true,
};

export const display = {
  location: true,
  time: true,
};
