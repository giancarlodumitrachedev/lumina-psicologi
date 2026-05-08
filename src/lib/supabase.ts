import { createClient } from "@supabase/supabase-js";

// Utilizziamo un fallback in modo che la build non si spacchi se mancano le credenziali
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mock.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "mock-key";

export const supabase = createClient(supabaseUrl, supabaseKey);
