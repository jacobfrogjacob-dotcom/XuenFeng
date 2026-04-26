const SUPABASE_URL = 'https://chjuzpbocdkdiyuuziye.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoanV6cGJvY2RraXl1eml5ZSIsInJvbGUiOiJYW5vbiIsImlhdCI6MTY0ODE4MzIwMCwiZXhwIjoxOTYzNzU5NjAwfQ.XO11T32ZYxXMjrdqATrgTg_i_SO0e-v';

const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = _supabase;