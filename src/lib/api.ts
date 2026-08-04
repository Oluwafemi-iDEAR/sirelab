export type SubmitPayload = {
  type: "contact" | "subscribe";
  name?: string;
  email: string;
  subject?: string;
  message?: string;
  botcheck?: string;
};

/**
 * Sends a form submission to the site's own serverless endpoint (/api/submit),
 * which stores it in Sanity and emails srielab354@gmail.com. Throws on failure.
 */
export async function submitForm(payload: SubmitPayload): Promise<void> {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean;
  };
  if (!response.ok || !result.success) {
    throw new Error("Submission failed");
  }
}
