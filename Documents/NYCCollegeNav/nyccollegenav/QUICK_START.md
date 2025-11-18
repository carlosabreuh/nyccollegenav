# Quick Start: Push to GitHub & Deploy to AWS

## Step 1: Push to GitHub (Do This Now!)

### Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `nyccollegenav`
3. Description: "NYC College Financial Aid Navigator"
4. **Public** (or Private)
5. **DO NOT** check "Add README" - we already have one
6. Click **"Create repository"**

### Connect & Push
Copy your GitHub username, then run these commands:

```bash
# Navigate to project
cd /Users/carlosabreu/Documents/NYCCollegeNav/nyccollegenav

# Add GitHub remote (replace carlosabreuh with your username if different)
git remote add origin https://github.com/carlosabreuh/nyccollegenav.git

# Push to GitHub
git push -u origin main
```

**Done!** Your code is now on GitHub. Visit:
`https://github.com/carlosabreuh/nyccollegenav`

---

## Step 2: Deploy to AWS (Choose Your Path)

### Option A: AWS Amplify (RECOMMENDED - Easiest)

**Time:** 10 minutes | **Cost:** Free tier → $1-5/month

1. Go to https://console.aws.amazon.com
2. Search for "Amplify" → Click "New app" → "Host web app"
3. Select "GitHub" → Authorize → Choose `nyccollegenav` repo
4. Click "Next" (it auto-detects Next.js)
5. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
   NEXT_PUBLIC_APP_URL=https://main.xxxxx.amplifyapp.com
   NODE_ENV=production
   ```
6. Click "Save and deploy"
7. Wait 5-10 minutes
8. Your app is live! 🎉

### Option B: Vercel (Alternative - Even Easier!)

**Time:** 5 minutes | **Cost:** FREE

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select `nyccollegenav` repository
5. Framework: Next.js (auto-detected)
6. Add same environment variables as above
7. Click "Deploy"
8. Done! Live in 2 minutes 🚀

### Option C: AWS EC2 (Advanced)

See [DEPLOYMENT.md](DEPLOYMENT.md) for full EC2 setup.

---

## Step 3: Set Up Production Database

### Create Supabase Production Project

1. Go to https://supabase.com/dashboard
2. Click "New project"
3. Name: `nyccollegenav-prod`
4. Database password: (save this!)
5. Region: Choose closest to NYC (East US)
6. Click "Create new project"

### Run Migrations

```bash
# Install Supabase CLI if needed
npm install -g supabase

# Link to your project
npx supabase link --project-ref your-project-ref

# Push migrations
npx supabase db push
```

### Seed School Data

```bash
# Connect to Supabase dashboard
# Go to SQL Editor
# Run the seed.sql file
```

### Update Environment Variables

Copy your production Supabase URL and keys:
- Settings → API → URL
- Settings → API → anon/public key
- Settings → API → service_role key

Update them in Amplify/Vercel environment variables.

---

## Step 4: Configure APIs (Optional for MVP)

### For Full Functionality

**OpenAI** (AI Chat):
1. https://platform.openai.com/api-keys
2. Create new key
3. Add to env vars: `OPENAI_API_KEY`

**Twilio** (SMS):
1. https://console.twilio.com
2. Get Account SID, Auth Token, Phone Number
3. Add to env vars

**Resend** (Email):
1. https://resend.com/api-keys
2. Create new key
3. Add to env vars: `RESEND_API_KEY`

---

## You're Live! 🎉

Your app should now be accessible at:
- **Amplify:** `https://main.xxxxxx.amplifyapp.com`
- **Vercel:** `https://nyccollegenav.vercel.app`

### Test It:
1. Visit your live URL
2. Click "Get Started"
3. Complete the questionnaire
4. Check the results page
5. Try the CSS Profile checklist

---

## Automatic Deployments

Now every time you push to GitHub, your app auto-deploys!

```bash
# Make changes
git add .
git commit -m "Update XYZ feature"
git push origin main

# Watch it deploy in Amplify/Vercel dashboard
```

---

## Next Steps

1. [ ] Set up custom domain
2. [ ] Add analytics (Vercel Analytics / PostHog)
3. [ ] Configure production APIs
4. [ ] Test with real users
5. [ ] Monitor performance
6. [ ] Collect feedback

---

## Need Help?

- **Deployment Issues:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **AWS Amplify Docs:** https://docs.amplify.aws/
- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs

---

## Cost Breakdown

### MVP (Free Tier)
- Hosting: FREE (Amplify/Vercel)
- Database: FREE (Supabase)
- APIs: Pay-as-you-go (minimal for testing)
- **Total: $0-5/month**

### Production (1000 students/month)
- Hosting: ~$10/month
- Database: ~$25/month (Supabase Pro)
- APIs: ~$50/month
- **Total: ~$85/month**

---

## Quick Commands Reference

```bash
# Check Git status
git status

# Create new commit
git add .
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# Check remote URL
git remote -v
```

---

**You're all set!** Your NYC College Navigator is now live and helping students! 🎓✨
