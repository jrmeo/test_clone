import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ydrvbziujrmmtxeeesby.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcnZieml1anJtbXR4ZWVlc2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzg0NjIsImV4cCI6MjAxNDYxNDQ2Mn0.7uvE1zd6ohcQW4ASfx7ZHDOe_ggBTyhndKMHTHInyjE'
export const supabase = createClient(supabaseUrl, supabaseKey)