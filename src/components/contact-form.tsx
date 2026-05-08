"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  phone: z.string().optional(),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
});

export function ContactForm({ tenantId }: { tenantId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);
    
    try {
      const res = await sendEmail({ ...values, tenantId });
      if (res.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-background rounded-2xl shadow-xl border border-border/50 p-8 md:p-12">
      <h3 className="text-2xl font-semibold mb-6 text-secondary-foreground">Scrivimi un messaggio</h3>
      
      {success && (
        <div className="mb-8 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
          <p className="font-medium">Messaggio inviato con successo!</p>
          <p className="text-sm mt-1">Ti risponderò il prima possibile.</p>
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
          <p className="font-medium">Si è verificato un errore.</p>
          <p className="text-sm mt-1">Riprova più tardi o contattami telefonicamente.</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome e Cognome</FormLabel>
                <FormControl>
                  <Input placeholder="Mario Rossi" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="mario.rossi@email.com" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono (opzionale)</FormLabel>
                  <FormControl>
                    <Input placeholder="+39 333 1234567" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messaggio</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Come posso aiutarti?" 
                    className="min-h-[150px] bg-background"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md text-lg font-medium transition-all shadow-md disabled:opacity-70 flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Invio in corso...
              </span>
            ) : "Invia Messaggio"}
          </button>
        </form>
      </Form>
    </div>
  );
}
