import { createClient } from "next-sanity";

export const projectId = "iymmq5x6"; // Thay thế bằng projectId của bạn
export const dataset = "production";
export const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Tắt CDN để đảm bảo ISR của Next.js luôn lấy dữ liệu mới nhất trực tiếp từ Sanity Live API
});
