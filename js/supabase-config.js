// Configurações do Supabase
const SUPABASE_URL = "https://zysvhfimxcioyvngejtf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5c3ZoZmlteGNpb3l2bmdlanRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4Njg3NzAsImV4cCI6MjEwNjQ0NDc3MH0.5MDYqWZT20d3Akjr1y7NXQg4BTTIFsyJ_3aCHBKcbXY";

// Inicializa o cliente Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
