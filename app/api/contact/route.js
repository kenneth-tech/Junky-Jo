import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Use service role key to bypass RLS for form submissions
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Helper: send an alert to a webhook (Slack/Discord/other) when provided
    async function sendAlert(payload) {
      const url = process.env.ALERT_WEBHOOK_URL
      if (!url) return
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (e) {
        console.error('Failed to send alert webhook:', e)
      }
    }

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
      // Alert on failed submission (include non-sensitive context)
      sendAlert({
        type: 'contact_submission_failure',
        error: String(error.message || error),
        submission: {
          name: formData.name || null,
          phone: formData.phone || null,
          location: formData.location || null,
        },
        timestamp: new Date().toISOString(),
      })

      return Response.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    return Response.json({ success: true, data })
  } catch (err) {
    console.error('API error:', err)
    // send alert for unexpected errors
    try {
      await fetch(process.env.ALERT_WEBHOOK_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact_submission_exception',
          error: String(err.message || err),
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (e) {
      console.error('Failed to send exception alert:', e)
    }

    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
