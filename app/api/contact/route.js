import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Use service role key to bypass RLS for form submissions
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

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
      return Response.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    return Response.json({ success: true, data })
  } catch (err) {
    console.error('API error:', err)
    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
