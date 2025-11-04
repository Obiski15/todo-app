import { Pressable, Text, View } from "react-native";
import Todo from "./Todo";

function Actions() {
  return (
    <View className="w-fit border-2 capitalize mx-auto gap-5 flex justify-between items-center flex-row">
      <Pressable>
        <Text className="font-bold text-sm tracking-[-0.19px] hover:text-[#3A7CFD] text-[#9495A5]">
          All
        </Text>
      </Pressable>

      <Pressable>
        <Text className="font-bold text-sm tracking-[-0.19px] hover:text-[#3A7CFD] text-[#9495A5]">
          active
        </Text>
      </Pressable>

      <Pressable>
        <Text className="font-bold text-sm tracking-[-0.19px] hover:text-[#3A7CFD] text-[#9495A5]">
          completed
        </Text>
      </Pressable>
    </View>
  );
}

function Todos() {
  return (
    <View className="space-y-4 md:space-y-6">
      <View className="bg-card rounded-[5px]">
        <Todo />

        <View className="flex flex-row pt-4 border-2 pb-5 px-6 justify-between items-center">
          <Text className="text-[#9495A5] font-normal text-xs tracking-[-0.17px]">
            5 items left
          </Text>
          <View className="hidden md:block">
            <Actions />
          </View>

          <Pressable>
            <Text className="text-[#9495A5] font-normal text-xs tracking-[-0.17px]">
              Clear Completed
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="p-4 md:hidden bg-card rounded-[5px] shadow-sm">
        <Actions />
      </View>
    </View>
  );
}

export default Todos;
