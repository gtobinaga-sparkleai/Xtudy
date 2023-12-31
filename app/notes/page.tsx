import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import fetchAllNotes from '@/lib/actions'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()
  
  const notes2 = await fetchAllNotes()
  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}