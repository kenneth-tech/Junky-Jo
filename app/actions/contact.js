'use server'

import { createClient } from '@/utils/supabase/server'

export async function submitContactForm(formData) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('contacts')
    .insert([
      {
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        description: formData.description,
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) {
    console.error('Supabase error:', error)
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
