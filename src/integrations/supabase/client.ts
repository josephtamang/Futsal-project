// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://grhgfvbysaevcumvguxz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaGdmdmJ5c2FldmN1bXZndXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMjMyNTYsImV4cCI6MjA1NTc5OTI1Nn0.wV3PlKcQBrN71kKKLAtjRQWqID7RjJtnkZpPcy2MLg0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);