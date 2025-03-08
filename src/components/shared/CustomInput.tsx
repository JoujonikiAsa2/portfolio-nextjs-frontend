import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type CustomInputProps = {
  label?: string;
  type:string,
  placeholder?: string;
  name: string;
  required?:boolean
}

const CustomInput = ({
  label,
  type,
  placeholder,
  name,
  required
}: CustomInputProps) => {
  const { control } = useFormContext();
  console.log(control)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          {label && <FormLabel className="text-black">{label}</FormLabel>}
          <FormControl>
            <Input
            type={type}
            required={required}
              placeholder={placeholder}
              {...field}
              className="px-1 text-black border-1 border-primary focus:outline-none rounded focus:ring-0 focus:border-none"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
