-- =============================================
-- MVP Obywatel - Supabase Database Schema
-- Wgraj ten plik w Supabase SQL Editor
-- =============================================

-- Tabela kont użytkowników
CREATE TABLE accounts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    password TEXT NOT NULL,
    name TEXT,
    surname TEXT,
    sex TEXT,
    birthday TEXT,
    pesel TEXT,
    mdow_series TEXT,
    issue_date TEXT,
    expiry_date TEXT,
    father_name TEXT,
    mother_name TEXT,
    nationality TEXT,
    birth_place TEXT,
    birth_country TEXT,
    adress1 TEXT,
    adress2 TEXT,
    city TEXT,
    home_date TEXT,
    family_name TEXT,
    father_family_name TEXT,
    mother_family_name TEXT,
    image TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Włącz Row Level Security
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- Pozwól anonowemu klientowi wstawiać rekordy (gen.html tworzy konta)
CREATE POLICY "anon_insert" ON accounts
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Pozwól anonowemu klientowi odczytywać rekordy (id.html sprawdza hasło)
CREATE POLICY "anon_select" ON accounts
    FOR SELECT
    TO anon
    USING (true);
