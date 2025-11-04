import { cn } from "@/lib/utils";
import { Pressable } from "react-native";

function Radio({ className }: { className?: string }) {
  return (
    <Pressable
      className={cn(
        "shrink-0 bg-radio size-6 border border-border rounded-full",
        className
      )}
    />
  );
}

export default Radio;
