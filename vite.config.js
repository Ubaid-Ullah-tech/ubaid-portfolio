import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access on the local network
    port: 5173, // Ensure this matches your current port
  },
});

// export default defineConfig({
// })











// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })






// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/',  // Ensure this matches your deployment path
//   build: {
//     outDir: 'dist',
//     sourcemap: true,
//   },
// });








// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Output directory
//     sourcemap: true, // Optional: Generate source maps
//   },
// });











