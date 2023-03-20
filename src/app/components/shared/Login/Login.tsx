"use client";

import { useSupabase } from "@/hooks/useSupabase";
import { useState } from "react";
import styles from "./Login.module.css";
import Image from "next/image";

export function Login() {
  const { supabase, session } = useSupabase();
  const [error, setError] = useState<string | null>(null);

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      return setError(error.message);
    }

    setError(null);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return setError(error.message);
    }

    setError(null);
  };

  return (
    <nav className={styles.login}>
      {session?.user ? (
        <>
          <div className={styles.login__user}>
            <span className={styles.login__user__name}>
              {session.user.user_metadata.user_name}
            </span>
            <Image
              className={styles.login__user__avatar}
              width={50}
              height={50}
              alt={session.user.user_metadata.user_name}
              src={session.user.user_metadata.avatar_url}
            />
          </div>
          <button className={styles.login__logout_btn} onClick={signOut}>
            Logout
          </button>
        </>
      ) : (
        <button className={styles.login__login_btn} onClick={signIn}>
          login
        </button>
      )}
      <p className={styles.login__error_message}>{error}</p>
    </nav>
  );
}
