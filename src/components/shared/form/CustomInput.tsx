import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface CustomInputProps {
  label: string;
  placeholder: string;
  description?: string;
  name: string;
  form: UseFormReturn<FieldValues>;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder, description, name, form }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-2'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} className="bg-transparent rounded focus:outline-none"/>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;