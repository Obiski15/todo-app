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
      <View className="relative">
        <Image
          source={
            theme === "light"
              ? require("@/assets/images/bg-light.png")
              : require("@/assets/images/bg-dark.jpg")
          }
          className="h-[200px] w-full md:h-[300px]"
        />

        <ScrollView className="absolute left-1/2 top-12 md:top-[70px] w-full max-w-[540px] -translate-x-1/2 px-6">
          <View className="space-y-10 md:space-y-12">
            <Header />

            <View className="space-y-4 md:space-y-6">
              <CreateTodo />

              <Todos />
            </View>

            <Footer />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
