"use client";
import { useState } from "react";
import FormField from "../../components/FormField";
import styles from "../../components/login.module.css"; // reuse your page styles

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
      const url = `${base.replace(/\/$/, "")}/users`;

      const resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const text = await resp.text();
      const contentType = resp.headers.get("content-type") || "";

      if (!resp.ok) {
        const json = text ? JSON.parse(text) : {};
        alert(`Error: ${json?.message || text || resp.statusText}`);
        return;
      }

      if (contentType.includes("application/json")) {
        const data = JSON.parse(text);
        alert(data.message || "Account created");
        setForm({ name: "", email: "", password: "", confirm: "" });
      } else {
        alert("Server returned non-JSON response — check backend logs.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while contacting API. Check backend is running and CORS settings.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        id="name"
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <FormField
        id="email"
        label="Email address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <FormField
        id="password"
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <FormField
        id="confirm"
        label="Confirm password"
        name="confirm"
        type="password"
        value={form.confirm}
        onChange={handleChange}
        className={styles.formGroup}
      />

      <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
        {isSubmitting ? "Creating…" : "Create account"}
      </button>
    </form>
  );
}