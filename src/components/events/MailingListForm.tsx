import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useSiteSettings } from "../../hooks/content";
import { submitToWeb3Forms } from "../../lib/web3forms";

type MailingListValues = {
  email: string;
  botcheck?: string;
};

export default function MailingListForm() {
  const { data: settings } = useSiteSettings();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MailingListValues>();

  const onSubmit = async (values: MailingListValues) => {
    if (values.botcheck) return; // honeypot
    try {
      await submitToWeb3Forms({
        access_key: settings.web3formsAccessKey,
        subject: "New SIRE mailing-list signup",
        from_name: "SIRE Website",
        email: values.email,
      });
      toast.success("Thanks! You're on the list.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("botcheck")}
      />
      <div className="flex-1">
        <input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-xl border border-orange-200 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /.+@.+\..+/, message: "Enter a valid email" },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Notify me"}
      </button>
    </form>
  );
}
