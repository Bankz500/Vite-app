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
        loan: './loan.html',
        portfolio: './portfolio.html',
        Grant: './mygovgrant.html',
        mygovgrant: './mygovgrant-landingpage.html',
        eligiblity: './eligiblity.html',
        Loanapproval: './loanapproval.html',
        visionprobase: './Visionprobase-term&conditions.pdf',
        support: './support.html',
        manifest: './manifest.json',
      },
    },
  },
});
