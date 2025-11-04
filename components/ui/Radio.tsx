import { cn } from "@/lib/utils";
import { Pressable, PressableProps } from "react-native";

interface RadioProps extends PressableProps {
  className?: string;
}

function Radio({ className, ...props }: RadioProps) {
  return (
    <Pressable
      className={cn(
        "size-6 hover:border-r-[#C058F3] hover:border-b-[#C058F3] hover:border-t-[#55DDFF] hover:border-l-[#55DDFF] shrink-0 rounded-full border border-border",
        className
      )}
      {...props}
    />
  );
}

export default Radio;
