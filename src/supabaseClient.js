import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrzzmnknbqfrjaacazyt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyenptbmtuYnFmcmphYWNhenl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNDI1MDIsImV4cCI6MjA2ODcxODUwMn0.d-Wmt5EJ7ehAIsEk7UwtBuSsaPckdKa90Mgctobzq-A";
  
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
