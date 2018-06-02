export interface UnsplashImage {
    id: string;
    created_at: string;
    urls: Urls;
    user: User;
    links: Links;
  }
  export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  export interface User {
    name: string;
  }
  export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }
