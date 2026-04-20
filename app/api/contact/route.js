import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

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

    // Send email notification
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      const emailResponse = await resend.emails.send({
        from: 'noreply@sandseamedia.com',
        to: 'kenneth.rillamas@sandseamedia.com',
        subject: `New Lead Submission from ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff6b35;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Location:</strong> ${formData.location}</p>
              <p><strong>Description:</strong></p>
              <p style="background-color: white; padding: 10px; border-radius: 4px;">${formData.description.replace(/\n/g, '<br>')}</p>
              <p style="font-size: 12px; color: #666; margin-top: 20px;">Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      })

      if (emailResponse.error) {
        console.error('Email sending error:', emailResponse.error)
        // Don't fail the form submission if email fails
      }
    } catch (emailErr) {
      console.error('Email error:', emailErr)
      // Don't fail the form submission if email fails
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
