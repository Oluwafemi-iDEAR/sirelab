const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Posts a payload to Web3Forms (email delivery only — no data is stored).
 * Throws when the request fails or Web3Forms reports failure.
 */
export async function submitToWeb3Forms(
  payload: Record<string, string>,
): Promise<void> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as { success?: boolean };
  if (!response.ok || !result.success) {
    throw new Error("Web3Forms submission failed");
  }
}
