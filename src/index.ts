import { apiReference } from "@scalar/hono-api-reference";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.redirect("https://pulsate.dev", 302);
});

app.get(
	"/reference",
	apiReference({
		theme: "bluePlanet",
		spec: {
			url: "https://raw.githubusercontent.com/pulsate-dev/pulsate/main/resources/schema.json",
		},
	}),
);

export default app;
