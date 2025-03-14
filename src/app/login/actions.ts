"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/client-dashboard");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/client-dashboard");
}

export async function sendResetPasswordEmail(prev: string, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(formData.get("email") as string, {
    redirectTo: 'https://example.com/update-password',
  })
  
  if (error) {
    redirect("/error");
  }
  return {
    success: "Please check your email",
    error: "",
  };
}

export async function updatePassword(prev: string, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: formData.get("password") as string,
  });
  if (error){
    redirect('/error')
  }
  return {
    success: "Please check your email",
    error: "",
  }
}
