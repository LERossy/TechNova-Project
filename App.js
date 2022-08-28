import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Modal,
} from "react-native";

import styles from "./Styles";

export default function App() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Modal1 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PET</Text> is one of the
                most commonly used plastics in our world today. This is because
                it's lightweight,cheap, and easy to recycle.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Plastic
                water bottles, carpet, and soft drinks.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse any food or material from your plastic and dispose them
                off in the nearest recycling bin. Plastic bottle caps should be
                discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible1(!modalVisible1)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal2 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>HDPE</Text> is a strong
                plastic used in many different applications in our everyday
                life. {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Juice
                bottles, household cleaner bottles, and shopping bags.{"\n"}{" "}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse your plastic and dispose them off in the nearest recycling
                bin. Grocery bags or other light plastic should be discarded at
                a store’s drop-off recycling center.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal3 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PVC</Text> is a tough and
                cheap plastic that cannot be recycled easily.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Window
                frames, plumbing pipes, and wire jacketing.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Dispose your plastic in the trash as PVC can rarely be recycled.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal4 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible4}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>LDPE</Text> is a flexible
                plastic commonly used in food applications.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Squeezable
                bottles, tote bags, and sandwich bags.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse your plastic and dispose them off in the nearest recycling
                bin. Soft plastic (e.g., sandwich bags) can be discarded at a
                store’s drop-off recycling center.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible4(!modalVisible4)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal5 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible5}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible5(!modalVisible5);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PP</Text> is a
                thermoplastic which means it has a high melting point, therefore
                it is often used for food containers.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Yogurt
                containers, Tupperware, and medicine bottles.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Rinse any food or material from your plastic and dispose them
                off in the nearest recycling bin. Plastic bottle caps should be
                discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible5(!modalVisible5)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal6 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible6}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible6(!modalVisible6);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>PS</Text> or more commonly
                known as Styrofoam is commonly used for packaging.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> Styrofoam
                cups, aspirin bottles, and coolers.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                To prevent the Styrofoam from breaking into smaller pieces,
                follow these instructions: {"\n"}- Place your plastic in a bag.{" "}
                {"\n"}- Squeeze the air out. {"\n"}- Tie the bag. {"\n"}
                Then, dispose of the plastic in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible6(!modalVisible6)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal7 */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible7}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible7(!modalVisible7);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontWeight: "bold" }}>OTHER</Text> is for
                plastics that do not fall under the previous six categories.
                {"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>Examples:</Text> DVDs,
                bullet-proof materials, and sunglasses.{"\n"} {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Method of Recycling:
                </Text>{" "}
                Cannot be recycled, therefore discarded in the trash.
              </Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible7(!modalVisible7)}
              >
                <Text style={styles.textStyle}>OMW to Recycle!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View>
          {/* Icon1 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon1]}
            onPress={() => setModalVisible1(true)}
          >
            <Image
              source={require("./assets/sign.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon3 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon2]}
            onPress={() => setModalVisible3(true)}
          >
            <Image
              source={require("./assets/sign3.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon5 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon3]}
            onPress={() => setModalVisible5(true)}
          >
            <Image
              source={require("./assets/sign5.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon7 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon4]}
            onPress={() => setModalVisible7(true)}
          >
            <Image
              source={require("./assets/sign7.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {/* Icon2 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon5]}
            onPress={() => setModalVisible2(true)}
          >
            <Image
              source={require("./assets/sign2.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon4 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon6]}
            onPress={() => setModalVisible4(true)}
          >
            <Image
              source={require("./assets/sign4.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
          {/* Icon6 */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.box, styles.icon7]}
            onPress={() => setModalVisible6(true)}
          >
            <Image
              source={require("./assets/sign6.png")}
              resizeMode="contain"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}
