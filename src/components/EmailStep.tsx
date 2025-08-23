import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, ArrowRight } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailStepProps {
  onNext: (data: { email: string }) => void;
}

const EmailStep = ({ onNext }: EmailStepProps) => {
  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: EmailFormData) => {
    onNext({ email: data.email });
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Step Content Card */}
      <div className="cosmic-card rounded-xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Zum Start benötigen wir Ihre E-Mail Adresse
          </h2>
          <p className="text-muted-foreground text-sm">
            Im ersten Schritt benötigen wir Ihre E-Mail Adresse
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    E-Mail Adresse *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ihre-email@beispiel.de"
                      type="email"
                      className="h-12 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200"
              disabled={form.formState.isSubmitting}
            >
              WEITER
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Mit dem Absenden stimmen Sie unseren{' '}
            <a href="#" className="text-primary hover:text-primary/80 underline">
              Datenschutzbestimmungen
            </a>{' '}
            zu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailStep;