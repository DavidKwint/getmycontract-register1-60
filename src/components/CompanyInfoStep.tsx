import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Building2 } from 'lucide-react';

const companyInfoSchema = z.object({
  companyName: z.string().min(2, 'Unternehmensname muss mindestens 2 Zeichen haben'),
  employeeCount: z.string().min(1, 'Bitte geben Sie die Anzahl der Mitarbeiter an'),
});

type CompanyInfoFormData = z.infer<typeof companyInfoSchema>;

interface CompanyInfoStepProps {
  onNext: (data: CompanyInfoFormData) => void;
  onBack: () => void;
}

const CompanyInfoStep = ({ onNext, onBack }: CompanyInfoStepProps) => {
  const form = useForm<CompanyInfoFormData>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      companyName: '',
      employeeCount: '',
    },
  });

  const onSubmit = (data: CompanyInfoFormData) => {
    onNext(data);
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Step Content Card */}
      <div className="cosmic-card rounded-xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Erzählen Sie uns etwas über Ihr Unternehmen
          </h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Unternehmensname"
                      className="h-12 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employeeCount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Anzahl der Mitarbeiter"
                      type="number"
                      min="1"
                      className="h-12 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground mb-6">
                Mit Absenden des Formular akzeptiere ich die{' '}
                <a href="#" className="text-primary hover:text-primary/80 underline">
                  AGB
                </a>{' '}
                und den{' '}
                <a href="#" className="text-primary hover:text-primary/80 underline">
                  Datenschutz
                </a>
                .
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={onBack}
                variant="outline"
                className="flex-1 h-12 font-semibold text-base"
              >
                ZURÜCK
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
                disabled={form.formState.isSubmitting}
              >
                JETZT KOSTENLOS TESTEN
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CompanyInfoStep;