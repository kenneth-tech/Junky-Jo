import { createServerSupabase } from "./server";

/**
 * Get current user session on server
 */
export async function getServerSession() {
  const supabase = await createServerSupabase();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error getting session:", error);
    return null;
  }
}

/**
 * Get current user on server
 */
export async function getServerUser() {
  const supabase = await createServerSupabase();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}

/**
 * Sign out user on server
 */
export async function signOutServer() {
  const supabase = await createServerSupabase();
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Error signing out:", error);
  }
}
