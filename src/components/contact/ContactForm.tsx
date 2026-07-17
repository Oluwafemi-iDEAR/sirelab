import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import { useSiteSettings } from "../../hooks/content";
import { submitToWeb3Forms } from "../../lib/web3forms";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please add a little more detail"),
  botcheck: z.string().optional(),
});

type ContactValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-orange-200 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400";

export default function ContactForm() {
  const { data: settings } = useSiteSettings();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: ContactValues) => {
    if (values.botcheck) return; // honeypot
    try {
      await submitToWeb3Forms({
        access_key: settings.web3formsAccessKey,
        subject: values.subject || "New SIRE contact message",
        from_name: values.name,
        name: values.name,
        email: values.email,
        message: values.message,
      });
      toast.success("Thanks! Your message has been sent.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("botcheck")}
      />

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Name
        </label>
        <input type="text" className={inputClass} {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input type="email" className={inputClass} {...register("email")} />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Subject <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input type="text" className={inputClass} {...register("subject")} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea rows={5} className={inputClass} {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
