const SUPABASE_URL = 'https://chjuzpbocdkdiyuuziye.supabase.co';
const SUPABASE_KEY = 'sb_publishable_kFflCNsyHLFgc8Ee_iWAEw_q5AFG3YC';

const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = _supabase;