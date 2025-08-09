
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''
if (!supabaseUrl || !supabaseKey) {
    console.log('=========Missing Supabase environment variables: SUPABASE_URL or SUPABASE_KEY============');
    throw new Error('Supabase environment variables are not set. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey)