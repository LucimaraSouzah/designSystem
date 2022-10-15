import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 w-full bg-gray-800 rounded focus-within:ring-2 ring-cyan-300 ">
      {props.children}
    </div>
  );
}

export interface TextInputIcon extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
