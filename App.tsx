import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Header() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.circle}>
        <Text style={[styles.text, styles.headerText]}>Id8</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        <Text style={[styles.text, styles.headerText]}>Ideate NFT</Text>
      </View>
      <View style={styles.circle}>
        <Text
          style={[
            styles.text,
            styles.headerText,
            { position: "relative", bottom: 8, fontSize: 32 },
          ]}
        >
          ...
        </Text>
      </View>
    </View>
  );
}

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ["Trending Now", "Upcoming", "Exclusive", "Past", "All"];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map(function (item, index) {
        return (
          <TouchableOpacity
            onPress={function () {
              setActiveIndex(index);
            }}
            style={{
              backgroundColor: index === activeIndex ? "#497DE3" : undefined,
              padding: 10,
              marginLeft: index > 0 ? 14 : 0,
              borderRadius: 100000,
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "700", opacity: index === activeIndex ? 1 : 0.8 },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

type AvatarProps = {
  uri: string;
};

function Avatar({ uri }: AvatarProps) {
  const size = 44;
  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size, borderRadius: 10000000 }}
    />
  );
}

type User = {
  avatarUri: string;
};

function Card() {
  const users: User[] = [
    { avatarUri: "https://randomuser.me/api/portraits/men/32.jpg" },
    { avatarUri: "https://randomuser.me/api/portraits/men/33.jpg" },
    { avatarUri: "https://randomuser.me/api/portraits/men/34.jpg" },
  ];
  return (
    <View
      style={{
        borderWidth: 4,
        borderColor: "#497DE3",
        borderRadius: 24,
        padding: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {users.map(function (user, index) {
          return (
            <View
              key={index}
              style={{
                paddingLeft: index > 0 ? 10 : 0,
                marginLeft: index > 0 ? -30 : 0,
              }}
            >
              <Avatar uri={user.avatarUri} />
            </View>
          );
        })}
        <View style={{ flex: 1 }} />
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.text, { fontSize: 24, fontWeight: "800" }]}>
            1.00ETH
          </Text>
          <Text style={[styles.text, { fontWeight: "500", opacity: 0.8 }]}>
            Highest Bid
          </Text>
        </View>
      </View>
      <Image
        source={{
          uri: "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_3x4.jpg",
          height: 375,
        }}
        style={{ borderRadius: 16, marginVertical: 10 }}
      />
      <Text style={[styles.text, { opacity: 0.8 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <View style={{ height: 10 }} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ backgroundColor: "pink", flex: 1 }}>
          <Text style={styles.text}>asfd</Text>
          <Text style={styles.text}>blah</Text>
        </View>
        <View
          style={{
            backgroundColor: "#497DE3",
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
        >
          <Text style={styles.text}>Bid Now</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2F354F",
        alignItems: "stretch",
      }}
    >
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Header />
        <View style={{ height: 24 }} />
        <Menu />
        <View style={{ height: 24 }} />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "800",
  },
  circle: {
    backgroundColor: "#497DE3",
    width: 50,
    height: 50,
    borderRadius: 10000000000000000,
    alignItems: "center",
    justifyContent: "center",
  },
});
