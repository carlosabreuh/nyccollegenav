# NYCCollegeNav - Deployment Guide

## Overview
This guide covers deploying NYCCollegeNav to production using GitHub and AWS.

## Prerequisites
- GitHub account
- AWS account
- Git installed locally
- AWS CLI configured (for AWS deployments)

---

## Part 1: Push to GitHub

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name:** `nyccollegenav`
   - **Description:** "NYC College Financial Aid Navigator - Helping students unlock millions in unclaimed aid"
   - **Visibility:** Public (or Private if preferred)
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

From your terminal in the `nyccollegenav` directory:

```bash
# Make sure you're in the right directory
cd /Users/carlosabreu/Documents/NYCCollegeNav/nyccollegenav

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nyccollegenav.git

# Verify the remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

1. Go to your repository on GitHub
2. You should see all your files
3. The README should display with project information

---

## Part 2: AWS Deployment Options

You have **3 main options** for deploying to AWS:

### Option A: AWS Amplify (RECOMMENDED - Easiest)
### Option B: Vercel (Alternative to AWS - Simplest)
### Option C: AWS EC2 + Docker (Most Control)

---

## Option A: AWS Amplify (RECOMMENDED)

AWS Amplify is perfect for Next.js apps - automatic builds, SSL, and global CDN.

### Step 1: Access AWS Amplify

1. Log into [AWS Console](https://console.aws.amazon.com)
2. Search for **"Amplify"** in the services search
3. Click **"Get Started"** or **"New app" → "Host web app"**

### Step 2: Connect GitHub

1. Select **"GitHub"** as the repository service
2. Click **"Authorize AWS Amplify"** (if first time)
3. Select your repository: **`nyccollegenav`**
4. Select branch: **`main`**
5. Click **"Next"**

### Step 3: Configure Build Settings

Amplify should auto-detect Next.js. The build settings should look like:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Click **"Next"**

### Step 4: Add Environment Variables

Before deploying, add your environment variables:

1. Click **"Advanced settings"**
2. Add environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
OPENAI_API_KEY=your_openai_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_APP_URL=https://your-app-name.amplifyapp.com
NODE_ENV=production
```

3. Click **"Save and deploy"**

### Step 5: Deploy

1. Amplify will start building your app (takes 5-10 minutes)
2. You can watch the build logs in real-time
3. Once complete, you'll get a URL like: `https://main.xxxxxxxx.amplifyapp.com`

### Step 6: Custom Domain (Optional)

1. In Amplify console, go to **"Domain management"**
2. Click **"Add domain"**
3. Follow the wizard to add your custom domain
4. Amplify handles SSL certificates automatically

### Cost Estimate:
- Build minutes: Free tier includes 1,000 minutes/month
- Hosting: Free tier includes 15 GB served/month
- After free tier: ~$0.01/GB + $0.01/build minute

---

## Option B: Vercel (Alternative - Also Very Easy)

Vercel is made by the creators of Next.js.

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"Add New..." → "Project"**
4. Import your `nyccollegenav` repository
5. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `.` (default)
   - Add environment variables (same as above)
6. Click **"Deploy"**

Done! Your app will be live at `https://your-app.vercel.app`

### Cost:
- Free tier includes unlimited deployments
- Perfect for MVPs and small projects

---

## Option C: AWS EC2 + Docker (Advanced)

For full control over your infrastructure.

### Prerequisites
- AWS account
- Docker installed
- AWS CLI configured

### Step 1: Create Dockerfile

Already exists in the project. If not, create:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build app
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Step 2: Update next.config.ts

Add to `next.config.ts`:

```typescript
const nextConfig = {
  output: 'standalone',
};
```

### Step 3: Launch EC2 Instance

1. Go to EC2 in AWS Console
2. Click **"Launch Instance"**
3. Choose:
   - **AMI:** Amazon Linux 2023
   - **Instance type:** t3.micro (free tier) or t3.small
   - **Security Group:** Allow ports 80, 443, 22
4. Launch and download key pair

### Step 4: Deploy to EC2

```bash
# SSH into your instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Install Docker
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo usermod -aG docker ec2-user

# Clone your repo
git clone https://github.com/YOUR_USERNAME/nyccollegenav.git
cd nyccollegenav

# Create .env.production file with your variables

# Build and run Docker container
docker build -t nyccollegenav .
docker run -d -p 80:3000 --env-file .env.production nyccollegenav
```

### Cost Estimate:
- t3.micro: Free tier (750 hours/month for 12 months)
- t3.small: ~$15/month
- Data transfer: ~$0.09/GB

---

## Post-Deployment Checklist

### 1. Set Up Supabase Production

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Run migrations:
   ```bash
   npx supabase db push --db-url "your_production_db_url"
   ```
4. Seed database with school data
5. Update environment variables with production credentials

### 2. Configure API Keys

- **OpenAI:** Get production API key from [platform.openai.com](https://platform.openai.com)
- **Twilio:** Get production credentials from [twilio.com](https://twilio.com)
- **Resend:** Get API key from [resend.com](https://resend.com)

### 3. Security Checklist

- [ ] All API keys are in environment variables (not in code)
- [ ] `.env.local` is in `.gitignore`
- [ ] Supabase RLS policies are enabled
- [ ] HTTPS is enabled (automatic with Amplify/Vercel)
- [ ] Rate limiting is configured
- [ ] CORS is properly configured

### 4. Analytics Setup

1. **Vercel Analytics** (if using Vercel):
   ```bash
   npm install @vercel/analytics
   ```

2. **PostHog** (optional):
   - Sign up at [posthog.com](https://posthog.com)
   - Add PostHog key to environment variables

### 5. Monitoring

- Set up AWS CloudWatch alarms (if using AWS)
- Monitor Supabase usage
- Track API quota usage (OpenAI, Twilio)

---

## Continuous Deployment

### With Amplify or Vercel

Automatic! Every push to `main` branch triggers a new deployment.

### To deploy:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Watch the build in Amplify/Vercel dashboard.

---

## Troubleshooting

### Build Fails

**Check:**
- Environment variables are set correctly
- Node version matches (18+)
- All dependencies in `package.json`

**View logs:**
- Amplify: In the build details
- Vercel: In deployment logs
- EC2: `docker logs container-id`

### Database Connection Issues

**Check:**
- Supabase URL is correct
- API keys are valid
- RLS policies allow access
- Database is not paused (Supabase free tier)

### API Errors

**Check:**
- API keys are production keys (not development)
- Rate limits not exceeded
- Correct API endpoints

---

## Cost Summary

### Recommended Setup (AWS Amplify + Supabase Free)
- **Hosting:** Free tier → ~$1-5/month after
- **Database:** Free (Supabase) → ~$25/month for Pro
- **APIs:** Pay-as-you-go
  - OpenAI: ~$0.002/request
  - Twilio SMS: ~$0.0075/message
  - Resend Email: Free tier (100/day)

**Total MVP Cost:** $0-10/month during pilot

### Production Scale (1000 students/month)
- **Hosting:** ~$10/month
- **Database:** ~$25/month
- **APIs:** ~$50/month
- **Total:** ~$85/month

---

## Support

- **AWS Amplify Docs:** https://docs.amplify.aws/
- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment

Need help? Check the docs or reach out to your development team!
