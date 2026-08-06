# Pre-Booking Page Design

## Goal

Add a pre-booking page where customers can request a cleaning or junk removal appointment call, while making it clear that the booking is not confirmed until they call 877-JUNKY-JO.

## User Flow

Visitors open `/book`, read that the request is a pre-booking only, fill out job and preferred scheduling details, then submit. The success message tells them the request was received and reminds them to call 877-JUNKY-JO to confirm availability.

## Fields

- Name
- Phone
- Service area or ZIP
- Preferred date
- Preferred time window
- Job type
- Job description
- Hidden honeypot field

## Backend

Add `/api/booking` as a separate route from `/api/contact`. It will reuse the existing secure request handling pattern: JSON-only requests, streaming body-size limits, rate limiting, honeypot handling, validation, generic errors, server-only Supabase credentials, and escaped email HTML.

Create a `booking_requests` table in the local Supabase schema with RLS enabled and no anonymous insert policy. Requests should be inserted through the server route only.

## Navigation

Add a `Book` link to desktop and mobile navigation so customers can find the pre-booking page.
