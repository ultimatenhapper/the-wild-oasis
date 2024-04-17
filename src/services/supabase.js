import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hnqormugbddezljekeez.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucW9ybXVnYmRkZXpsamVrZWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMzMyOTksImV4cCI6MjAyODkwOTI5OX0.RKtIlsPQtOvXX_C4BUT7vnqBK7GQ7WfzkcszY0vFcgg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
