import Footer from "@/components/footer";
import Header from "@/components/header";
import CreateTodo from "@/components/todo/create-todo";
import Todos from "@/components/todo/Todos";
import { useTheme } from "@/contexts/theme-context";
import { Image } from "expo-image";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <View className="flex-1 bg-background">
      <Image
        source={
          theme === "light"
            ? require("@/assets/images/bg-light.png")
            : require("@/assets/images/bg-dark.jpg")
        }
        className="absolute top-0 h-[200px] w-full md:h-[300px]"
      />

      <ScrollView className="flex-1 px-6 pt-12 md:pt-[70px]">
        <View className="mx-auto w-full max-w-[540px] gap-10 md:gap-12">
          <Header />

          <View className="gap-4 md:gap-6">
            <CreateTodo />

            <Todos />
          </View>

          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
