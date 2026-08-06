'use server'

import { createClient } from '@/utils/supabase/server'
import contactSecurity from '@/lib/contactSecurity.cjs'

const { validateContactPayload } = contactSecurity

export async function submitContactForm(formData) {
  const validation = validateContactPayload(formData)

  if (!validation.ok) {
    return { success: false, error: validation.error }
  }

  if (validation.honeypot) {
    return { success: true }
  }

  const contact = validation.contact
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('contacts')
    .insert([
      {
        name: contact.name,
        phone: contact.phone,
        location: contact.location,
        description: contact.description,
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) {
    console.error('Supabase error:', error)
    return { success: false, error: 'Failed to submit form' }
  }

  return { success: true, data }
}
