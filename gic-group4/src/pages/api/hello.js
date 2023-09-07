import { query } from "@/lib/db";
import { test } from "node:test";

export default async function handler(req, res) {
  //   try {
  //     await query();
  //   } catch (error) {
  //     console.error("Error initializing app", error);
  //   }
  if (req.method == "GET") {
    const test = await query({
      query: "SELECT * FROM entities",
      values: [],
    });
    res.status(200).json({ test: test });
  }
}
