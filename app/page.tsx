"use client";
import SelectCity from "@/components/SelectCity";
import { Card, Subtitle, Text, Divider } from "@tremor/react";
export default function Home() {
  return (
    <main className="min-h-screen bg-sky-300 p-10 flex flex-col items-center justify-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-5xl font-semibold text-center mb-10">
          AI Weather
        </Text>
        <Subtitle className="text-xl text-center">
          Get AI optimized weather report based on your country and city.
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-sky-400">
          {/* select city */}
          <SelectCity />
        </Card>
      </Card>
    </main>
  );
}
