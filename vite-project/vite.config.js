import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        contact: './contact.html',
        pricing: './pricing.html',
        profile: './profile.html',
        signIn: './sign-in.html',
        signUp: './sign-up.html',
        verification: './verification.html', // corrected the spelling
        withdrawal: './withdrawal.html',
        deposit: './deposit.html',
        dashboard: './dashboard.html',
      },
    },
  },
});
