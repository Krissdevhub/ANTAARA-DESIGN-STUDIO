-- Antaara Design Studio - Supabase Database Schema
-- Run this in Supabase SQL Editor if Supabase is connected

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Residential', 'Hospitality', 'Commercial', 'Retail', 'Institutional')),
  subtitle TEXT,
  location TEXT NOT NULL,
  client TEXT,
  scope TEXT,
  year TEXT,
  featured BOOLEAN DEFAULT false,
  "order" INTEGER DEFAULT 0,
  summary TEXT,
  description TEXT,
  cover_image TEXT NOT NULL,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  location TEXT NOT NULL,
  budget TEXT,
  message TEXT,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Qualified', 'Closed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Settings Table
CREATE TABLE IF NOT EXISTS public.settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public settings are viewable by everyone" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT WITH CHECK (true);

-- Admin Full Access Policies (Service Role / Authenticated)
CREATE POLICY "Service role full access on projects" ON public.projects FOR ALL USING (true);
CREATE POLICY "Service role full access on leads" ON public.leads FOR ALL USING (true);
CREATE POLICY "Service role full access on settings" ON public.settings FOR ALL USING (true);
