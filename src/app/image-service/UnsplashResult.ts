export interface UnsplashResult {
    total: number;
    total_pages: number;
    results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    description?: string | null;
    urls: Urls;
    links: Links;
    categories?: (null)[] | null;
    sponsored: boolean;
    likes: number;
    liked_by_user: boolean;
    current_user_collections?: (null)[] | null;
    slug?: string | null;
    user: User;
    tags?: (TagsEntityOrPhotoTagsEntity)[] | null;
    photo_tags?: (TagsEntityOrPhotoTagsEntity)[] | null;
}
export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}
export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio?: string | null;
    location?: string | null;
    links: Links1;
    profile_image: ProfileImage;
    instagram_username?: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
}
export interface Links1 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}
export interface TagsEntityOrPhotoTagsEntity {
    title: string;
}
