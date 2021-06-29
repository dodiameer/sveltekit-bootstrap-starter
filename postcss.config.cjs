const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
/**
 * @type {import("@fullhuman/postcss-purgecss").default}
 */
// @ts-ignore
const purgecss = require("@fullhuman/postcss-purgecss")

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
		autoprefixer(),
		!dev && purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"]
		}),
		!dev && cssnano({
			preset: "default",
		}),
	],
};

module.exports = config;