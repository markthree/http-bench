import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "npm:hono";

const app = new Hono();

app.get("/", (c) => c.text("hello"));

serve(app.fetch, {
  port: 3000,
});
