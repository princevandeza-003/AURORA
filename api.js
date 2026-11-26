// Optional: playlist sync across devices. Fill in the two values from YOUR Aurora Supabase project
// (Project Settings > API). Keep the quotation marks and semicolons. NEVER use the service_role key here.
// If you leave the placeholders, Aurora still works fully on this device without accounts.
var SUPABASE_URL = "https://gueqfndgrhbakllyycyk.supabase.co/rest/v1/";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1ZXFmbmRncmhiYWtsbHl5Y3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU2NjgxNzAsImV4cCI6MjExMTI0NDE3MH0.WBiW6fL_14mVnj7boyCqyfKm6gc_B2J-xhDl-6WzGi4";
var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
