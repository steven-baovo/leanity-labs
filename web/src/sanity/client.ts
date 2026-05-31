import { createClient } from "next-sanity";

export const projectId = "iymmq5x6"; // Thay thế bằng projectId của bạn
export const dataset = "production";
export const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});
