import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

interface CustomTextAreaProps {
  label: string;
  placeholder: string;
  description?: string;
  name: string;
  form: UseFormReturn<FieldValues>;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ label, placeholder, description, name, form }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-2'>
          <FormLabel className="text-black">{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} className="px-0  border-primary  border-none border-b-2 rounded-none"/>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomTextArea;