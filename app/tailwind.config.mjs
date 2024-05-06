/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'hsl(1, 90%, 64%)',
				secondary:'hsl(219, 85%, 26%)' ,				
				neutral:'hsl(219, 12%, 42%)',
				'light-blue':'hsl(211, 68%, 94%)'
			}
		},
	},
	plugins: [require('tailwindcss-animated')],
}
