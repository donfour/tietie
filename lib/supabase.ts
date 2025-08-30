import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yzmcaxmjvqbbggobeutt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bWNheG1qdnFiYmdnb2JldXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1ODA5MzMsImV4cCI6MjA3MjE1NjkzM30.orhV2R9OrBT1vqZ28Ume4Q_5O7EEoZ6r8mfsRkELzt0";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
