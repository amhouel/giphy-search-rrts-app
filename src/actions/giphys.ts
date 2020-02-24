import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { config } from "../config";

interface SizeProps {
  height: string;
  size: string;
  url: string;
  width: string;
}

interface Mp4SizeProps {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

interface FixedHeightProps {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

interface UserProps {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  is_verified: boolean;
}

export interface Giphy {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    downsized_large: SizeProps;
    fixed_height_small_still: SizeProps;
    original: {
      frames: string;
      hash: string;
      height: string;
      mp4: string;
      mp4_size: string;
      size: string;
      url: string;
      webp: string;
      webp_size: string;
      width: string;
    };
    fixed_height_downsampled: {
      height: string;
      size: string;
      url: string;
      webp: string;
      webp_size: string;
      width: string;
    };
    downsized_still: SizeProps;
    fixed_height_still: SizeProps;
    downsized_medium: SizeProps;
    downsized: SizeProps;
    preview_webp: SizeProps;
    original_mp4: Mp4SizeProps;
    fixed_height_small: FixedHeightProps;
    fixed_height: FixedHeightProps;
    downsized_small: Mp4SizeProps;
    preview: Mp4SizeProps;
    fixed_width_downsampled: {
      height: string;
      size: string;
      url: string;
      webp: string;
      webp_size: string;
      width: string;
    };
    fixed_width_small_still: SizeProps;
    fixed_width_small: FixedHeightProps;
    original_still: SizeProps;
    fixed_width_still: SizeProps;
    looping: {
      mp4: string;
      mp4_size: string;
    };
    fixed_width: FixedHeightProps;
    preview_gif: SizeProps;
  };
  user?: UserProps;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

export interface FetchGiphysAction {
  type: ActionTypes.fetchTrendingGiphys;
  payload: Giphy[];
}

export interface SearchGiphysAction {
  type: ActionTypes.searchGiphys;
  payload: Giphy[];
}

const { API_KEY } = config;

export const fetchTrendingGiphys = () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`;
  return async (dispatch: Dispatch) => {
    const { data: response } = await axios.get<{ data: Giphy[] }>(url);
    dispatch<FetchGiphysAction>({
      type: ActionTypes.fetchTrendingGiphys,
      payload: response.data
    });
  };
};

export const searchGiphys = (search: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=G&lang=en`;
  return async (dispatch: Dispatch) => {
    const { data: response } = await axios.get<{data: Giphy[]}>(url);
    dispatch<SearchGiphysAction>({
      type: ActionTypes.searchGiphys,
      payload: response.data
    })
  }
}
